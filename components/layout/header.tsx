'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const navigation = [
  { label: 'Style', href: '/style' },
  { label: 'Beauté', href: '/beauty' },
  { label: 'Cadeaux', href: '/gifts' },
  { label: 'Parfum', href: '/perfume' },
  { label: 'Capsule', href: '/capsule' },
  { label: 'Bons plans', href: '/deals' },
  { label: 'Guides', href: '/guides' },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-[#FAF8F5]/95 backdrop-blur-sm border-b border-[#EDE4D6]">
      <div className="container-wide">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="font-serif text-xl font-semibold text-[#1A1A1A] tracking-wide">
              Yayoo Femme
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-sm text-[#2C2C2C] hover:text-[#1A1A1A] rounded-full hover:bg-[#F5F0E8] transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/pricing">
              <Button variant="ghost" size="sm">Offres</Button>
            </Link>
            <Link href="/account">
              <Button size="sm">Mon compte</Button>
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 rounded-full hover:bg-[#F5F0E8]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            <div className="space-y-1.5 w-5">
              <span className={cn('block h-0.5 bg-[#1A1A1A] transition-all', mobileOpen && 'rotate-45 translate-y-2')} />
              <span className={cn('block h-0.5 bg-[#1A1A1A] transition-all', mobileOpen && 'opacity-0')} />
              <span className={cn('block h-0.5 bg-[#1A1A1A] transition-all', mobileOpen && '-rotate-45 -translate-y-2')} />
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden py-4 border-t border-[#EDE4D6] animate-[fadeIn_0.2s_ease-out]">
            <nav className="flex flex-col gap-1">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-4 py-3 text-sm text-[#2C2C2C] hover:text-[#1A1A1A] rounded-xl hover:bg-[#F5F0E8] transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-3 flex flex-col gap-2">
                <Link href="/pricing" onClick={() => setMobileOpen(false)}>
                  <Button variant="outline" size="sm" className="w-full">Offres</Button>
                </Link>
                <Link href="/account" onClick={() => setMobileOpen(false)}>
                  <Button size="sm" className="w-full">Mon compte</Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
