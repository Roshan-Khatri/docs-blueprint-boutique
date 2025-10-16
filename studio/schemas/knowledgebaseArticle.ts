import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'knowledgebaseArticle',
  title: 'Knowledge Base Article',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: Rule => Rule.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 }, validation: Rule => Rule.required() }),
    defineField({ name: 'excerpt', title: 'Excerpt', type: 'text' }),
    defineField({ name: 'content', title: 'Content', type: 'array', of: [{type: 'block'}] }),
    defineField({ name: 'category', title: 'Category', type: 'array', of: [{type: 'string'}] }),
    defineField({ name: 'tags', title: 'Tags', type: 'array', of: [{type: 'string'}] }),
    defineField({ name: 'heroImage', title: 'Hero Image', type: 'image' }),
    defineField({ name: 'tableOfContents', title: 'Table of Contents', type: 'boolean' }),
    defineField({ name: 'difficulty', title: 'Difficulty', type: 'string', options: { list: ['beginner', 'intermediate', 'advanced'] } }),
    defineField({ name: 'author', title: 'Author', type: 'reference', to: [{type: 'author'}] }),
    defineField({ name: 'publishedAt', title: 'Published At', type: 'datetime' }),
    defineField({ name: 'lastUpdated', title: 'Last Updated', type: 'datetime' }),
    defineField({ name: 'readingTime', title: 'Reading Time', type: 'number' }),
    defineField({ name: 'metaTitle', title: 'Meta Title', type: 'string' }),
    defineField({ name: 'metaDescription', title: 'Meta Description', type: 'text' }),
    defineField({ name: 'ogImage', title: 'OG Image', type: 'image' }),
    defineField({ name: 'featured', title: 'Featured', type: 'boolean' }),
    defineField({ name: 'order', title: 'Order', type: 'number' }),
    defineField({ name: 'status', title: 'Status', type: 'string', options: { list: ['draft', 'published'] } }),
    defineField({ name: 'helpful', title: 'Helpful', type: 'boolean' }),
    defineField({ name: 'relatedArticles', title: 'Related Articles', type: 'array', of: [{type: 'reference', to: [{type: 'knowledgebaseArticle'}]}] }),
  ],
  preview: {
    select: {
      title: 'title',
      category: 'category',
      author: 'author.name',
      media: 'heroImage',
    },
  },
})