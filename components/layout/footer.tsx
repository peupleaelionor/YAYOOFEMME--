import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-[#FAF8F5] border-t border-[#F5F0E8] mt-24">
      <div className="container-wide py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <Link href="/" className="font-serif text-xl font-semibold text-[#1A1A1A]">
              Yayoo Femme
            </Link>
            <p className="mt-3 text-sm text-[#8C7B6B] leading-relaxed">
              Ton assistante d&apos;achat féminine intelligente. Mode, beauté, parfum, cadeaux.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#8C7B6B] mb-4">Découvrir</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Style Finder', href: '/style' },
                { label: 'Beauty Finder', href: '/beauty' },
                { label: 'Gift Finder', href: '/gifts' },
                { label: 'Perfume Finder', href: '/perfume' },
                { label: 'Dressing Capsule', href: '/capsule' },
                { label: 'Bons plans', href: '/deals' },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-[#8C7B6B] hover:text-[#1A1A1A] transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#8C7B6B] mb-4">Ressources</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Guides', href: '/guides' },
                { label: 'Ebooks', href: '/guides' },
                { label: 'Offres', href: '/pricing' },
                { label: 'Bons plans', href: '/deals' },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-[#8C7B6B] hover:text-[#1A1A1A] transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#8C7B6B] mb-4">Légal</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Confidentialité', href: '/privacy' },
                { label: 'Conditions générales', href: '/terms' },
                { label: 'Cookies', href: '/cookies' },
                { label: 'Affiliation', href: '/affiliation' },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-[#8C7B6B] hover:text-[#1A1A1A] transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#EDE4D6] space-y-3">
          <p className="text-xs text-[#8C7B6B]">
            Certains liens présents sur ce site sont des liens affiliés. Si vous effectuez un achat via ces liens, Yayoo Femme peut percevoir une commission, sans coût supplémentaire pour vous.
          </p>
          <p className="text-xs text-[#8C7B6B]">
            &copy; {new Date().getFullYear()} Yayoo Femme. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}
