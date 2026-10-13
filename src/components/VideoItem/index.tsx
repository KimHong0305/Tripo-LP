import { cn } from '@/utilities/ui'
import { FC } from 'react'
import PlayButton from '@/components/PlayButton'
import Star from '@/components/Star'

type Props = {
  image: string
  title: string
  star: number
  videoUrl: string
  className?: string
}

const VideoItem: FC<Props> = ({ image, title, star, videoUrl, className }) => {
  return (
    <div
      className={cn(
        'hover:drop-shadow-[0_0_9px_rgba(0,0,0,0.7)] hover:drop-shadow-primary-500',
        'relative flex h-48 w-48 flex-col items-start justify-end overflow-hidden rounded-xl p-4',
        'before:absolute before:inset-0 before:rounded-xl',
        'before:bg-[linear-gradient(180deg,rgba(0,0,0,0)_53.12%,rgba(0,0,0,0.2)_61.67%),linear-gradient(180deg,rgba(0,0,0,0.004)_44.79%,rgba(0,0,0,0.2)_57.51%)]',
        className,
      )}
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <PlayButton className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[calc(50%+7px)]" />
      <div className="relative z-10">
        <p className="text-white text-lg font-medium">{title}</p>
        <Star num={star} />
      </div>
    </div>
  )
}

export default VideoItem
