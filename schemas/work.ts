import { RocketIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

/**
 * This file is the schema definition for a portfolio item.
 *
 * Here you'll be able to edit the different fields that appear when you 
 * create or edit a portfolio item in Sanity Studio.
 * 
 * Here you can see the different schema types that are available:

  https://www.sanity.io/docs/schema-types

 */

export default defineType({
  name: 'work',
  title: 'Work',
  icon: RocketIcon,
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
        isUnique: (value, context) => context.defaultIsUnique(value, context),
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
        name: 'date',
        title: 'Date',
        type: 'datetime',
        initialValue: () => new Date().toISOString(),
      }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'coverImage',
      excerpt: 'excerpt',
    },
    prepare({ title, media, excerpt}) {
      return { title, media, excerpt }
    },
  },
})
