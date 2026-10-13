import type { CollectionConfig } from 'payload'

import { authenticated } from '../access/authenticated'
import { anyone } from '../access/anyone'

export const SeasonalPlaces: CollectionConfig<'seasonal-places'> = {
  slug: 'seasonal-places',
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  admin: {
    defaultColumns: ['name', 'country', 'season', 'price', 'updatedAt'],
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'season',
      type: 'select',
      required: true,
      options: [
        { label: 'Spring Picks', value: 'spring' },
        { label: 'Summer Hotspot', value: 'summer' },
        { label: 'Autumn Escape', value: 'autumn' },
        { label: 'Winter Getaway', value: 'winter' },
      ],
    },
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'location',
      type: 'text',
      required: true,
    },
    {
      name: 'country',
      type: 'relationship',
      relationTo: 'countries',
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'price',
      type: 'number',
      required: true,
      min: 0,
    },
    {
      name: 'currency',
      type: 'text',
      required: true,
      defaultValue: 'JPY',
    },
    {
      name: 'description',
      type: 'textarea',
    },
  ],
  hooks: {
    beforeValidate: [
      ({ data }) => {
        if (typeof data?.name === 'string') {
          data.name = data.name.trim()
        }

        return data
      },
    ],
  },
}
