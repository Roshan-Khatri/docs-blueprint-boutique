
export const featureBySlugQuery = `*[_type == "feature" && slug.current == $slug][0]{
  _id, title, slug, description, longDescription, benefits, useCases, technicalSpecs, featureCategory->{title}, parentFeature->{title, slug}, relatedSolutions[]->{title, slug}, relatedFeatures[]->{title, slug}, heroImage, ogImage, howItWorks, setupGuide, apiReference, metaTitle, metaDescription, featured, order, showInNavigation
}`;
// --- SANITY CMS INTEGRATION QUERIES ---

// Solutions
export const allSolutionsQuery = `*[_type == "solution" && published == true] | order(order asc, title asc){
  _id, title, slug, description, longDescription, features, benefits, pricing, pricingModel, category->{title}, relatedSolutions[]->{title, slug}, parentSolution->{title, slug}, heroImage, ogImage, metaTitle, metaDescription, published, featured, order, integrations, testimonials, demoUrl
}`;
export const solutionBySlugQuery = `*[_type == "solution" && published == true && slug.current == $slug][0]{
  _id, title, slug, description, longDescription, features, benefits, pricing, pricingModel, category->{title}, relatedSolutions[]->{title, slug}, parentSolution->{title, slug}, heroImage, ogImage, metaTitle, metaDescription, published, featured, order, integrations, testimonials, demoUrl
}`;
export const featuredSolutionsQuery = `*[_type == "solution" && published == true && featured == true] | order(order asc, title asc){
  _id, title, slug, description, category->{title}, heroImage, featured, order
}`;
export const solutionByCategoryQuery = `*[_type == "solution" && published == true && category->title == $category] | order(order asc, title asc){
  _id, title, slug, description, category->{title}, heroImage, featured, order
}`;

// Features
export const allFeaturesQuery = `*[_type == "feature"] | order(order asc, title asc){
  _id, title, slug, description, longDescription, benefits, useCases, technicalSpecs, featureCategory->{title}, parentFeature->{title, slug}, relatedSolutions[]->{title, slug}, relatedFeatures[]->{title, slug}, heroImage, ogImage, howItWorks, setupGuide, apiReference, metaTitle, metaDescription, featured, order, showInNavigation
}`;
export const featuredFeaturesQuery = `*[_type == "feature" && featured == true] | order(order asc, title asc){
  _id, title, slug, description, featureCategory->{title}, heroImage, featured, order
}`;

// Site Settings
export const siteSettingsQuery = `*[_type == "siteSettings"][0]{
  siteName,
  siteDescription,
  logoImage,
  logoImageDark,
  companyTagline,
  faviconImage,
  primaryPhone,
  primaryEmail,
  supportEmail,
  supportPhone,
  salesEmail,
  socialLinks,
  navigationLinks,
  showPricingInNav,
  ctaButtonText,
  ctaButtonLink,
  footerDescription,
  footerSolutionsLinks,
  footerFeaturesLinks,
  footerCompanyLinks,
  footerLegalLinks,
  copyrightText,
  officeLocations,
  primaryOfficeIndex,
  businessHours,
  supportHours,
  holidayMessage,
  companyTagline,
  logoImageDark,
  defaultMetaTitle,
  defaultMetaDescription,
  defaultOgImage,
  googleAnalyticsId,
  facebookPixelId,
  otherTrackingCodes,
  showPricing,
  enableBlog,
  enableKnowledgebase,
  enableChat,
  maintenanceMode,
  maintenanceMessage,
  maintenanceStartDate,
  maintenanceEndDate
}`;
// Reusable field groups
export const authorFields = '{ _id, name, slug, profileImage, title, company, socialLinks }';
export const postFields = `{ _id, title, slug, excerpt, featuredImage, publishedAt, "author": author->{name, slug, profileImage} }`;
export const pageFields = '{ _id, title, slug, heroImage, excerpt, pageOrder, showInNavigation, pageTemplate }';

export const allPostsQuery = `*[_type == "post" && status == "published"] | order(publishedAt desc){
  _id, title, slug, excerpt, featuredImage, publishedAt, author->{name, slug, profileImage}
}`;
export const postBySlugQuery = `*[_type == "post" && slug.current == $slug && status == "published"][0]{
  _id, title, slug, excerpt, featuredImage, publishedAt, body, author->{name, slug, profileImage}
}`;

export const allAuthorsQuery = `*[_type == "author"]{_id, name, slug, bio, profileImage, socialLinks, title, company}`;
export const authorBySlugQuery = `*[_type == "author" && slug.current == $slug][0]{_id, name, slug, bio, profileImage, socialLinks, title, company}`;

export const allPagesQuery = `*[_type == "page"] | order(pageOrder asc){_id, title, slug, heroImage, excerpt, pageOrder, showInNavigation}`;
export const pageBySlugQuery = `*[_type == "page" && slug.current == $slug][0]{_id, title, slug, content, heroImage, metaTitle, metaDescription, ogImage, showInNavigation, pageOrder, pageTemplate, excerpt}`;

// Featured posts (by 'featured' boolean or 'tags' includes 'featured')
export const featuredPosts = `*[_type == "post" && status == "published" && (featured == true || tags[] == "featured")] | order(publishedAt desc){${postFields}}`;

// Posts by author
export const postsByAuthor = `*[_type == "post" && status == "published" && author._ref == $authorId] | order(publishedAt desc){${postFields}}`;

// Author with posts
export const authorWithPosts = `*[_type == "author" && slug.current == $slug][0]{${authorFields}, "posts": *[_type == "post" && status == "published" && author._ref == ^._id]{${postFields}}}`;

// Navigation pages
export const navPages = `*[_type == "page" && showInNavigation == true] | order(pageOrder asc, title asc){${pageFields}}`;
