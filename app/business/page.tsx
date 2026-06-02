import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Espace Marques & B2B - Yayoo Femme',
  description: 'Référencez vos produits sur Yayoo Femme et touchez une audience féminine qualifiée.',
}

const advantages = [
  { emoji: '🎯', title: 'Audience ultra-ciblée', description: 'Des femmes actives en processus d\'achat, qui cherchent activement des recommandations.' },
  { emoji: '🤖', title: 'IA de recommandation', description: 'Vos produits sont recommandés contextuellement selon le profil exact de chaque utilisatrice.' },
  { emoji: '📊', title: 'Dashboard analytics', description: 'Suivez vos clics, conversions et ROI en temps réel depuis votre espace marque.' },
  { emoji: '💎', title: 'Label de qualité', description: 'Nos équipes testent et valident chaque produit avant référencement.' },
]

const formats = [
  { title: 'Listing standard', price: 'Gratuit', description: 'Référencement de base dans notre catalogue.', features: ['Fiche produit', 'Lien affilié', 'Scoring automatique'] },
  { title: 'Listing premium', price: 'Sur devis', description: 'Visibilité prioritaire dans les recommandations IA.', features: ['Visibilité prioritaire', 'Badge premium', 'Analytics avancés'] },
  { title: 'Sponsoring', price: 'À partir de 500€/mois', description: 'Présence garantie dans les résultats et la newsletter.', features: ['Garantie d\'affichage', 'Newsletter dédiée', 'Rapport mensuel'] },
]

export default function BusinessPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      {/* Hero */}
      <div className="section bg-[#1A1A1A] text-[#FAF8F5]">
        <div className="container-tight text-center">
          <div className="text-sm text-[#BEA98C] mb-4 uppercase tracking-wider">Espace B2B</div>
          <h1 className="font-serif text-4xl md:text-5xl mb-4">
            Touchez une audience féminine premium
          </h1>
          <p className="text-[#BEA98C] max-w-xl mx-auto text-lg mb-8">
            Référencez vos produits mode, beauté et lifestyle sur Yayoo Femme et bénéficiez de notre moteur de recommandation IA.
          </p>
          <a href="mailto:business@fmmyy.com" className="btn-accent">
            Nous contacter
          </a>
        </div>
      </div>

      {/* Advantages */}
      <div className="section bg-white">
        <div className="container-wide">
          <h2 className="font-serif text-3xl text-[#1A1A1A] text-center mb-12">Pourquoi Yayoo Femme ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((adv) => (
              <div key={adv.title} className="card p-6 text-center">
                <div className="text-3xl mb-4">{adv.emoji}</div>
                <h3 className="font-semibold text-[#1A1A1A] mb-2">{adv.title}</h3>
                <p className="text-sm text-[#8C7B6B] leading-relaxed">{adv.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Formats */}
      <div className="section bg-[#FAF8F5]">
        <div className="container-wide">
          <h2 className="font-serif text-3xl text-[#1A1A1A] text-center mb-12">Nos formats</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {formats.map((format) => (
              <div key={format.title} className="card p-6">
                <h3 className="font-serif text-xl text-[#1A1A1A] mb-1">{format.title}</h3>
                <div className="font-bold text-[#C9978A] mb-3">{format.price}</div>
                <p className="text-sm text-[#8C7B6B] mb-4">{format.description}</p>
                <ul className="space-y-2">
                  {format.features.map((f) => (
                    <li key={f} className="text-xs text-[#8C7B6B] flex items-center gap-2">
                      <span className="text-green-500">✓</span> {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact */}
      <div className="section bg-white">
        <div className="container-tight text-center">
          <h2 className="font-serif text-3xl text-[#1A1A1A] mb-4">Prêt à démarrer ?</h2>
          <p className="text-[#8C7B6B] mb-8">
            Contactez notre équipe pour discuter de votre projet et obtenir une proposition personnalisée.
          </p>
          <a href="mailto:business@fmmyy.com" className="btn-primary">
            business@fmmyy.com →
          </a>
        </div>
      </div>
    </div>
  )
}
