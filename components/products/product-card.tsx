'use client'

import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ScoreBar } from '@/components/ui/score-bar'
import { formatPrice } from '@/lib/utils'
import type { Product } from '@/types/product'

interface ProductCardProps {
  product: Product
  showScores?: boolean
  onWishlist?: (product: Product) => void
  onBuy?: (product: Product) => void
}

export function ProductCard({ product, showScores = false, onWishlist, onBuy }: ProductCardProps) {
  const handleBuy = async () => {
    if (onBuy) {
      onBuy(product)
      return
    }

    await fetch('/api/affiliate-click', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ productId: product.id, source: 'product-card' }),
    })

    const url = product.affiliate_url ?? product.product_url
    if (url) window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="card-hover group flex flex-col h-full">
      {/* Image */}
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
          <div className="absolute inset-0 flex items-center justify-center text-[#8C7B6B]">
            <svg className="w-12 h-12 opacity-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        )}

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.is_sponsored && (
            <Badge variant="sponsored">Sponsorisé</Badge>
          )}
          {product.affiliate_url && !product.is_sponsored && (
            <Badge variant="affiliate">Lien affilié</Badge>
          )}
        </div>

        {/* Wishlist button */}
        <button
          className="absolute top-3 right-3 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center shadow-[0_2px_20px_rgba(0,0,0,0.06)] opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white cursor-pointer"
          onClick={() => onWishlist?.(product)}
          aria-label="Ajouter à ma wishlist"
        >
          <svg className="w-4 h-4 text-[#C9978A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        {product.brand && (
          <p className="text-xs text-[#8C7B6B] uppercase tracking-wider mb-1">{product.brand}</p>
        )}
        <h3 className="font-medium text-[#1A1A1A] text-sm leading-snug mb-2 line-clamp-2">
          {product.name}
        </h3>

        {showScores && (
          <div className="space-y-2 mb-4">
            <ScoreBar score={product.quality_score} label="Qualité" />
            <ScoreBar score={product.value_score} label="Rapport Q/P" />
            <ScoreBar score={product.trend_score} label="Tendance" />
          </div>
        )}

        <div className="mt-auto">
          <div className="flex items-center justify-between mb-3">
            <span className="font-semibold text-[#1A1A1A]">
              {product.price ? formatPrice(product.price, product.currency) : '—'}
            </span>
          </div>

          <Button
            variant="default"
            size="sm"
            className="w-full"
            onClick={handleBuy}
          >
            Voir le produit
          </Button>
        </div>
      </div>
    </div>
  )
}
