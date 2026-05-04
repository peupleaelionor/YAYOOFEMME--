'use client'

import { useState } from 'react'

const deals = [
  { brand: 'Sephora', discount: '-20%', description: 'Sur toute la gamme skincare Caudalie', expires: '30/12/2025', badge: '🔥 Flash', href: '#' },
  { brand: 'Zalando', discount: '-30%', description: 'Sélection robes et tops printemps', expires: '15/01/2026', badge: '⚡ Exclusif', href: '#' },
  { brand: 'Asos', discount: '-25%', description: 'Code promo: YAYOO25 sur toute la boutique', expires: '31/12/2025', badge: '💌 Code promo', href: '#' },
  { brand: "L'Occitane", discount: '-15%', description: 'Sets cadeau beauté & parfums', expires: '28/12/2025', badge: '🎁 Cadeaux', href: '#' },
  { brand: 'Nocibé', discount: '-10%', description: 'Sur les parfums de marques', expires: '31/01/2026', badge: '🌹 Parfum', href: '#' },
  { brand: 'Amazon Fashion', discount: 'Jusqu\'à -50%', description: 'Ventes flash bijoux et accessoires', expires: '20/12/2025', badge: '⚡ Flash', href: '#' },
]

export default function DealsPage() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: 'deals' }),
      })
      if (res.ok) {
        setStatus('success')
        setEmail('')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }
  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      {/* Header */}
      <div className="bg-[#1A1A1A] text-[#FAF8F5] py-16">
        <div className="container-tight text-center">
          <div className="text-3xl mb-4">🏷️</div>
          <h1 className="font-serif text-4xl md:text-5xl mb-4">Bons plans du moment</h1>
          <p className="text-[#BEA98C] max-w-xl mx-auto">
            Les meilleures promos mode, beauté et cadeaux sélectionnées pour toi. Mis à jour chaque semaine.
          </p>
        </div>
      </div>

      <div className="container-wide py-12">
        {/* Affiliate disclaimer */}
        <div className="flex items-start gap-3 p-4 bg-[#F5F0E8] rounded-2xl mb-8">
          <span>ℹ️</span>
          <p className="text-xs text-[#8C7B6B]">
            Certains liens ci-dessous sont des liens affiliés. Nous touchons une commission si tu effectues un achat, sans coût supplémentaire pour toi. Les offres sont vérifiées régulièrement mais peuvent expirer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {deals.map((deal, i) => (
            <a
              key={i}
              href={deal.href}
              target="_blank"
              rel="noopener noreferrer"
              className="card-hover p-6 block group"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-xs bg-[#F2E8E4] text-[#A67060] px-3 py-1 rounded-full">{deal.badge}</span>
                <span className="font-serif text-2xl font-bold text-[#C9978A]">{deal.discount}</span>
              </div>
              <h3 className="font-semibold text-[#1A1A1A] mb-1">{deal.brand}</h3>
              <p className="text-sm text-[#8C7B6B] mb-4">{deal.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-[#8C7B6B]">Expire le {deal.expires}</span>
                <span className="text-sm text-[#C9978A] group-hover:text-[#A67060] transition-colors">Profiter →</span>
              </div>
            </a>
          ))}
        </div>

        {/* Newsletter signup */}
        <div className="mt-16 text-center">
          <div className="card p-10 max-w-xl mx-auto">
            <div className="text-3xl mb-4">📧</div>
            <h2 className="font-serif text-2xl text-[#1A1A1A] mb-3">
              Ne rate plus un bon plan
            </h2>
            <p className="text-[#8C7B6B] mb-6 text-sm">
              Reçois les meilleures offres chaque semaine directement dans ta boîte mail.
            </p>
            <form className="flex flex-col sm:flex-row gap-3" onSubmit={handleNewsletterSubmit}>
              <input
                type="email"
                placeholder="ton@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-4 py-3 bg-[#FAF8F5] border border-[#EDE4D6] rounded-full text-sm focus:outline-none focus:border-[#C9978A]"
              />
              <button
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                className="btn-accent whitespace-nowrap disabled:opacity-60"
              >
                {status === 'loading' ? 'Inscription...' : status === 'success' ? '✓ Inscrite !' : "S'abonner"}
              </button>
            </form>
            {status === 'error' && (
              <p className="text-xs text-red-500 mt-2">Une erreur est survenue. Réessaie.</p>
            )}
            <p className="text-xs text-[#8C7B6B] mt-3">Sans spam · Désabonnement en 1 clic</p>
          </div>
        </div>
      </div>
    </div>
  )
}
