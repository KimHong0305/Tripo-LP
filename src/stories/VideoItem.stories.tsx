import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import VideoItem from '@/components/VideoItem'
const meta = {
  title: 'Components/VideoItem',
  component: VideoItem,
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
    star: {
      control: { type: 'number', min: 0, max: 5, step: 1 },
    },
    videoUrl: {
      control: 'text',
    },
    className: {
      control: 'text',
    },
  },
  args: {
    image: '/thailand.jpeg',
    title: 'Website Template',
    star: 4,
    videoUrl: 'https://example.com/video',
  },
} satisfies Meta<typeof VideoItem>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const FiveStarRating: Story = {
  args: {
    star: 5,
  },
}

export const NoRating: Story = {
  args: {
    star: 0,
  },
}

export const Wide: Story = {
  args: {
    className: 'w-64',
  },
}
