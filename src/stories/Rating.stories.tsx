import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import Rating from '@/components/Rating'

const meta = {
  title: 'Components/Rating',
  component: Rating,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    num: {
      control: { type: 'number', min: 1, max: 5, step: 1 },
      description: 'Rating score from 1 to 5.',
    },
    reviewCount: {
      control: { type: 'number', min: 0 },
      description: 'Number of reviews.',
    },
    className: {
      control: 'text',
    },
  },
  args: {
    num: 5,
    reviewCount: 128,
  },
} satisfies Meta<typeof Rating>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Good: Story = {
  args: {
    num: 4,
    reviewCount: 64,
  },
}

export const Average: Story = {
  args: {
    num: 3,
    reviewCount: 23,
  },
}

export const Poor: Story = {
  args: {
    num: 2,
    reviewCount: 8,
  },
}
