export interface RecommendationInput {
  module: 'style' | 'beauty' | 'gift' | 'perfume'
  answers: Record<string, string | string[] | number>
  userId?: string
}

export interface RecommendedProduct {
  product: import('./product').Product
  score: number
  explanation: string
  isAffiliate: boolean
  isSponsored: boolean
}

export interface Recommendation {
  id: string
  module: string
  input: RecommendationInput
  products: RecommendedProduct[]
  mainExplanation: string
  totalBudget: number
  alternatives: RecommendedProduct[]
  createdAt: string
}
