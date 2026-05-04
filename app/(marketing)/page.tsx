import Link from 'next/link'
import type { Metadata } from 'next'
import { BadgeCheck, BookOpen, Gift, Heart, Lock, Search, ShieldCheck, Shirt, Sparkles, Star, Wand2, Crown, Gem } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Yayoo Femme — YYFMM, assistant shopping féminin intelligent',
  description: "Mode, beauté, parfum et cadeaux : Yayoo Femme recommande des idées adaptées à ton style, ton budget et tes envies.",
}

type VisualType = 'style' | 'beauty' | 'gift' | 'perfume' | 'capsule'

const modules: { icon: typeof Shirt; title: string; description: string; href: string; accent: string; visual: VisualType }[] = [
  { icon: Shirt, title: 'Style Finder', description: 'Trouve ton look idéal selon ton style, ton occasion et ton budget.', href: '/style', accent: 'Mode', visual: 'style' },
  { icon: Sparkles, title: 'Beauty Finder', description: 'Ta routine beauté personnalisée selon ta peau et tes préférences.', href: '/beauty', accent: 'Beauté', visual: 'beauty' },
  { icon: Gift, title: 'Gift Finder', description: 'Le cadeau parfait pour chaque femme et chaque occasion.', href: '/gifts', accent: 'Cadeaux', visual: 'gift' },
  { icon: Wand2, title: 'Perfume Finder', description: 'Ton parfum signature selon ta personnalité, ta peau et tes envies.', href: '/perfume', accent: 'Parfum', visual: 'perfume' },
  { icon: Heart, title: 'Dressing Capsule', description: '30 pièces essentielles pour un dressing cohérent, élégant et facile à porter.', href: '/capsule', accent: 'Capsule', visual: 'capsule' },
]

const guides = [
  { title: 'Le dressing capsule parfait', category: 'Mode', price: '9€', visual: 'capsule' as VisualType },
  { title: 'Routine beauté naturelle', category: 'Beauté', price: '7€', visual: 'beauty' as VisualType },
  { title: '50 idées cadeaux pour femme', category: 'Cadeaux', price: 'Gratuit', visual: 'gift' as VisualType },
  { title: 'Le guide des parfums signature', category: 'Parfum', price: '9€', visual: 'perfume' as VisualType },
]

const offers = [
  { name: 'Découverte', price: 'Gratuit', description: 'Finders de base, idées cadeaux et sélection courte.', href: '/style' },
  { name: 'Premium', price: '7€/mois', description: 'Sélections personnalisées, guides, bons plans et wishlist.', href: '/pricing', featured: true },
  { name: 'Experte', price: '19€/mois', description: 'Capsules avancées, recommandations détaillées et préparation looks complets.', href: '/pricing' },
]

