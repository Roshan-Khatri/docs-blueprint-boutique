import { defineType } from 'sanity';

function isUniqueSlug(slug, context) {
	return context.defaultIsUnique(slug, context);
}

export default defineType({
	name: 'page',
	title: 'Page',
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
			name: 'content',
			title: 'Content',
			type: 'array',
			of: [{ type: 'block' }],
			validation: Rule => Rule.required(),
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
			name: 'ogImage',
			title: 'OG Image',
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
			name: 'showInNavigation',
			title: 'Show in Navigation',
			type: 'boolean',
		},
		{
			name: 'pageOrder',
			title: 'Page Order',
			type: 'number',
		},
			{
				name: 'heroImage',
				title: 'Hero Image',
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
			name: 'excerpt',
			title: 'Excerpt',
			type: 'text',
		},
		{
			name: 'pageTemplate',
			title: 'Page Template',
			type: 'string',
			options: {
				list: [
					{ title: 'Default', value: 'default' },
					{ title: 'Landing', value: 'landing' },
					{ title: 'Contact', value: 'contact' },
				],
			},
		},
	],
	preview: {
		select: {
			title: 'title',
			subtitle: 'slug.current',
			media: 'heroImage',
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
			title: 'Page order',
			name: 'pageOrderAsc',
			by: [
				{ field: 'pageOrder', direction: 'asc' },
			],
		},
	],
});
