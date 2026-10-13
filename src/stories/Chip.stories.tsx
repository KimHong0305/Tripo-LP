import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import Chip from '@/components/Chip'
import IconInfo from '@/assets/icons/iconInfo.svg?react'

const meta = {
  title: 'Components/Chip',
  component: Chip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['black', 'fullBack'],
    },
    active: {
      control: 'boolean',
    },
    size: {
      control: 'select',
      options: ['small', 'medium'],
    },
    iconOnly: {
      control: 'boolean',
    },
    icon: {
      control: false,
    },
    label: {
      control: 'text',
    },
    className: {
      control: 'text',
    },
  },
  args: {
    type: 'black',
    active: false,
    size: 'medium',
    iconOnly: false,
    label: 'Chip label',
  },
} satisfies Meta<typeof Chip>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Active: Story = {
  args: {
    active: true,
  },
}

export const FullBackground: Story = {
  args: {
    type: 'fullBack',
    active: true,
  },
}

export const Small: Story = {
  args: {
    size: 'small',
  },
}

export const WithIcon: Story = {
  args: {
    icon: <IconInfo aria-hidden="true" className="h-4 w-4" />,
    label: 'More information',
  },
}

export const IconOnly: Story = {
  args: {
    iconOnly: true,
    label: undefined,
    icon: <IconInfo aria-label="Information" className="h-4 w-4" />,
  },
}
