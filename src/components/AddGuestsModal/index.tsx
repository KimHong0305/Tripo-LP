import { type FC } from 'react'
import CloseButton from '@/components/CloseButton'
import { cn } from '@/utilities/ui'
import AddGuest from './AddGuest'

const guestsOptions = [
  {
    label: 'Adults',
    description: 'Age +17',
    value: '0',
  },
  {
    label: 'Children',
    description: 'Age 0 to 17',
    value: '0',
  },
  {
    label: 'Pets',
    description: '',
    value: '0',
  },
]

type Props = {
  open: boolean
  onClose: () => void
  guests: string
  onGuestsChange: (guests: string) => void
  className?: string
}

const AddGuestsModal: FC<Props> = ({ open, onClose, guests, onGuestsChange, className }) => {
  if (!open) return null
  return (
    <div className={cn('modal w-80 h-auto', className)}>
      <div className="w-full h-full relative flex flex-col items-center gap-4">
        <CloseButton className="absolute -top-2 -right-1" onClick={onClose} />
        {guestsOptions.map((option) => (
          <AddGuest
            key={option.label}
            label={option.label}
            description={option.description}
            value={option.value}
            onChange={onGuestsChange}
          />
        ))}
      </div>
    </div>
  )
}

export default AddGuestsModal
