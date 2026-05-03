'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { QuizStepper, type QuizStep } from './quiz-stepper'

const GIFT_STEPS: QuizStep[] = [
  {
    id: 'recipient',
    question: 'Pour qui est ce cadeau ?',
    type: 'single',
    options: [
      { value: 'moi', label: 'Pour moi-même' },
      { value: 'amie', label: 'Pour une amie' },
      { value: 'mere', label: 'Pour ma mère / belle-mère' },
      { value: 'soeur', label: 'Pour ma sœur / cousine' },
      { value: 'collegue', label: 'Pour une collègue' },
      { value: 'conjoint', label: 'De la part de mon conjoint' },
    ],
  },
  {
    id: 'occasion',
    question: "Quelle est l'occasion ?",
    type: 'single',
    options: [
      { value: 'anniversaire', label: 'Anniversaire' },
      { value: 'noel', label: 'Noël' },
      { value: 'saint-valentin', label: 'Saint-Valentin' },
      { value: 'fete-des-meres', label: "Fête des mères" },
      { value: 'naissance', label: 'Naissance / baptême' },
      { value: 'mariage', label: 'Mariage / PACS' },
      { value: 'sans-occasion', label: 'Juste parce que 💕' },
    ],
  },
  {
    id: 'budget',
    question: 'Ton budget cadeau ?',
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
    id: 'style',
    question: 'Le style de la personne ?',
    type: 'single',
    options: [
      { value: 'classique', label: 'Classique & élégante' },
      { value: 'tendance', label: 'Tendance & moderne' },
      { value: 'boheme', label: 'Bohème & naturelle' },
      { value: 'sport', label: 'Active & décontractée' },
      { value: 'luxe', label: 'Amatrice de luxe' },
      { value: 'inconnue', label: 'Je ne sais pas trop' },
    ],
  },
  {
    id: 'categories',
    question: 'Quelles catégories t\'intéressent ?',
    subtitle: 'Tu peux en choisir plusieurs',
    type: 'multiple',
    options: [
      { value: 'mode', label: 'Mode & vêtements' },
      { value: 'bijoux', label: 'Bijoux & accessoires' },
      { value: 'beaute', label: 'Beauté & soins' },
      { value: 'parfum', label: 'Parfum' },
      { value: 'maison', label: 'Maison & déco' },
      { value: 'self-care', label: 'Well-being & self-care' },
    ],
  },
]

export function GiftFinder() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const handleComplete = async (answers: Record<string, string | string[] | number>) => {
    setLoading(true)
    try {
      const response = await fetch('/api/recommend', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ module: 'gift', answers }),
      })

      if (response.ok) {
        const data = await response.json()
        sessionStorage.setItem('recommendation', JSON.stringify({
          module: 'gift',
          answers,
          ...data,
        }))
        router.push('/result/gift')
      }
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <QuizStepper
      steps={GIFT_STEPS}
      onComplete={handleComplete}
      loading={loading}
      title="Gift Finder"
      subtitle="Trouve le cadeau parfait en moins de 2 minutes."
    />
  )
}
