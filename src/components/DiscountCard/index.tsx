import { cn } from '@/utilities/ui'
import { FC } from 'react'

type Props = {
  label: string
  description?: string
  seleted?: boolean
  onClick?: () => void
  className?: string
}

const DiscountCard: FC<Props> = ({ label, description, seleted, onClick, className }) => {
  return (
    <div
      className={cn(
        'cursor-pointer p-4.5 rounded-2xl border border-primary-500 w-74 h-38.5 flex flex-col items-start justify-start gap-4.5',
        seleted
          ? 'bg-primary-500 text-white hover:bg-primary-500 hover:text-white'
          : 'hover:bg-primary-50/50',
        className,
      )}
      onClick={onClick}
    >
      <p className="text-xl font-semibold">{label}</p>
      <p>{description}</p>
    </div>
  )
}

export default DiscountCard
