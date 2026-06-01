'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const navigation = [
  { label: 'Découvrir', href: '/#decouvrir' },
  { label: 'Guides', href: '/guides' },
  { label: 'Offres', href: '/pricing' },
  { label: 'Transparence', href: '/#transparence' },
  { label: 'Mon compte', href: '/account' },
]

const mobileNavigation = [
  { label: 'Découvrir', href: '/' },
  { label: 'Style Finder', href: '/style' },
  { label: 'Beauty Finder', href: '/beauty' },
  { label: 'Gift Finder', href: '/gifts' },
  { label: 'Perfume Finder', href: '/perfume' },
  { label: 'Dressing Capsule', href: '/capsule' },
  { label: 'Guides', href: '/guides' },
  { label: 'Offres', href: '/pricing' },
  { label: 'Mon compte', href: '/account' },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-[#EADFD6] bg-[#FAF7F3]/95 backdrop-blur-xl">
      <div className="container-wide">
        <div className="flex h-18 items-center justify-between py-3">
          <Link href="/" className="flex flex-col leading-none" onClick={() => setMobileOpen(false)}>
            <span className="font-serif text-2xl font-semibold tracking-tight text-[#171717]">Yayoo Femme</span>
            <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.35em] text-[#C98278]">YYFMM</span>
          </Link>

          <nav className="hidden items-center gap-2 md:flex">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-[#594C45] transition-colors hover:bg-white hover:text-[#171717]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Link href="/style">
              <Button size="sm" className="rounded-full bg-[#171717] px-5 text-white hover:bg-[#2C2C2C]">Style Finder</Button>
            </Link>
          </div>

          <button
            className="rounded-full p-2 transition-colors hover:bg-white md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={mobileOpen}
          >
            <div className="w-7 space-y-1.5">
              <span className={cn('block h-0.5 bg-[#171717] transition-all', mobileOpen && 'translate-y-2 rotate-45')} />
              <span className={cn('block h-0.5 bg-[#171717] transition-all', mobileOpen && 'opacity-0')} />
              <span className={cn('block h-0.5 bg-[#171717] transition-all', mobileOpen && '-translate-y-2 -rotate-45')} />
            </div>
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden border-t border-[#EADFD6] py-5 animate-[fadeIn_0.2s_ease-out]">
            <nav className="flex flex-col gap-1">
              {mobileNavigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-2xl px-4 py-3 text-base font-semibold text-[#171717] transition-colors hover:bg-white"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-4 grid gap-3">
                <Link href="/pricing" onClick={() => setMobileOpen(false)}>
                  <Button variant="outline" size="sm" className="w-full rounded-full border-[#EADFD6] bg-transparent">Offres</Button>
                </Link>
                <Link href="/account" onClick={() => setMobileOpen(false)}>
                  <Button size="sm" className="w-full rounded-full bg-[#171717] text-white">Mon compte</Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
