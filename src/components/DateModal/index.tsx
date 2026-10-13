'use client'
import { cn } from '@/utilities/ui'
import { useState, type FC } from 'react'
import CloseButton from '@/components/CloseButton'
import SwitchButton from '../SwitchButton'
import { DayPicker } from 'react-day-picker'
import 'react-day-picker/dist/style.css'
import styles from '@/assets/styles/DateCalendar.module.css'
import Chip from '@/components/Chip'
import MonthSelect from '../MonthSelect'

const dateOptions = ['Exact Date', '1 Day', '2 Days', '3 Days', '7 Days']
const flexibleOptions = ['Weekend', 'Weekday', 'Month']

type Props = {
  open: boolean
  onClose: () => void
  date: Date
  onDateChange: (date: Date) => void
  className?: string
}

const DateModal: FC<Props> = ({ open, onClose, date, onDateChange, className }) => {
  const [selectedOption, setSelectedOption] = useState('Date')
  const [selectedDateOption, setSelectedDateOption] = useState('Exact Date')
  const [selectedFlexibleOption, setSelectedFlexibleOption] = useState('Weekend')
  const [selectedMonth, setSelectedMonth] = useState(() => {
    const now = new Date()
    return `${now.getFullYear()}-${now.getMonth()}`
  })
  const now = new Date()
  const monthOptions = Array.from({ length: 6 }, (_, index) => {
    const monthDate = new Date(now.getFullYear(), now.getMonth() + index, 1)
    return {
      key: `${monthDate.getFullYear()}-${monthDate.getMonth()}`,
      month: monthDate.toLocaleString('en-US', { month: 'long' }),
      year: monthDate.getFullYear(),
    }
  })
  if (!open) return null
  return (
    <div className={cn('modal w-221 h-137.5', className)}>
      <div className="w-full h-full relative flex flex-col items-center gap-5.75">
        <CloseButton className="absolute top-2 right-2" onClick={onClose} />
        <SwitchButton
          onChange={() => setSelectedOption(selectedOption === 'Date' ? 'Flexible' : 'Date')}
          options={['Date', 'Flexible']}
          type="primary"
          value={selectedOption}
        />
        {selectedOption === 'Date' ? (
          <>
            <DayPicker
              className={styles.calendar}
              mode="single"
              required
              selected={date}
              onSelect={onDateChange}
              showOutsideDays
              disabled={{ before: new Date() }}
              numberOfMonths={2}
            />
            <div className="flex items-center gap-2.5">
              {dateOptions.map((option) => (
                <Chip
                  active={selectedDateOption === option}
                  iconOnly={false}
                  label={option}
                  size="small"
                  type="black"
                  onClick={() => setSelectedDateOption(option)}
                />
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-col gap-4 items-center">
              <p className="font-medium">How long would you like to stay?</p>
              <div className="flex items-center gap-2.5">
                {flexibleOptions.map((option) => (
                  <Chip
                    active={selectedFlexibleOption === option}
                    iconOnly={false}
                    label={option}
                    size="small"
                    type="black"
                    onClick={() => setSelectedFlexibleOption(option)}
                  />
                ))}
              </div>
            </div>
            <div className="mt-6 flex flex-col items-center gap-4">
              <p className="font-medium">Go anytime</p>
              <div className="flex items-center gap-4 overflow-hidden w-full">
                {monthOptions.map((option) => (
                  <MonthSelect
                    key={option.key}
                    month={option.month}
                    year={option.year}
                    selected={selectedMonth === `${option.year}-${option.month}`}
                    onMonthChange={(month, year) => setSelectedMonth(`${year}-${month}`)}
                  />
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default DateModal
