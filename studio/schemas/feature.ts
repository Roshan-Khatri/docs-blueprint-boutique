import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'feature',
  title: 'Feature',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: Rule => Rule.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 }, validation: Rule => Rule.required() }),
    defineField({ name: 'description', title: 'Description', type: 'text', validation: Rule => Rule.required() }),
    defineField({ name: 'longDescription', title: 'Long Description', type: 'array', of: [{type: 'block'}] }),
    defineField({ name: 'featureCategory', title: 'Feature Category', type: 'reference', to: [{type: 'featureCategory'}] }),
    defineField({ name: 'parentFeature', title: 'Parent Feature', type: 'reference', to: [{type: 'feature'}] }),
    defineField({ name: 'heroImage', title: 'Hero Image', type: 'image' }),
    defineField({ name: 'benefits', title: 'Benefits', type: 'array', of: [{type: 'string'}] }),
    defineField({ name: 'technicalSpecs', title: 'Technical Specs', type: 'array', of: [{type: 'block'}] }),
    defineField({ name: 'useCases', title: 'Use Cases', type: 'array', of: [{type: 'string'}] }),
    defineField({ name: 'relatedSolutions', title: 'Related Solutions', type: 'array', of: [{type: 'reference', to: [{type: 'solution'}]}] }),
    defineField({ name: 'relatedFeatures', title: 'Related Features', type: 'array', of: [{type: 'reference', to: [{type: 'feature'}]}] }),
    defineField({ name: 'howItWorks', title: 'How It Works', type: 'array', of: [{type: 'block'}] }),
    defineField({ name: 'setupGuide', title: 'Setup Guide', type: 'array', of: [{type: 'block'}] }),
    defineField({ name: 'apiReference', title: 'API Reference', type: 'string' }),
    defineField({ name: 'metaTitle', title: 'Meta Title', type: 'string' }),
    defineField({ name: 'metaDescription', title: 'Meta Description', type: 'text' }),
    defineField({ name: 'ogImage', title: 'OG Image', type: 'image' }),
    defineField({ name: 'featured', title: 'Featured', type: 'boolean' }),
    defineField({ name: 'order', title: 'Order', type: 'number' }),
    defineField({ name: 'showInNavigation', title: 'Show in Navigation', type: 'boolean', initialValue: true }),
  ],
  preview: {
    select: {
      title: 'title',
      category: 'featureCategory.title',
      media: 'heroImage',
    },
  },
})