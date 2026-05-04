import type { Metadata } from 'next'
import { CapsuleFinder } from '@/components/quiz/capsule-finder'

export const metadata: Metadata = {
  title: 'Dressing Capsule - 30 pièces essentielles',
  description:
    'Construis ton dressing capsule idéal : 30 pièces soigneusement sélectionnées selon ta morphologie, ton style et ton budget.',
}

export default function CapsulePage() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] py-12 px-4">
      <CapsuleFinder />
    </div>
  )
}
