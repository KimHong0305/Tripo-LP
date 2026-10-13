import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import TopPlace from '@/components/TopPlace'
import type { Place } from '@/payload-types'

const places: Place[] = [
  {
    id: 'ha-long-bay',
    name: 'Ha Long Bay',
    slug: 'ha-long-bay',
    country: 'vietnam',
    type: 'explore',
    image: {
      id: 'ha-long-bay-image',
      alt: 'Limestone islands in Ha Long Bay',
      url: '/website-template-OG.webp',
      width: 1200,
      height: 900,
      updatedAt: '2026-01-01T00:00:00.000Z',
      createdAt: '2026-01-01T00:00:00.000Z',
    },
    description: 'Cruise between the limestone islands and emerald waters of northern Vietnam.',
    updatedAt: '2026-01-01T00:00:00.000Z',
    createdAt: '2026-01-01T00:00:00.000Z',
  },
  {
    id: 'hoi-an',
    name: 'Hoi An Ancient Town',
    slug: 'hoi-an-ancient-town',
    country: 'vietnam',
    type: 'explore',
    image: {
      id: 'hoi-an-image',
      alt: 'Lantern-lit street in Hoi An',
      url: '/website-template-OG.webp',
      width: 1200,
      height: 900,
      updatedAt: '2026-01-01T00:00:00.000Z',
      createdAt: '2026-01-01T00:00:00.000Z',
    },
    description: 'Explore riverside lanes, historic merchant houses, and local markets.',
    updatedAt: '2026-01-01T00:00:00.000Z',
    createdAt: '2026-01-01T00:00:00.000Z',
  },
  {
    id: 'da-nang-beach',
    name: 'Da Nang Beach',
    slug: 'da-nang-beach',
    country: 'vietnam',
    type: 'beach',
    image: {
      id: 'da-nang-beach-image',
      alt: 'Coastline near Da Nang',
      url: '/website-template-OG.webp',
      width: 1200,
      height: 900,
      updatedAt: '2026-01-01T00:00:00.000Z',
      createdAt: '2026-01-01T00:00:00.000Z',
    },
    description: 'A long stretch of sand along the central Vietnamese coast.',
    updatedAt: '2026-01-01T00:00:00.000Z',
    createdAt: '2026-01-01T00:00:00.000Z',
  },
]

const meta = {
  title: 'Components/TopPlace',
  component: TopPlace,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  args: {
    places,
  },
} satisfies Meta<typeof TopPlace>

export default meta
type Story = StoryObj<typeof meta>

export const CountryPlaces: Story = {}

export const ExploreOnly: Story = {
  args: {
    places: places.filter((place) => place.type === 'explore'),
  },
}

export const BeachFirst: Story = {
  args: {
    places: [...places].reverse(),
  },
}

export const NoPlaces: Story = {
  args: {
    places: [],
  },
}
