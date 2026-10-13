import { cn } from '@/utilities/ui'
import type { FC } from 'react'
import IconUser from '@/assets/icons/iconUser.svg?react'
type Props = {
  size: number
  className?: string
}

const PersonChip: FC<Props> = ({ size, className }) => {
  return (
    <div className={cn('py-3 px-4 flex flex-col item-center justify-center gap-1', className)}>
      <div className="flex flex-wrap justify-center">
        {Array.from({ length: size }).map((_, index) => (
          <IconUser key={index} />
        ))}
      </div>
      <p className="text-center font-medium">
        {size} Person{size > 1 ? 's' : ''}
      </p>
    </div>
  )
}

export default PersonChip
