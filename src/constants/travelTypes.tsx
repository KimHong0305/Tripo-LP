import IconCastle from '@/assets/icons/iconCastle.svg?react'
import IconBeach from '@/assets/icons/iconBeach.svg?react'
import IconMuseum from '@/assets/icons/iconBank.svg?react'
import IconShow from '@/assets/icons/iconMask.svg?react'
import IconFood from '@/assets/icons/iconFood.svg?react'
import IconNightLife from '@/assets/icons/iconMagic.svg?react'
import type { ReactNode } from 'react'
import { travelTypeValues, type TravelType } from './travelTypeValues'

export type { TravelType } from './travelTypeValues'

const travelTypeIcons: Record<TravelType, ReactNode> = {
  explore: <IconCastle />,
  beach: <IconBeach />,
  museum: <IconMuseum />,
  show: <IconShow />,
  food: <IconFood />,
  'night-life': <IconNightLife />,
}

export const travelTypeOptions = travelTypeValues.map((option) => ({
  ...option,
  icon: travelTypeIcons[option.value],
}))
