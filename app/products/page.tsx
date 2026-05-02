import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Catalogue produits',
  description: 'Parcourez notre catalogue de produits mode, beauté, parfums et cadeaux sélectionnés pour vous.',
}

const categories = [
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
  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      {/* Header */}
      <div className="section bg-white border-b border-[#EDE4D6]">
        <div className="container-tight text-center">
          <h1 className="font-serif text-4xl md:text-5xl text-[#1A1A1A] mb-4">
            Catalogue
          </h1>
          <p className="text-[#8C7B6B] max-w-xl mx-auto">
            Des milliers de produits sélectionnés selon la qualité, le rapport qualité-prix et les tendances.
          </p>
        </div>
      </div>

      <div className="container-wide py-12">
        {/* Categories */}
        <div className="mb-10">
          <h2 className="font-serif text-2xl text-[#1A1A1A] mb-6">Parcourir par catégorie</h2>
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={`/products?category=${cat.id}`}
                className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-[#EDE4D6] text-sm text-[#2C2C2C] hover:border-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-[#FAF8F5] transition-all"
              >
                <span>{cat.emoji}</span>
                <span>{cat.label}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Products grid placeholder */}
        <div className="text-center py-20">
          <div className="text-4xl mb-4">🛍️</div>
          <h2 className="font-serif text-2xl text-[#1A1A1A] mb-3">
            Catalogue en cours de construction
          </h2>
          <p className="text-[#8C7B6B] mb-6 max-w-md mx-auto">
            Nous sélectionnons les meilleurs produits pour toi. En attendant, utilise nos finders pour des recommandations personnalisées.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/style" className="btn-primary">Style Finder</Link>
            <Link href="/beauty" className="btn-secondary">Beauty Finder</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
