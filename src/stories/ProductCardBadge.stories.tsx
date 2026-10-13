import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import ProductCardBadge from '@/components/ProductCardBadge'
import parisImage from '../../public/paris.jpeg'

const meta = {
  title: 'Components/ProductCardBadge',
  component: ProductCardBadge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    title: 'A Parisian townhouse with a garden',
    star: 4.8,
    reviewCount: 128,
    isFavorite: false,
    images: [parisImage],
    description: 'A quiet city retreat with a private garden and sunlit rooms.',
    price: 180,
  },
} satisfies Meta<typeof ProductCardBadge>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Favorite: Story = {
  args: {
    isFavorite: true,
  },
}

export const LongDescription: Story = {
  args: {
    description:
      'Stay in a spacious Parisian townhouse with a private garden, beautifully restored interiors, a fully equipped kitchen, and easy access to neighborhood cafes and galleries.',
  },
}
