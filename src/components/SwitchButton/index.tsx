import { cn } from '@/utilities/ui'
import { cva, VariantProps } from 'class-variance-authority'
import type { FC, ReactNode } from 'react'

type OptionValue = number | string
type SwitchOption = ReactNode | { value: OptionValue; label: ReactNode }

const isLabeledOption = (
  option: SwitchOption,
): option is { value: OptionValue; label: ReactNode } =>
  typeof option === 'object' &&
  option !== null &&
  !Array.isArray(option) &&
  'value' in option &&
  'label' in option

const switchVariants = cva(`cursor-pointer`, {
  variants: {
    type: {
      primary: 'rounded-full px-4 py-2 font-medium',
      secondary: 'rounded-full p-2',
    },
    active: {
      true: '',
      false: '',
    },
  },
  compoundVariants: [
    {
      type: 'primary',
      active: true,
      className: 'bg-primary-500 text-white',
    },
    {
      type: 'primary',
      active: false,
      className: 'text-neutral-500',
    },
    {
      type: 'secondary',
      active: true,
      className: 'border border-neutral-800 text-neutral-800',
    },
    {
      type: 'secondary',
      active: false,
      className: 'text-neutral-300',
    },
  ],
  defaultVariants: {
    type: 'primary',
  },
})

type Props = VariantProps<typeof switchVariants> & {
  value?: OptionValue
  options: SwitchOption[]
  onChange?: (value: OptionValue) => void
}

const SwitchButton: FC<Props> = ({ value, options, onChange, type }) => {
  return (
    <div className="rounded-full border border-neutral-100 flex items-center gap-4 w-fit p-1">
      {options.map((option, index) => {
        const optionValue = isLabeledOption(option)
          ? option.value
          : typeof option === 'string' || typeof option === 'number'
            ? option
            : index
        const label = isLabeledOption(option) ? option.label : option

        return (
          <button
            key={`${optionValue}-${index}`}
            type="button"
            className={cn(switchVariants({ type, active: value === optionValue }))}
            onClick={() => onChange?.(optionValue)}
          >
            {label}
          </button>
        )
      })}
    </div>
  )
}

export default SwitchButton
