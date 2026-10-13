import { type FC } from 'react'
import { cn } from '@/utilities/ui'

type Props = {
  title: string
  location: string
  icon: React.ReactNode
  className?: string
}

const SuggestionLocationCard: FC<Props> = ({ title, location, icon, className }) => {
  return (
    <div
      className={cn(
        'cursor-pointer w-full flex items-center gap-4 hover:bg-primary-50 rounded-xl py-2 px-4',
        className,
      )}
    >
      <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center">
        {icon}
      </div>
      <div className="flex flex-col">
        <p className="text-sm text-neutral-700 font-medium">{title}</p>
        <p className="font-medium">{location}</p>
      </div>
    </div>
  )
}

export default SuggestionLocationCard
