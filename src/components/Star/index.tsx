import type { FC } from 'react'
import IconStarOutline from '@/assets/icons/iconStarOutline.svg?react'
import IconStarFilled from '@/assets/icons/iconStarFilled.svg?react'
import { cn } from '@/utilities/ui'
import { cva, type VariantProps } from 'class-variance-authority'
import { useRating } from '@/hooks/useRating'

const starVariants = cva(`text-yellow-400`, {
  variants: {
    size: {
      small: 'h-3.5 w-3.5',
      medium: 'h-4.5 w-4.5',
      large: 'h-6 w-6',
    },
  },
  defaultVariants: {
    size: 'medium',
  },
})

type Props = VariantProps<typeof starVariants> & {
  num?: number
  full?: boolean
  className?: string
  readonly?: boolean
}

const Star: FC<Props> = ({ num = 0, full = false, size, className, readonly }) => {
  const { rating, toggleRating } = useRating(num)

  return (
    <div className="flex items-center gap-0.5 ">
      {Array.from({ length: full ? 5 : num }).map((_, index) => {
        const Icon = index < rating ? IconStarFilled : IconStarOutline

        return (
          <button
            key={index}
            type="button"
            className={cn(readonly ? '' : 'cursor-pointer hover:scale-115')}
            disabled={readonly}
            aria-label={`Rate ${index + 1} out of 5`}
            aria-pressed={index < rating}
            onClick={() => toggleRating(index)}
          >
            <Icon className={cn(starVariants({ size }), className)} />
          </button>
        )
      })}
    </div>
  )
}

export default Star
