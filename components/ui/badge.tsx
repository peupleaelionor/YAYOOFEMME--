import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'sponsored' | 'affiliate' | 'free' | 'premium'
  className?: string
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  const variants: Record<string, string> = {
    default: 'bg-[#F5F0E8] text-[#2C2C2C]',
    sponsored: 'bg-[#D4AF7A]/20 text-[#B8952A] border border-[#D4AF7A]/40',
    affiliate: 'bg-[#F5F0E8] text-[#8C7B6B]',
    free: 'bg-green-50 text-green-700',
    premium: 'bg-[#F2E8E4] text-[#A67060]',
  }

  return (
    <span className={cn(
      'inline-flex items-center px-2.5 py-0.5 text-xs font-medium rounded-full',
      variants[variant],
      className
    )}>
      {children}
    </span>
  )
}
