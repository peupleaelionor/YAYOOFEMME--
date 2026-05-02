export type SubscriptionPlan = 'basic' | 'plus' | 'premium'
export type SubscriptionStatus = 'active' | 'canceled' | 'past_due' | 'trialing'

export interface Subscription {
  id: string
  user_id: string
  stripe_customer_id: string | null
  stripe_subscription_id: string | null
  plan: SubscriptionPlan | null
  status: SubscriptionStatus | null
  current_period_end: string | null
  created_at: string
}

export interface SubscriptionTier {
  id: SubscriptionPlan
  name: string
  price: number
  description: string
  features: string[]
  stripeProductId: string
}
