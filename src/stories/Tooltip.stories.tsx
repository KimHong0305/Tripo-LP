import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import Tooltip from '@/components/Tooltip'

const meta = {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    content: {
      control: 'text',
    },
    position: {
      control: 'select',
      options: [
        'top',
        'bottom',
        'left',
        'right',
        'top-left',
        'top-right',
        'bottom-left',
        'bottom-right',
      ],
    },
    className: {
      control: false,
    },
    arrow: {
      control: 'boolean',
    },
  },
  args: {
    content: 'Tooltip content goes here.',
    position: 'top',
    arrow: true,
  },
  render: (args) => (
    <div className="flex min-h-40 items-center justify-center p-12">
      <Tooltip {...args} />
    </div>
  ),
} satisfies Meta<typeof Tooltip>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Top: Story = {
  args: {
    position: 'top',
  },
}

export const Bottom: Story = {
  args: {
    position: 'bottom',
  },
}

export const Left: Story = {
  args: {
    position: 'left',
  },
}

export const Right: Story = {
  args: {
    position: 'right',
  },
}

export const TopLeft: Story = {
  args: {
    position: 'top-left',
  },
}

export const TopRight: Story = {
  args: {
    position: 'top-right',
  },
}

export const BottomLeft: Story = {
  args: {
    position: 'bottom-left',
  },
}

export const BottomRight: Story = {
  args: {
    position: 'bottom-right',
  },
}

export const WithoutArrow: Story = {
  args: {
    arrow: false,
  },
}
