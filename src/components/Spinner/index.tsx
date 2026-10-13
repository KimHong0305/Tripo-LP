import { cn } from '@/utilities/ui'
import { cva, VariantProps } from 'class-variance-authority'
import { FC } from 'react'

const spinnerVariants = cva(`border-3 rounded-full animate-spin`, {
  variants: {
    color: {
      blue: 'border-neutral-50 border-t-primary-700',
      black: 'border-neutral-50 border-t-neutral-700',
      grey: 'border-neutral-100 border-t-neutral-400',
    },
    size: {
      small: 'h-5 w-5',
      medium: 'h-6 w-6',
      large: 'h-10 w-10',
      extraLarge: 'h-15 w-15',
    },
  },
  defaultVariants: {
    color: 'blue',
    size: 'medium',
  },
})

type Props = VariantProps<typeof spinnerVariants> & {
  className?: string
}

const Spinner: FC<Props> = ({ size, color, className }) => {
  return <div className={cn(spinnerVariants({ size, color }), className)} />
}

export default Spinner
