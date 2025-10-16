import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'featureCategory',
  title: 'Feature Category',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: Rule => Rule.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 }, validation: Rule => Rule.required() }),
    defineField({ name: 'description', title: 'Description', type: 'text' }),
    defineField({ name: 'icon', title: 'Icon', type: 'string' }),
    defineField({ name: 'parentCategory', title: 'Parent Category', type: 'reference', to: [{type: 'featureCategory'}] }),
    defineField({ name: 'order', title: 'Order', type: 'number' }),
    defineField({ name: 'showInNavigation', title: 'Show in Navigation', type: 'boolean', initialValue: true }),
    defineField({ name: 'navigationOrder', title: 'Navigation Order', type: 'number' }),
    defineField({ name: 'metaTitle', title: 'Meta Title', type: 'string' }),
    defineField({ name: 'metaDescription', title: 'Meta Description', type: 'text' }),
    defineField({ name: 'heroImage', title: 'Hero Image', type: 'image' }),
    defineField({ name: 'longDescription', title: 'Long Description', type: 'array', of: [{type: 'block'}] }),
  ],
  preview: {
    select: {
      title: 'title',
      description: 'description',
      media: 'heroImage',
    },
  },
})