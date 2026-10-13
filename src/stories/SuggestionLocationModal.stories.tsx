import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { fn } from 'storybook/test'

import SuggestionLocationModal from '@/components/SuggestionLocationModal'

const meta = {
  title: 'Components/SuggestionLocationModal',
  component: SuggestionLocationModal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    open: { control: 'boolean' },
    onClose: { control: false },
    className: { control: false },
  },
  args: {
    open: true,
    onClose: fn(),
  },
} satisfies Meta<typeof SuggestionLocationModal>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
