import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import type { StaticImageData } from 'next/image'

import ReservationCard from '@/components/ReservationCard'

const reservationImage: StaticImageData = {
  src: '/media/Arashiyama Bamboo Forest-600x750.jpg',
  width: 600,
  height: 750,
}

const meta = {
  title: 'Components/ReservationCard',
  component: ReservationCard,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
    },
    status: {
      control: 'text',
    },
    checkInDate: {
      control: 'text',
    },
    checkOutDate: {
      control: 'text',
    },
    guests: {
      control: { type: 'number', min: 1 },
    },
    id: {
      control: 'text',
    },
    imageUrl: {
      control: false,
    },
    selected: {
      control: 'boolean',
    },
    onClick: {
      control: false,
    },
  },
  args: {
    title: 'Arashiyama Riverside Hotel',
    status: 'Confirmed',
    checkInDate: 'Oct 12, 2026',
    checkOutDate: 'Oct 16, 2026',
    guests: 2,
    id: 'TR-2048',
    imageUrl: reservationImage,
    selected: false,
    onClick: () => {},
  },
  render: (args) => (
    <div className="w-full max-w-4xl">
      <ReservationCard {...args} />
    </div>
  ),
} satisfies Meta<typeof ReservationCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Selected: Story = {
  args: {
    selected: true,
  },
}
