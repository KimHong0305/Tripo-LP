import { cn } from '@/utilities/ui'
import { ButtonHTMLAttributes, FC } from 'react'
import IconPlay from '@/assets/icons/iconPlay.svg?react'
type BaseProps = {
  className?: string
}

type Props = BaseProps & ButtonHTMLAttributes<HTMLButtonElement>

const PlayButton: FC<Props> = ({ className, ...props }) => {
  return (
    <button
      className={cn('cursor-pointer text-primary-500 hover:text-primary-300', className)}
      {...props}
    >
      <IconPlay />
    </button>
  )
}

export default PlayButton
