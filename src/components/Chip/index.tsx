import { FC } from 'react'
import { cva, VariantProps } from 'class-variance-authority'
import { cn } from '@/utilities/ui'

const chipVariants = cva(`cursor-pointer rounded-full flex items-center gap-2`, {
  variants: {
    type: {
      black: 'border border-neutral-200 text-neutral-700 hover:border-neutral-700',
      fullBack: 'border border-neutral-900 text-neutral-900 hover:bg-neutral-50',
    },
    iconOnly: {
      true: '',
      false: '',
    },
    active: {
      true: '',
      false: '',
    },
    size: {
      small: 'text-sm',
      medium: 'text-base font-medium',
    },
  },
  compoundVariants: [
    {
      size: 'small',
      iconOnly: true,
      className: 'p-2',
    },
    {
      size: 'medium',
      iconOnly: true,
      className: 'p-3',
    },
    {
      size: 'small',
      iconOnly: false,
      className: 'px-4 py-1',
    },
    {
      size: 'medium',
      iconOnly: false,
      className: 'px-4 py-3',
    },
    {
      type: 'black',
      active: true,
      className: 'border-[0.0938rem] border-neutral-900 bg-neutral-50 text-neutral-900',
    },
    {
      type: 'fullBack',
      active: true,
      className: 'text-white bg-neutral-900 hover:text-white hover:bg-neutral-900',
    },
  ],
  defaultVariants: {
    type: 'black',
    iconOnly: false,
    active: false,
    size: 'medium',
  },
})

type Props = VariantProps<typeof chipVariants> & {
  label?: string
  icon?: React.ReactNode
  className?: string
  onClick?: () => void
}

const Chip: FC<Props> = ({ size, active, label, icon, type, iconOnly, className, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={Boolean(active)}
      className={cn(chipVariants({ type, iconOnly, size, active }), className)}
    >
      {icon}
      {label}
    </button>
  )
}

export default Chip
