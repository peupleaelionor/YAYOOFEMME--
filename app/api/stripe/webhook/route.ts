import { NextRequest, NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'
import { createClient } from '@supabase/supabase-js'
import type Stripe from 'stripe'

function getAdminClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )
}

export async function POST(request: NextRequest) {
  const body = await request.text()
  const signature = request.headers.get('stripe-signature')

  if (!signature) {
    return NextResponse.json({ error: 'Missing signature' }, { status: 400 })
  }

  let event: Stripe.Event
  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    )
  } catch (err) {
    console.error('Webhook signature verification failed:', err)
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
  }

  switch (event.type) {
    case 'checkout.session.completed': {
      const session = event.data.object as Stripe.Checkout.Session
      const { userId, type, plan, ebookId, resultId, module } = session.metadata ?? {}

      if (!userId) break

      const db = getAdminClient()

      if (type === 'subscription' && plan) {
        await db.from('subscriptions').upsert({
          user_id: userId,
          stripe_customer_id: session.customer as string,
          stripe_subscription_id: session.subscription as string,
          plan,
          status: 'active',
          current_period_end: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
        }, { onConflict: 'user_id' })
      }

      if (type === 'ebook' && ebookId) {
        await db.from('ebook_purchases').insert({
          user_id: userId,
          ebook_id: ebookId,
          stripe_payment_id: session.payment_intent as string,
          amount: (session.amount_total ?? 0) / 100,
        })
      }

      if (type === 'one_shot' && module) {
        await db.from('one_shot_orders').insert({
          user_id: userId,
          type: module,
          amount: (session.amount_total ?? 0) / 100,
          stripe_payment_id: session.payment_intent as string,
          status: 'completed',
          result_id: resultId ?? null,
        })

        if (resultId) {
          await db.from('recommendations')
            .update({ is_paid: true })
            .eq('id', resultId)
        }
      }
      break
    }

    case 'customer.subscription.deleted':
    case 'customer.subscription.updated': {
      const subscription = event.data.object as Stripe.Subscription
      const status = subscription.status === 'active' ? 'active' :
        subscription.status === 'canceled' ? 'canceled' : 'past_due'

      // In API version 2026-04-22.dahlia, current_period_end lives on each
      // SubscriptionItem rather than on the Subscription root object.
      const periodEnd = subscription.items?.data[0]?.current_period_end
        ?? subscription.cancel_at
        ?? subscription.ended_at

      await getAdminClient().from('subscriptions')
        .update({
          status,
          current_period_end: periodEnd ? new Date(periodEnd * 1000).toISOString() : null,
        })
        .eq('stripe_subscription_id', subscription.id)
      break
    }
  }

  return NextResponse.json({ received: true })
}
