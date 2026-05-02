import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params
  return {
    title: `Produit ${id}`,
    description: 'Détail du produit',
  }
}

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params

  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      <div className="container-wide py-12">
        <div className="mb-6">
          <Link href="/products" className="text-sm text-[#8C7B6B] hover:text-[#1A1A1A] transition-colors">
            ← Retour au catalogue
          </Link>
        </div>

        <div className="card p-10 text-center max-w-xl mx-auto">
          <div className="text-4xl mb-4">🛍️</div>
          <h1 className="font-serif text-2xl text-[#1A1A1A] mb-3">
            Produit #{id}
          </h1>
          <p className="text-[#8C7B6B] mb-6">
            Les détails de ce produit seront disponibles prochainement.
          </p>
          <Link href="/products">
            <Button variant="outline">Voir le catalogue</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
