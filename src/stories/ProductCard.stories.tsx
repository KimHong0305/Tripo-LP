import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import ProductCard from '@/components/ProductCard'

const meta = {
  title: 'Components/ProductCard',
  component: ProductCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    image: {
      control: 'text',
      description: 'URL or path to the card background image.',
    },
    title: {
      control: 'text',
    },
    price: {
      control: 'text',
      description: 'Nightly price in euros, displayed after the euro symbol.',
    },
    description: {
      control: 'text',
    },
    className: {
      control: 'text',
    },
  },
  args: {
    image: '/paris.jpeg',
    title: 'Alpine Hideaway',
    price: '180',
    description: 'A quiet mountain retreat with panoramic views and a private terrace.',
  },
} satisfies Meta<typeof ProductCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const LongDescription: Story = {
  args: {
    title: 'Seaside House',
    price: '245',
    description:
      'Wake up to the sound of the sea in this spacious coastal home, with a private garden, sunlit rooms, and direct access to the beach.',
  },
}

export const CustomWidth: Story = {
  args: {
    className: 'w-80',
  },
}
