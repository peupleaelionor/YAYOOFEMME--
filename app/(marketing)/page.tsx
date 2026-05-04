import Link from 'next/link'
import type { Metadata } from 'next'
import { BadgeCheck, BookOpen, Gift, Heart, Lock, Search, ShieldCheck, Shirt, Sparkles, Star, Wand2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Yayoo Femme — YYFMM, assistant shopping féminin intelligent',
  description: "Mode, beauté, parfum et cadeaux : Yayoo Femme recommande des idées adaptées à ton style, ton budget et tes envies.",
}

const modules = [
  { icon: Shirt, title: 'Style Finder', description: 'Trouve ton look idéal selon ton style, ton occasion et ton budget.', href: '/style', accent: 'Mode' },
  { icon: Sparkles, title: 'Beauty Finder', description: 'Ta routine beauté personnalisée selon ta peau et tes préférences.', href: '/beauty', accent: 'Beauté' },
  { icon: Gift, title: 'Gift Finder', description: 'Le cadeau parfait pour chaque femme et chaque occasion.', href: '/gifts', accent: 'Cadeaux' },
  { icon: Wand2, title: 'Perfume Finder', description: 'Ton parfum signature selon ta personnalité, ta peau et tes envies.', href: '/perfume', accent: 'Parfum' },
  { icon: Heart, title: 'Dressing Capsule', description: '30 pièces essentielles pour un dressing cohérent, élégant et facile à porter.', href: '/capsule', accent: 'Capsule' },
]

const guides = [
  { title: 'Le dressing capsule parfait', category: 'Mode', price: '9€' },
  { title: 'Routine beauté naturelle', category: 'Beauté', price: '7€' },
  { title: '50 idées cadeaux pour femme', category: 'Cadeaux', price: 'Gratuit' },
  { title: 'Le guide des parfums signature', category: 'Parfum', price: '9€' },
]

