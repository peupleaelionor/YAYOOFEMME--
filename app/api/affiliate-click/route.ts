import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { productId, source } = body as { productId: string; source?: string }

    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    await supabase.from('product_clicks').insert({
      user_id: user?.id ?? null,
      product_id: productId,
      source: source ?? 'unknown',
      referrer: request.headers.get('referer') ?? null,
    })

    const { data: product } = await supabase
      .from('products')
      .select('affiliate_url, product_url')
      .eq('id', productId)
      .single()

    const url = product?.affiliate_url ?? product?.product_url ?? null

    return NextResponse.json({ url })
  } catch (error) {
    console.error('Affiliate click error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
