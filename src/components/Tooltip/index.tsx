'use client'
import type { FC } from 'react'
import { cn } from '@/utilities/ui'
import InfoIcon from '@/assets/icons/iconInfo.svg?react'

type Props = {
  content: string
  position?:
    'top' | 'bottom' | 'left' | 'right' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
  className?: string
  arrow?: boolean
}

const positionClasses: Record<NonNullable<Props['position']>, string> = {
  top: 'bottom-full left-1/2 mb-2 -translate-x-1/2',
  bottom: 'top-full left-1/2 mt-2 -translate-x-1/2',
  left: 'right-full top-1/2 mr-2 -translate-y-1/2',
  right: 'left-full top-1/2 ml-2 -translate-y-1/2',
  'top-left': 'bottom-full right-0 mb-2',
  'top-right': 'bottom-full left-0 mb-2',
  'bottom-left': 'top-full right-0 mt-2',
  'bottom-right': 'top-full left-0 mt-2',
}

const arrowPositionClasses: Record<NonNullable<Props['position']>, string> = {
  top: '-bottom-1 left-1/2 -translate-x-1/2',
  bottom: '-top-1 left-1/2 -translate-x-1/2',
  left: '-right-1 top-1/2 -translate-y-1/2',
  right: '-left-1 top-1/2 -translate-y-1/2',
  'top-left': '-bottom-1 right-3',
  'top-right': '-bottom-1 left-3',
  'bottom-left': '-top-1 right-3',
  'bottom-right': '-top-1 left-3',
}

const Tooltip: FC<Props> = ({ content, position = 'top', className, arrow = true }) => {
  return (
    <div className={cn('group relative inline-flex items-center', className)}>
      <InfoIcon className="h-4 w-4 text-neutral-300" aria-label="Show info" />

      <div
        role="tooltip"
        className={cn(
          'pointer-events-none absolute z-30 rounded-md bg-neutral-900 px-2.5 py-1.5 text-xs leading-5 text-white shadow-lg opacity-0 invisible transition duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100',
          'min-w-42',
          positionClasses[position],
        )}
      >
        <span
          aria-hidden="true"
          className={cn(
            'absolute h-2 w-2 rotate-45 bg-neutral-900',
            arrowPositionClasses[position],
          )}
          style={{ display: arrow ? 'block' : 'none' }}
        />
        {content}
      </div>
    </div>
  )
}
export default Tooltip
