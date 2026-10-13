import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import MapProductCard from '@/components/MapProductCard'
import parisImage from '../../public/paris.jpeg'

const meta = {
  title: 'Components/MapProductCard',
  component: MapProductCard,
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
  },
} satisfies Meta<typeof MapProductCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Favorite: Story = {
  args: {
    isFavorite: true,
  },
}
