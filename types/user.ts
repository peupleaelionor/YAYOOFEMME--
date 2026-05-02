export interface UserProfile {
  id: string
  user_id: string
  age_range: string | null
  style_preferences: string[] | null
  beauty_preferences: string[] | null
  skin_type: string | null
  hair_type: string | null
  budget_min: number | null
  budget_max: number | null
  favorite_categories: string[] | null
  avoided_categories: string[] | null
  favorite_brands: string[] | null
  avoided_brands: string[] | null
  created_at: string
}
