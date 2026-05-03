'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { QuizStepper, type QuizStep } from './quiz-stepper'

const PERFUME_STEPS: QuizStep[] = [
  {
    id: 'family',
    question: 'Quel type de parfum te correspond ?',
    type: 'single',
    options: [
      { value: 'floral', label: 'Floral – rose, jasmin, pivoine' },
      { value: 'oriental', label: 'Oriental – vanille, ambre, épices' },
      { value: 'boise', label: 'Boisé – cèdre, santal, vétiver' },
      { value: 'frais', label: 'Frais – aquatique, citrus, herbacé' },
      { value: 'gourmand', label: 'Gourmand – caramel, chocolat, pralin' },
      { value: 'chypre', label: 'Chypré – élégant, sophistiqué' },
    ],
  },
  {
    id: 'occasion',
    question: 'Pour quel moment de vie ?',
    type: 'single',
    options: [
      { value: 'quotidien', label: 'Tous les jours' },
      { value: 'travail', label: 'Au bureau' },
      { value: 'soiree', label: 'Soirée & événements' },
      { value: 'weekend', label: 'Week-end & loisirs' },
      { value: 'romantique', label: 'Moment romantique' },
    ],
  },
  {
    id: 'intensity',
    question: 'Quelle intensité tu préfères ?',
    type: 'single',
    options: [
      { value: 'leger', label: 'Léger & discret' },
      { value: 'moyen', label: 'Équilibré' },
      { value: 'intense', label: 'Intense & marqué' },
    ],
  },
  {
    id: 'budget',
    question: 'Ton budget parfum ?',
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
    id: 'preference',
    question: 'Tes marques de parfum habituelles ?',
    optional: true,
    type: 'text',
  },
]

export function PerfumeFinder() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const handleComplete = async (answers: Record<string, string | string[] | number>) => {
    setLoading(true)
    try {
      const response = await fetch('/api/recommend', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ module: 'perfume', answers }),
      })

      if (response.ok) {
        const data = await response.json()
        sessionStorage.setItem('recommendation', JSON.stringify({
          module: 'perfume',
          answers,
          ...data,
        }))
        router.push('/result/perfume')
      }
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <QuizStepper
      steps={PERFUME_STEPS}
      onComplete={handleComplete}
      loading={loading}
      title="Perfume Finder"
      subtitle="Trouve ton parfum signature."
    />
  )
}
