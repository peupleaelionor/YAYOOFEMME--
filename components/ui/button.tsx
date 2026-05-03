import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'
import { forwardRef } from 'react'

const buttonVariants = cva(
  'inline-flex items-center justify-center font-medium transition-all duration-200 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 cursor-pointer',
  {
    variants: {
      variant: {
        default: 'bg-[#1A1A1A] text-[#FAF8F5] hover:bg-[#2C2C2C] focus-visible:ring-[#1A1A1A]',
        outline: 'border border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-[#FAF8F5]',
        accent: 'bg-[#C9978A] text-white hover:bg-[#A67060] focus-visible:ring-[#C9978A]',
        ghost: 'text-[#1A1A1A] hover:bg-[#F5F0E8]',
        link: 'text-[#1A1A1A] underline-offset-4 hover:underline',
      },
      size: {
        sm: 'h-9 px-4 text-xs rounded-full',
        default: 'h-11 px-6 text-sm rounded-full',
        lg: 'h-14 px-8 text-base rounded-full',
        icon: 'h-10 w-10 rounded-full',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
