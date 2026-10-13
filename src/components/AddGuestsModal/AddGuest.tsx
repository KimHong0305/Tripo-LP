import { type FC } from 'react'
import { cn } from '@/utilities/ui'
import IconMinus from '@/assets/icons/iconMinus.svg?react'
import IconPlus from '@/assets/icons/iconPlus.svg?react'
type Props = {
  label: string
  description?: string
  value: string
  onChange: (value: string) => void
  className?: string
}

const AddGuest: FC<Props> = ({ label, description, value, className, onChange }) => {
  return (
    <div className={cn('p-4 flex items-center justify-between w-full', className)}>
      <div className="flex flex-col gap-1">
        <p className="font-medium text-neutral-700">{label}</p>
        <p className="text-sm text-neutral-300">{description}</p>
      </div>
      <div className="flex items-center gap-4">
        <button
          className="cursor-pointer"
          onClick={() => onChange((parseInt(value) - 1).toString())}
        >
          <IconMinus />
        </button>
        <p className="text-neutral-700">{value}</p>
        <button
          className="cursor-pointer"
          onClick={() => onChange((parseInt(value) + 1).toString())}
        >
          <IconPlus />
        </button>
      </div>
    </div>
  )
}

export default AddGuest
