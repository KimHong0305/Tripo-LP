import { FC } from 'react'
import { Media } from '@/components/Media'
import IconHotel from '@/assets/icons/iconHotel.svg?react'
import Chip from '@/components/Chip'
import { cn } from '@/utilities/ui'
import { StaticImageData } from 'next/image'
type Props = {
  title: string
  status: string
  checkInDate: string
  checkOutDate: string
  guests: number
  id: string
  imageUrl: StaticImageData
  selected?: boolean
  onClick: () => void
}

const ReservationCard: FC<Props> = ({
  title,
  status,
  checkInDate,
  checkOutDate,
  guests,
  id,
  selected,
  imageUrl,
  onClick,
}) => {
  return (
    <div
      className={cn(
        'flex items-center p-4 rounded-xl gap-4 bg-white',
        'hover:border hover:border-primary-300 hover:drop-shadow-[0_0_9px_rgba(0,0,0,0.7)] hover:drop-shadow-primary-500/30',
        selected &&
          'drop-shadow-[0_0_9px_rgba(0,0,0,0.7)] drop-shadow-primary-500/30 border border-primary-300 bg-primary-50',
      )}
    >
      <Media
        src={imageUrl}
        alt={title}
        imgClassName="h-23 w-23 rounded-lg"
        className="object-cover"
      />
      <div className="flex flex-col gap-4 items-start justify-between w-full">
        <div className="flex items-center justify-between w-full">
          <div className="flex gap-2">
            <IconHotel className="w-6 h-6 text-neutral-800" />
            <p className="text-neutral-500 font-semibold">{title}</p>
          </div>
          <div className="flex gap-3 items-center">
            <Chip
              label={status}
              className="capitalize text-emerald-700 border-emerald-700"
              size="small"
            />
            <p className="text-neutral-500 text-sm font-medium">ID {id}</p>
          </div>
        </div>
        <div className="px-4 w-full border-t border-neutral-100" />
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center justify-between w-1/2">
            <p className="text-neutral-500 text-xs font-medium">
              Check-in: <span className="text-neutral-300">{checkInDate}</span>
            </p>
            <p className="text-neutral-500 text-xs font-medium">
              Check-out: <span className="text-neutral-300">{checkOutDate}</span>
            </p>
            <p className="text-neutral-500 text-xs font-medium">
              Guests: <span className="text-neutral-300">{guests}</span>
            </p>
          </div>
          <button onClick={onClick} className="text-primary-500 text-sm font-medium">
            Check Details
          </button>
        </div>
      </div>
    </div>
  )
}

export default ReservationCard
