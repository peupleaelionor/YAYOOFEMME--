import type { Metadata } from 'next'
import { StyleFinder } from '@/components/quiz/style-finder'

export const metadata: Metadata = {
  title: 'Style Finder - Trouve ton look parfait',
  description: 'Réponds à quelques questions et découvre ta sélection mode personnalisée : robes, tops, accessoires selon ton style et ton budget.',
}

export default function StylePage() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] py-12 px-4">
      <StyleFinder />
    </div>
  )
}
