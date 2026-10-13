import { useState, type ComponentProps } from 'react'
import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { fn } from 'storybook/test'

import DateModal from '@/components/DateModal'

type DateModalProps = ComponentProps<typeof DateModal>

const InteractiveDateModal = (args: DateModalProps) => {
  const [date, setDate] = useState(args.date)
  const [open, setOpen] = useState(args.open)

  if (!open) {
    return (
      <button type="button" onClick={() => setOpen(true)}>
        Open date picker
      </button>
    )
  }

  return (
    <DateModal
      {...args}
      date={date}
      open={open}
      onClose={() => {
        setOpen(false)
        args.onClose()
      }}
      onDateChange={(nextDate) => {
        setDate(nextDate)
        args.onDateChange(nextDate)
      }}
    />
  )
}

const today = new Date()
today.setHours(0, 0, 0, 0)

const meta = {
  title: 'Components/DateModal',
  component: DateModal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    open: { control: false },
    onClose: { control: false },
    date: { control: false },
    onDateChange: { control: false },
    className: { control: false },
  },
  args: {
    open: true,
    date: today,
    onClose: fn(),
    onDateChange: fn(),
  },
  render: (args) => <InteractiveDateModal {...args} />,
} satisfies Meta<typeof DateModal>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
