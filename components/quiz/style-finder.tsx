'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { QuizStepper, type QuizStep } from './quiz-stepper'

const STYLE_STEPS: QuizStep[] = [
  {
    id: 'occasion',
    question: 'Pour quelle occasion cherches-tu une tenue ?',
    type: 'single',
    options: [
      { value: 'quotidien', label: 'Quotidien / Travail' },
      { value: 'sortie', label: 'Soirée / Sortie' },
      { value: 'casual', label: 'Week-end / Casual' },
      { value: 'evenement', label: 'Événement spécial' },
      { value: 'sport', label: 'Sport / Activités' },
      { value: 'voyage', label: 'Voyage' },
    ],
  },
  {
    id: 'style',
    question: 'Quel style te correspond le mieux ?',
    type: 'single',
    options: [
      { value: 'classique', label: 'Classique & élégant' },
      { value: 'casual', label: 'Décontracté & naturel' },
      { value: 'boheme', label: 'Bohème & romantique' },
      { value: 'moderne', label: 'Moderne & minimaliste' },
      { value: 'tendance', label: 'Tendance & audacieux' },
      { value: 'sport', label: 'Sportswear & confort' },
    ],
  },
  {
    id: 'budget',
    question: 'Quel est ton budget pour cette tenue ?',
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
    id: 'colors',
    question: 'Quelles couleurs préfères-tu ?',
    subtitle: 'Tu peux en choisir plusieurs',
    type: 'multiple',
    options: [
      { value: 'neutres', label: 'Neutres (blanc, beige, gris)' },
      { value: 'noirs', label: 'Noirs & sombres' },
      { value: 'pastels', label: 'Pastels & doux' },
      { value: 'vifs', label: 'Couleurs vives' },
      { value: 'terreux', label: 'Tons terreux' },
      { value: 'bleus', label: 'Bleus & marines' },
    ],
  },
  {
    id: 'season',
    question: 'Pour quelle saison ?',
    type: 'single',
    options: [
      { value: 'printemps', label: 'Printemps' },
      { value: 'ete', label: 'Été' },
      { value: 'automne', label: 'Automne' },
      { value: 'hiver', label: 'Hiver' },
      { value: 'tout', label: 'Toutes saisons' },
    ],
  },
  {
    id: 'comfort',
    question: 'Ton niveau de confort prioritaire ?',
    type: 'single',
    options: [
      { value: 'tres-confort', label: 'Très confortable avant tout' },
      { value: 'equilibre', label: 'Équilibre confort / style' },
      { value: 'style', label: 'Le style prime' },
    ],
  },
  {
    id: 'preference',
    question: "Ta préférence d'achat ?",
    type: 'single',
    options: [
      { value: 'petit-prix', label: 'Petit prix' },
      { value: 'qualite', label: 'Qualité durable' },
      { value: 'tendance', label: 'Dernières tendances' },
      { value: 'premium', label: 'Premium & luxe accessible' },
      { value: 'ethique', label: 'Éthique & responsable' },
    ],
  },
]

export function StyleFinder() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const handleComplete = async (answers: Record<string, string | string[] | number>) => {
    setLoading(true)
    try {
      const response = await fetch('/api/recommend', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ module: 'style', answers }),
      })

      if (response.ok) {
        const data = await response.json()
        sessionStorage.setItem('recommendation', JSON.stringify({
          module: 'style',
          answers,
          ...data,
        }))
        router.push('/result/style')
      }
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <QuizStepper
      steps={STYLE_STEPS}
      onComplete={handleComplete}
      loading={loading}
      title="Style Finder"
      subtitle="Trouve le look qui te correspond vraiment."
    />
  )
}
