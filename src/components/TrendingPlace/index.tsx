'use client'

import { useEffect, useState } from 'react'
import Chip from '@/components/Chip'
import { seasonOptions, type Seasons } from '@/constants/common'
import type { SeasonalPlace } from '@/payload-types'
import ProductCard from '../ProductCard'

type Props = {
  countryId?: string | number
}

const TrendingPlace = ({ countryId }: Props) => {
  const [selectedSeason, setSelectedSeason] = useState<Seasons>('spring')
  const [places, setPlaces] = useState<SeasonalPlace[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const controller = new AbortController()
    const searchParams = new URLSearchParams({
      'where[and][1][season][equals]': selectedSeason,
      depth: '1',
      limit: '1000',
      sort: 'name',
    })

    const loadPlaces = async () => {
      setIsLoading(true)
      setHasError(false)

      try {
        const response = await fetch(`/api/seasonal-places?${searchParams.toString()}`, {
          signal: controller.signal,
        })

        if (!response.ok) throw new Error('Unable to load seasonal places')

        const result = (await response.json()) as { docs: SeasonalPlace[] }
        setPlaces(result.docs)
      } catch {
        if (!controller.signal.aborted) {
          setPlaces([])
          setHasError(true)
        }
      } finally {
        if (!controller.signal.aborted) setIsLoading(false)
      }
    }

    void loadPlaces()

    return () => controller.abort()
  }, [countryId, selectedSeason])

  return (
    <section className="container" aria-labelledby="trending-by-season-title">
      <h2 id="trending-by-season-title" className="mb-6 text-2xl font-semibold">
        Trending by Season
      </h2>
      <div className="mb-8 flex flex-wrap items-center gap-3" aria-label="Choose a season">
        {seasonOptions.map(({ label, value, icon }) => (
          <Chip
            key={value}
            label={label}
            icon={icon}
            type="fullBack"
            active={selectedSeason === value}
            onClick={() => setSelectedSeason(value)}
          />
        ))}
      </div>

      <div aria-live="polite" aria-busy={isLoading}>
        {isLoading ? (
          <p className="py-8 text-center text-muted-foreground">Loading seasonal places...</p>
        ) : hasError ? (
          <p className="py-8 text-center text-muted-foreground" role="alert">
            Seasonal places could not be loaded. Please try another season.
          </p>
        ) : places.length > 0 ? (
          <div className="flex gap-4">
            {places.map((place) => (
              <ProductCard
                key={place.id}
                image={place.image.url}
                title={place.name}
                price={place.price}
                currency={place.currency}
                description={place?.description}
              />
            ))}
          </div>
        ) : (
          <p className="py-8 text-center text-muted-foreground">
            No trending places for this season yet.
          </p>
        )}
      </div>
    </section>
  )
}

export default TrendingPlace
