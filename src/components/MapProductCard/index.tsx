import type { FC } from 'react'
import type { StaticImageData } from 'next/image'
import { cn } from '@/utilities/ui'
import { Media } from '@/components/Media'
import Star from '@/components/Star'
import Rating from '@/components/Rating'
import FavoriteButton from '@/components/FavoriteButton'
type Props = {
  title: string
  star: number
  reviewCount: number
  isFavorite: boolean
  images: StaticImageData[]
  className?: string
}

const MapProductCard: FC<Props> = ({ title, star, reviewCount, isFavorite, images, className }) => {
  return (
    <div
      className={cn('relative w-70 flex flex-col rounded-lg bg-white drop-shadow-md', className)}
    >
      <Media
        src={images[0]}
        alt={title}
        imgClassName="h-[11.25rem] w-[17.5rem] rounded-t-lg object-cover"
        className=""
      />
      <div className="py-4 px-3 flex flex-col gap-2">
        <p className="text-xl font-semibold text-neutral-800">{title}</p>
        <Star num={star} />
        <Rating reviewCount={reviewCount} num={star} />
      </div>
      <FavoriteButton isFavorite={isFavorite} className="absolute top-3 right-3" size="small" />
    </div>
  )
}

export default MapProductCard
