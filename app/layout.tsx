import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://fmmyy.com'),
  title: {
    default: "Yayoo Femme - Assistant d'achat féminin intelligent",
    template: '%s | Yayoo Femme',
  },
  description: "Yayoo Femme t'aide à trouver les bons produits mode, beauté, parfum, bijoux, maison et cadeaux selon ton style, ton budget et ton moment de vie.",
  keywords: ['mode femme', 'beauté', 'parfum', 'cadeaux femme', 'style féminin', 'recommandations IA', 'shopping intelligent'],
  authors: [{ name: 'Yayoo Femme' }],
  creator: 'Yayoo Femme',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://fmmyy.com',
    siteName: 'Yayoo Femme',
    title: "Yayoo Femme - Assistant d'achat féminin intelligent",
    description: 'Trouve ce qui te correspond vraiment. Mode, beauté, parfum, cadeaux selon ton style et ton budget.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Yayoo Femme',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Yayoo Femme - Assistant d'achat féminin intelligent",
    description: 'Trouve ce qui te correspond vraiment. Mode, beauté, parfum, cadeaux selon ton style et ton budget.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)' }}>
        {children}
      </body>
    </html>
  )
}
