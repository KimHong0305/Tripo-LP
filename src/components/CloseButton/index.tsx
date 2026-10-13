import type { ButtonHTMLAttributes, FC } from 'react'
import { cn } from '@/utilities/ui'
import CloseIcon from '@/assets/icons/iconClose.svg?react'
type BaseProps = {
  className?: string
}

type Props = BaseProps & ButtonHTMLAttributes<HTMLButtonElement>

const CloseButton: FC<Props> = ({ className, ...props }) => {
  return (
    <button
      className={cn('cursor-pointer p-1.5 text-neutral-300 hover:text-neutral-500', className)}
      {...props}
    >
      <CloseIcon />
    </button>
  )
}

export default CloseButton
