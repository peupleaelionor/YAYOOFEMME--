'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export interface QuizStep {
  id: string
  question: string
  subtitle?: string
  type: 'single' | 'multiple' | 'range' | 'text'
  options?: Array<{ value: string; label: string; emoji?: string }>
  optional?: boolean
}

interface QuizStepperProps {
  steps: QuizStep[]
  onComplete: (answers: Record<string, string | string[] | number>) => void
  loading?: boolean
  title: string
  subtitle?: string
}

export function QuizStepper({ steps, onComplete, loading, title, subtitle }: QuizStepperProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string | string[] | number>>({})

  const step = steps[currentStep]
  const progress = (currentStep / steps.length) * 100
  const isLast = currentStep === steps.length - 1

  const handleAnswer = (value: string) => {
    if (step.type === 'multiple') {
      const current = (answers[step.id] as string[]) ?? []
      const updated = current.includes(value)
        ? current.filter(v => v !== value)
        : [...current, value]
      setAnswers(prev => ({ ...prev, [step.id]: updated }))
    } else {
      setAnswers(prev => ({ ...prev, [step.id]: value }))
      if (!isLast) {
        setTimeout(() => setCurrentStep(s => s + 1), 150)
      }
    }
  }

  const handleNext = () => {
    if (isLast) {
      onComplete(answers)
    } else {
      setCurrentStep(s => s + 1)
    }
  }

  const handleBack = () => {
    setCurrentStep(s => s - 1)
  }

  const answerValue = answers[step.id]
  const canProceed = step.optional === true ||
    (answerValue !== undefined && answerValue !== '' && !(Array.isArray(answerValue) && answerValue.length === 0))

  return (
    <div className="max-w-2xl mx-auto">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="font-serif text-3xl md:text-4xl text-[#1A1A1A] mb-3">{title}</h1>
        {subtitle && <p className="text-[#8C7B6B]">{subtitle}</p>}
      </div>

      {/* Progress */}
      <div className="mb-8">
        <div className="flex justify-between text-xs text-[#8C7B6B] mb-2">
          <span>Question {currentStep + 1} sur {steps.length}</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="h-1.5 bg-[#F5F0E8] rounded-full overflow-hidden">
          <div
            className="h-full bg-[#C9978A] rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="card p-8 mb-6 animate-[slideUp_0.4s_ease-out]">
        <h2 className="font-serif text-xl md:text-2xl text-[#1A1A1A] mb-2">{step.question}</h2>
        {step.subtitle && <p className="text-sm text-[#8C7B6B] mb-6">{step.subtitle}</p>}
        {!step.subtitle && <div className="mb-6" />}

        {step.type === 'text' ? (
          <input
            type="text"
            className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#EDE4D6] rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-[#C9978A]/30 focus:border-[#C9978A]"
            placeholder="Ta réponse..."
            value={(answers[step.id] as string) ?? ''}
            onChange={e => setAnswers(prev => ({ ...prev, [step.id]: e.target.value }))}
          />
        ) : (
          <div className={cn(
            'grid gap-3',
            step.options && step.options.length > 4 ? 'grid-cols-2' : 'grid-cols-1'
          )}>
            {step.options?.map((option) => {
              const isSelected = step.type === 'multiple'
                ? ((answers[step.id] as string[]) ?? []).includes(option.value)
                : answers[step.id] === option.value

              return (
                <button
                  key={option.value}
                  onClick={() => handleAnswer(option.value)}
                  className={cn(
                    'flex items-center gap-3 px-4 py-3.5 rounded-2xl border text-left text-sm transition-all duration-150 cursor-pointer',
                    isSelected
                      ? 'bg-[#1A1A1A] text-[#FAF8F5] border-[#1A1A1A]'
                      : 'bg-[#FAF8F5] border-[#EDE4D6] text-[#2C2C2C] hover:border-[#1A1A1A]/30 hover:bg-[#F5F0E8]'
                  )}
                >
                  {option.emoji && <span className="text-lg">{option.emoji}</span>}
                  <span className="font-medium">{option.label}</span>
                </button>
              )
            })}
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between">
        {currentStep > 0 ? (
          <Button variant="ghost" onClick={handleBack}>Retour</Button>
        ) : (
          <div />
        )}

        {(step.type === 'multiple' || step.type === 'text' || isLast) && (
          <Button
            onClick={handleNext}
            disabled={!canProceed || loading}
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <span className="w-4 h-4 border-2 border-[#FAF8F5]/30 border-t-[#FAF8F5] rounded-full animate-spin" />
                Calcul en cours...
              </span>
            ) : isLast ? (
              'Voir mes recommandations'
            ) : (
              'Continuer'
            )}
          </Button>
        )}
      </div>
    </div>
  )
}
