import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'popularPage',
  title: 'Popular Page',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: Rule => Rule.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 }, validation: Rule => Rule.required() }),
    defineField({ name: 'description', title: 'Description', type: 'text' }),
    defineField({ name: 'content', title: 'Content', type: 'array', of: [{type: 'block'}] }),
    defineField({ name: 'heroImage', title: 'Hero Image', type: 'image' }),
    defineField({ name: 'excerpt', title: 'Excerpt', type: 'text' }),
    defineField({ name: 'contentType', title: 'Content Type', type: 'string', options: { list: ['solution', 'feature', 'guide', 'comparison'] } }),
    defineField({ name: 'viewCount', title: 'View Count', type: 'number' }),
    defineField({ name: 'featured', title: 'Featured', type: 'boolean' }),
    defineField({ name: 'trending', title: 'Trending', type: 'boolean' }),
    defineField({ name: 'relatedSolutions', title: 'Related Solutions', type: 'array', of: [{type: 'reference', to: [{type: 'solution'}]}] }),
    defineField({ name: 'relatedFeatures', title: 'Related Features', type: 'array', of: [{type: 'reference', to: [{type: 'feature'}]}] }),
    defineField({ name: 'relatedPosts', title: 'Related Posts', type: 'array', of: [{type: 'reference', to: [{type: 'post'}]}] }),
    defineField({ name: 'metaTitle', title: 'Meta Title', type: 'string' }),
    defineField({ name: 'metaDescription', title: 'Meta Description', type: 'text' }),
    defineField({ name: 'ogImage', title: 'OG Image', type: 'image' }),
    defineField({ name: 'order', title: 'Order', type: 'number' }),
    defineField({ name: 'showInNavigation', title: 'Show in Navigation', type: 'boolean', initialValue: true }),
    defineField({ name: 'popularityScore', title: 'Popularity Score', type: 'number' }),
    defineField({ name: 'lastUpdated', title: 'Last Updated', type: 'datetime' }),
    defineField({ name: 'publishedAt', title: 'Published At', type: 'datetime' }),
  ],
  preview: {
    select: {
      title: 'title',
      contentType: 'contentType',
      media: 'heroImage',
    },
  },
})