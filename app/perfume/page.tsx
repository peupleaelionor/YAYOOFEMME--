import type { Metadata } from 'next'
import { PerfumeFinder } from '@/components/quiz/perfume-finder'

export const metadata: Metadata = {
  title: 'Perfume Finder - Ton parfum signature',
  description: 'Découvre ton parfum idéal selon ta personnalité, l\'occasion et ton budget.',
}

export default function PerfumePage() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] py-12 px-4">
      <PerfumeFinder />
    </div>
  )
}
