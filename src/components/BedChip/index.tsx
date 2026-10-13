import { FC } from 'react'
import IconSingleBed from '@/assets/icons/iconSingleBed.svg?react'
import IconDubleBeg from '@/assets/icons/iconDubleBeg.svg?react'
import { cn } from '@/utilities/ui'
type Props = {
  single: number
  double: number
  className?: string
}

const BedChip: FC<Props> = ({ single, double, className }) => {
  return (
    <div className={cn('flex flex-col justify-center items-center gap-1.5 py-3 px-4', className)}>
      <div className="flex items-center gap-3">
        <div className="flex items-center">
          {Array.from({ length: double }).map((_, index) => (
            <IconDubleBeg key={index} />
          ))}
        </div>
        <div className="flex items-center">
          {Array.from({ length: single }).map((_, index) => (
            <IconSingleBed key={index} />
          ))}
        </div>
      </div>
      <p>
        {double > 0 && `${double} Double Bed${double !== 1 ? 's' : ''}`}
        {double > 0 && single > 0 ? ', ' : ''}
        {single > 0 && `${single} Single Bed${single !== 1 ? 's' : ''}`}
      </p>
    </div>
  )
}

export default BedChip
