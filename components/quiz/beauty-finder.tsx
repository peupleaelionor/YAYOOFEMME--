'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { QuizStepper, type QuizStep } from './quiz-stepper'

const BEAUTY_STEPS: QuizStep[] = [
  {
    id: 'skin_type',
    question: 'Quel est ton type de peau ?',
    type: 'single',
    options: [
      { value: 'normale', label: 'Normale' },
      { value: 'seche', label: 'Sèche ou très sèche' },
      { value: 'grasse', label: 'Grasse ou mixte' },
      { value: 'sensible', label: 'Sensible ou réactive' },
      { value: 'mature', label: 'Mature' },
    ],
  },
  {
    id: 'concern',
    question: 'Ta principale préoccupation beauté ?',
    type: 'single',
    options: [
      { value: 'hydratation', label: 'Hydratation & confort' },
      { value: 'eclat', label: 'Éclat & teint unifié' },
      { value: 'anti-age', label: 'Anti-âge & fermeté' },
      { value: 'imperfections', label: 'Imperfections & pores' },
      { value: 'protection', label: 'Protection solaire & prévention' },
    ],
  },
  {
    id: 'routine',
    question: 'Combien de temps consacres-tu à ta routine ?',
    type: 'single',
    options: [
      { value: 'rapide', label: 'Moins de 5 min – ultra rapide' },
      { value: 'normale', label: '5-10 min – routine simple' },
      { value: 'complete', label: '15-20 min – routine complète' },
      { value: 'rituel', label: '20 min+ – vrai rituel beauté' },
    ],
  },
  {
    id: 'preference',
    question: 'Tes préférences produits ?',
    subtitle: 'Tu peux en choisir plusieurs',
    type: 'multiple',
    options: [
      { value: 'naturel', label: 'Naturel & bio' },
      { value: 'vegan', label: 'Vegan & cruelty-free' },
      { value: 'luxe', label: 'Luxe & efficacité prouvée' },
      { value: 'accessible', label: 'Accessible & rapport Q/P' },
      { value: 'fragrance-free', label: 'Sans parfum' },
    ],
  },
  {
    id: 'budget',
    question: 'Ton budget routine beauté / mois ?',
    type: 'single',
    options: [
      { value: 'moins-30', label: 'Moins de 30 €' },
      { value: '30-60', label: '30 - 60 €' },
      { value: '60-100', label: '60 - 100 €' },
      { value: '100-200', label: '100 - 200 €' },
      { value: '200-plus', label: 'Plus de 200 €' },
    ],
  },
  {
    id: 'age_range',
    question: 'Ta tranche d\'âge ?',
    optional: true,
    type: 'single',
    options: [
      { value: '18-25', label: '18-25 ans' },
      { value: '25-35', label: '25-35 ans' },
      { value: '35-45', label: '35-45 ans' },
      { value: '45-55', label: '45-55 ans' },
      { value: '55-plus', label: '55 ans et plus' },
    ],
  },
]

export function BeautyFinder() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const handleComplete = async (answers: Record<string, string | string[] | number>) => {
    setLoading(true)
    try {
      const response = await fetch('/api/recommend', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ module: 'beauty', answers }),
      })

      if (response.ok) {
        const data = await response.json()
        sessionStorage.setItem('recommendation', JSON.stringify({
          module: 'beauty',
          answers,
          ...data,
        }))
        router.push('/result/beauty')
      }
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <QuizStepper
      steps={BEAUTY_STEPS}
      onComplete={handleComplete}
      loading={loading}
      title="Beauty Finder"
      subtitle="Découvre ta routine beauté idéale."
    />
  )
}
