import { type FC } from 'react'
import IconHomeStar from '@/assets/icons/iconHomeStar.svg?react'
import IconClean from '@/assets/icons/iconClean.svg?react'
import IconComments from '@/assets/icons/iconComments.svg?react'
import IconPinCheck from '@/assets/icons/iconPinCheck.svg?react'
import IconDollar from '@/assets/icons/iconDollar.svg?react'
import { cn } from '@/utilities/ui'
import { formatNumber } from '@/utilities/common'

type Rating = {
  score: number
  label: string
}

const mappingIcon = (label: string) => {
  switch (label) {
    case 'Amenities':
      return <IconHomeStar />
    case 'Cleanliness':
      return <IconClean />
    case 'Communication':
      return <IconComments />
    case 'Location':
      return <IconPinCheck />
    case 'Value':
      return <IconDollar />
    default:
      return '❓'
  }
}

type Props = {
  rating: Rating[]
  type?: 'col' | 'row'
}

const ReviewRating: FC<Props> = ({ rating, type = 'row' }) => {
  return (
    <div className={cn(type === 'col' ? 'flex flex-col gap-4' : 'p-4 flex items-center gap-8')}>
      <div
        className={cn(
          type === 'col'
            ? 'flex flex-col items-start gap-1 w-85'
            : 'flex flex-col items-start gap-1 w-37.25',
        )}
      >
        <p className="font-medium">Overall Rating</p>
        <div className="flex flex-col-reverse items-start gap-1 w-full">
          {Array.from({ length: 5 }).map((_, index) => {
            return (
              <div className="flex items-center gap-1.5 w-full" key={index}>
                <p className="text-xs font-medium">{index + 1}</p>
                <div className="h-0.5 w-full flex-1 bg-neutral-100 rounded-full" />
              </div>
            )
          })}
        </div>
      </div>
      {rating.map((item, index) => (
        <div
          className={cn(
            type === 'col'
              ? 'flex items-center justify-between py-1'
              : 'flex flex-col items-center gap-1 pl-8 border-l border-neutral-100',
          )}
          key={index}
        >
          <div key={index} className="flex items-center gap-2 font-medium text-neutral-700">
            {mappingIcon(item.label)}
            <p>{item.label}</p>
          </div>
          <p className="text-neutral-800">{formatNumber(item.score)}</p>
        </div>
      ))}
    </div>
  )
}

export default ReviewRating
