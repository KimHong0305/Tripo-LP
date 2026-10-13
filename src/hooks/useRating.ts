import { useEffect, useState } from 'react'

export const useRating = (initialRating: number) => {
  const [rating, setRating] = useState(initialRating)

  useEffect(() => {
    setRating(initialRating)
  }, [initialRating])

  const toggleRating = (index: number) => {
    setRating((currentRating) => (index < currentRating ? index : index + 1))
  }

  return { rating, toggleRating }
}
