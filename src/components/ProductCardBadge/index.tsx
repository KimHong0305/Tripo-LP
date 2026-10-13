import type { FC } from 'react'
import type { StaticImageData } from 'next/image'
import { cn } from '@/utilities/ui'
import { Media } from '@/components/Media'
import Rating from '@/components/Rating'
import FavoriteButton from '@/components/FavoriteButton'
import Button from '../Button'
type Props = {
  title: string
  star: number
  reviewCount: number
  isFavorite: boolean
  images: StaticImageData[]
  description?: string
  className?: string
  price: number
  onClick?: () => void
}

const ProductCardBadge: FC<Props> = ({
  title,
  star,
  reviewCount,
  isFavorite,
  images,
  className,
  description,
  price,
  onClick,
}) => {
  return (
    <div
      className={cn('relative w-74 flex flex-col rounded-lg bg-white drop-shadow-md', className)}
    >
      <Media
        src={images[0]}
        alt={title}
        imgClassName="h-[14.25rem] w-[18.5rem] rounded-t-lg object-cover"
        className=""
      />
      <div className="py-4 px-3 flex flex-col gap-2">
        <Rating reviewCount={reviewCount} num={star} />
        <p className="text-2xl font-semibold text-neutral-800">{title}</p>
        {description && <p className="text-sm text-neutral-700">{description}</p>}
        {onClick && (
          <Button
            disabled={false}
            loading={false}
            onClick={onClick}
            size="small"
            type="secondary"
            variant="filled"
            className="bg-emerald-600 rounded-full w-29"
          >
            Getaway Deal
          </Button>
        )}
        <p className="text-lg font-semibold text-neutral-800 self-end">
          <span className="text-sm font-normal text-neutral-300">per night </span>
          {onClick && (
            <span className="text-base font-medium text-neutral-300 line-through">
              ${price * 1.2}
            </span>
          )}{' '}
          ${price}
        </p>
      </div>
      <FavoriteButton isFavorite={isFavorite} className="absolute top-3 right-3" size="small" />
    </div>
  )
}

export default ProductCardBadge
