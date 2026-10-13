import { cn } from '@/utilities/ui'
import { type FC } from 'react'
import SuggestionLocationCard from './SuggestionLocationCard'
import IconTower from '@/assets/icons/iconTower.svg?react'
import IconLocation from '@/assets/icons/iconLocation.svg?react'
import IconShahyad from '@/assets/icons/iconShahyad.svg?react'

type Props = {
  open: boolean
  onClose: () => void
  className?: string
}

const content = [
  {
    label: 'Recent searches',
    options: [
      {
        title: 'Agu 14- 19 , 2 Guests',
        location: 'Barcelona, Spain',
        icon: <IconTower />,
      },
    ],
  },
  {
    label: 'Suggested destination',
    options: [
      {
        title: 'Find what’s around you',
        location: 'Nearby',
        icon: <IconLocation />,
      },
      {
        title: 'Best people you have ever seen',
        location: 'Tehran, Iran',
        icon: <IconShahyad />,
      },
    ],
  },
]

const SuggestionLocationModal: FC<Props> = ({ open, onClose, className }) => {
  if (!open) return null
  return (
    <div className={cn('modal flex flex-col gap-4 w-100.75 h-auto', className)}>
      {content.map((section) => (
        <div key={section.label}>
          <p className="text-sm">{section.label}</p>
          <div className="flex flex-col gap-2">
            {section.options.map((option) => (
              <SuggestionLocationCard
                key={option.title}
                title={option.title}
                location={option.location}
                icon={option.icon}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default SuggestionLocationModal
