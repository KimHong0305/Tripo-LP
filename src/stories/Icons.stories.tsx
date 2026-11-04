import type { ComponentType, SVGProps } from 'react'
import type { Meta, StoryObj } from '@storybook/nextjs-vite'

const iconModules = import.meta.glob('../assets/icons/*.svg', {
  eager: true,
  import: 'default',
  query: '?react',
}) as unknown as Record<string, ComponentType<SVGProps<SVGSVGElement>>>

const icons = Object.entries(iconModules).sort(([first], [second]) => first.localeCompare(second))

const meta = {
  title: 'Assets/Icons',
  parameters: {
    layout: 'padded',
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const AllIcons: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
      {icons.map(([path, Icon]) => {
        const name =
          path
            .split('/')
            .pop()
            ?.replace(/\.svg$/, '') ?? path

        return (
          <div
            key={path}
            className="flex min-h-24 flex-col items-center justify-center gap-3 rounded-md border border-neutral-200 bg-white p-3 text-neutral-800"
          >
            <Icon aria-hidden="true" className="h-8 w-8" />
            <span className="text-center text-xs">{name}</span>
          </div>
        )
      })}
    </div>
  ),
}
