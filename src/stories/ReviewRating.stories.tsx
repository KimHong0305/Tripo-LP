import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import ReviewRating from '@/components/ReviewRating'

const meta = {
  title: 'Components/ReviewRating',
  component: ReviewRating,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    rating: [
      { label: 'Amenities', score: 4.8 },
      { label: 'Cleanliness', score: 4.9 },
      { label: 'Communication', score: 5 },
      { label: 'Location', score: 4.7 },
      { label: 'Value', score: 4.6 },
    ],
  },
} satisfies Meta<typeof ReviewRating>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
