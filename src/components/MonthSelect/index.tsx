import { cn } from '@/utilities/ui'
import { type FC } from 'react'
import IconCalendar from '@/assets/icons/iconCalendar.svg?react'
import IconCalendarCheck from '@/assets/icons/iconCalendarCheck.svg?react'

type Props = {
  month: string
  year: number
  selected: boolean
  onMonthChange: (month: string, year: number) => void
}

const MonthSelect: FC<Props> = ({ month, year, selected, onMonthChange }) => {
  return (
    <button
      type="button"
      className={cn(
        'flex h-31.5 w-31.5 cursor-pointer flex-col items-center justify-center gap-2 rounded-2xl border border-neutral-100 hover:bg-primary-50',
        selected && 'border-primary-400 hover:bg-white text-primary-500',
      )}
      onClick={() => onMonthChange(month, year)}
    >
      {selected ? <IconCalendarCheck /> : <IconCalendar />}
      <span className={cn('font-medium text-neutral-700', selected && 'text-primary-500')}>
        {month}
      </span>
      <span className={cn('text-neutral-400', selected && 'text-primary-500')}>{year}</span>
    </button>
  )
}

export default MonthSelect
