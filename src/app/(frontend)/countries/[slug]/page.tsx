import type { Metadata } from 'next'

import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React, { cache } from 'react'
import { notFound } from 'next/navigation'

import TopPlace from '@/components/TopPlace'
import TrendingPlace from '@/components/TrendingPlace'

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const countries = await payload.find({
    collection: 'countries',
    draft: false,
    limit: 1000,
    overrideAccess: false,
    pagination: false,
    select: {
      slug: true,
    },
  })

  return countries.docs.map(({ slug }) => ({ slug }))
}

type Args = {
  params: Promise<{
    slug: string
  }>
}

export default async function CountryPage({ params }: Args) {
  const { slug } = await params
  const country = await queryCountryBySlug(decodeURIComponent(slug))

  if (!country) notFound()

  const payload = await getPayload({ config: configPromise })
  const places = await payload.find({
    collection: 'places',
    depth: 1,
    limit: 1000,
    overrideAccess: false,
    pagination: false,
    sort: 'name',
    where: {
      country: {
        equals: country.id,
      },
    },
  })

  return (
    <main className="pt-16 pb-24">
      <header className="container border-b border-border py-10 mb-10">
        <h1 className="text-4xl font-semibold">{country.name}</h1>
      </header>
      {/* <TopPlace places={places.docs} /> */}
      <TrendingPlace countryId={country.id} />
    </main>
  )
}

export async function generateMetadata({ params }: Args): Promise<Metadata> {
  const { slug } = await params
  const country = await queryCountryBySlug(decodeURIComponent(slug))

  return {
    title: country?.name ?? 'Country',
  }
}

const queryCountryBySlug = cache(async (slug: string) => {
  const payload = await getPayload({ config: configPromise })
  const result = await payload.find({
    collection: 'countries',
    limit: 1,
    overrideAccess: false,
    pagination: false,
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  return result.docs[0] ?? null
})

console.log('Page loaded')
