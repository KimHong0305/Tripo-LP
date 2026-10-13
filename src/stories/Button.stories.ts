import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { fn } from 'storybook/test'

import Button from '@/components/Button'

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['primary', 'secondary'],
      description: 'Visual style type (not native button type attribute).',
    },
    variant: {
      control: 'select',
      options: ['filled', 'outlined', 'none'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large', 'extraLarge'],
    },
    loading: {
      control: 'boolean',
    },
    leftIcon: {
      control: false,
    },
    rightIcon: {
      control: false,
    },
  },
  args: {
    type: 'primary',
    variant: 'filled',
    size: 'medium',
    loading: false,
    disabled: false,
    children: 'Button',
    onClick: fn(),
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const PrimaryOutlined: Story = {
  args: {
    type: 'primary',
    variant: 'outlined',
  },
}

export const PrimaryGhost: Story = {
  args: {
    type: 'primary',
    variant: 'none',
  },
}

export const SecondaryFilled: Story = {
  args: {
    type: 'secondary',
    variant: 'filled',
  },
}

export const SecondaryOutlined: Story = {
  args: {
    type: 'secondary',
    variant: 'outlined',
  },
}

export const SecondaryGhost: Story = {
  args: {
    type: 'secondary',
    variant: 'none',
  },
}

export const Large: Story = {
  args: {
    size: 'large',
  },
}

export const Loading: Story = {
  args: {
    loading: true,
  },
}

export const WithIcons: Story = {
  args: {
    leftIcon: '← ',
    rightIcon: ' →',
  },
}
