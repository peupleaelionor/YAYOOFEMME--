import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Catalogue produits',
  description:
    'Parcourez notre catalogue de produits mode, beauté, parfums et cadeaux sélectionnés pour vous.',
}

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
