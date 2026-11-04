import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import parisImage from '../../public/paris.jpeg'
import thailandImage from '../../public/thailand.jpeg'
import { Gallery } from '@/components/Gallery'

const meta = {
  title: 'Components/Gallery',
  component: Gallery,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  args: {
    photos: [
      {
        image: parisImage,
        alt: 'Paris street and architecture',
        caption: 'Paris',
      },
      {
        image: thailandImage,
        alt: 'Landscape in Thailand',
        caption: 'Thailand',
      },
      {
        image: parisImage,
        alt: 'Paris street and architecture',
        caption: 'Paris',
      },
      {
        image: thailandImage,
        alt: 'Landscape in Thailand',
        caption: 'Thailand',
      },
      {
        image: parisImage,
        alt: 'Paris street and architecture',
        caption: 'Paris',
      },
      {
        image: thailandImage,
        alt: 'Landscape in Thailand',
        caption: 'Thailand',
      },
    ],
  },
} satisfies Meta<typeof Gallery>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
