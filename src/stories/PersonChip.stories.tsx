import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import PersonChip from '@/components/PersonChip'

const meta = {
  title: 'Components/PersonChip',
  component: PersonChip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'number', min: 1, max: 10 },
      description: 'Number of people to display.',
    },
    className: {
      control: 'text',
    },
  },
  args: {
    size: 3,
  },
} satisfies Meta<typeof PersonChip>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const OnePerson: Story = {
  args: {
    size: 1,
  },
}

export const Group: Story = {
  args: {
    size: 5,
  },
}
