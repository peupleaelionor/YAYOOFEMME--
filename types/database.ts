export interface Database {
  public: {
    // Required by @supabase/supabase-js v2.105+ / @supabase/postgrest-js v2.x
    // See: https://github.com/supabase/supabase-js/releases
    PostgrestVersion: "12"
    Tables: {
      products: {
        Row: {
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
        Insert: {
          id?: string
          name: string
          brand?: string | null
          category: string
          subcategory?: string | null
          description?: string | null
          price?: number | null
          currency?: string
          image_url?: string | null
          product_url?: string | null
          affiliate_url?: string | null
          seller?: string | null
          commission_rate?: number
          material?: string | null
          ingredients?: string | null
          sizes?: string[] | null
          colors?: string[] | null
          target_styles?: string[] | null
          target_occasions?: string[] | null
          target_profiles?: string[] | null
          season?: string[] | null
          quality_score?: number
          safety_score?: number
          value_score?: number
          trend_score?: number
          commission_score?: number
          stock_status?: string
          is_sponsored?: boolean
          sponsored_label?: string | null
          last_checked_at?: string | null
          created_at?: string
        }
        Update: Partial<Database['public']['Tables']['products']['Insert']>
        Relationships: []
      }
      user_profiles: {
        Row: {
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
        Insert: {
          id?: string
          user_id: string
          age_range?: string | null
          style_preferences?: string[] | null
          beauty_preferences?: string[] | null
          skin_type?: string | null
          hair_type?: string | null
          budget_min?: number | null
          budget_max?: number | null
          favorite_categories?: string[] | null
          avoided_categories?: string[] | null
          favorite_brands?: string[] | null
          avoided_brands?: string[] | null
          created_at?: string
        }
        Update: Partial<Database['public']['Tables']['user_profiles']['Insert']>
        Relationships: []
      }
      subscriptions: {
        Row: {
          id: string
          user_id: string
          stripe_customer_id: string | null
          stripe_subscription_id: string | null
          plan: string | null
          status: string | null
          current_period_end: string | null
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          stripe_customer_id?: string | null
          stripe_subscription_id?: string | null
          plan?: string | null
          status?: string | null
          current_period_end?: string | null
          created_at?: string
        }
        Update: Partial<Database['public']['Tables']['subscriptions']['Insert']>
        Relationships: []
      }
      ebooks: {
        Row: {
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
        Insert: {
          id?: string
          title: string
          slug: string
          description?: string | null
          price?: number
          cover_url?: string | null
          file_url?: string | null
          is_free?: boolean
          is_premium?: boolean
          category?: string | null
          created_at?: string
        }
        Update: Partial<Database['public']['Tables']['ebooks']['Insert']>
        Relationships: []
      }
      ebook_purchases: {
        Row: {
          id: string
          user_id: string
          ebook_id: string
          stripe_payment_id: string | null
          amount: number
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          ebook_id: string
          stripe_payment_id?: string | null
          amount: number
          created_at?: string
        }
        Update: Partial<Database['public']['Tables']['ebook_purchases']['Insert']>
        Relationships: []
      }
      quiz_sessions: {
        Row: {
          id: string
          user_id: string | null
          module: string
          answers: Record<string, unknown>
          created_at: string
        }
        Insert: {
          id?: string
          user_id?: string | null
          module: string
          answers?: Record<string, unknown>
          created_at?: string
        }
        Update: Partial<Database['public']['Tables']['quiz_sessions']['Insert']>
        Relationships: []
      }
      recommendations: {
        Row: {
          id: string
          user_id: string | null
          quiz_session_id: string | null
          module: string
          input: Record<string, unknown>
          recommended_products: Array<{ id: string; score: number }>
          explanation: string | null
          is_paid: boolean
          created_at: string
        }
        Insert: {
          id?: string
          user_id?: string | null
          quiz_session_id?: string | null
          module: string
          input?: Record<string, unknown>
          recommended_products?: Array<{ id: string; score: number }>
          explanation?: string | null
          is_paid?: boolean
          created_at?: string
        }
        Update: Partial<Database['public']['Tables']['recommendations']['Insert']>
        Relationships: []
      }
      one_shot_orders: {
        Row: {
          id: string
          user_id: string | null
          type: string
          amount: number
          stripe_payment_id: string | null
          status: string
          result_id: string | null
          created_at: string
        }
        Insert: {
          id?: string
          user_id?: string | null
          type: string
          amount: number
          stripe_payment_id?: string | null
          status?: string
          result_id?: string | null
          created_at?: string
        }
        Update: Partial<Database['public']['Tables']['one_shot_orders']['Insert']>
        Relationships: []
      }
      product_clicks: {
        Row: {
          id: string
          user_id: string | null
          product_id: string
          source: string | null
          referrer: string | null
          created_at: string
        }
        Insert: {
          id?: string
          user_id?: string | null
          product_id: string
          source?: string | null
          referrer?: string | null
          created_at?: string
        }
        Update: Partial<Database['public']['Tables']['product_clicks']['Insert']>
        Relationships: []
      }
      wishlists: {
        Row: {
          id: string
          user_id: string
          product_id: string
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          product_id: string
          created_at?: string
        }
        Update: Partial<Database['public']['Tables']['wishlists']['Insert']>
        Relationships: []
      }
    }
    Views: Record<string, never>
    Functions: Record<string, never>
    Enums: Record<string, never>
  }
}

