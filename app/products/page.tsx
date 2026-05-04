'use client'

import Link from 'next/link'
import { useState, useEffect, useCallback } from 'react'
import { ProductCard } from '@/components/products/product-card'
import type { Product } from '@/types/product'

const categories = [
  { id: '', label: 'Tout', emoji: '✨' },
  { id: 'mode', label: 'Mode', emoji: '👗' },
  { id: 'chaussures', label: 'Chaussures', emoji: '👠' },
  { id: 'beaute', label: 'Beauté', emoji: '💄' },
  { id: 'skincare', label: 'Skincare', emoji: '✨' },
  { id: 'cheveux', label: 'Cheveux', emoji: '💇‍♀️' },
  { id: 'parfum', label: 'Parfum', emoji: '🌹' },
  { id: 'bijoux', label: 'Bijoux', emoji: '💍' },
  { id: 'accessoires', label: 'Accessoires', emoji: '👜' },
  { id: 'maison', label: 'Maison', emoji: '🏡' },
  { id: 'cadeaux', label: 'Cadeaux', emoji: '🎁' },
]

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('')
  const [products, setProducts] = useState<Product[] | null>(null)
  const [total, setTotal] = useState(0)
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [empty, setEmpty] = useState(false)

  const fetchProducts = useCallback(async (category: string, p: number) => {
    try {
      const params = new URLSearchParams({ page: String(p), limit: '24' })
      if (category) params.set('category', category)
      const res = await fetch(`/api/products?${params}`)
      if (res.ok) {
        const data = await res.json()
        return data
      }
    } catch {
      // ignore
    }
    return null
  }, [])

  useEffect(() => {
    let cancelled = false
    fetchProducts(selectedCategory, page).then((data) => {
      if (cancelled) return
      if (data) {
        setProducts(data.products ?? [])
        setTotal(data.total ?? 0)
        setTotalPages(data.totalPages ?? 0)
        setEmpty(!data.products?.length)
      } else {
        setProducts([])
        setEmpty(true)
      }
    })
    return () => { cancelled = true }
  }, [selectedCategory, page, fetchProducts])

  const handleCategory = (id: string) => {
    setSelectedCategory(id)
    setPage(1)
    setProducts(null)
  }

  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      {/* Header */}
      <div className="section bg-white border-b border-[#EDE4D6]">
        <div className="container-tight text-center">
          <h1 className="font-serif text-4xl md:text-5xl text-[#1A1A1A] mb-4">Catalogue</h1>
          <p className="text-[#8C7B6B] max-w-xl mx-auto">
            Des milliers de produits sélectionnés selon la qualité, le rapport qualité-prix et les tendances.
          </p>
        </div>
      </div>

      <div className="container-wide py-12">
        {/* Categories */}
        <div className="mb-10">
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full border text-sm transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#1A1A1A] text-[#FAF8F5] border-[#1A1A1A]'
                    : 'bg-white text-[#2C2C2C] border-[#EDE4D6] hover:border-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-[#FAF8F5]'
                }`}
              >
                <span>{cat.emoji}</span>
                <span>{cat.label}</span>
              </button>
            ))}
          </div>
        </div>

        {products === null ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="card animate-pulse">
                <div className="aspect-square bg-[#F5F0E8]" />
                <div className="p-5 space-y-2">
                  <div className="h-3 bg-[#F5F0E8] rounded w-1/3" />
                  <div className="h-4 bg-[#F5F0E8] rounded w-3/4" />
                  <div className="h-4 bg-[#F5F0E8] rounded w-1/2" />
                </div>
              </div>
            ))}
          </div>
        ) : empty ? (
          <div className="text-center py-20">
            <div className="text-4xl mb-4">🛍️</div>
            <h2 className="font-serif text-2xl text-[#1A1A1A] mb-3">
              {selectedCategory ? 'Aucun produit dans cette catégorie' : 'Catalogue en cours de construction'}
            </h2>
            <p className="text-[#8C7B6B] mb-6 max-w-md mx-auto">
              Notre catalogue s&apos;enrichit chaque semaine. En attendant, utilise nos finders pour des recommandations personnalisées.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/style" className="btn-primary">Style Finder</Link>
              <Link href="/beauty" className="btn-secondary">Beauty Finder</Link>
            </div>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-[#8C7B6B]">
                {total} produit{total > 1 ? 's' : ''} trouvé{total > 1 ? 's' : ''}
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {totalPages > 1 && (
              <div className="flex justify-center gap-3 mt-12">
                <button
                  onClick={() => { setProducts(null); setPage((p) => Math.max(1, p - 1)) }}
                  disabled={page === 1}
                  className="px-5 py-2 rounded-full border border-[#EDE4D6] text-sm text-[#2C2C2C] hover:border-[#1A1A1A] disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
                >
                  ← Précédent
                </button>
                <span className="px-5 py-2 text-sm text-[#8C7B6B]">
                  Page {page} / {totalPages}
                </span>
                <button
                  onClick={() => { setProducts(null); setPage((p) => Math.min(totalPages, p + 1)) }}
                  disabled={page === totalPages}
                  className="px-5 py-2 rounded-full border border-[#EDE4D6] text-sm text-[#2C2C2C] hover:border-[#1A1A1A] disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
                >
                  Suivant →
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}
