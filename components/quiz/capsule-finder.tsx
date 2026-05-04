'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { QuizStepper, type QuizStep } from './quiz-stepper'

const CAPSULE_STEPS: QuizStep[] = [
  {
    id: 'morphology',
    question: 'Quelle est ta morphologie ?',
    type: 'single',
    options: [
      { value: 'sablier', label: 'Sablier (buste et hanches équilibrés)' },
      { value: 'poire', label: 'Poire (hanches plus larges que le buste)' },
      { value: 'pomme', label: 'Pomme (buste plus large, taille peu marquée)' },
      { value: 'rectangle', label: 'Rectangle (silhouette droite et athlétique)' },
      { value: 'invertee', label: 'Triangle inversé (épaules larges, hanches fines)' },
    ],
  },
  {
    id: 'lifestyle',
    question: 'Quel est ton mode de vie principal ?',
    type: 'single',
    options: [
      { value: 'bureau', label: 'Bureau & professionnel' },
      { value: 'actif', label: 'Actif & polyvalent' },
      { value: 'casual', label: 'Décontracté au quotidien' },
      { value: 'social', label: 'Sorties & vie sociale intense' },
      { value: 'voyage', label: 'Voyages fréquents' },
    ],
  },
  {
    id: 'style',
    question: 'Ton univers stylistique préféré ?',
    subtitle: 'Tu peux en choisir plusieurs',
    type: 'multiple',
    options: [
      { value: 'classique', label: 'Classique & intemporel' },
      { value: 'minimaliste', label: 'Minimaliste & épuré' },
      { value: 'boheme', label: 'Bohème & romantique' },
      { value: 'moderne', label: 'Moderne & urbain' },
      { value: 'casual-chic', label: 'Casual chic' },
      { value: 'tendance', label: 'Tendance & audacieux' },
    ],
  },
  {
    id: 'palette',
    question: 'Quelle palette de couleurs te correspond ?',
    type: 'single',
    options: [
      { value: 'neutres', label: 'Neutres essentiels (blanc, noir, beige, gris)' },
      { value: 'terreux', label: 'Tons terreux (camel, kaki, rouille)' },
      { value: 'pastels', label: 'Pastels & doux (rose, lavande, bleu ciel)' },
      { value: 'bold', label: 'Couleurs vives et affirmées' },
      { value: 'mixte', label: 'Mélange équilibré' },
    ],
  },
  {
    id: 'budget',
    question: 'Quel est ton budget total pour ce dressing capsule ?',
    type: 'single',
    options: [
      { value: 'moins-200', label: 'Moins de 200 €' },
      { value: '200-500', label: '200 – 500 €' },
      { value: '500-1000', label: '500 – 1 000 €' },
      { value: '1000-plus', label: 'Plus de 1 000 €' },
    ],
  },
  {
    id: 'priority',
    question: 'Ce que tu recherches en priorité dans ton dressing ?',
    type: 'single',
    options: [
      { value: 'versatilite', label: 'Polyvalence : 1 pièce, 10 looks' },
      { value: 'qualite', label: 'Qualité & durabilité sur le long terme' },
      { value: 'tendance', label: 'Être toujours dans la tendance' },
      { value: 'ethique', label: 'Éthique, responsable & durable' },
      { value: 'budget', label: 'Meilleur rapport qualité-prix' },
    ],
  },
  {
    id: 'gap',
    question: 'Qu&apos;est-ce qui manque le plus dans ton dressing actuel ?',
    type: 'single',
    options: [
      { value: 'basics', label: 'Des basiques solides (t-shirts, jeans, blazers)' },
      { value: 'soiree', label: 'Des pièces habillées pour les sorties' },
      { value: 'accessoires', label: 'Des accessoires qui changent tout' },
      { value: 'chaussures', label: 'Les bonnes paires de chaussures' },
      { value: 'coherence', label: 'De la cohérence entre mes pièces' },
    ],
  },
]

export function CapsuleFinder() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const handleComplete = async (answers: Record<string, string | string[] | number>) => {
    setLoading(true)
    try {
      const response = await fetch('/api/recommend', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ module: 'capsule', answers }),
      })

      if (response.ok) {
        const data = await response.json()
        sessionStorage.setItem('recommendation', JSON.stringify({
          module: 'capsule',
          answers,
          ...data,
        }))
        router.push('/result/capsule')
      }
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <QuizStepper
      steps={CAPSULE_STEPS}
      onComplete={handleComplete}
      loading={loading}
      title="Dressing Capsule"
      subtitle="30 pièces essentielles pour un dressing cohérent, stylé et rentable."
    />
  )
}
