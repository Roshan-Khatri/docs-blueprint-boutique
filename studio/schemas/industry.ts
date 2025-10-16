import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'industry',
  title: 'Industry',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: Rule => Rule.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 }, validation: Rule => Rule.required() }),
    defineField({ name: 'description', title: 'Description', type: 'text', validation: Rule => Rule.required() }),
    defineField({ name: 'longDescription', title: 'Long Description', type: 'array', of: [{type: 'block'}] }),
    defineField({ name: 'industryType', title: 'Industry Type', type: 'string', options: { list: ['startup', 'small-business', 'enterprise'] } }),
    defineField({ name: 'category', title: 'Category', type: 'string', options: { list: ['education', 'finance', 'healthcare', 'technology', 'other'] } }),
    defineField({ name: 'heroImage', title: 'Hero Image', type: 'image' }),
    defineField({ name: 'challenges', title: 'Challenges', type: 'array', of: [{type: 'string'}] }),
    defineField({ name: 'solutions', title: 'Solutions', type: 'array', of: [{type: 'reference', to: [{type: 'solution'}]}] }),
    defineField({ name: 'successStories', title: 'Success Stories', type: 'array', of: [{type: 'object', fields: [
      {name: 'title', type: 'string'},
      {name: 'description', type: 'text'},
      {name: 'results', type: 'string'}
    ]}]}),
    defineField({ name: 'industryStats', title: 'Industry Stats', type: 'array', of: [{type: 'object', fields: [
      {name: 'metric', type: 'string'},
      {name: 'value', type: 'string'},
      {name: 'description', type: 'text'}
    ]}]}),
    defineField({ name: 'metaTitle', title: 'Meta Title', type: 'string' }),
    defineField({ name: 'metaDescription', title: 'Meta Description', type: 'text' }),
    defineField({ name: 'ogImage', title: 'OG Image', type: 'image' }),
    defineField({ name: 'featured', title: 'Featured', type: 'boolean' }),
    defineField({ name: 'order', title: 'Order', type: 'number' }),
    defineField({ name: 'showInNavigation', title: 'Show in Navigation', type: 'boolean', initialValue: true }),
    defineField({ name: 'complianceRequirements', title: 'Compliance Requirements', type: 'array', of: [{type: 'string'}] }),
    defineField({ name: 'certifications', title: 'Certifications', type: 'array', of: [{type: 'string'}] }),
  ],
  preview: {
    select: {
      title: 'title',
      industryType: 'industryType',
      media: 'heroImage',
    },
  },
})