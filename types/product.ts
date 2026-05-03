export interface Product {
  id: string
  name: string
  brand: string | null
  category: string
  subcategory: string | null
  description: string | null
  price: number | null
  currency: string
  image_url: string | null
  product_url: string | null
  affiliate_url: string | null
  seller: string | null
  commission_rate: number
  material: string | null
  ingredients: string | null
  sizes: string[] | null
  colors: string[] | null
  target_styles: string[] | null
  target_occasions: string[] | null
  target_profiles: string[] | null
  season: string[] | null
  quality_score: number
  safety_score: number
  value_score: number
  trend_score: number
  commission_score: number
  stock_status: string
  is_sponsored: boolean
  sponsored_label: string | null
  last_checked_at: string | null
  created_at: string
}

export interface ProductFilters {
  category?: string
  subcategory?: string
  minPrice?: number
  maxPrice?: number
  styles?: string[]
  occasions?: string[]
  season?: string[]
  brand?: string
  inStock?: boolean
}

export type ProductCategory =
  | 'mode'
  | 'chaussures'
  | 'beaute'
  | 'skincare'
  | 'cheveux'
  | 'parfum'
  | 'bijoux'
  | 'accessoires'
  | 'maison'
  | 'cadeaux'
  | 'self-care'
