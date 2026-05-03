'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'

const oneShots = [
  {
    icon: '👗',
    title: 'Look complet',
    module: 'style',
    description: 'Sélection complète + dossier de style personnalisé avec 12 produits.',
    price: '3,90€',
    features: ['12 produits sélectionnés', 'Explication IA pour chaque produit', 'Accès permanent'],
  },
  {
    icon: '✨',
    title: 'Routine beauté',
    module: 'beauty',
    description: 'Routine complète matin et soir avec produits adaptés à ta peau.',
    price: '6,90€',
    features: ['Routine matin + soir', '12 produits personnalisés', 'Conseils d\'application'],
  },
  {
    icon: '🎁',
    title: 'Guide cadeau',
    module: 'gift',
    description: 'Sélection de 12 cadeaux parfaits avec liens directs.',
    price: '4,90€',
    features: ['12 idées cadeaux', 'Liens directs', 'Conseils emballage'],
  },
  {
    icon: '👘',
    title: 'Dressing capsule',
    module: 'capsule',
    description: '30 pièces essentielles pour un dressing cohérent et stylé.',
    price: '14,90€',
    features: ['30 pièces clés', 'Guide de composition', '3 looks suggérés'],
  },
]

const subscriptions = [
  {
    id: 'basic',
    name: 'Basic',
    price: '4,90€',
    period: 'mois',
    description: 'Pour explorer les finders sans limite.',
    features: [
      'Recommandations illimitées',
      'Sauvegarde wishlist (10 produits)',
      'Accès aux bons plans',
      'Support email',
    ],
    highlighted: false,
  },
  {
    id: 'plus',
    name: 'Plus',
    price: '9,90€',
    period: 'mois',
    description: 'La solution complète pour un style parfait.',
    features: [
      'Tout du plan Basic',
      'Wishlist illimitée',
      'Accès à tous les guides gratuits',
      '1 recommandation one-shot / mois',
      'Alertes bons plans en avant-première',
    ],
    highlighted: true,
  },
  {
    id: 'premium',
    name: 'Premium',
    price: '19,90€',
    period: 'mois',
    description: 'Pour les passionnées de mode et beauté.',
    features: [
      'Tout du plan Plus',
      'Accès à tous les ebooks',
      'Recommandations one-shot illimitées',
      'Consultations style prioritaires',
      'Support prioritaire',
    ],
    highlighted: false,
  },
]

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      {/* Header */}
      <div className="section bg-white border-b border-[#EDE4D6]">
        <div className="container-tight text-center">
          <h1 className="font-serif text-4xl md:text-5xl text-[#1A1A1A] mb-4">Nos offres</h1>
          <p className="text-[#8C7B6B] max-w-xl mx-auto text-lg">
            Gratuit pour commencer, payant quand tu veux aller plus loin. Pas d&apos;engagement.
          </p>
        </div>
      </div>

      <div className="container-wide py-16">
        {/* One-shots */}
        <div className="mb-16">
          <h2 className="font-serif text-3xl text-[#1A1A1A] mb-3 text-center">Paiements à l&apos;acte</h2>
          <p className="text-[#8C7B6B] text-center mb-10">Sans abonnement, accès permanent à ta sélection.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {oneShots.map((item) => (
              <div key={item.module} className="card p-6 flex flex-col">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="font-serif text-xl text-[#1A1A1A] mb-2">{item.title}</h3>
                <p className="text-sm text-[#8C7B6B] mb-4 flex-1">{item.description}</p>
                <ul className="space-y-2 mb-6">
                  {item.features.map((f) => (
                    <li key={f} className="text-xs text-[#8C7B6B] flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="font-bold text-2xl text-[#1A1A1A] mb-4">{item.price}</div>
                <Link href={`/${item.module}`}>
                  <Button variant="outline" size="sm" className="w-full">Commencer le quiz</Button>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Subscriptions */}
        <div>
          <h2 className="font-serif text-3xl text-[#1A1A1A] mb-3 text-center">Abonnements mensuels</h2>
          <p className="text-[#8C7B6B] text-center mb-10">Sans engagement · Annulation à tout moment</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {subscriptions.map((sub) => (
              <div key={sub.id} className={`card flex flex-col ${sub.highlighted ? 'ring-2 ring-[#C9978A]' : ''}`}>
                {sub.highlighted && (
                  <div className="bg-[#C9978A] text-white text-xs font-medium text-center py-2">
                    ⭐ Le plus populaire
                  </div>
                )}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-serif text-2xl text-[#1A1A1A] mb-1">{sub.name}</h3>
                  <p className="text-sm text-[#8C7B6B] mb-4">{sub.description}</p>
                  <div className="mb-6">
                    <span className="font-bold text-3xl text-[#1A1A1A]">{sub.price}</span>
                    <span className="text-[#8C7B6B] text-sm">/{sub.period}</span>
                  </div>
                  <ul className="space-y-2.5 mb-8 flex-1">
                    {sub.features.map((f) => (
                      <li key={f} className="text-sm text-[#2C2C2C] flex items-start gap-2">
                        <span className="text-green-500 mt-0.5 shrink-0">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant={sub.highlighted ? 'accent' : 'default'}
                    className="w-full"
                    onClick={() => {
                      fetch('/api/checkout', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ type: 'subscription', plan: sub.id }),
                      })
                        .then(r => r.json())
                        .then(({ url }) => url && window.location.assign(url))
                    }}
                  >
                    Choisir {sub.name}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-16 max-w-2xl mx-auto">
          <h2 className="font-serif text-2xl text-[#1A1A1A] mb-8 text-center">Questions fréquentes</h2>
          <div className="space-y-4">
            {[
              { q: "Puis-je annuler à tout moment ?", a: "Oui, l'annulation est immédiate et sans frais depuis ton espace compte." },
              { q: "Les paiements à l'acte sont-ils définitifs ?", a: "Oui, tu paies une fois et tu accèdes à ta sélection en permanence." },
              { q: "Y a-t-il une période d'essai ?", a: "Commence gratuitement avec 3 recommandations par quiz. Passe à la version payante quand tu veux." },
            ].map((faq) => (
              <div key={faq.q} className="card p-6">
                <h3 className="font-semibold text-[#1A1A1A] mb-2">{faq.q}</h3>
                <p className="text-sm text-[#8C7B6B]">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
