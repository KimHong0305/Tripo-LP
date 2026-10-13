import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import Input from '@/components/Input'
import UserIcon from '@/assets/icons/iconUser.svg?react'

const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
    },
    description: {
      control: 'text',
    },
    placeholder: {
      control: 'text',
    },
    required: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    icon: {
      control: false,
    },
    className: {
      control: false,
    },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'search', 'number'],
    },
  },
  args: {
    label: 'Email',
    description: 'We will never share your email with anyone else.',
    placeholder: 'name@example.com',
    type: 'email',
    required: false,
    disabled: false,
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Required: Story = {
  args: {
    label: 'Full name',
    type: 'text',
    placeholder: 'Enter your full name',
    required: true,
    description: 'This field is required.',
  },
}

export const Disabled: Story = {
  args: {
    label: 'Company',
    type: 'text',
    placeholder: 'Disabled input',
    disabled: true,
  },
}

export const WithIcon: Story = {
  args: {
    label: 'Search',
    type: 'search',
    placeholder: 'Search articles...',
    icon: <UserIcon />,
    description: 'Try typing a keyword.',
  },
}
