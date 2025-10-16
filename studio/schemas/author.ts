import { defineType } from 'sanity';

function isUniqueSlug(slug, context) {
	return context.defaultIsUnique(slug, context);
}

export default defineType({
	name: 'author',
	title: 'Author',
	type: 'document',
	fields: [
		{
			name: 'name',
			title: 'Name',
			type: 'string',
			validation: Rule => Rule.required(),
		},
			{
				name: 'slug',
				title: 'Slug',
				type: 'slug',
				options: {
					source: 'name',
					maxLength: 96,
					isUnique: isUniqueSlug,
				},
				validation: Rule => Rule.required(),
			},
		{
			name: 'bio',
			title: 'Bio',
			type: 'text',
		},
		{
			name: 'email',
			title: 'Email',
			type: 'string',
		},
			{
				name: 'profileImage',
				title: 'Profile Image',
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
			name: 'socialLinks',
			title: 'Social Media Links',
			type: 'object',
			fields: [
				{ name: 'twitter', title: 'Twitter', type: 'url' },
				{ name: 'linkedin', title: 'LinkedIn', type: 'url' },
				{ name: 'github', title: 'GitHub', type: 'url' },
			],
		},
		{
			name: 'title',
			title: 'Title/Position',
			type: 'string',
		},
		{
			name: 'company',
			title: 'Company',
			type: 'string',
		},
	],
	preview: {
		select: {
			title: 'name',
			subtitle: 'title',
			media: 'profileImage',
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
});
