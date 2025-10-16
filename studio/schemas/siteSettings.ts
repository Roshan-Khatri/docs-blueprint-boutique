import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({ name: 'siteName', title: 'Site Name', type: 'string', validation: Rule => Rule.required() }),
    defineField({ name: 'siteDescription', title: 'Site Description', type: 'text' }),
    defineField({ name: 'logoImage', title: 'Logo Image', type: 'image' }),
    defineField({ name: 'logoImageDark', title: 'Logo Image (Dark)', type: 'image' }),
    defineField({ name: 'companyTagline', title: 'Company Tagline', type: 'string' }),
    defineField({ name: 'faviconImage', title: 'Favicon Image', type: 'image' }),
    defineField({ name: 'primaryPhone', title: 'Primary Phone', type: 'string' }),
    defineField({ name: 'primaryEmail', title: 'Primary Email', type: 'string', validation: Rule => Rule.required() }),
  defineField({ name: 'supportEmail', title: 'Support Email', type: 'string' }),
  defineField({ name: 'supportPhone', title: 'Support Phone', type: 'string' }),
    defineField({ name: 'salesEmail', title: 'Sales Email', type: 'string' }),
    defineField({ name: 'socialLinks', title: 'Social Links', type: 'object', fields: [
      {name: 'twitter', type: 'url'},
      {name: 'linkedin', type: 'url'},
      {name: 'facebook', type: 'url'},
      {name: 'youtube', type: 'url'},
      {name: 'instagram', type: 'url'}
    ]}),
    // Navigation Management
    defineField({
      name: 'navigationLinks',
      title: 'Navigation Links',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'title', type: 'string', title: 'Title', validation: Rule => Rule.required() },
          { name: 'href', type: 'string', title: 'Href', validation: Rule => Rule.required() },
          { name: 'external', type: 'boolean', title: 'External Link', initialValue: false },
          { name: 'order', type: 'number', title: 'Order' },
        ]
      }],
      validation: Rule => Rule.required(),
    }),
    defineField({ name: 'showPricingInNav', title: 'Show Pricing in Navigation', type: 'boolean', initialValue: true }),
    defineField({ name: 'ctaButtonText', title: 'CTA Button Text', type: 'string', initialValue: 'Contact Sales' }),
    defineField({ name: 'ctaButtonLink', title: 'CTA Button Link', type: 'string', initialValue: '/contact' }),
    // Footer Content
    defineField({ name: 'footerDescription', title: 'Footer Description', type: 'text' }),
    defineField({ name: 'footerSolutionsLinks', title: 'Footer Solutions Links', type: 'array', of: [{ type: 'object', fields: [ { name: 'title', type: 'string', title: 'Title', validation: Rule => Rule.required() }, { name: 'href', type: 'string', title: 'Href', validation: Rule => Rule.required() } ] }] }),
    defineField({ name: 'footerFeaturesLinks', title: 'Footer Features Links', type: 'array', of: [{ type: 'object', fields: [ { name: 'title', type: 'string', title: 'Title', validation: Rule => Rule.required() }, { name: 'href', type: 'string', title: 'Href', validation: Rule => Rule.required() } ] }] }),
    defineField({ name: 'footerCompanyLinks', title: 'Footer Company Links', type: 'array', of: [{ type: 'object', fields: [ { name: 'title', type: 'string', title: 'Title', validation: Rule => Rule.required() }, { name: 'href', type: 'string', title: 'Href', validation: Rule => Rule.required() } ] }] }),
    defineField({ name: 'footerLegalLinks', title: 'Footer Legal Links', type: 'array', of: [{ type: 'object', fields: [ { name: 'title', type: 'string', title: 'Title', validation: Rule => Rule.required() }, { name: 'href', type: 'string', title: 'Href', validation: Rule => Rule.required() } ] }] }),
    defineField({ name: 'copyrightText', title: 'Copyright Text', type: 'string' }),
    // Office Locations
    defineField({
      name: 'officeLocations',
      title: 'Office Locations',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'city', type: 'string', title: 'City', validation: Rule => Rule.required() },
          { name: 'address', type: 'string', title: 'Address', validation: Rule => Rule.required() },
          { name: 'phone', type: 'string', title: 'Phone', validation: Rule => Rule.required() },
          { name: 'hours', type: 'string', title: 'Hours', validation: Rule => Rule.required() },
          { name: 'timezone', type: 'string', title: 'Timezone' },
          { name: 'primary', type: 'boolean', title: 'Primary Office', initialValue: false },
        ]
      }],
    }),
    defineField({ name: 'primaryOfficeIndex', title: 'Primary Office Index', type: 'number' }),
    // Business Hours
    defineField({
      name: 'businessHours',
      title: 'Business Hours',
      type: 'object',
      fields: [
        { name: 'monday', type: 'object', fields: [ { name: 'open', type: 'string' }, { name: 'close', type: 'string' }, { name: 'closed', type: 'boolean' } ] },
        { name: 'tuesday', type: 'object', fields: [ { name: 'open', type: 'string' }, { name: 'close', type: 'string' }, { name: 'closed', type: 'boolean' } ] },
        { name: 'wednesday', type: 'object', fields: [ { name: 'open', type: 'string' }, { name: 'close', type: 'string' }, { name: 'closed', type: 'boolean' } ] },
        { name: 'thursday', type: 'object', fields: [ { name: 'open', type: 'string' }, { name: 'close', type: 'string' }, { name: 'closed', type: 'boolean' } ] },
        { name: 'friday', type: 'object', fields: [ { name: 'open', type: 'string' }, { name: 'close', type: 'string' }, { name: 'closed', type: 'boolean' } ] },
        { name: 'saturday', type: 'object', fields: [ { name: 'open', type: 'string' }, { name: 'close', type: 'string' }, { name: 'closed', type: 'boolean' } ] },
        { name: 'sunday', type: 'object', fields: [ { name: 'open', type: 'string' }, { name: 'close', type: 'string' }, { name: 'closed', type: 'boolean' } ] },
      ]
    }),
    defineField({ name: 'supportHours', title: 'Support Hours', type: 'string' }),
    defineField({ name: 'holidayMessage', title: 'Holiday Message', type: 'text' }),
    // Existing fields
    defineField({ name: 'defaultMetaTitle', title: 'Default Meta Title', type: 'string' }),
    defineField({ name: 'defaultMetaDescription', title: 'Default Meta Description', type: 'text' }),
    defineField({ name: 'defaultOgImage', title: 'Default OG Image', type: 'image' }),
    defineField({ name: 'googleAnalyticsId', title: 'Google Analytics ID', type: 'string' }),
    defineField({ name: 'facebookPixelId', title: 'Facebook Pixel ID', type: 'string' }),
    defineField({ name: 'otherTrackingCodes', title: 'Other Tracking Codes', type: 'text' }),
    defineField({ name: 'showPricing', title: 'Show Pricing Page', type: 'boolean', initialValue: true }),
    defineField({ name: 'maintenanceMode', title: 'Maintenance Mode', type: 'boolean' }),
    defineField({ name: 'maintenanceMessage', title: 'Maintenance Message', type: 'array', of: [{type: 'block'}] }),
    defineField({ name: 'maintenanceStartDate', title: 'Maintenance Start Date', type: 'datetime' }),
    defineField({ name: 'maintenanceEndDate', title: 'Maintenance End Date', type: 'datetime' }),
    defineField({ name: 'enableBlog', title: 'Enable Blog', type: 'boolean', initialValue: true }),
    defineField({ name: 'enableKnowledgebase', title: 'Enable Knowledgebase', type: 'boolean', initialValue: true }),
    defineField({ name: 'enableChat', title: 'Enable Chat', type: 'boolean' }),
  ],
  preview: {
    select: {
      title: 'siteName',
      description: 'siteDescription',
      media: 'logoImage',
    },
  },
})