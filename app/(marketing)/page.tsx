import Link from 'next/link'
import type { Metadata } from 'next'
import { BadgeCheck, BookOpen, Gift, Heart, Lock, Search, ShieldCheck, Shirt, Sparkles, Star, Wand2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Yayoo Femme — YYFMM, assistant shopping féminin intelligent',
  description: "Mode, beauté, parfum et cadeaux : Yayoo Femme recommande des idées adaptées à ton style, ton budget et tes envies.",
}

const modules = [
  {
    icon: Shirt,
    title: 'Style Finder',
    description: 'Trouve ton look idéal selon ton style, ton occasion et ton budget.',
    href: '/style',
    image: '/brand/yyfmm-style.svg',
  },
  {
    icon: Sparkles,
    title: 'Beauty Finder',
    description: 'Ta routine beauté personnalisée selon ta peau et tes préférences.',
    href: '/beauty',
    image: '/brand/yyfmm-beauty.svg',
  },
  {
    icon: Gift,
    title: 'Gift Finder',
    description: 'Le cadeau parfait pour chaque femme et chaque occasion.',
    href: '/gifts',
    image: '/brand/yyfmm-gift.svg',
  },
  {
    icon: Wand2,
    title: 'Perfume Finder',
    description: 'Ton parfum signature selon ta personnalité, ta peau et tes envies.',
    href: '/perfume',
    image: '/brand/yyfmm-perfume.svg',
  },
  {
    icon: Heart,
    title: 'Dressing Capsule',
    description: '30 pièces essentielles pour un dressing cohérent, élégant et facile à porter.',
    href: '/capsule',
    image: '/brand/yyfmm-capsule.svg',
  },
]

const guides = [
  { title: 'Le dressing capsule parfait', category: 'Mode', price: '9€', href: '/guides' },
  { title: 'Routine beauté naturelle', category: 'Beauté', price: '7€', href: '/guides' },
  { title: '50 idées cadeaux pour femme', category: 'Cadeaux', price: 'Gratuit', href: '/guides' },
  { title: 'Le guide des parfums signature', category: 'Parfum', price: '9€', href: '/guides' },
]

const offers = [
  {
    name: 'Découverte',
    price: 'Gratuit',
    description: 'Pour tester les finders et récupérer des idées rapides.',
    features: ['Finders de base', 'Idées cadeaux', 'Sélection courte', 'Liens affiliés signalés'],
    cta: 'Commencer',
    href: '/style',
  },
  {
    name: 'Premium',
    price: '7€/mois',
    description: 'Le meilleur choix pour préparer la phase shopping réelle.',
    features: ['Sélections personnalisées', 'Guides inclus', 'Alertes bons plans', 'Wishlist sauvegardée'],
    cta: 'Choisir Premium',
    href: '/pricing',
    featured: true,
  },
  {
    name: 'Experte',
    price: '19€/mois',
    description: 'Pour une expérience plus avancée, style + beauté + cadeaux.',
    features: ['Capsules avancées', 'Recommandations détaillées', 'Priorité nouveautés', 'Préparation looks complets'],
    cta: 'Voir Experte',
    href: '/pricing',
  },
]

const affiliatePartners = [
  'Mode',
  'Beauté',
  'Parfum',
  'Bijoux',
  'Cadeaux',
  'Maison',
]

