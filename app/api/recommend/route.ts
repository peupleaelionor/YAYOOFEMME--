import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { rankProducts } from '@/lib/recommendation/scoring'
import { generateRecommendationExplanation } from '@/lib/ai/openai'
import type { UserPreferences } from '@/lib/recommendation/scoring'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { module, answers, userId } = body as {
      module: string
      answers: Record<string, string | string[] | number>
      userId?: string
    }

    if (!module || !answers) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const supabase = await createClient()

    const preferences: UserPreferences = {
      styles: answers.styles
        ? ([answers.styles].flat().filter(Boolean) as string[])
        : answers.style
        ? [answers.style as string]
        : [],
      occasions: answers.occasion ? [answers.occasion as string] : [],
      season: answers.season ? [answers.season as string] : [],
      budget: answers.budget ? parseBudget(answers.budget as string) : undefined,
    }

    const categoryMap: Record<string, string[]> = {
      style: ['mode', 'chaussures', 'accessoires', 'bijoux'],
      beauty: ['beaute', 'skincare', 'cheveux', 'self-care'],
      gift: ['mode', 'bijoux', 'parfum', 'accessoires', 'beaute', 'maison', 'cadeaux'],
      perfume: ['parfum'],
      capsule: ['mode', 'chaussures', 'accessoires', 'bijoux'],
    }

    const categories = categoryMap[module] ?? ['mode']

    const { data: products, error } = await supabase
      .from('products')
      .select('*')
      .in('category', categories)
      .neq('stock_status', 'out_of_stock')
      .not('image_url', 'is', null)
      .limit(50)

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 })
    }

    if (!products || products.length === 0) {
      return NextResponse.json({
        products: [],
        explanation: 'Aucun produit disponible pour le moment.',
        total: 0,
      })
    }

    const rankedProducts = rankProducts(products, preferences, 12)

    let explanation = 'Sélection personnalisée selon tes préférences.'
    try {
      explanation = await generateRecommendationExplanation(
        rankedProducts.slice(0, 5).map(p => ({
          name: p.name,
          brand: p.brand,
          price: p.price,
          score: p._score,
        })),
        answers,
        module
      )
    } catch (aiError) {
      console.error('AI error:', aiError)
    }

    if (userId) {
      const { data: session } = await supabase
        .from('quiz_sessions')
        .insert({
          user_id: userId,
          module,
          answers,
        })
        .select()
        .single()

      if (session) {
        await supabase.from('recommendations').insert({
          user_id: userId,
          quiz_session_id: session.id,
          module,
          input: answers,
          recommended_products: rankedProducts.slice(0, 6).map(p => ({ id: p.id, score: p._score })),
          explanation,
          is_paid: false,
        })
      }
    }

    return NextResponse.json({
      products: rankedProducts,
      explanation,
      total: rankedProducts.length,
    })
  } catch (error) {
    console.error('Recommendation error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

function parseBudget(budget: string): { min: number; max: number } {
  const ranges: Record<string, { min: number; max: number }> = {
    'moins-30': { min: 0, max: 30 },
    '30-60': { min: 30, max: 60 },
    '60-100': { min: 60, max: 100 },
    '100-200': { min: 100, max: 200 },
    '200-plus': { min: 200, max: 1000 },
  }
  return ranges[budget] ?? { min: 0, max: 100 }
}
