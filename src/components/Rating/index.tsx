import { cn } from '@/utilities/ui'
import { FC } from 'react'
import { formatNumber } from '@/utilities/common'
import { ratingMapping } from '@/constants/common'

type Props = {
  num: number
  reviewCount: number
  className?: string
}

const Rating: FC<Props> = ({ num, reviewCount, className }) => {
  return (
    <div className={cn('flex items-center gap-1.5', className)}>
      <div
        className={cn(
          'w-8 h-6 rounded-[12px_0px_8px_12px] flex items-center justify-center text-sm font-medium bg-neutral-50 pl-0.5',
          ratingMapping.find((item) => item.value === num)?.color,
        )}
      >
        {formatNumber(num)}
      </div>
      <p
        className={cn(
          'text-xs font-medium',
          ratingMapping.find((item) => item.value === num)?.color,
        )}
      >
        {ratingMapping.find((item) => item.value === num)?.label}
      </p>
      <p className="text-[10px] font-medium text-neutral-300">({reviewCount} reviews)</p>
    </div>
  )
}

export default Rating
