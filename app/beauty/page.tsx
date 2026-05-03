import type { Metadata } from 'next'
import { BeautyFinder } from '@/components/quiz/beauty-finder'

export const metadata: Metadata = {
  title: 'Beauty Finder - Ta routine beauté idéale',
  description: 'Découvre ta routine beauté personnalisée selon ton type de peau, tes préoccupations et ton budget.',
}

export default function BeautyPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] py-12 px-4">
      <BeautyFinder />
    </div>
  )
}
