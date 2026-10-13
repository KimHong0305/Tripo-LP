'use client'
import { useState } from 'react'

import type { Place } from '@/payload-types'
import { type TravelType, travelTypeOptions } from '@/constants/travelTypes'
import Chip from '@/components/Chip'
import { Media } from '@/components/Media'

const TopPlace = ({ places }: { places: Place[] }) => {
  const [selectedTravelType, setSelectedTravelType] = useState<TravelType>(
    places[0]?.type ?? 'explore',
  )
  const selectedPlaces = places.filter((place) => place.type === selectedTravelType)

  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center gap-4">
        {travelTypeOptions.map(({ label, value, icon }) => (
          <Chip
            key={value}
            label={label}
            icon={icon}
            type="fullBack"
            active={selectedTravelType === value}
            onClick={() => setSelectedTravelType(value)}
          />
        ))}
      </div>
      <div className="flex gap-4">
        {selectedPlaces.map((place) => (
          <div key={place.id} className="flex flex-col gap-2">
            <Media
              htmlElement={null}
              resource={place.image}
              imgClassName="object-cover w-[12rem] h-[10.75rem] rounded-xl"
            />
            <p className="font-medium text-neutral-800">{place.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TopPlace
