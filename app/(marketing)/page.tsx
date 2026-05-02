import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Yayoo Femme - Assistant d'achat féminin intelligent",
  description: "Trouve ce qui te correspond vraiment. Mode, beauté, parfum, cadeaux selon ton style, ton budget et ton moment de vie.",
}

const modules = [
  {
    icon: '👗',
    title: 'Style Finder',
    description: 'Trouve ton look parfait selon ton style, occasion et budget.',
    href: '/style',
    color: 'bg-[#F2E8E4]',
  },
  {
    icon: '✨',
    title: 'Beauty Finder',
    description: 'Ta routine beauté idéale selon ta peau et tes préférences.',
    href: '/beauty',
    color: 'bg-[#EDE4D6]',
  },
  {
    icon: '🎁',
    title: 'Gift Finder',
    description: 'Le cadeau parfait pour chaque femme et chaque occasion.',
    href: '/gifts',
    color: 'bg-[#F5F0E8]',
  },
  {
    icon: '🌹',
    title: 'Perfume Finder',
    description: 'Ton parfum signature selon ta personnalité et tes envies.',
    href: '/perfume',
    color: 'bg-[#F2E8E4]',
  },
]

const howItWorks = [
  {
    step: '01',
    title: 'Réponds aux questions',
    description: 'Un quiz rapide (2 min) pour comprendre ton style, tes besoins et ton budget.',
  },
  {
    step: '02',
    title: "L'IA analyse ton profil",
    description: 'Notre algorithme croise tes réponses avec notre catalogue de milliers de produits.',
  },
  {
    step: '03',
    title: 'Reçois ta sélection',
    description: 'Une sélection personnalisée avec des explications claires pour chaque produit.',
  },
]

