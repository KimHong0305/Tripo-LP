export const travelTypeValues = [
  { label: 'Explore', value: 'explore' },
  { label: 'Beach', value: 'beach' },
  { label: 'Museum', value: 'museum' },
  { label: 'Show', value: 'show' },
  { label: 'Food', value: 'food' },
  { label: 'Night Life', value: 'night-life' },
] as const

export type TravelType = (typeof travelTypeValues)[number]['value']
