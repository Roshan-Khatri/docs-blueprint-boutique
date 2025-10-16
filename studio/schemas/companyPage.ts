import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'companyPage',
  title: 'Company Page',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: Rule => Rule.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 }, validation: Rule => Rule.required() }),
    defineField({ name: 'content', title: 'Content', type: 'array', of: [{type: 'block'}] }),
    defineField({ name: 'pageType', title: 'Page Type', type: 'string', options: { list: ['about', 'support', 'policy', 'faq'] }, validation: Rule => Rule.required() }),
    defineField({ name: 'heroImage', title: 'Hero Image', type: 'image' }),
    defineField({ name: 'excerpt', title: 'Excerpt', type: 'text' }),
    defineField({ name: 'sections', title: 'Sections', type: 'array', of: [{type: 'object', fields: [
      {name: 'title', type: 'string'},
      {name: 'content', type: 'array', of: [{type: 'block'}]}
    ]}]}),
    defineField({ name: 'showInNavigation', title: 'Show in Navigation', type: 'boolean', initialValue: true }),
    defineField({ name: 'navigationOrder', title: 'Navigation Order', type: 'number' }),
    defineField({ name: 'parentPage', title: 'Parent Page', type: 'reference', to: [{type: 'companyPage'}] }),
    defineField({ name: 'metaTitle', title: 'Meta Title', type: 'string' }),
    defineField({ name: 'metaDescription', title: 'Meta Description', type: 'text' }),
    defineField({ name: 'ogImage', title: 'OG Image', type: 'image' }),
    defineField({ name: 'faqItems', title: 'FAQ Items', type: 'array', of: [{type: 'object', fields: [
      {name: 'question', type: 'string'},
      {name: 'answer', type: 'text'}
    ]}]}),
    defineField({ name: 'effectiveDate', title: 'Effective Date', type: 'date' }),
    defineField({ name: 'lastUpdated', title: 'Last Updated', type: 'date' }),
    defineField({ name: 'contactMethods', title: 'Contact Methods', type: 'array', of: [{type: 'string'}] }),
    defineField({ name: 'officeLocations', title: 'Office Locations', type: 'array', of: [{type: 'string'}] }),
    defineField({ name: 'featured', title: 'Featured', type: 'boolean' }),
    defineField({ name: 'order', title: 'Order', type: 'number' }),
  ],
  preview: {
    select: {
      title: 'title',
      pageType: 'pageType',
      media: 'heroImage',
    },
  },
})