function ProductVisual({ type, label }: { type: VisualType; label: string }) {
  return (
    <div className="relative h-56 overflow-hidden rounded-[2rem] border border-[#EADFD6] bg-[radial-gradient(circle_at_70%_20%,#F6E8E4,transparent_34%),linear-gradient(135deg,#FFFDFC,#FAF7F3)] shadow-soft">
      <div className="absolute left-4 top-4 z-10 rounded-full border border-[#E8C6BD] bg-white/80 px-3 py-1 text-[10px] font-black uppercase tracking-[0.22em] text-[#A7645D] backdrop-blur">{label}</div>
      {type === 'style' && <><div className="absolute bottom-7 left-1/2 h-28 w-28 -translate-x-1/2 rounded-t-[3rem] bg-[#D7B8A5] shadow-card"/><div className="absolute bottom-7 left-[29%] h-32 w-12 -rotate-6 rounded-t-full bg-[#E6D3C4]"/><div className="absolute bottom-7 right-[29%] h-32 w-12 rotate-6 rounded-t-full bg-[#E6D3C4]"/><div className="absolute bottom-10 left-1/2 h-22 w-12 -translate-x-1/2 rounded-t-full bg-white"/></>}
      {type === 'beauty' && <><div className="absolute bottom-8 left-1/2 h-30 w-20 -translate-x-1/2 rounded-3xl border border-[#E8C6BD] bg-white shadow-card"/><div className="absolute bottom-[9.2rem] left-1/2 h-10 w-10 -translate-x-1/2 rounded-t-xl bg-[#D8B586]"/><div className="absolute bottom-20 left-1/2 h-12 w-12 -translate-x-1/2 rounded-full bg-[#F6E8E4]"/><div className="absolute bottom-26 left-8 h-8 w-8 rounded-full bg-white/70"/></>}
      {type === 'gift' && <><div className="absolute bottom-10 left-1/2 h-24 w-28 -translate-x-1/2 rounded-3xl bg-[#E8C6BD] shadow-card"/><div className="absolute bottom-10 left-1/2 h-24 w-5 -translate-x-1/2 bg-[#C98278]"/><div className="absolute bottom-[8.4rem] left-1/2 h-5 w-32 -translate-x-1/2 rounded-full bg-[#C98278]"/><div className="absolute bottom-36 left-[34%] h-10 w-16 -rotate-12 rounded-full border-[10px] border-[#C98278]"/><div className="absolute bottom-36 right-[34%] h-10 w-16 rotate-12 rounded-full border-[10px] border-[#C98278]"/></>}
      {type === 'perfume' && <><div className="absolute bottom-9 left-1/2 h-28 w-24 -translate-x-1/2 rounded-[2rem] border border-[#C98278] bg-[#F6E8E4] shadow-card"/><div className="absolute bottom-[8.8rem] left-1/2 h-8 w-14 -translate-x-1/2 rounded-t-xl bg-[#D8B586]"/><div className="absolute bottom-[10.7rem] left-1/2 h-7 w-8 -translate-x-1/2 rounded-t-lg bg-[#171717]"/><div className="absolute bottom-20 left-1/2 h-12 w-14 -translate-x-1/2 rounded-full bg-white/50"/></>}
      {type === 'capsule' && <><div className="absolute bottom-12 left-9 right-9 h-28 rounded-[2rem] border border-[#D8B586] bg-white/70 shadow-soft"/><div className="absolute bottom-18 left-[24%] h-20 w-2 bg-[#CDB49F]"/><div className="absolute bottom-18 left-[34%] h-20 w-2 bg-[#CDB49F]"/><div className="absolute bottom-18 left-[44%] h-20 w-2 bg-[#CDB49F]"/><div className="absolute bottom-25 left-[18%] h-2 w-[58%] bg-[#A98F7B]"/><div className="absolute bottom-18 right-[20%] h-16 w-12 rounded-t-full bg-[#E6D3C4]"/></>}
      <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/78 p-3 text-center text-xs font-bold text-[#594C45] backdrop-blur">Sélection premium</div>
    </div>
  )
}

function EditorialHero() {
  return (
    <div className="relative">
      <div className="absolute -right-10 -top-10 h-56 w-56 rounded-full bg-[#E8C6BD]/50 blur-3xl" />
      <div className="relative overflow-hidden rounded-[2.5rem] border border-[#EADFD6] bg-white p-5 shadow-card">
        <div className="relative min-h-[560px] rounded-[2rem] bg-[linear-gradient(135deg,#FFFDFC_0%,#FAF7F3_50%,#F6E8E4_100%)] p-7">
          <div className="absolute right-7 top-8 h-76 w-52 rounded-[8rem_8rem_3rem_3rem] bg-[#D7B8A5] shadow-card" />
          <div className="absolute right-18 top-17 h-26 w-26 rounded-full bg-[#B9826E]" />
          <div className="absolute right-20 top-9 h-24 w-32 -rotate-12 rounded-full bg-[#171717]/85" />
          <div className="absolute right-12 top-46 h-56 w-40 rotate-3 rounded-[4rem_4rem_2rem_2rem] bg-[#EEE1D7]" />
          <div className="absolute right-48 top-54 h-42 w-18 -rotate-12 rounded-full bg-[#EEE1D7]" />
          <div className="relative z-10 max-w-xs">
            <p className="text-xs font-black uppercase tracking-[0.35em] text-[#C98278]">Yayoo Femme</p>
            <h2 className="mt-5 font-serif text-5xl leading-none text-[#171717]">Une expérience qui donne envie d’acheter</h2>
            <p className="mt-4 text-sm font-semibold leading-relaxed text-[#8B7B70]">Visuels éditoriaux, guides premium, recommandations lisibles et confiance immédiate.</p>
          </div>
          <div className="absolute bottom-8 left-7 right-7 rounded-[2rem] border border-[#EADFD6] bg-white/92 p-5 backdrop-blur">
            <div className="mb-4 flex items-center justify-between"><span className="text-xs font-black uppercase tracking-[0.24em] text-[#C98278]">Sélection du jour</span><span className="label-affiliate">liens clairs</span></div>
            <div className="grid grid-cols-3 gap-3">
              <ProductVisual type="style" label="Style" />
              <ProductVisual type="beauty" label="Beauty" />
              <ProductVisual type="gift" label="Gift" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function HomePage() {
  return (
    <>
      <section className="gradient-soft overflow-hidden border-b border-[#EADFD6]">
        <div className="container-wide grid min-h-[calc(100vh-72px)] items-center gap-10 py-14 md:grid-cols-[0.95fr_1.05fr] md:py-20">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#E8C6BD] bg-white/70 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-[#A7645D] shadow-sm"><Sparkles className="h-4 w-4" /> YYFMM — assistant shopping féminin</div>
            <h1 className="text-balance font-serif text-5xl leading-[0.92] text-[#171717] sm:text-6xl md:text-7xl lg:text-8xl">La sélection mode, beauté & cadeaux qui semble pensée pour toi</h1>
            <p className="mt-7 max-w-2xl text-lg font-medium leading-relaxed text-[#8B7B70] md:text-xl">Yayoo Femme transforme tes envies en recommandations claires : looks, routine beauté, parfum signature, guides premium et idées cadeaux prêtes à acheter.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row"><Link href="/style" className="btn-primary">Découvrir mon style <Search className="h-4 w-4" /></Link><Link href="/guides" className="btn-secondary">Voir les guides <BookOpen className="h-4 w-4" /></Link></div>
            <div className="mt-8 grid max-w-xl grid-cols-3 gap-3 text-xs font-semibold text-[#594C45]">{['Visuels premium', 'Produits réels', 'Liens clairs'].map((item) => <div key={item} className="rounded-2xl border border-[#EADFD6] bg-white/60 p-3"><BadgeCheck className="mb-2 h-4 w-4 text-[#C98278]" />{item}</div>)}</div>
          </div>
          <EditorialHero />
        </div>
      </section>

      <section id="decouvrir" className="section bg-white"><div className="container-wide"><div className="mb-12 text-center"><p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-[#C98278]">Découvrir</p><h2 className="font-serif text-4xl text-[#171717] md:text-5xl">Un univers visuel par besoin</h2><p className="mx-auto mt-4 max-w-2xl text-[#8B7B70]">Chaque module devient une porte d’entrée publicitaire : identifiable, désirable, simple à comprendre.</p></div><div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">{modules.map((mod) => { const Icon = mod.icon; return <Link key={mod.href} href={mod.href} className="card-hover group block p-4"><ProductVisual type={mod.visual} label={mod.accent} /><div className="p-3"><Icon className="mb-3 h-5 w-5 text-[#C98278]" /><h3 className="font-serif text-2xl text-[#171717]">{mod.title}</h3><p className="mt-2 text-sm leading-relaxed text-[#8B7B70]">{mod.description}</p><div className="mt-5 text-sm font-bold text-[#C98278]">Commencer →</div></div></Link> })}</div></div></section>

      <section className="section bg-[#FAF7F3]"><div className="container-wide"><div className="grid items-center gap-10 md:grid-cols-[0.9fr_1.1fr]"><div><p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-[#C98278]">Guides & ebooks</p><h2 className="font-serif text-4xl text-[#171717] md:text-6xl">Des visuels de livres qui créent la confiance</h2><p className="mt-5 max-w-xl text-lg font-medium leading-relaxed text-[#8B7B70]">Le bloc guides devient une vraie vitrine : il donne l’impression d’un produit éditorial sérieux, pas d’une page générée rapidement.</p><Link href="/guides" className="btn-primary mt-8">Explorer les guides</Link></div><div className="card p-6"><div className="grid gap-4 sm:grid-cols-2">{guides.map((guide) => <Link key={guide.title} href="/guides" className="group rounded-[2rem] border border-[#EADFD6] bg-white p-4 shadow-soft transition-transform hover:-translate-y-1"><ProductVisual type={guide.visual} label={guide.category} /><div className="pt-4"><h3 className="font-serif text-2xl leading-tight text-[#171717]">{guide.title}</h3><div className="mt-3 flex items-center justify-between text-sm font-black"><span>{guide.price}</span><span className="text-[#C98278]">Voir →</span></div></div></Link>)}</div></div></div></div></section>

      <section className="section bg-white"><div className="container-wide"><div className="mb-12 text-center"><h2 className="font-serif text-4xl text-[#171717] md:text-5xl">Comment ça marche ?</h2></div><div className="grid gap-5 md:grid-cols-3">{[['01','Réponds aux questions','Un quiz rapide pour comprendre ton style, tes besoins et ton budget.'],['02','Yayoo analyse ton profil','L’algorithme croise tes réponses avec le catalogue, les offres et les règles de transparence.'],['03','Reçois ta sélection','Une sélection personnalisée avec des explications claires pour chaque produit.']].map(([step,title,text]) => <div key={step} className="card p-7 text-center"><div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-[#EADFD6] bg-[#FAF7F3] text-sm font-black text-[#C98278]">{step}</div><h3 className="font-serif text-2xl text-[#171717]">{title}</h3><p className="mt-3 text-sm leading-relaxed text-[#8B7B70]">{text}</p></div>)}</div></div></section>

      <section id="offres" className="section bg-[#171717] text-white"><div className="container-wide"><div className="mb-12 text-center"><p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-[#E8C6BD]">Offres</p><h2 className="font-serif text-4xl md:text-5xl">Un tunnel prêt pour convertir</h2></div><div className="grid gap-5 md:grid-cols-3">{offers.map((offer) => <div key={offer.name} className={`rounded-[2rem] border p-7 ${offer.featured ? 'border-[#C98278] bg-white text-[#171717]' : 'border-white/15 bg-white/5 text-white'}`}>{offer.featured && <span className="label-sponsored mb-4">Recommandé</span>}<Crown className="mb-4 h-6 w-6 text-[#C98278]" /><h3 className="font-serif text-3xl">{offer.name}</h3><div className="mt-3 text-3xl font-black">{offer.price}</div><p className={`mt-3 text-sm leading-relaxed ${offer.featured ? 'text-[#8B7B70]' : 'text-[#D6C4B8]'}`}>{offer.description}</p><Link href={offer.href} className={offer.featured ? 'btn-accent mt-7 w-full' : 'mt-7 inline-flex w-full items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10'}>Choisir</Link></div>)}</div></div></section>

      <section className="section bg-white"><div className="container-wide grid gap-10 md:grid-cols-[1fr_0.9fr]"><div><p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-[#C98278]">Liens & API</p><h2 className="font-serif text-4xl text-[#171717] md:text-5xl">Affiliation, pixels et catalogue</h2><p className="mt-5 text-lg font-medium leading-relaxed text-[#8B7B70]">La page montre clairement que les liens, les contenus sponsorisés et les recommandations IA doivent être transparents. Les clés API restent à brancher dans Vercel.</p></div><div className="grid gap-4">{[['Liens affiliés','Chaque produit peut porter un label affilié clair et un lien tracké.'],['Contenu sponsorisé','Les placements payants sont séparés et indiqués proprement.'],['IA transparente','Les recommandations doivent venir du catalogue réel, pas de produits inventés.']].map(([title,text]) => <div key={title} className="card p-6"><Lock className="mb-3 h-5 w-5 text-[#C98278]" /><h3 className="font-serif text-2xl text-[#171717]">{title}</h3><p className="mt-2 text-sm leading-relaxed text-[#8B7B70]">{text}</p></div>)}</div></div></section>

      <section className="section bg-[#FAF7F3]"><div className="container-tight text-center"><div className="mx-auto mb-6 flex w-max items-center gap-1 rounded-full border border-[#EADFD6] bg-white px-4 py-2 text-[#C98278]">{Array.from({ length: 5 }).map((_, index) => <Star key={index} className="h-4 w-4 fill-current" />)}</div><h2 className="font-serif text-4xl text-[#171717] md:text-6xl">Maintenant, le site a une vraie identité</h2><p className="mx-auto mt-5 max-w-2xl text-lg font-medium leading-relaxed text-[#8B7B70]">Plus éditorial, plus visuel, plus confiance : l’expérience ressemble à une marque shopping premium et non à un template IA.</p><Link href="/style" className="btn-primary mt-8">Commencer maintenant</Link></div></section>
    </>
  )
}
