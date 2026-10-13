import { useState, type ComponentProps } from 'react'
import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { fn } from 'storybook/test'

import AddGuestsModal from '@/components/AddGuestsModal'

type AddGuestsModalProps = ComponentProps<typeof AddGuestsModal>

const InteractiveAddGuestsModal = (args: AddGuestsModalProps) => {
  const [guests, setGuests] = useState(args.guests)
  const [open, setOpen] = useState(args.open)

  if (!open) {
    return (
      <button type="button" onClick={() => setOpen(true)}>
        Open guest picker
      </button>
    )
  }

  return (
    <AddGuestsModal
      {...args}
      guests={guests}
      open={open}
      onClose={() => {
        setOpen(false)
        args.onClose()
      }}
      onGuestsChange={(nextGuests) => {
        setGuests(nextGuests)
        args.onGuestsChange(nextGuests)
      }}
    />
  )
}

const meta = {
  title: 'Components/AddGuestsModal',
  component: AddGuestsModal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    open: { control: false },
    onClose: { control: false },
    guests: { control: 'text' },
    onGuestsChange: { control: false },
    className: { control: false },
  },
  args: {
    open: true,
    guests: '2',
    onClose: fn(),
    onGuestsChange: fn(),
  },
  render: (args) => <InteractiveAddGuestsModal {...args} />,
} satisfies Meta<typeof AddGuestsModal>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
