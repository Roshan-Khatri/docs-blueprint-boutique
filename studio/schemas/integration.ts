import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'integration',
  title: 'Integration',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: Rule => Rule.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 }, validation: Rule => Rule.required() }),
    defineField({ name: 'description', title: 'Description', type: 'text', validation: Rule => Rule.required() }),
    defineField({ name: 'longDescription', title: 'Long Description', type: 'array', of: [{type: 'block'}] }),
    defineField({ name: 'integrationType', title: 'Integration Type', type: 'string', options: { list: ['crm', 'social-media', 'api', 'other'] } }),
    defineField({ name: 'provider', title: 'Provider', type: 'string' }),
    defineField({ name: 'logoImage', title: 'Logo Image', type: 'image' }),
    defineField({ name: 'setupInstructions', title: 'Setup Instructions', type: 'array', of: [{type: 'block'}] }),
    defineField({ name: 'apiDocumentation', title: 'API Documentation', type: 'string' }),
    defineField({ name: 'webhookSupport', title: 'Webhook Support', type: 'boolean' }),
    defineField({ name: 'heroImage', title: 'Hero Image', type: 'image' }),
    defineField({ name: 'benefits', title: 'Benefits', type: 'array', of: [{type: 'string'}] }),
    defineField({ name: 'useCases', title: 'Use Cases', type: 'array', of: [{type: 'string'}] }),
    defineField({ name: 'screenshots', title: 'Screenshots', type: 'array', of: [{type: 'image'}] }),
    defineField({ name: 'available', title: 'Available', type: 'boolean', initialValue: true }),
    defineField({ name: 'comingSoon', title: 'Coming Soon', type: 'boolean' }),
    defineField({ name: 'featured', title: 'Featured', type: 'boolean' }),
    defineField({ name: 'order', title: 'Order', type: 'number' }),
    defineField({ name: 'category', title: 'Category', type: 'string' }),
    defineField({ name: 'metaTitle', title: 'Meta Title', type: 'string' }),
    defineField({ name: 'metaDescription', title: 'Meta Description', type: 'text' }),
    defineField({ name: 'ogImage', title: 'OG Image', type: 'image' }),
  ],
  preview: {
    select: {
      title: 'title',
      provider: 'provider',
      media: 'logoImage',
    },
  },
})