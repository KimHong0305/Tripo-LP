import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import Star from '@/components/Star'

const meta = {
  title: 'Components/Star',
  component: Star,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    num: {
      control: 'number',
      description: 'Number of filled stars.',
    },
    full: {
      control: 'boolean',
      description: 'Render a fixed 5-star row.',
    },
    readonly: {
      control: 'boolean',
      description: 'Disable rating interaction.',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    className: {
      control: 'text',
      description: 'Tailwind classes for icon color or custom styling.',
    },
  },
  args: {
    num: 4,
    full: true,
    readonly: false,
    size: 'medium',
    className: 'text-yellow-400',
  },
  render: (args) => (
    <div className="flex items-center justify-center p-6">
      <Star {...args} />
    </div>
  ),
} satisfies Meta<typeof Star>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const FiveOfFive: Story = {
  args: {
    num: 5,
    full: true,
  },
}

export const TwoOfFive: Story = {
  args: {
    num: 2,
    full: true,
  },
}

export const Interactive: Story = {
  args: {
    num: 2,
    full: true,
    readonly: false,
  },
}

export const Readonly: Story = {
  args: {
    num: 4,
    full: true,
    readonly: true,
  },
}

export const CountOnly: Story = {
  args: {
    num: 3,
    full: false,
    readonly: true,
  },
}

export const Small: Story = {
  args: {
    num: 4,
    full: true,
    size: 'small',
  },
}

export const Muted: Story = {
  args: {
    num: 3,
    full: true,
    className: 'text-neutral-400',
  },
}
