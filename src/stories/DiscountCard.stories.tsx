import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { fn } from 'storybook/test'

import DiscountCard from '@/components/DiscountCard'

const meta = {
  title: 'Components/DiscountCard',
  component: DiscountCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
    },
    description: {
      control: 'text',
    },
    seleted: {
      control: 'boolean',
      description: 'Whether the discount option is selected.',
    },
    onClick: {
      control: false,
    },
    className: {
      control: 'text',
    },
  },
  args: {
    label: 'Save 15%',
    description: 'Stay 7 nights or longer',
    seleted: false,
    onClick: fn(),
  },
} satisfies Meta<typeof DiscountCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Selected: Story = {
  args: {
    seleted: true,
  },
}

export const WithoutDescription: Story = {
  args: {
    label: 'Save 10%',
    description: undefined,
  },
}
