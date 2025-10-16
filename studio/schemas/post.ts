import { defineType } from 'sanity';

function isUniqueSlug(slug, context) {
	const { document } = context;
	// Use Sanity's default uniqueness check
	return context.defaultIsUnique(slug, context);
}

export default defineType({
	name: 'post',
	title: 'Post',
	type: 'document',
	fields: [
		{
			name: 'title',
			title: 'Title',
			type: 'string',
			validation: Rule => Rule.required(),
		},
			{
				name: 'slug',
				title: 'Slug',
				type: 'slug',
				options: {
					source: 'title',
					maxLength: 96,
					isUnique: isUniqueSlug,
				},
				validation: Rule => Rule.required(),
			},
		{
			name: 'author',
			title: 'Author',
			type: 'reference',
			to: [{ type: 'author' }],
			validation: Rule => Rule.required(),
		},
		{
			name: 'publishedAt',
			title: 'Published At',
			type: 'datetime',
		},
		{
			name: 'excerpt',
			title: 'Excerpt',
			type: 'text',
		},
		{
			name: 'body',
			title: 'Body',
			type: 'array',
			of: [{ type: 'block' }],
			validation: Rule => Rule.required(),
		},
			{
				name: 'featuredImage',
				title: 'Featured Image',
				type: 'image',
				options: { hotspot: true },
				fields: [
					{
						name: 'alt',
						title: 'Alt text',
						type: 'string',
						validation: Rule => Rule.required(),
					},
				],
			},
		{
			name: 'metaTitle',
			title: 'Meta Title',
			type: 'string',
		},
		{
			name: 'metaDescription',
			title: 'Meta Description',
			type: 'text',
		},
		{
			name: 'categories',
			title: 'Categories',
			type: 'array',
			of: [{ type: 'string' }],
		},
		{
			name: 'tags',
			title: 'Tags',
			type: 'array',
			of: [{ type: 'string' }],
		},
		{
			name: 'status',
			title: 'Status',
			type: 'string',
			options: {
				list: [
					{ title: 'Draft', value: 'draft' },
					{ title: 'Published', value: 'published' },
				],
			},
			initialValue: 'draft',
		},
	],
	preview: {
		select: {
			title: 'title',
			subtitle: 'author.name',
			media: 'featuredImage',
		},
		prepare(selection) {
			const { title, subtitle, media } = selection;
			return {
				title,
				subtitle,
				media,
			};
		},
	},
	orderings: [
		{
			title: 'Published date, newest first',
			name: 'publishedAtDesc',
			by: [
				{ field: 'publishedAt', direction: 'desc' },
			],
		},
	],
});
