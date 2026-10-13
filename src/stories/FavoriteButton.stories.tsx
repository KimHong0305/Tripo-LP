import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { fn } from 'storybook/test'

import FavoriteButton from '@/components/FavoriteButton'

const meta = {
  title: 'Components/FavoriteButton',
  component: FavoriteButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium'],
    },
    isFavorite: {
      control: 'boolean',
    },
    className: {
      control: 'text',
    },
    onClick: {
      control: false,
    },
    'aria-label': {
      control: 'text',
    },
  },
  args: {
    size: 'medium',
    isFavorite: false,
    'aria-label': 'Add to favorites',
    onClick: fn(),
  },
} satisfies Meta<typeof FavoriteButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Favorited: Story = {
  args: {
    isFavorite: true,
    'aria-label': 'Remove from favorites',
  },
}

export const Small: Story = {
  args: {
    size: 'small',
  },
}
