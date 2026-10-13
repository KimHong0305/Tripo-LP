import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import BedChip from '@/components/BedChip'

const meta = {
  title: 'Components/BedChip',
  component: BedChip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    single: {
      control: { type: 'number', min: 0, max: 10 },
      description: 'Number of single beds.',
    },
    double: {
      control: { type: 'number', min: 0, max: 10 },
      description: 'Number of double beds.',
    },
    className: {
      control: 'text',
    },
  },
  args: {
    single: 2,
    double: 1,
  },
} satisfies Meta<typeof BedChip>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const SingleBeds: Story = {
  args: {
    single: 2,
    double: 0,
  },
}

export const DoubleBeds: Story = {
  args: {
    single: 0,
    double: 2,
  },
}

export const MixedBeds: Story = {
  args: {
    single: 2,
    double: 1,
  },
}
