import { cva, VariantProps } from 'class-variance-authority'
import { FC, ButtonHTMLAttributes } from 'react'
import IconHeartOutline from '@/assets/icons/iconHeartOutline.svg?react'
import IconHeartFilled from '@/assets/icons/iconHeartFilled.svg?react'
import { cn } from '@/utilities/ui'

const favoriteButtonVariants = cva(``, {
  variants: {
    size: {
      small: 'h-6 w-6',
      medium: 'h-8 w-8',
    },
  },
  defaultVariants: {
    size: 'medium',
  },
})

type BaseProps = VariantProps<typeof favoriteButtonVariants> & {
  className?: string
  isFavorite?: boolean
}

type Props = BaseProps & ButtonHTMLAttributes<HTMLButtonElement>

const FavoriteButton: FC<Props> = ({ size, className, isFavorite, ...props }) => {
  return (
    <button
      className={cn(
        'cursor-pointer p-1 rounded-full bg-white',
        isFavorite ? 'text-pink-500' : 'text-neutral-800 hover:text-pink-500',
        className,
      )}
      {...props}
    >
      {isFavorite ? (
        <IconHeartFilled className={favoriteButtonVariants({ size })} />
      ) : (
        <IconHeartOutline className={favoriteButtonVariants({ size })} />
      )}
    </button>
  )
}

export default FavoriteButton
