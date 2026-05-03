import { NextRequest, NextResponse } from 'next/server'
import { stripe, PRICES } from '@/lib/stripe'
import { createClient } from '@/lib/supabase/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { type, ebookId, resultId } = body as {
      type: string
      ebookId?: string
      resultId?: string
      plan?: string
      module?: string
    }

    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    const baseUrl = process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000'

    if (type === 'subscription') {
      const { plan } = body as { plan: string }
      const priceMap: Record<string, number> = {
        basic: PRICES.subscription_basic,
        plus: PRICES.subscription_plus,
        premium: PRICES.subscription_premium,
      }

      const session = await stripe.checkout.sessions.create({
        mode: 'subscription',
        payment_method_types: ['card'],
        line_items: [
          {
            price_data: {
              currency: 'eur',
              product_data: {
                name: `Abonnement ${plan} - Yayoo Femme`,
              },
              unit_amount: priceMap[plan] ?? PRICES.subscription_basic,
              recurring: { interval: 'month' },
            },
            quantity: 1,
          },
        ],
        customer_email: user?.email,
        metadata: {
          userId: user?.id ?? '',
          plan,
          type: 'subscription',
        },
        success_url: `${baseUrl}/account?success=subscription`,
        cancel_url: `${baseUrl}/pricing`,
      })

      return NextResponse.json({ url: session.url })
    }

    if (type === 'one_shot') {
      const { module } = body as { module: string }
      const priceMap: Record<string, number> = {
        style: PRICES.one_shot_style,
        beauty: PRICES.one_shot_beauty,
        gift: PRICES.one_shot_gift,
        capsule: PRICES.one_shot_capsule,
      }

      const nameMap: Record<string, string> = {
        style: 'Look complet Style Finder',
        beauty: 'Routine beauté personnalisée',
        gift: 'Guide cadeau personnalisé',
        capsule: 'Capsule dressing',
      }

      const session = await stripe.checkout.sessions.create({
        mode: 'payment',
        payment_method_types: ['card'],
        line_items: [
          {
            price_data: {
              currency: 'eur',
              product_data: {
                name: nameMap[module] ?? 'Recommandation Yayoo Femme',
              },
              unit_amount: priceMap[module] ?? PRICES.one_shot_style,
            },
            quantity: 1,
          },
        ],
        customer_email: user?.email,
        metadata: {
          userId: user?.id ?? '',
          module,
          resultId: resultId ?? '',
          type: 'one_shot',
        },
        success_url: `${baseUrl}/result/${resultId}?unlocked=true`,
        cancel_url: `${baseUrl}/result/${resultId}`,
      })

      return NextResponse.json({ url: session.url })
    }

    if (type === 'ebook') {
      if (!ebookId) {
        return NextResponse.json({ error: 'Missing ebookId' }, { status: 400 })
      }

      const { data: ebook } = await supabase
        .from('ebooks')
        .select('*')
        .eq('id', ebookId)
        .single()

      if (!ebook) {
        return NextResponse.json({ error: 'Ebook not found' }, { status: 404 })
      }

      const session = await stripe.checkout.sessions.create({
        mode: 'payment',
        payment_method_types: ['card'],
        line_items: [
          {
            price_data: {
              currency: 'eur',
              product_data: {
                name: ebook.title,
                description: ebook.description ?? undefined,
              },
              unit_amount: Math.round(ebook.price * 100),
            },
            quantity: 1,
          },
        ],
        customer_email: user?.email,
        metadata: {
          userId: user?.id ?? '',
          ebookId,
          type: 'ebook',
        },
        success_url: `${baseUrl}/account?success=ebook&id=${ebookId}`,
        cancel_url: `${baseUrl}/guides`,
      })

      return NextResponse.json({ url: session.url })
    }

    return NextResponse.json({ error: 'Invalid checkout type' }, { status: 400 })
  } catch (error) {
    console.error('Checkout error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
