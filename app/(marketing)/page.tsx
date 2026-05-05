import Link from 'next/link'
import type { Metadata } from 'next'
import { BadgeCheck, BookOpen, Gift, Heart, Lock, Search, Shirt, Sparkles, Star, Wand2, Crown, ShieldCheck } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Yayoo Femme — YYFMM, assistant shopping féminin intelligent',
  description: "Mode, beauté, parfum et cadeaux : Yayoo Femme recommande des idées adaptées à ton style, ton budget et tes envies.",
}

const rawBase = 'https://raw.githubusercontent.com/peupleaelionor/YAYOOFEMME--/main'

const brandImages = {
  hero: `${rawBase}/331ABED0-0BF6-4680-9066-16269C5E567F.png`,
  discover: `${rawBase}/35BBFD56-F730-479F-B9EE-219FF3E57CF4.png`,
  guides: `${rawBase}/E0150CE6-8D70-46C5-85DD-285744F45930.png`,
  ad: `${rawBase}/F0172171-52F8-4ABE-8F5B-D8A13754FC25.png`,
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

function BrandImage({ src, alt, className = '', position = 'object-center' }: { src: string; alt: string; className?: string; position?: string }) {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className={`h-full w-full object-cover ${position} ${className}`}
    />
  )
}

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-[#EADFD6] bg-[#FAF7F3]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(232,198,189,0.45),transparent_34%),linear-gradient(135deg,#FFFDFC_0%,#FAF7F3_55%,#F6E8E4_100%)]" />
        <div className="container-wide relative grid min-h-[calc(100vh-72px)] items-center gap-10 py-12 md:grid-cols-[0.82fr_1.18fr] md:py-16">
          <div className="z-10 max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#E8C6BD] bg-white/70 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-[#A7645D] shadow-sm backdrop-blur">
              <Sparkles className="h-4 w-4" /> YYFMM — assistant shopping féminin
            </div>
            <h1 className="text-balance font-serif text-5xl leading-[0.92] text-[#171717] sm:text-6xl md:text-7xl lg:text-8xl">
              La sélection mode, beauté & cadeaux qui semble pensée pour toi
            </h1>
            <p className="mt-7 max-w-2xl text-lg font-medium leading-relaxed text-[#8B7B70] md:text-xl">
              Yayoo Femme transforme tes envies en recommandations claires : looks, routine beauté, parfum signature, guides premium et idées cadeaux prêtes à acheter.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/style" className="btn-primary">Découvrir mon style <Search className="h-4 w-4" /></Link>
              <Link href="/guides" className="btn-secondary">Voir les guides <BookOpen className="h-4 w-4" /></Link>
            </div>
            <div className="mt-8 grid max-w-xl grid-cols-3 gap-3 text-xs font-semibold text-[#594C45]">
              {['Visuels premium', 'Produits réels', 'Liens clairs'].map((item) => (
                <div key={item} className="rounded-2xl border border-[#EADFD6] bg-white/65 p-3 backdrop-blur">
                  <BadgeCheck className="mb-2 h-4 w-4 text-[#C98278]" />{item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-[520px] overflow-hidden rounded-[2.5rem] border border-[#EADFD6] bg-white shadow-card md:min-h-[720px]">
            <BrandImage src={brandImages.hero} alt="Yayoo Femme — expérience shopping féminin premium" position="object-center md:object-center" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#FAF7F3]/88 via-[#FAF7F3]/28 to-transparent md:from-[#FAF7F3]/72" />
            <div className="absolute bottom-5 left-5 right-5 rounded-[2rem] border border-white/70 bg-white/82 p-4 shadow-card backdrop-blur md:left-auto md:right-6 md:w-[360px]">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-[0.22em] text-[#C98278]">Sélection du jour</span>
                <span className="label-affiliate">sur-mesure</span>
              </div>
              <p className="font-serif text-2xl leading-tight text-[#171717]">Style, beauté et cadeaux dans une seule expérience.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="decouvrir" className="section bg-white">
        <div className="container-wide">
          <div className="mb-12 text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-[#C98278]">Découvrir</p>
            <h2 className="font-serif text-4xl text-[#171717] md:text-5xl">Un univers visuel par besoin</h2>
            <p className="mx-auto mt-4 max-w-2xl text-[#8B7B70]">Chaque module devient une porte d’entrée publicitaire : identifiable, désirable, simple à comprendre.</p>
          </div>
          <div className="mb-8 overflow-hidden rounded-[2.5rem] border border-[#EADFD6] bg-[#FAF7F3] shadow-card">
            <div className="h-[460px] md:h-[560px]">
              <BrandImage src={brandImages.discover} alt="Yayoo Femme — modules mode beauté parfum cadeaux" position="object-center" />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {modules.map((mod) => {
              const Icon = mod.icon
              return (
                <Link key={mod.href} href={mod.href} className="card-hover group block p-5">
                  <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#FAF7F3]">
                    <Icon className="h-8 w-8 text-[#C98278]" />
                  </div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8B7B70]">{mod.accent}</p>
                  <h3 className="mt-2 font-serif text-2xl text-[#171717]">{mod.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#8B7B70]">{mod.description}</p>
                  <div className="mt-5 text-sm font-bold text-[#C98278]">Commencer →</div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section bg-[#FAF7F3]">
        <div className="container-wide grid items-center gap-10 md:grid-cols-[0.82fr_1.18fr]">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-[#C98278]">Guides & ebooks</p>
            <h2 className="font-serif text-4xl text-[#171717] md:text-6xl">Des visuels de livres qui créent la confiance</h2>
            <p className="mt-5 max-w-xl text-lg font-medium leading-relaxed text-[#8B7B70]">
              Le bloc guides devient une vraie vitrine : il donne l’impression d’un produit éditorial sérieux, avec paiement sécurisé et accès immédiat.
            </p>
            <Link href="/guides" className="btn-primary mt-8">Explorer les guides</Link>
          </div>
          <div className="overflow-hidden rounded-[2.5rem] border border-[#EADFD6] bg-white shadow-card">
            <div className="h-[620px] md:h-[780px]">
              <BrandImage src={brandImages.guides} alt="Guides et ebooks premium Yayoo Femme" position="object-center" />
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-wide">
          <div className="mb-12 text-center">
            <h2 className="font-serif text-4xl text-[#171717] md:text-5xl">Comment ça marche ?</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {[
              ['01', 'Réponds aux questions', 'Un quiz rapide pour comprendre ton style, tes besoins et ton budget.'],
              ['02', 'Yayoo analyse ton profil', 'L’algorithme croise tes réponses avec le catalogue, les offres et les règles de transparence.'],
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

      <section id="offres" className="section bg-[#171717] text-white">
        <div className="container-wide grid items-center gap-10 md:grid-cols-[1.05fr_0.95fr]">
          <div className="overflow-hidden rounded-[2.5rem] border border-white/15 bg-white/5 shadow-card">
            <div className="h-[560px] md:h-[680px]">
              <BrandImage src={brandImages.ad} alt="Yayoo Femme — publicité mode beauté cadeaux" position="object-center" />
            </div>
          </div>
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-[#E8C6BD]">Offres</p>
            <h2 className="font-serif text-4xl md:text-5xl">Un tunnel prêt pour convertir</h2>
            <p className="mt-4 text-[#D6C4B8]">Gratuit pour attirer, Premium pour convertir, Experte pour augmenter la valeur client.</p>
            <div className="mt-8 grid gap-5">
              {offers.map((offer) => (
                <div key={offer.name} className={`rounded-[2rem] border p-6 ${offer.featured ? 'border-[#C98278] bg-white text-[#171717]' : 'border-white/15 bg-white/5 text-white'}`}>
                  {offer.featured && <span className="label-sponsored mb-4">Recommandé</span>}
                  <Crown className="mb-3 h-5 w-5 text-[#C98278]" />
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <h3 className="font-serif text-3xl">{offer.name}</h3>
                      <p className={`mt-2 text-sm leading-relaxed ${offer.featured ? 'text-[#8B7B70]' : 'text-[#D6C4B8]'}`}>{offer.description}</p>
                    </div>
                    <div className="text-right text-2xl font-black">{offer.price}</div>
                  </div>
                  <Link href={offer.href} className={offer.featured ? 'btn-accent mt-5 w-full' : 'mt-5 inline-flex w-full items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10'}>Choisir</Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-wide grid gap-10 md:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-[#C98278]">Liens & API</p>
            <h2 className="font-serif text-4xl text-[#171717] md:text-5xl">Affiliation, pixels et catalogue</h2>
            <p className="mt-5 text-lg font-medium leading-relaxed text-[#8B7B70]">La page montre clairement que les liens, les contenus sponsorisés et les recommandations IA doivent être transparents. Les clés API restent à brancher dans Vercel.</p>
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
          <h2 className="font-serif text-4xl text-[#171717] md:text-6xl">Maintenant, le site a une vraie identité</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg font-medium leading-relaxed text-[#8B7B70]">Plus éditorial, plus visuel, plus confiance : l’expérience ressemble à une marque shopping premium et non à un template IA.</p>
          <Link href="/style" className="btn-primary mt-8">Commencer maintenant</Link>
        </div>
      </section>
    </>
  )
}
