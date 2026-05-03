export interface Ebook {
  id: string
  title: string
  slug: string
  description: string | null
  price: number
  cover_url: string | null
  file_url: string | null
  is_free: boolean
  is_premium: boolean
  category: string | null
  created_at: string
}
