import Link from 'next/link'
import type { Metadata } from 'next'
import {
  ArrowRight,
  BadgeCheck,
  Clock,
  Layers,
  Lock,
  ShieldCheck,
  Sparkles,
  Tag,
} from 'lucide-react'
import { SafeImage } from '@/components/ui/safe-image'

export const metadata: Metadata = {
  title: 'Yayoo Femme — YYFMM, assistant shopping féminin intelligent',
  description:
    "Trouve des idées mode, beauté, parfum et cadeaux selon ton style, ton budget et tes envies. Yayoo Femme, ton assistant shopping féminin premium.",
}

const brandImages = {
  hero: '/brand/hero.jpg',
  guides: '/brand/guides.jpg',
  style: '/brand/finder-style.jpg',
  beauty: '/brand/finder-beauty.jpg',
  gift: '/brand/finder-gift.jpg',
  perfume: '/brand/finder-perfume.jpg',
  capsule: '/brand/finder-capsule.jpg',
  adSquare: '/brand/ad-square.jpg',
  adStory: '/brand/ad-story.jpg',
  og: '/brand/og.jpg',
}

const finders = [
  {
    title: 'Style Finder',
    accent: 'Mode',
    description: 'Trouve ton look idéal en 2 min.',
    href: '/style',
    image: brandImages.style,
  },
  {
    title: 'Beauty Finder',
    accent: 'Beauté',
    description: 'Ta routine beauté personnalisée.',
    href: '/beauty',
    image: brandImages.beauty,
  },
  {
    title: 'Gift Finder',
    accent: 'Cadeaux',
    description: 'Le cadeau parfait à chaque occasion.',
    href: '/gifts',
    image: brandImages.gift,
  },
  {
    title: 'Perfume Finder',
    accent: 'Parfum',
    description: 'Ton parfum signature.',
    href: '/perfume',
    image: brandImages.perfume,
  },
  {
    title: 'Dressing Capsule',
    accent: 'Capsule',
    description: '30 pièces essentielles pour un style cohérent.',
    href: '/capsule',
    image: brandImages.capsule,
  },
]

const benefits = [
  {
    icon: Clock,
    title: 'Moins de temps perdu',
    text: 'Tu pars de ton besoin, pas d’un catalogue infini.',
  },
  {
    icon: ShieldCheck,
    title: 'Plus de confiance',
    text: 'Les recommandations sont expliquées, claires et liées à ton budget.',
  },
  {
    icon: Layers,
    title: 'Plus de cohérence',
    text: 'Style, beauté, parfum et cadeaux sont pensés ensemble.',
  },
]

const steps = [
  ['01', 'Réponds aux questions', 'Un quiz rapide pour comprendre ton style, ton budget et tes envies.'],
  ['02', 'Yayoo analyse ton profil', 'L’IA croise tes réponses avec le catalogue, les guides et les offres.'],
  ['03', 'Reçois ta sélection', 'Une sélection claire, utile et directement actionnable.'],
]

const guides = [
  { title: 'Le dressing capsule parfait', price: '9 €' },
  { title: 'Routine beauté naturelle', price: '7 €' },
  { title: '50 idées cadeaux pour femme', price: 'Gratuit' },
  { title: 'Le guide des parfums signature', price: '9 €' },
]

const offers = [
  {
    name: 'Découverte',
    price: 'Gratuit',
    features: ['Style Finder de base', 'Sélection mensuelle', 'Idées cadeaux'],
    cta: 'Commencer',
    href: '/style',
  },
  {
    name: 'Premium',
    price: '7 €',
    period: '/mois',
    badge: 'Le plus choisi',
    features: ['Tous les Finders', 'Sélections illimitées', 'Guides inclus', 'Alertes bons plans'],
    cta: 'Choisir Premium',
    href: '/pricing',
    featured: true,
  },
  {
    name: 'Experte',
    price: '19 €',
    period: '/mois',
    features: ['Capsules avancées', 'Recommandations détaillées', 'Priorité nouveautés'],
    cta: 'Voir Experte',
    href: '/pricing',
  },
]

const transparency = [
  {
    icon: Tag,
    title: 'Liens affiliés signalés',
    text: 'Tu sais toujours quand un lien peut nous rémunérer.',
  },
  {
    icon: BadgeCheck,
    title: 'Contenu sponsorisé indiqué',
    text: 'Les placements payants sont toujours clairement indiqués.',
  },
  {
    icon: Lock,
    title: 'Produits réels',
    text: 'Les recommandations viennent de produits réels, pas de fausses vitrines.',
  },
]

