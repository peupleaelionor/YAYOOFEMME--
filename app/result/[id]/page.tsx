'use client'

import { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { ProductCard } from '@/components/products/product-card'
import { Button } from '@/components/ui/button'
import type { Product } from '@/types/product'

interface RecommendationData {
  module: string
  answers: Record<string, string | string[] | number>
  products: Array<Product & { _score: number }>
  explanation: string
  total: number
}

const MODULE_LABELS: Record<string, string> = {
  style: 'Style Finder',
  beauty: 'Beauty Finder',
  gift: 'Gift Finder',
  perfume: 'Perfume Finder',
  capsule: 'Dressing Capsule',
}

export default function ResultPage() {
  const params = useParams()
  const searchParams = useSearchParams()
  const isUnlocked = searchParams.get('unlocked') === 'true'
  const [data, setData] = useState<RecommendationData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const stored = sessionStorage.getItem('recommendation')
    if (stored) {
      try {
        setData(JSON.parse(stored))
      } catch {
        // ignore parse errors
      }
    }
    setLoading(false)
  }, [])

  const id = Array.isArray(params.id) ? params.id[0] : params.id

  if (loading) {
    return (
      <div className="min-h-screen bg-[#FAF8F5] flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-2 border-[#EDE4D6] border-t-[#C9978A] rounded-full animate-spin mx-auto mb-4" />
          <p className="text-[#8C7B6B]">Chargement de tes recommandations...</p>
        </div>
      </div>
    )
  }

  if (!data) {
    return (
      <div className="min-h-screen bg-[#FAF8F5] flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="text-4xl mb-4">🔍</div>
          <h1 className="font-serif text-2xl text-[#1A1A1A] mb-3">Aucune recommandation trouvée</h1>
          <p className="text-[#8C7B6B] mb-6">
            Commence un quiz pour recevoir ta sélection personnalisée.
          </p>
          <Link href="/">
            <Button>Retour à l&apos;accueil</Button>
          </Link>
        </div>
      </div>
    )
  }

  const moduleLabel = MODULE_LABELS[data.module] ?? data.module
  const visibleProducts = isUnlocked ? data.products : data.products.slice(0, 3)
  const hiddenCount = data.products.length - visibleProducts.length

  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      {/* Header */}
      <div className="bg-white border-b border-[#EDE4D6] py-8">
        <div className="container-tight text-center">
          <div className="text-sm text-[#8C7B6B] mb-2">{moduleLabel}</div>
          <h1 className="font-serif text-3xl md:text-4xl text-[#1A1A1A] mb-4">
            Ta sélection personnalisée
          </h1>
          {data.explanation && (
            <p className="text-[#8C7B6B] max-w-2xl mx-auto leading-relaxed">
              {data.explanation}
            </p>
          )}
        </div>
      </div>

      <div className="container-wide py-12">
        {/* Affiliate disclaimer */}
        <div className="flex items-start gap-3 p-4 bg-[#F5F0E8] rounded-2xl mb-8">
          <span className="text-lg">ℹ️</span>
          <p className="text-xs text-[#8C7B6B] leading-relaxed">
            Certains produits ci-dessous sont présentés via des liens affiliés. Si tu effectues un achat, nous touchons une petite commission sans coût supplémentaire pour toi. Les produits sponsorisés sont clairement identifiés.
          </p>
        </div>

        {/* Products grid */}
        {data.products.length > 0 ? (
          <>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {visibleProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* Unlock CTA */}
            {!isUnlocked && hiddenCount > 0 && (
              <div className="mt-8 text-center">
                <div className="card p-8 max-w-md mx-auto">
                  <div className="text-3xl mb-4">🔒</div>
                  <h3 className="font-serif text-xl text-[#1A1A1A] mb-2">
                    +{hiddenCount} produits dans ta sélection
                  </h3>
                  <p className="text-sm text-[#8C7B6B] mb-6">
                    Débloque ta sélection complète avec explications détaillées pour chaque produit.
                  </p>
                  <Button
                    onClick={() => {
                      fetch('/api/checkout', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                          type: 'one_shot',
                          module: data.module,
                          resultId: id,
                        }),
                      })
                        .then(r => r.json())
                        .then(({ url }) => url && window.location.assign(url))
                    }}
                    className="w-full"
                  >
                    Débloquer ma sélection complète
                  </Button>
                  <p className="text-xs text-[#8C7B6B] mt-3">Paiement unique · Accès permanent</p>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-16">
            <div className="text-4xl mb-4">🛍️</div>
            <h2 className="font-serif text-2xl text-[#1A1A1A] mb-3">
              Aucun produit trouvé pour le moment
            </h2>
            <p className="text-[#8C7B6B] mb-6">
              Notre catalogue est en cours d&apos;enrichissement. Reviens bientôt !
            </p>
            <Link href="/">
              <Button variant="outline">Retour à l&apos;accueil</Button>
            </Link>
          </div>
        )}

        {/* Redo quiz */}
        <div className="text-center mt-12">
          <Link href={`/${data.module}`}>
            <Button variant="ghost">↩ Refaire le quiz</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
