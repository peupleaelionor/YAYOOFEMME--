import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2026-04-22.dahlia',
  typescript: true,
})

export const STRIPE_PRODUCTS = {
  one_shot_style: 'one_shot_style_390',
  one_shot_beauty: 'one_shot_beauty_690',
  one_shot_gift: 'one_shot_gift_490',
  one_shot_capsule: 'one_shot_capsule_1490',
  ebook_default: 'ebook_default',
  subscription_basic: 'subscription_basic_490',
  subscription_plus: 'subscription_plus_990',
  subscription_premium: 'subscription_premium_1990',
} as const

export const PRICES = {
  one_shot_style: 390,
  one_shot_beauty: 690,
  one_shot_gift: 490,
  one_shot_capsule: 1490,
  subscription_basic: 490,
  subscription_plus: 990,
  subscription_premium: 1990,
} as const
