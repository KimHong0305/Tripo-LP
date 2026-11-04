'use client'

import { useRef } from 'react'
import Image, { type StaticImageData } from 'next/image'
import { LightGallery, type LightGalleryRefHandle } from '@lightgallery/react'
import Thumbnail from '@lightgallery/react/plugins/thumbnail'
import Zoom from '@lightgallery/react/plugins/zoom'
import IconImages from '@/assets/icons/iconImages.svg?react'

import 'lightgallery/css/lightgallery.css'
import 'lightgallery/css/lg-thumbnail.css'
import 'lightgallery/css/lg-zoom.css'

export interface Photo {
  image: StaticImageData
  alt: string
  caption?: string
}

export function Gallery({ photos }: { photos: Photo[] }) {
  const galleryRef = useRef<LightGalleryRefHandle>(null)

  return (
    <>
      <LightGallery
        ref={galleryRef}
        plugins={[Thumbnail, Zoom]}
        slides={photos.map(({ image, alt, caption }) => ({
          src: image.src,
          thumb: image.src,
          alt,
          caption,
          lgSize: `${image.width}-${image.height}`,
        }))}
        thumbnail={{ animateThumb: true }}
      />
      <div className="flex items-center gap-4">
        <button type="button" onClick={() => galleryRef.current?.openGallery(0)}>
          <Image
            src={photos[0].image}
            alt={photos[0].alt}
            placeholder="blur"
            className="cursor-pointer w-152 h-135 object-cover rounded-2xl"
          />
        </button>
        <div className="grid grid-cols-2 gap-4 relative">
          {photos.slice(1, 5).map(({ image, alt }, index) => (
            <button
              key={image.src}
              type="button"
              onClick={() => galleryRef.current?.openGallery(index + 1)}
            >
              <Image
                src={image}
                alt={alt}
                placeholder="blur"
                className="cursor-pointer w-74 h-65 object-cover rounded-2xl"
              />
            </button>
          ))}
          <button
            type="button"
            onClick={() => galleryRef.current?.openGallery(5)}
            className="cursor-pointer absolute bottom-4 right-6 bg-black/60 bg-opacity-50 flex items-center justify-center text-white text-lg font-semibold rounded-xl py-2 px-4"
          >
            <IconImages className="w-6 h-6 mr-2" />
            {photos.length - 5}+
          </button>
        </div>
      </div>
    </>
  )
}
