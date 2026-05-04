import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bons plans mode & beauté',
  description:
    'Les meilleures promotions, codes promo et offres flash mode, beauté et cadeaux sélectionnés par Yayoo Femme.',
}

export default function DealsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
