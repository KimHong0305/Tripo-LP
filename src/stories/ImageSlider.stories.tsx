import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import ImageSlider from '@/components/ImageSlider'
import parisImage from '../../public/paris.jpeg'
import thailandImage from '../../public/thailand.jpeg'

const meta = {
  title: 'Components/ImageSlider',
  component: ImageSlider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    images: [parisImage, thailandImage],
  },
} satisfies Meta<typeof ImageSlider>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const SingleImage: Story = {
  args: {
    images: [parisImage],
  },
}
