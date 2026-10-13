import React from 'react'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'

import TrendingPlace from '@/components/TrendingPlace'

afterEach(() => {
  vi.unstubAllGlobals()
})

describe('TrendingPlace', () => {
  it('requests records for the selected season and country', async () => {
    const requestedURLs: string[] = []
    vi.stubGlobal(
      'fetch',
      vi.fn(async (input: RequestInfo | URL) => {
        const url = String(input)
        requestedURLs.push(url)
        const hasSpringResults = url.includes('spring')

        return new Response(
          JSON.stringify({
            docs: hasSpringResults
              ? [
                  {
                    id: 'kyoto-spring',
                    season: 'spring',
                    name: 'Kyoto',
                    location: 'Kyoto, Japan',
                    country: 'japan',
                    image: 'kyoto-image',
                    price: 1500,
                    currency: 'JPY',
                    description: 'A beautiful spring destination.',
                    updatedAt: '2026-01-01T00:00:00.000Z',
                    createdAt: '2026-01-01T00:00:00.000Z',
                  },
                ]
              : [],
          }),
          { headers: { 'Content-Type': 'application/json' } },
        )
      }),
    )

    render(React.createElement(TrendingPlace, { countryId: 'japan' }))

    expect(await screen.findByText('Kyoto')).toBeTruthy()
    expect(screen.getByText('Kyoto, Japan')).toBeTruthy()
    expect(screen.getByText('¥1,500')).toBeTruthy()

    fireEvent.click(screen.getByRole('button', { name: 'Summer' }))

    expect(await screen.findByText('No trending places for this season yet.')).toBeTruthy()
    await waitFor(() => expect(requestedURLs).toHaveLength(2))

    const springParams = new URL(requestedURLs[0], 'http://localhost').searchParams
    const summerParams = new URL(requestedURLs[1], 'http://localhost').searchParams
    expect(springParams.get('where[and][0][country][equals]')).toBe('japan')
    expect(springParams.get('where[and][1][season][equals]')).toBe('spring')
    expect(summerParams.get('where[and][0][country][equals]')).toBe('japan')
    expect(summerParams.get('where[and][1][season][equals]')).toBe('summer')
  })
})
