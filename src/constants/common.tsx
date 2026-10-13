import IconSpring from '@/assets/icons/iconSpring.svg?react'
import IconSummer from '@/assets/icons/iconSummer.svg?react'
import IconAutumn from '@/assets/icons/iconAutumn.svg?react'
import IconWinter from '@/assets/icons/iconWinter.svg?react'

export type Seasons = 'spring' | 'summer' | 'autumn' | 'winter'

export const seasonOptions: { label: string; value: Seasons; icon: React.ReactNode }[] = [
  { label: 'Spring Picks', value: 'spring', icon: <IconSpring /> },
  { label: 'Summer Hotspot', value: 'summer', icon: <IconSummer /> },
  { label: 'Autumn Escape', value: 'autumn', icon: <IconAutumn /> },
  { label: 'Winter Getaway', value: 'winter', icon: <IconWinter /> },
]

export const ratingMapping: { label: string; value: number; color: string }[] = [
  { label: 'Excellent', value: 5, color: 'text-primary-600' },
  { label: 'Good', value: 4, color: 'text-lime-600' },
  { label: 'Average', value: 3, color: 'text-yellow-600' },
  { label: 'Poor', value: 2, color: 'text-orange-600' },
  { label: 'Terrible', value: 1, color: 'text-red-600' },
]