const faqs = [
  {
    q: "Les recommandations sont-elles vraiment personnalisées ?",
    a: "Oui. Notre IA analyse chaque réponse de ton quiz pour ne sélectionner que les produits qui correspondent à ton profil exact – style, budget, occasion, saison.",
  },
  {
    q: "Yayoo Femme est-il gratuit ?",
    a: "Les recommandations de base sont gratuites. Pour accéder aux sélections complètes et aux fonctionnalités premium, des offres à partir de 3,90€ sont disponibles.",
  },
  {
    q: "Y a-t-il des liens affiliés sur le site ?",
    a: "Certains liens sont des liens affiliés. Si tu achètes via ces liens, nous touchons une petite commission, sans coût supplémentaire pour toi. Cela nous permet de continuer à améliorer la plateforme.",
  },
  {
    q: "Comment puis-je sauvegarder mes recommandations ?",
    a: "En créant un compte (gratuit), tu peux sauvegarder tes sélections, créer une wishlist et recevoir de nouvelles recommandations selon l'évolution de tes goûts.",
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="section gradient-soft">
        <div className="container-tight text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#F2E8E4] rounded-full text-sm text-[#A67060] mb-8">
            <span>✨</span>
            <span>L&apos;assistante shopping 100% féminine</span>
          </div>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-[#1A1A1A] mb-6 text-balance">
            Shopping intelligent,{' '}
            <span className="text-[#C9978A]">fait pour toi</span>
          </h1>
          <p className="text-lg md:text-xl text-[#8C7B6B] mb-10 max-w-2xl mx-auto leading-relaxed">
            Mode, beauté, parfum, cadeaux. Notre IA te recommande exactement ce qui te correspond selon ton style, ton budget et ton moment de vie.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/style" className="btn-primary">
              Trouver mon style →
            </Link>
            <Link href="/beauty" className="btn-secondary">
              Ma routine beauté
            </Link>
          </div>
          <p className="mt-6 text-sm text-[#8C7B6B]">
            Gratuit · Aucune inscription requise · 2 minutes
          </p>
        </div>
      </section>

      {/* Modules */}
      <section className="section bg-white">
        <div className="container-wide">
          <div className="text-center mb-14">
            <h2 className="font-serif text-3xl md:text-4xl text-[#1A1A1A] mb-4">
              4 assistantes pour chaque besoin
            </h2>
            <p className="text-[#8C7B6B] max-w-xl mx-auto">
              Chaque outil est conçu pour t&apos;aider à trouver exactement ce dont tu as besoin.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {modules.map((mod) => (
              <Link key={mod.href} href={mod.href} className="card-hover p-8 text-center group block">
                <div className={`w-16 h-16 ${mod.color} rounded-2xl flex items-center justify-center text-3xl mx-auto mb-5 transition-transform duration-300 group-hover:scale-110`}>
                  {mod.icon}
                </div>
                <h3 className="font-serif text-xl text-[#1A1A1A] mb-2">{mod.title}</h3>
                <p className="text-sm text-[#8C7B6B] leading-relaxed">{mod.description}</p>
                <div className="mt-5 text-sm font-medium text-[#C9978A] group-hover:text-[#A67060] transition-colors">
                  Commencer →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section bg-[#FAF8F5]">
        <div className="container-tight">
          <div className="text-center mb-14">
            <h2 className="font-serif text-3xl md:text-4xl text-[#1A1A1A] mb-4">
              Comment ça marche ?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howItWorks.map((item) => (
              <div key={item.step} className="text-center">
                <div className="font-serif text-5xl text-[#EDE4D6] mb-4">{item.step}</div>
                <h3 className="font-semibold text-[#1A1A1A] mb-2">{item.title}</h3>
                <p className="text-sm text-[#8C7B6B] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deals teaser */}
      <section className="section bg-white">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 p-8 md:p-12 rounded-3xl gradient-warm">
            <div>
              <div className="text-sm font-medium text-[#A67060] mb-2">Nouveau chaque semaine</div>
              <h2 className="font-serif text-3xl text-[#1A1A1A] mb-3">
                Les meilleurs bons plans
              </h2>
              <p className="text-[#8C7B6B]">
                Promotions, codes promo exclusifs et offres triées sur le volet — sans spam.
              </p>
            </div>
            <Link href="/deals" className="btn-accent whitespace-nowrap">
              Voir les bons plans
            </Link>
          </div>
        </div>
      </section>

      {/* Guides */}
      <section className="section bg-[#FAF8F5]">
        <div className="container-wide">
          <div className="text-center mb-14">
            <h2 className="font-serif text-3xl md:text-4xl text-[#1A1A1A] mb-4">
              Guides & Ebooks premium
            </h2>
            <p className="text-[#8C7B6B] max-w-xl mx-auto">
              Des guides créés par des expertes mode et beauté pour approfondir ton style.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { title: 'Le dressing capsule parfait', category: 'Mode', price: '9€', emoji: '👗' },
              { title: 'Routine anti-âge naturelle', category: 'Beauté', price: '7€', emoji: '✨' },
              { title: '50 idées cadeaux pour femme', category: 'Cadeaux', price: 'Gratuit', emoji: '🎁' },
            ].map((guide) => (
              <div key={guide.title} className="card p-6">
                <div className="text-3xl mb-4">{guide.emoji}</div>
                <div className="text-xs text-[#8C7B6B] uppercase tracking-wider mb-2">{guide.category}</div>
                <h3 className="font-serif text-lg text-[#1A1A1A] mb-4">{guide.title}</h3>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-[#1A1A1A]">{guide.price}</span>
                  <Link href="/guides" className="text-sm text-[#C9978A] hover:text-[#A67060]">
                    Voir →
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/guides" className="btn-secondary">
              Tous les guides
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing teaser */}
      <section className="section bg-[#1A1A1A] text-[#FAF8F5]">
        <div className="container-tight text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-4">
            Passe au niveau supérieur
          </h2>
          <p className="text-[#BEA98C] mb-8 max-w-xl mx-auto">
            Accède aux sélections complètes, sauvegarde ta wishlist et reçois des recommandations illimitées.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/pricing" className="btn-accent">
              Voir les offres à partir de 3,90€
            </Link>
            <Link href="/account" className="inline-flex items-center justify-center px-6 py-3 border border-[#FAF8F5]/30 text-[#FAF8F5] rounded-full text-sm font-medium hover:bg-white/10 transition-colors">
              Créer un compte gratuit
            </Link>
          </div>
        </div>
      </section>

      {/* Transparency */}
      <section className="section bg-white">
        <div className="container-tight">
          <div className="text-center mb-10">
            <h2 className="font-serif text-2xl text-[#1A1A1A] mb-3">Notre engagement transparence</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {[
              { emoji: '🔗', title: 'Liens affiliés', text: 'Certains liens sont affiliés. Nous le signalons toujours clairement sur chaque produit.' },
              { emoji: '🏷️', title: 'Contenu sponsorisé', text: "Les produits sponsorisés sont toujours clairement indiqués avec le label 'Sponsorisé'." },
              { emoji: '🤖', title: 'IA transparente', text: "Notre IA ne recommande que des produits réels de notre catalogue. Aucune invention." },
            ].map((item) => (
              <div key={item.title} className="p-6 rounded-3xl bg-[#FAF8F5]">
                <div className="text-3xl mb-3">{item.emoji}</div>
                <h3 className="font-semibold text-[#1A1A1A] mb-2">{item.title}</h3>
                <p className="text-sm text-[#8C7B6B] leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-[#FAF8F5]">
        <div className="container-tight">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl text-[#1A1A1A] mb-3">Questions fréquentes</h2>
          </div>
          <div className="space-y-4 max-w-2xl mx-auto">
            {faqs.map((faq) => (
              <div key={faq.q} className="card p-6">
                <h3 className="font-semibold text-[#1A1A1A] mb-3">{faq.q}</h3>
                <p className="text-sm text-[#8C7B6B] leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section bg-white">
        <div className="container-tight text-center">
          <h2 className="font-serif text-3xl md:text-5xl text-[#1A1A1A] mb-6">
            Prête à trouver ce qui te correspond vraiment ?
          </h2>
          <Link href="/style" className="btn-primary text-base px-8 py-4">
            Commencer maintenant — c&apos;est gratuit
          </Link>
        </div>
      </section>
    </>
  )
}
