import type { Metadata } from 'next'
import './globals.css'

const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://yyfmm.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(appUrl),
  title: {
    default: 'Yayoo Femme — Assistant shopping mode, beauté, parfum et cadeaux',
    template: '%s | Yayoo Femme',
  },
  description: "Yayoo Femme t'aide à trouver des idées mode, beauté, parfum et cadeaux selon ton style, ton budget et tes envies.",
  keywords: ['Yayoo Femme', 'YYFMM', 'mode femme', 'beauté', 'parfum', 'cadeaux femme', 'style féminin', 'shopping intelligent', 'assistant IA shopping'],
  authors: [{ name: 'Yayoo Femme' }],
  creator: 'YYFMM',
  applicationName: 'Yayoo Femme',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: appUrl,
    siteName: 'Yayoo Femme',
    title: 'Yayoo Femme — Ton assistant d’achat féminin intelligent',
    description: 'Mode, beauté, parfum, cadeaux : des sélections personnalisées, utiles et transparentes.',
    images: [
      {
        url: '/brand/yyfmm-og.svg',
        width: 1200,
        height: 630,
        alt: 'Yayoo Femme — YYFMM',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yayoo Femme — Assistant shopping féminin',
    description: 'Ton assistant mode, beauté, parfum et cadeaux.',
    images: ['/brand/yyfmm-og.svg'],
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
