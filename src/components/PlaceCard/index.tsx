import type { Place } from '@/payload-types'

import { Media } from '@/components/Media'

export const PlaceCard = ({ place }: { place: Place }) => {
  return (
    <article className="overflow-hidden rounded border border-border bg-card">
      <div className="relative aspect-[4/3] bg-muted">
        {typeof place.image === 'object' && (
          <Media
            htmlElement={null}
            resource={place.image}
            fill
            pictureClassName="absolute inset-0"
            imgClassName="object-cover"
          />
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{place.name}</h3>
        {place.description && (
          <p className="mt-2 text-sm text-muted-foreground">{place.description}</p>
        )}
      </div>
    </article>
  )
}
