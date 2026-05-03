import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Guides & Ebooks beauté et mode',
  description: 'Des guides et ebooks créés par des expertes pour t\'aider à trouver ton style, ta routine beauté et les meilleurs cadeaux.',
}

const ebooks = [
  {
    id: '1',
    emoji: '👗',
    title: 'Le dressing capsule parfait',
    description: '40 pages pour construire un dressing cohérent, polyvalent et stylé avec moins de vêtements.',
    price: 9,
    isFree: false,
    category: 'Mode',
  },
  {
    id: '2',
    emoji: '✨',
    title: 'Routine skincare anti-âge naturelle',
    description: '30 pages pour prendre soin de ta peau avec des soins naturels efficaces et à prix abordable.',
    price: 7,
    isFree: false,
    category: 'Beauté',
  },
  {
    id: '3',
    emoji: '🎁',
    title: '50 idées cadeaux pour femme',
    description: 'La liste ultime de cadeaux classés par budget et type de personnalité.',
    price: 0,
    isFree: true,
    category: 'Cadeaux',
  },
  {
    id: '4',
    emoji: '💄',
    title: 'Maquillage naturel & lumineux',
    description: '25 pages de tutoriels et conseils pour un maquillage nude et flatteur pour toutes les carnations.',
    price: 6,
    isFree: false,
    category: 'Beauté',
  },
  {
    id: '5',
    emoji: '🌸',
    title: 'Guide des parfums féminins',
    description: 'Comprendre les familles olfactives et choisir son parfum signature.',
    price: 5,
    isFree: false,
    category: 'Parfum',
  },
  {
    id: '6',
    emoji: '💍',
    title: 'Bijoux : l\'art d\'assortir',
    description: "Comment choisir et porter ses bijoux selon sa morphologie et son style.",
    price: 4,
    isFree: false,
    category: 'Bijoux',
  },
]

export default function GuidesPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      {/* Header */}
      <div className="section gradient-warm">
        <div className="container-tight text-center">
          <h1 className="font-serif text-4xl md:text-5xl text-[#1A1A1A] mb-4">
            Guides & Ebooks
          </h1>
          <p className="text-[#8C7B6B] max-w-xl mx-auto text-lg">
            Des guides pratiques créés par des expertes mode et beauté pour aller plus loin dans ton style.
          </p>
        </div>
      </div>

      <div className="container-wide py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ebooks.map((ebook) => (
            <div key={ebook.id} className="card flex flex-col">
              <div className="p-8 bg-[#FAF8F5] text-center text-5xl">
                {ebook.emoji}
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="text-xs text-[#8C7B6B] uppercase tracking-wider mb-2">{ebook.category}</div>
                <h2 className="font-serif text-xl text-[#1A1A1A] mb-3">{ebook.title}</h2>
                <p className="text-sm text-[#8C7B6B] leading-relaxed mb-6 flex-1">{ebook.description}</p>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-[#1A1A1A] text-lg">
                    {ebook.isFree ? (
                      <span className="text-green-600">Gratuit</span>
                    ) : (
                      `${ebook.price}€`
                    )}
                  </span>
                  <Button size="sm" variant={ebook.isFree ? 'outline' : 'default'}>
                    {ebook.isFree ? 'Télécharger' : 'Acheter'}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Premium teaser */}
        <div className="mt-16 card p-10 text-center max-w-2xl mx-auto">
          <div className="text-3xl mb-4">⭐</div>
          <h2 className="font-serif text-2xl text-[#1A1A1A] mb-3">
            Accès illimité à tous les guides
          </h2>
          <p className="text-[#8C7B6B] mb-6">
            Avec l&apos;abonnement Premium, accède à tous les guides actuels et futurs en illimité.
          </p>
          <Link href="/pricing">
            <Button>Voir l&apos;abonnement Premium</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