const offers = [
  { name: 'Découverte', price: 'Gratuit', description: 'Finders de base, idées cadeaux et sélection courte.', href: '/style' },
  { name: 'Premium', price: '7€/mois', description: 'Sélections personnalisées, guides, bons plans et wishlist.', href: '/pricing', featured: true },
  { name: 'Experte', price: '19€/mois', description: 'Capsules avancées, recommandations détaillées et préparation looks complets.', href: '/pricing' },
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
            <h1 className="text-balance font-serif text-5xl leading-[0.92] text-[#171717] sm:text-6xl md:text-7xl lg:text-8xl">Ton assistant beauté, mode & cadeaux intelligent</h1>
            <p className="mt-7 max-w-2xl text-lg font-medium leading-relaxed text-[#8B7B70] md:text-xl">Des recommandations personnalisées pour trouver le bon look, la bonne routine, le bon parfum ou le cadeau parfait selon ton style, ton budget et tes envies.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/style" className="btn-primary">Découvrir mon style <Search className="h-4 w-4" /></Link>
              <Link href="/guides" className="btn-secondary">Voir les guides <BookOpen className="h-4 w-4" /></Link>
            </div>
            <div className="mt-8 grid max-w-xl grid-cols-3 gap-3 text-xs font-semibold text-[#594C45]">
              {['Transparent', 'Produits réels', 'Sélection IA'].map((item) => <div key={item} className="rounded-2xl border border-[#EADFD6] bg-white/60 p-3"><BadgeCheck className="mb-2 h-4 w-4 text-[#C98278]" />{item}</div>)}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -right-10 -top-10 h-56 w-56 rounded-full bg-[#E8C6BD]/40 blur-3xl" />
            <div className="relative rounded-[2.5rem] border border-[#EADFD6] bg-white p-6 shadow-card">
              <div className="rounded-[2rem] bg-[#FAF7F3] p-7">
                <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#C98278]">Yayoo Femme</p>
                <h2 className="mt-6 font-serif text-5xl leading-none text-[#171717]">Sélection personnalisée</h2>
                <p className="mt-4 text-[#8B7B70]">Mode, beauté, parfum et cadeaux en une expérience simple et premium.</p>
                <div className="mt-8 grid grid-cols-2 gap-3">
                  {['Style', 'Beauté', 'Parfum', 'Cadeaux'].map((item) => <div key={item} className="rounded-3xl bg-white p-5 text-center font-serif text-2xl shadow-soft">{item}</div>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="decouvrir" className="section bg-white">
        <div className="container-wide">
          <div className="mb-12 text-center"><p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-[#C98278]">Découvrir</p><h2 className="font-serif text-4xl text-[#171717] md:text-5xl">5 expériences pour mieux acheter</h2></div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {modules.map((mod) => { const Icon = mod.icon; return <Link key={mod.href} href={mod.href} className="card-hover group block p-6"><div className="mb-5 flex h-20 w-20 items-center justify-center rounded-[1.5rem] bg-[#FAF7F3]"><Icon className="h-9 w-9 text-[#C98278]" /></div><p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8B7B70]">{mod.accent}</p><h3 className="mt-2 font-serif text-2xl text-[#171717]">{mod.title}</h3><p className="mt-2 text-sm leading-relaxed text-[#8B7B70]">{mod.description}</p><div className="mt-5 text-sm font-bold text-[#C98278]">Commencer →</div></Link> })}
          </div>
        </div>
      </section>

      <section className="section bg-[#FAF7F3]"><div className="container-wide"><div className="mb-12 text-center"><h2 className="font-serif text-4xl text-[#171717] md:text-5xl">Comment ça marche ?</h2></div><div className="grid gap-5 md:grid-cols-3">{[['01','Réponds aux questions','Un quiz rapide pour comprendre ton style, tes besoins et ton budget.'],['02','L’IA analyse ton profil','L’algorithme croise tes réponses avec le catalogue, les offres et les règles de transparence.'],['03','Reçois ta sélection','Une sélection personnalisée avec des explications claires pour chaque produit.']].map(([step,title,text]) => <div key={step} className="card p-7 text-center"><div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-[#EADFD6] bg-[#FAF7F3] text-sm font-black text-[#C98278]">{step}</div><h3 className="font-serif text-2xl text-[#171717]">{title}</h3><p className="mt-3 text-sm leading-relaxed text-[#8B7B70]">{text}</p></div>)}</div></div></section>

      <section className="section bg-white"><div className="container-wide grid items-center gap-10 md:grid-cols-[0.9fr_1.1fr]"><div><p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-[#C98278]">Guides & ebooks</p><h2 className="font-serif text-4xl text-[#171717] md:text-6xl">Guides & Ebooks premium</h2><p className="mt-5 max-w-xl text-lg font-medium leading-relaxed text-[#8B7B70]">Des contenus utiles pour t’aider à mieux choisir, mieux acheter et construire ton style.</p><div className="mt-8 flex flex-col gap-3 sm:flex-row"><Link href="/guides" className="btn-primary">Tous les guides</Link><Link href="/pricing" className="btn-secondary">Voir les offres</Link></div></div><div className="grid gap-3 sm:grid-cols-2">{guides.map((guide) => <Link key={guide.title} href="/guides" className="card p-5"><div className="text-xs font-bold uppercase tracking-[0.2em] text-[#8B7B70]">{guide.category}</div><h3 className="mt-2 font-serif text-2xl text-[#171717]">{guide.title}</h3><div className="mt-6 flex items-center justify-between text-sm font-black"><span>{guide.price}</span><span className="text-[#C98278]">Voir →</span></div></Link>)}</div></div></section>

      <section id="offres" className="section bg-[#171717] text-white"><div className="container-wide"><div className="mb-12 text-center"><p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-[#E8C6BD]">Offres</p><h2 className="font-serif text-4xl md:text-5xl">Prêt pour la phase pub</h2></div><div className="grid gap-5 md:grid-cols-3">{offers.map((offer) => <div key={offer.name} className={`rounded-[2rem] border p-7 ${offer.featured ? 'border-[#C98278] bg-white text-[#171717]' : 'border-white/15 bg-white/5 text-white'}`}>{offer.featured && <span className="label-sponsored mb-4">Recommandé</span>}<h3 className="font-serif text-3xl">{offer.name}</h3><div className="mt-3 text-3xl font-black">{offer.price}</div><p className={`mt-3 text-sm leading-relaxed ${offer.featured ? 'text-[#8B7B70]' : 'text-[#D6C4B8]'}`}>{offer.description}</p><Link href={offer.href} className={offer.featured ? 'btn-accent mt-7 w-full' : 'mt-7 inline-flex w-full items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10'}>Choisir</Link></div>)}</div></div></section>

      <section className="section bg-white"><div className="container-wide grid gap-10 md:grid-cols-[1fr_0.9fr]"><div><p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-[#C98278]">Liens & API</p><h2 className="font-serif text-4xl text-[#171717] md:text-5xl">Prêt pour affiliation, pixels et catalogue</h2><p className="mt-5 text-lg font-medium leading-relaxed text-[#8B7B70]">La structure est prête pour brancher les liens partenaires, les clés API et les pixels publicitaires sans exposer les secrets côté client.</p></div><div className="grid gap-4">{[['Liens affiliés','Chaque produit peut porter un label affilié clair et un lien tracké.'],['Contenu sponsorisé','Les placements payants sont séparés et indiqués proprement.'],['IA transparente','Les recommandations doivent venir du catalogue réel, pas de produits inventés.']].map(([title,text]) => <div key={title} className="card p-6"><Lock className="mb-3 h-5 w-5 text-[#C98278]" /><h3 className="font-serif text-2xl text-[#171717]">{title}</h3><p className="mt-2 text-sm leading-relaxed text-[#8B7B70]">{text}</p></div>)}</div></div></section>

      <section className="section bg-[#FAF7F3]"><div className="container-tight text-center"><div className="mx-auto mb-6 flex w-max items-center gap-1 rounded-full border border-[#EADFD6] bg-white px-4 py-2 text-[#C98278]">{Array.from({ length: 5 }).map((_, index) => <Star key={index} className="h-4 w-4 fill-current" />)}</div><h2 className="font-serif text-4xl text-[#171717] md:text-6xl">Prête à lancer les pubs ?</h2><p className="mx-auto mt-5 max-w-2xl text-lg font-medium leading-relaxed text-[#8B7B70]">Yayoo Femme est maintenant positionné comme une expérience féminine premium : claire, utile, désirable et transparente.</p><Link href="/style" className="btn-primary mt-8">Commencer maintenant</Link></div></section>
    </>
  )
}
