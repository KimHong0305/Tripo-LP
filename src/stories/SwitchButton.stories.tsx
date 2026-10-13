import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { fn } from 'storybook/test'

import SwitchButton from '@/components/SwitchButton'
import IconList from '@/assets/icons/iconList.svg?react'
import IconGrid from '@/assets/icons/iconGrid.svg?react'

const meta = {
  title: 'Components/SwitchButton',
  component: SwitchButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'text',
      description:
        'Currently selected option. The parent updates this value in response to onChange.',
    },
    options: {
      control: false,
      description: 'Options to display as buttons.',
    },
    type: {
      control: 'select',
      options: ['primary', 'secondary'],
    },
    onChange: {
      control: false,
    },
  },
  args: {
    value: 'Monthly',
    options: ['Monthly', 'Yearly'],
    type: 'primary',
    onChange: fn(),
  },
} satisfies Meta<typeof SwitchButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Secondary: Story = {
  args: {
    type: 'secondary',
  },
}

export const NumericOptions: Story = {
  args: {
    value: 2,
    options: [1, 2, 3],
    type: 'primary',
  },
}

export const IconOptions: Story = {
  args: {
    value: 'list',
    options: [
      { value: 'list', label: <IconList aria-label="List view" /> },
      { value: 'grid', label: <IconGrid aria-label="Grid view" /> },
    ],
    type: 'secondary',
  },
}
