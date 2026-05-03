import type { Metadata } from 'next'
import { GiftFinder } from '@/components/quiz/gift-finder'

export const metadata: Metadata = {
  title: 'Gift Finder - Le cadeau parfait',
  description: 'Trouve le cadeau idéal pour chaque femme et chaque occasion en moins de 2 minutes.',
}

export default function GiftsPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] py-12 px-4">
      <GiftFinder />
    </div>
  )
}
