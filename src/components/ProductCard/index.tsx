import { FC } from 'react'
import { cn } from '@/utilities/ui'
import { formatPrice } from '@/utilities/common'
type Props = {
  image: string
  title: string
  price: number
  currency: string
  description?: string
  className?: string
  onClick?: () => void
}

const ProductCard: FC<Props> = ({
  image,
  title,
  price,
  description,
  className,
  onClick,
  currency,
}) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        'cursor-pointer flex flex-col justify-end items-start px-4 py-6 gap-2',
        'w-74 h-130 rounded-2xl bg-cover bg-center bg-[linear-gradient(180deg,rgba(0,0,0,0)_55.1%,rgba(0,0,0,0.85)_87.79%)] shadow-[0px_23px_9px_rgba(0,0,0,0.01),0px_13px_8px_rgba(0,0,0,0.05),0px_6px_6px_rgba(0,0,0,0.09),0px_1px_3px_rgba(0,0,0,0.1)]',
        className,
      )}
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 55.1%, rgba(0, 0, 0, 0.85) 87.79%), url("${image}")`,
      }}
    >
      <p className="text-3xl text-neutral-50 font-semibold">{title}</p>
      <p className="text-lg text-neutral-50 font-medium">
        From <span className="text-warning-500">{formatPrice(price, currency)}/night</span>
      </p>
      <p className="text-sm text-neutral-50">{description}</p>
    </div>
  )
}

export default ProductCard
