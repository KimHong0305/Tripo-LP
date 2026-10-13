import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { fn } from 'storybook/test'

import PlayButton from '@/components/PlayButton'

const meta = {
  title: 'Components/PlayButton',
  component: PlayButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: 'text',
      description: 'Additional classes for color and styling.',
    },
    onClick: {
      control: false,
    },
    title: {
      control: 'text',
    },
    'aria-label': {
      control: 'text',
    },
  },
  args: {
    'aria-label': 'Play',
    onClick: fn(),
  },
} satisfies Meta<typeof PlayButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const CustomColor: Story = {
  args: {
    className: 'text-secondary-500 hover:text-secondary-300',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    className: 'cursor-not-allowed opacity-50',
  },
}
