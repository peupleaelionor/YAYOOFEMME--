'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { createClient } from '@/lib/supabase/client'
import Image from 'next/image'
import type { User } from '@supabase/supabase-js'

interface WishlistProduct {
  id: string
  created_at: string
  products: {
    id: string
    name: string
    brand: string | null
    price: number | null
    currency: string
    image_url: string | null
    affiliate_url: string | null
    product_url: string | null
    category: string
  }
}

export default function WishlistPage() {
  const [user, setUser] = useState<User | null>(null)
  const [items, setItems] = useState<WishlistProduct[]>([])
  const [loading, setLoading] = useState(true)
  const [removing, setRemoving] = useState<string | null>(null)

  useEffect(() => {
    const supabase = createClient()
    supabase.auth.getUser().then(async ({ data: { user } }) => {
      setUser(user)
      if (user) {
        const { data } = await supabase
          .from('wishlists')
          .select('id, created_at, products(id, name, brand, price, currency, image_url, affiliate_url, product_url, category)')
          .eq('user_id', user.id)
          .order('created_at', { ascending: false })
        setItems((data as unknown as WishlistProduct[]) ?? [])
      }
      setLoading(false)
    })
  }, [])

  const removeFromWishlist = async (wishlistId: string, productId: string) => {
    setRemoving(productId)
    const supabase = createClient()
    await supabase.from('wishlists').delete().eq('id', wishlistId)
    setItems((prev) => prev.filter((item) => item.id !== wishlistId))
    setRemoving(null)
  }

  const handleBuy = async (product: WishlistProduct['products']) => {
    await fetch('/api/affiliate-click', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ productId: product.id, source: 'wishlist' }),
    })
    const url = product.affiliate_url ?? product.product_url
    if (url) window.open(url, '_blank', 'noopener,noreferrer')
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-[#FAF8F5] flex items-center justify-center">
        <div className="w-10 h-10 border-2 border-[#EDE4D6] border-t-[#C9978A] rounded-full animate-spin" />
      </div>
    )
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-[#FAF8F5] flex items-center justify-center px-4">
        <div className="card p-10 max-w-md w-full text-center">
          <div className="text-4xl mb-4">❤️</div>
          <h1 className="font-serif text-2xl text-[#1A1A1A] mb-3">Connexion requise</h1>
          <p className="text-[#8C7B6B] mb-6">
            Connecte-toi pour accéder à ta wishlist.
          </p>
          <Link href="/account">
            <Button>Se connecter</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      <div className="bg-white border-b border-[#EDE4D6] py-8">
        <div className="container-tight">
          <div className="flex items-center gap-3 mb-1">
            <Link href="/account" className="text-sm text-[#8C7B6B] hover:text-[#1A1A1A] transition-colors">
              ← Mon compte
            </Link>
          </div>
          <h1 className="font-serif text-3xl text-[#1A1A1A]">
            Ma wishlist{' '}
            {items.length > 0 && (
              <span className="text-lg text-[#8C7B6B] font-sans font-normal">
                ({items.length} produit{items.length > 1 ? 's' : ''})
              </span>
            )}
          </h1>
        </div>
      </div>

      <div className="container-wide py-10">
        {items.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-5xl mb-4">🛍️</div>
            <h2 className="font-serif text-2xl text-[#1A1A1A] mb-3">Ta wishlist est vide</h2>
            <p className="text-[#8C7B6B] mb-8 max-w-md mx-auto">
              Ajoute des produits à ta wishlist depuis les résultats de tes quiz ou le catalogue.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/style" className="btn-primary">Style Finder</Link>
              <Link href="/beauty" className="btn-secondary">Beauty Finder</Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {items.map((item) => {
              const product = item.products
              return (
                <div key={item.id} className="card-hover group flex flex-col h-full">
                  <div className="relative aspect-square bg-[#FAF8F5] overflow-hidden">
                    {product.image_url ? (
                      <Image
                        src={product.image_url}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <svg className="w-12 h-12 text-[#8C7B6B] opacity-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                    )}
                    <button
                      className="absolute top-3 right-3 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center shadow-soft opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-50 cursor-pointer"
                      onClick={() => removeFromWishlist(item.id, product.id)}
                      disabled={removing === product.id}
                      aria-label="Retirer de la wishlist"
                    >
                      <svg className="w-4 h-4 text-[#C9978A]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </button>
                  </div>

                  <div className="p-5 flex flex-col flex-1">
                    {product.brand && (
                      <p className="text-xs text-[#8C7B6B] uppercase tracking-wider mb-1">{product.brand}</p>
                    )}
                    <h3 className="font-medium text-[#1A1A1A] text-sm leading-snug mb-2 line-clamp-2">
                      {product.name}
                    </h3>
                    <div className="mt-auto">
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-semibold text-[#1A1A1A]">
                          {product.price
                            ? new Intl.NumberFormat('fr-FR', { style: 'currency', currency: product.currency || 'EUR' }).format(product.price)
                            : '—'}
                        </span>
                      </div>
                      <Button size="sm" className="w-full" onClick={() => handleBuy(product)}>
                        Voir le produit
                      </Button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
