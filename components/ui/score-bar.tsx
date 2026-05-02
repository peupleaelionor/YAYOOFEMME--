import { cn } from '@/lib/utils'

interface ScoreBarProps {
  score: number
  label: string
  max?: number
  className?: string
}

export function ScoreBar({ score, label, max = 100, className }: ScoreBarProps) {
  const percentage = Math.min(100, (score / max) * 100)

  return (
    <div className={cn('space-y-1', className)}>
      <div className="flex justify-between text-xs text-[#8C7B6B]">
        <span>{label}</span>
        <span>{score}/{max}</span>
      </div>
      <div className="h-1.5 bg-[#F5F0E8] rounded-full overflow-hidden">
        <div
          className="h-full bg-[#C9978A] rounded-full transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  )
}
