import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { createClient } from '@/lib/supabase/server'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { notFound } from 'next/navigation'

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params
  const supabase = await createClient()
  const { data: product } = await supabase
    .from('products')
    .select('name, description, brand')
    .eq('id', id)
    .single()

  if (!product) {
    return { title: 'Produit introuvable' }
  }

  return {
    title: `${product.name}${product.brand ? ` — ${product.brand}` : ''}`,
    description: product.description ?? `Découvrez ${product.name} sur Yayoo Femme.`,
  }
}

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const supabase = await createClient()

  const { data: product } = await supabase
    .from('products')
    .select('*')
    .eq('id', id)
    .single()

  if (!product) {
    notFound()
  }

  const buyUrl = product.affiliate_url ?? product.product_url

  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      <div className="container-wide py-10">
        <div className="mb-6">
          <Link href="/products" className="text-sm text-[#8C7B6B] hover:text-[#1A1A1A] transition-colors">
            ← Retour au catalogue
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
          {/* Image */}
          <div className="relative aspect-square rounded-3xl overflow-hidden bg-white border border-[#EDE4D6]">
            {product.image_url ? (
              <Image
                src={product.image_url}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-20 h-20 text-[#8C7B6B] opacity-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            )}
            <div className="absolute top-4 left-4 flex flex-col gap-2">
              {product.is_sponsored && <Badge variant="sponsored">Sponsorisé</Badge>}
              {product.affiliate_url && !product.is_sponsored && <Badge variant="affiliate">Lien affilié</Badge>}
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col">
            {product.brand && (
              <p className="text-sm text-[#8C7B6B] uppercase tracking-wider mb-2">{product.brand}</p>
            )}
            <h1 className="font-serif text-3xl md:text-4xl text-[#1A1A1A] mb-4">{product.name}</h1>

            {product.price && (
              <p className="text-3xl font-semibold text-[#1A1A1A] mb-6">
                {new Intl.NumberFormat('fr-FR', { style: 'currency', currency: product.currency || 'EUR' }).format(product.price)}
              </p>
            )}

            {product.description && (
              <p className="text-[#2C2C2C] leading-relaxed mb-6">{product.description}</p>
            )}

            {/* Details */}
            <div className="space-y-3 mb-8">
              {product.category && (
                <div className="flex items-center gap-3 text-sm">
                  <span className="text-[#8C7B6B] w-24 shrink-0">Catégorie</span>
                  <span className="text-[#1A1A1A] capitalize">{product.category}</span>
                </div>
              )}
              {product.seller && (
                <div className="flex items-center gap-3 text-sm">
                  <span className="text-[#8C7B6B] w-24 shrink-0">Vendeur</span>
                  <span className="text-[#1A1A1A]">{product.seller}</span>
                </div>
              )}
              {product.stock_status && (
                <div className="flex items-center gap-3 text-sm">
                  <span className="text-[#8C7B6B] w-24 shrink-0">Disponibilité</span>
                  <span className={`font-medium ${product.stock_status === 'in_stock' ? 'text-green-600' : product.stock_status === 'low_stock' ? 'text-orange-500' : 'text-red-500'}`}>
                    {product.stock_status === 'in_stock' ? 'En stock' : product.stock_status === 'low_stock' ? 'Stock limité' : 'Rupture de stock'}
                  </span>
                </div>
              )}
              {product.sizes && product.sizes.length > 0 && (
                <div className="flex items-start gap-3 text-sm">
                  <span className="text-[#8C7B6B] w-24 shrink-0 mt-0.5">Tailles</span>
                  <div className="flex flex-wrap gap-1.5">
                    {product.sizes.map((size: string) => (
                      <span key={size} className="px-2 py-0.5 bg-[#F5F0E8] rounded text-xs text-[#2C2C2C]">{size}</span>
                    ))}
                  </div>
                </div>
              )}
              {product.colors && product.colors.length > 0 && (
                <div className="flex items-start gap-3 text-sm">
                  <span className="text-[#8C7B6B] w-24 shrink-0 mt-0.5">Couleurs</span>
                  <div className="flex flex-wrap gap-1.5">
                    {product.colors.map((color: string) => (
                      <span key={color} className="px-2 py-0.5 bg-[#F5F0E8] rounded text-xs text-[#2C2C2C] capitalize">{color}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Quality scores */}
            <div className="grid grid-cols-3 gap-3 mb-8 p-5 bg-white rounded-2xl border border-[#EDE4D6]">
              {[
                { label: 'Qualité', score: product.quality_score },
                { label: 'Q/Prix', score: product.value_score },
                { label: 'Tendance', score: product.trend_score },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <div className="font-serif text-2xl text-[#1A1A1A] mb-1">{item.score}</div>
                  <div className="text-xs text-[#8C7B6B]">{item.label}</div>
                  <div className="mt-1.5 h-1 bg-[#F5F0E8] rounded-full overflow-hidden">
                    <div className="h-full bg-[#C9978A] rounded-full" style={{ width: `${item.score}%` }} />
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            {buyUrl ? (
              <a
                href={buyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-center text-base py-4"
                onClick={async () => {
                  await fetch('/api/affiliate-click', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ productId: product.id, source: 'product-detail' }),
                  })
                }}
              >
                Voir le produit {product.seller ? `sur ${product.seller}` : ''} →
              </a>
            ) : (
              <Button disabled className="w-full text-base py-4">
                Produit bientôt disponible
              </Button>
            )}

            {product.affiliate_url && (
              <p className="text-xs text-[#8C7B6B] mt-3 text-center">
                🔗 Lien affilié — Aucun coût supplémentaire pour toi.{' '}
                <Link href="/affiliation" className="underline hover:text-[#C9978A]">En savoir plus</Link>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