export default function HomePage() {
  return (
    <>
      {/* 1. HERO */}
      <section className="relative overflow-hidden border-b border-[#EADFD6] bg-[#FAF7F3]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgba(232,198,189,0.42),transparent_38%),linear-gradient(135deg,#FFFDFC_0%,#FAF7F3_55%,#F6E8E4_100%)]" />
        <div className="container-wide relative grid items-center gap-10 py-12 md:grid-cols-2 md:gap-12 md:py-20">
          <div className="z-10">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#E8C6BD] bg-white/70 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#A7645D] shadow-sm backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" /> YYFMM — Assistant shopping féminin
            </div>
            <h1 className="text-balance font-serif text-4xl leading-[1.02] text-[#171717] sm:text-5xl md:text-6xl">
              Ton assistant beauté, mode &amp; cadeaux intelligent
            </h1>
            <p className="mt-5 max-w-xl text-base font-medium leading-relaxed text-[#8B7B70] md:text-lg">
              Trouve des idées mode, beauté, parfum et cadeaux selon ton style, ton budget et tes envies.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link href="/style" className="btn-primary">
                Commencer <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/guides" className="btn-secondary">
                Voir les guides
              </Link>
            </div>
            <div className="mt-7 grid max-w-lg grid-cols-3 gap-2.5 text-[11px] font-semibold text-[#594C45] sm:text-xs">
              {['Produits réels', 'Liens clairs', 'Sélection personnalisée'].map((item) => (
                <div key={item} className="rounded-2xl border border-[#EADFD6] bg-white/65 px-3 py-2.5 backdrop-blur">
                  <BadgeCheck className="mb-1.5 h-4 w-4 text-[#C98278]" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative h-[340px] overflow-hidden rounded-[2rem] border border-[#EADFD6] bg-white shadow-card sm:h-[420px] md:h-[540px]">
            <SafeImage
              src={brandImages.hero}
              alt="Yayoo Femme — sélection mode, beauté et cadeaux"
              position="70% center"
              priority
              fallbackHint="Sélection personnalisée"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#171717]/25 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/70 bg-white/85 px-4 py-3 shadow-card backdrop-blur md:left-auto md:right-5 md:w-[260px]">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#C98278]">Sélection du jour</span>
              <p className="mt-1 font-serif text-lg leading-tight text-[#171717]">Pensée pour ton style et ton budget.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. DÉCOUVRIR */}
      <section id="decouvrir" className="section bg-white">
        <div className="container-wide">
          <div className="mb-10 text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-[#C98278]">Découvrir</p>
            <h2 className="font-serif text-3xl text-[#171717] md:text-5xl">Choisis ton besoin</h2>
            <p className="mx-auto mt-4 max-w-xl text-[#8B7B70]">
              Un accès rapide, lisible et utile pour trouver ce qu’il te faut.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {finders.map((finder) => (
              <Link key={finder.href} href={finder.href} className="card-hover group flex flex-col">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F3ECE5]">
                  <SafeImage
                    src={finder.image}
                    alt={`${finder.title} — Yayoo Femme`}
                    fallbackLabel={finder.title}
                    fallbackHint={finder.accent}
                    className="transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#8B7B70]">{finder.accent}</p>
                  <h3 className="mt-1.5 font-serif text-2xl text-[#171717]">{finder.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#8B7B70]">{finder.description}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-[#C98278]">
                    Commencer <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. POURQUOI C'EST UTILE */}
      <section className="section bg-[#FAF7F3]">
        <div className="container-wide">
          <div className="mb-10 text-center">
            <h2 className="mx-auto max-w-2xl text-balance font-serif text-3xl text-[#171717] md:text-4xl">
              Une sélection plus intelligente qu’un simple scroll
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {benefits.map((benefit) => {
              const Icon = benefit.icon
              return (
                <div key={benefit.title} className="card p-7">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F3ECE5]">
                    <Icon className="h-6 w-6 text-[#C98278]" />
                  </div>
                  <h3 className="font-serif text-2xl text-[#171717]">{benefit.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-[#8B7B70]">{benefit.text}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 4. COMMENT ÇA MARCHE */}
      <section className="section bg-white">
        <div className="container-wide">
          <div className="mb-10 text-center">
            <h2 className="font-serif text-3xl text-[#171717] md:text-4xl">Comment ça marche ?</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {steps.map(([step, title, text]) => (
              <div key={step} className="card p-7">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-[#EADFD6] bg-[#FAF7F3] font-serif text-lg font-bold text-[#C98278]">
                  {step}
                </div>
                <h3 className="font-serif text-xl text-[#171717]">{title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-[#8B7B70]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. GUIDES & EBOOKS */}
      <section className="section bg-[#FAF7F3]">
        <div className="container-wide grid items-center gap-10 md:grid-cols-2 md:gap-12">
          <div className="order-2 h-[320px] overflow-hidden rounded-[2rem] border border-[#EADFD6] bg-white shadow-card sm:h-[400px] md:order-1 md:h-[500px]">
            <SafeImage
              src={brandImages.guides}
              alt="Guides et ebooks premium Yayoo Femme"
              fallbackLabel="Guides & Ebooks"
              fallbackHint="Premium"
            />
          </div>
          <div className="order-1 md:order-2">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-[#C98278]">Guides &amp; Ebooks</p>
            <h2 className="font-serif text-3xl text-[#171717] md:text-5xl">Guides &amp; Ebooks premium</h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-[#8B7B70]">
              Des contenus utiles pour mieux choisir, mieux acheter et construire ton style.
            </p>
            <ul className="mt-6 divide-y divide-[#EADFD6] border-y border-[#EADFD6]">
              {guides.map((guide) => (
                <li key={guide.title} className="flex items-center justify-between gap-4 py-3.5">
                  <span className="text-sm font-medium text-[#171717]">{guide.title}</span>
                  <span
                    className={`shrink-0 text-sm font-bold ${guide.price === 'Gratuit' ? 'text-[#A7645D]' : 'text-[#171717]'}`}
                  >
                    {guide.price}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-7 flex flex-col items-start gap-3">
              <Link href="/guides" className="btn-primary">
                Explorer les guides
              </Link>
              <span className="text-xs font-medium text-[#8B7B70]">Paiement sécurisé · Accès immédiat</span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. OFFRES */}
      <section id="offres" className="section bg-[#171717] text-white">
        <div className="container-wide">
          <div className="mb-10 text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-[#E8C6BD]">Offres</p>
            <h2 className="font-serif text-3xl md:text-5xl">Trouve ta formule</h2>
            <p className="mx-auto mt-4 max-w-xl text-[#D6C4B8]">
              Commence gratuitement, passe en premium quand tu veux aller plus loin.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {offers.map((offer) => (
              <div
                key={offer.name}
                className={`flex flex-col rounded-[1.75rem] border p-7 ${
                  offer.featured ? 'border-[#C98278] bg-white text-[#171717] shadow-card md:-mt-3 md:mb-3' : 'border-white/15 bg-white/[0.04] text-white'
                }`}
              >
                {offer.badge && <span className="label-sponsored mb-4 w-max">{offer.badge}</span>}
                <h3 className="font-serif text-2xl">{offer.name}</h3>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="font-serif text-4xl">{offer.price}</span>
                  {offer.period && (
                    <span className={`text-sm font-semibold ${offer.featured ? 'text-[#8B7B70]' : 'text-[#D6C4B8]'}`}>
                      {offer.period}
                    </span>
                  )}
                </div>
                <ul className="mt-6 flex-1 space-y-3">
                  {offer.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm">
                      <BadgeCheck
                        className={`mt-0.5 h-4 w-4 shrink-0 ${offer.featured ? 'text-[#C98278]' : 'text-[#E8C6BD]'}`}
                      />
                      <span className={offer.featured ? 'text-[#594C45]' : 'text-[#D6C4B8]'}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={offer.href}
                  className={
                    offer.featured
                      ? 'btn-accent mt-7 w-full'
                      : 'mt-7 inline-flex w-full items-center justify-center rounded-full border border-white/25 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10'
                  }
                >
                  {offer.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. TRANSPARENCE */}
      <section id="transparence" className="section bg-white">
        <div className="container-wide">
          <div className="mb-10 text-center">
            <h2 className="font-serif text-3xl text-[#171717] md:text-4xl">Une recommandation claire et honnête</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {transparency.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="card p-7">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F3ECE5]">
                    <Icon className="h-6 w-6 text-[#C98278]" />
                  </div>
                  <h3 className="font-serif text-xl text-[#171717]">{item.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-[#8B7B70]">{item.text}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 8. FINAL CTA */}
      <section className="section bg-[#FAF7F3]">
        <div className="container-wide">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-[#EADFD6] bg-[#FFFDFC] px-6 py-12 shadow-card md:px-12 md:py-16">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_88%_12%,rgba(232,198,189,0.4),transparent_44%)]" />
            <div className="relative mx-auto max-w-2xl text-center">
              <h2 className="text-balance font-serif text-3xl text-[#171717] md:text-5xl">
                Prête à trouver ce qui te va vraiment ?
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-[#8B7B70] md:text-lg">
                Mode, beauté, parfum ou cadeau : commence par ton besoin, Yayoo s’occupe du reste.
              </p>
              <Link href="/style" className="btn-primary mt-8">
                Commencer maintenant <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