export default function HomePage() {
  return (
    <>
      <section className="gradient-soft overflow-hidden border-b border-[#EADFD6]">
        <div className="container-wide grid min-h-[calc(100vh-72px)] items-center gap-10 py-14 md:grid-cols-[1.02fr_0.98fr] md:py-20">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#E8C6BD] bg-white/70 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-[#A7645D] shadow-sm">
              <Sparkles className="h-4 w-4" /> YYFMM — assistant shopping féminin
            </div>
            <h1 className="text-balance font-serif text-5xl leading-[0.92] text-[#171717] sm:text-6xl md:text-7xl lg:text-8xl">
              Ton assistant beauté, mode & cadeaux intelligent
            </h1>
            <p className="mt-7 max-w-2xl text-lg font-medium leading-relaxed text-[#8B7B70] md:text-xl">
              Des recommandations personnalisées pour trouver le bon look, la bonne routine, le bon parfum ou le cadeau parfait selon ton style, ton budget et tes envies.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/style" className="btn-primary">Découvrir mon style <Search className="h-4 w-4" /></Link>
              <Link href="/guides" className="btn-secondary">Voir les guides <BookOpen className="h-4 w-4" /></Link>
            </div>
            <div className="mt-8 grid max-w-xl grid-cols-3 gap-3 text-xs font-semibold text-[#594C45]">
              {['Recommandations transparentes', 'Produits réels', 'Sélection intelligente'].map((item) => (
                <div key={item} className="rounded-2xl border border-[#EADFD6] bg-white/60 p-3">
                  <BadgeCheck className="mb-2 h-4 w-4 text-[#C98278]" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -right-10 -top-10 h-56 w-56 rounded-full bg-[#E8C6BD]/40 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2.5rem] border border-[#EADFD6] bg-white shadow-card">
              <img src="/brand/yyfmm-hero.svg" alt="Yayoo Femme YYFMM — expérience shopping féminin" className="h-auto w-full" />
            </div>
            <div className="absolute -bottom-7 left-4 right-4 rounded-[2rem] border border-[#EADFD6] bg-white/95 p-4 shadow-card backdrop-blur md:left-8 md:right-8">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-sm font-bold text-[#171717]">Sélection personnalisée</span>
                <span className="label-affiliate">Liens clairs</span>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {['Style', 'Beauté', 'Cadeaux'].map((item) => (
                  <div key={item} className="rounded-2xl bg-[#FAF7F3] p-3 text-center text-xs font-semibold text-[#594C45]">{item}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="decouvrir" className="section bg-white">
        <div className="container-wide">
          <div className="mb-12 text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-[#C98278]">Découvrir</p>
            <h2 className="font-serif text-4xl text-[#171717] md:text-5xl">5 expériences pour mieux acheter</h2>
            <p className="mx-auto mt-4 max-w-2xl text-[#8B7B70]">Chaque finder doit guider l’utilisatrice vers une décision simple, désirable et monétisable.</p>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {modules.map((mod) => {
              const Icon = mod.icon
              return (
                <Link key={mod.href} href={mod.href} className="card-hover group block p-5">
                  <div className="mb-5 overflow-hidden rounded-[1.5rem] border border-[#EADFD6] bg-[#FAF7F3]">
                    <img src={mod.image} alt={`${mod.title} Yayoo Femme`} className="h-auto w-full transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <Icon className="mb-3 h-5 w-5 text-[#C98278]" />
                  <h3 className="font-serif text-2xl text-[#171717]">{mod.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#8B7B70]">{mod.description}</p>
                  <div className="mt-5 text-sm font-bold text-[#C98278]">Commencer →</div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section bg-[#FAF7F3]">
        <div className="container-wide">
          <div className="mb-12 text-center">
            <h2 className="font-serif text-4xl text-[#171717] md:text-5xl">Comment ça marche ?</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {[
              ['01', 'Réponds aux questions', 'Un quiz rapide pour comprendre ton style, tes besoins et ton budget.'],
              ['02', 'L’IA analyse ton profil', 'L’algorithme croise tes réponses avec le catalogue, les offres et les règles de transparence.'],
              ['03', 'Reçois ta sélection', 'Une sélection personnalisée avec des explications claires pour chaque produit.'],
            ].map(([step, title, text]) => (
              <div key={step} className="card p-7 text-center">
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-[#EADFD6] bg-[#FAF7F3] text-sm font-black text-[#C98278]">{step}</div>
                <h3 className="font-serif text-2xl text-[#171717]">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#8B7B70]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-wide grid items-center gap-10 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-[#C98278]">Guides & ebooks</p>
            <h2 className="font-serif text-4xl text-[#171717] md:text-6xl">Guides & Ebooks premium</h2>
            <p className="mt-5 max-w-xl text-lg font-medium leading-relaxed text-[#8B7B70]">Des contenus utiles pour t’aider à mieux choisir, mieux acheter et construire ton style.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/guides" className="btn-primary">Tous les guides</Link>
              <Link href="/pricing" className="btn-secondary">Voir les offres</Link>
            </div>
          </div>
          <div className="card p-5">
            <img src="/brand/yyfmm-guides.svg" alt="Guides et ebooks premium Yayoo Femme" className="w-full rounded-[1.5rem]" />
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {guides.map((guide) => (
                <Link key={guide.title} href={guide.href} className="rounded-3xl border border-[#EADFD6] bg-[#FAF7F3] p-4 transition-colors hover:bg-white">
                  <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#8B7B70]">{guide.category}</div>
                  <h3 className="mt-2 font-serif text-xl text-[#171717]">{guide.title}</h3>
                  <div className="mt-4 flex items-center justify-between text-sm font-black"><span>{guide.price}</span><span className="text-[#C98278]">Voir →</span></div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="offres" className="section bg-[#171717] text-white">
        <div className="container-wide">
          <div className="mb-12 text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-[#E8C6BD]">Offres</p>
            <h2 className="font-serif text-4xl md:text-5xl">Monétisation prête pour la pub</h2>
            <p className="mx-auto mt-4 max-w-2xl text-[#D6C4B8]">Gratuit pour attirer, Premium pour convertir, Experte pour augmenter la valeur client.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {offers.map((offer) => (
              <div key={offer.name} className={`rounded-[2rem] border p-7 ${offer.featured ? 'border-[#C98278] bg-white text-[#171717]' : 'border-white/15 bg-white/5 text-white'}`}>
                {offer.featured && <span className="label-sponsored mb-4">Recommandé</span>}
                <h3 className="font-serif text-3xl">{offer.name}</h3>
                <div className="mt-3 text-3xl font-black">{offer.price}</div>
                <p className={`mt-3 text-sm leading-relaxed ${offer.featured ? 'text-[#8B7B70]' : 'text-[#D6C4B8]'}`}>{offer.description}</p>
                <ul className="mt-6 space-y-3 text-sm">
                  {offer.features.map((feature) => (
                    <li key={feature} className="flex gap-2"><ShieldCheck className="h-4 w-4 shrink-0 text-[#C98278]" /> {feature}</li>
                  ))}
                </ul>
                <Link href={offer.href} className={offer.featured ? 'btn-accent mt-7 w-full' : 'mt-7 inline-flex w-full items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10'}>{offer.cta}</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-wide grid gap-10 md:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-[#C98278]">Liens & API</p>
            <h2 className="font-serif text-4xl text-[#171717] md:text-5xl">Prêt pour affiliation, pixels et catalogue</h2>
            <p className="mt-5 text-lg font-medium leading-relaxed text-[#8B7B70]">La structure est prête pour brancher les liens partenaires, les clés API et les pixels publicitaires sans exposer les secrets côté client.</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {affiliatePartners.map((item) => <span key={item} className="label-affiliate">{item}</span>)}
            </div>
          </div>
          <div className="grid gap-4">
            {[
              ['Liens affiliés', 'Chaque produit peut porter un label affilié clair et un lien tracké.'],
              ['Contenu sponsorisé', 'Les placements payants sont séparés et indiqués proprement.'],
              ['IA transparente', 'Les recommandations doivent venir du catalogue réel, pas de produits inventés.'],
            ].map(([title, text]) => (
              <div key={title} className="card p-6">
                <Lock className="mb-3 h-5 w-5 text-[#C98278]" />
                <h3 className="font-serif text-2xl text-[#171717]">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#8B7B70]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-[#FAF7F3]">
        <div className="container-tight text-center">
          <div className="mx-auto mb-6 flex w-max items-center gap-1 rounded-full border border-[#EADFD6] bg-white px-4 py-2 text-[#C98278]">
            {Array.from({ length: 5 }).map((_, index) => <Star key={index} className="h-4 w-4 fill-current" />)}
          </div>
          <h2 className="font-serif text-4xl text-[#171717] md:text-6xl">Prête à lancer les pubs ?</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg font-medium leading-relaxed text-[#8B7B70]">Yayoo Femme est maintenant positionné comme une expérience féminine premium : claire, utile, désirable et transparente.</p>
          <Link href="/style" className="btn-primary mt-8">Commencer maintenant</Link>
        </div>
      </section>
    </>
  )
}
