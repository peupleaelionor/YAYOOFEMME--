import type { Metadata } from 'next'

interface PageSEO {
  title: string
  description: string
  path: string
  image?: string
}

export function generateMetadata({
  title,
  description,
  path,
  image = '/og-image.jpg',
}: PageSEO): Metadata {
  const url = `${process.env.NEXT_PUBLIC_APP_URL ?? 'https://fmmyy.com'}${path}`

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      images: [{ url: image, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  }
}
