import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import Spinner from '@/components/Spinner'

const meta = {
  title: 'Components/Spinner',
  component: Spinner,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    color: {
      control: 'select',
      options: ['blue', 'black', 'grey'],
    },
    className: {
      control: false,
    },
  },
  args: {
    size: 'medium',
    color: 'blue',
  },
} satisfies Meta<typeof Spinner>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Small: Story = {
  args: {
    size: 'small',
  },
}

export const Large: Story = {
  args: {
    size: 'large',
  },
}

export const Black: Story = {
  args: {
    color: 'black',
  },
}

export const Grey: Story = {
  args: {
    color: 'grey',
  },
}
