'use client'

import { cn } from '@/utilities/ui'
import type { StaticImageData } from 'next/image'
import type { CSSProperties, FC } from 'react'
import { Media } from '@/components/Media'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

type Props = {
  images: StaticImageData[]
  className?: string
}

const ImageSlider: FC<Props> = ({ images, className }) => {
  return (
    <Swiper
      className={cn('h-45 w-70', className)}
      modules={[Navigation, Pagination]}
      pagination={{ clickable: true }}
      slidesPerView={1}
      style={{ '--swiper-pagination-color': '#ffffff' } as CSSProperties}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index} className="h-45 w-70">
          <Media
            src={image}
            alt={`Slide ${index + 1}`}
            imgClassName="h-[11.25rem] w-[17.5rem] object-cover"
            className="h-45 w-70"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default ImageSlider
