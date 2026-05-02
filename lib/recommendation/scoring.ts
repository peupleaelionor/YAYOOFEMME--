import type { Product } from '@/types/product'

export interface ScoringWeights {
  style_match: number
  budget_match: number
  occasion_match: number
  quality_score: number
  trend_score: number
  value_score: number
  availability_score: number
}

export const DEFAULT_WEIGHTS: ScoringWeights = {
  style_match: 0.25,
  budget_match: 0.20,
  occasion_match: 0.15,
  quality_score: 0.15,
  trend_score: 0.10,
  value_score: 0.10,
  availability_score: 0.05,
}

export interface UserPreferences {
  styles?: string[]
  budget?: { min: number; max: number }
  occasions?: string[]
  season?: string[]
  avoidedBrands?: string[]
  favoriteBrands?: string[]
}

export function calculateProductScore(
  product: Product,
  preferences: UserPreferences,
  weights: ScoringWeights = DEFAULT_WEIGHTS
): number {
  if (!product.image_url) return 0
  if (product.stock_status === 'out_of_stock') return 0

  const styleScore = calculateStyleMatch(product, preferences.styles)
  const budgetScore = calculateBudgetMatch(product.price, preferences.budget)
  const occasionScore = calculateOccasionMatch(product, preferences.occasions)
  const qualityScore = (product.quality_score || 0) / 100
  const trendScore = (product.trend_score || 0) / 100
  const valueScore = (product.value_score || 0) / 100

  const availabilityScore = product.stock_status === 'in_stock' ? 1.0 :
    product.stock_status === 'low_stock' ? 0.6 : 0.3

  let score =
    styleScore * weights.style_match +
    budgetScore * weights.budget_match +
    occasionScore * weights.occasion_match +
    qualityScore * weights.quality_score +
    trendScore * weights.trend_score +
    valueScore * weights.value_score +
    availabilityScore * weights.availability_score

  if (product.is_sponsored && score < 0.6) {
    score *= 0.85
  }

  if (preferences.favoriteBrands?.includes(product.brand ?? '')) {
    score = Math.min(1.0, score * 1.1)
  }

  if (preferences.avoidedBrands?.includes(product.brand ?? '')) {
    score *= 0.1
  }

  return Math.round(score * 1000) / 1000
}

function calculateStyleMatch(product: Product, userStyles?: string[]): number {
  if (!userStyles?.length || !product.target_styles?.length) return 0.5
  const matches = userStyles.filter(s => product.target_styles!.includes(s))
  return matches.length / Math.max(userStyles.length, 1)
}

function calculateBudgetMatch(
  productPrice: number | null,
  budget?: { min: number; max: number }
): number {
  if (!productPrice || !budget) return 0.5
  if (productPrice >= budget.min && productPrice <= budget.max) return 1.0
  if (productPrice < budget.min) return 0.8
  const overage = (productPrice - budget.max) / budget.max
  return Math.max(0, 1 - overage * 2)
}

function calculateOccasionMatch(product: Product, occasions?: string[]): number {
  if (!occasions?.length || !product.target_occasions?.length) return 0.5
  const matches = occasions.filter(o => product.target_occasions!.includes(o))
  return matches.length / Math.max(occasions.length, 1)
}

export function rankProducts(
  products: Product[],
  preferences: UserPreferences,
  limit = 10
): Array<Product & { _score: number }> {
  return products
    .map(product => ({
      ...product,
      _score: calculateProductScore(product, preferences),
    }))
    .filter(p => p._score > 0)
    .sort((a, b) => b._score - a._score)
    .slice(0, limit)
}
