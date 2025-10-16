
// --- SANITY CMS INTEGRATION TYPES ---

export interface SanityImage {
  asset: { _ref: string; _type: string };
  alt?: string;
}

export type PortableTextBlock = {
  _type: 'block';
  children?: Array<{ _type: 'span'; text?: string }>;
  [key: string]: any;
};

export interface Solution {
  _id: string;
  title: string;
  slug: { current: string };
  description?: string;
  longDescription?: PortableTextBlock[];
  features?: string[];
  benefits?: string[];
  specifications?: PortableTextBlock[];
  pricing?: string;
  pricingModel?: 'per-user' | 'flat-rate' | 'custom' | string;
  category?: { title?: string } | null;
  parentSolution?: { title?: string; slug?: { current: string } } | null;
  relatedSolutions?: Array<{ title?: string; slug?: { current: string } }>;
  heroImage?: SanityImage;
  ogImage?: SanityImage;
  metaTitle?: string;
  metaDescription?: string;
  published?: boolean;
  featured?: boolean;
  order?: number;
  integrations?: Array<{ title?: string; slug?: { current: string } }>;
  testimonials?: string[];
  caseStudies?: string[];
  systemRequirements?: PortableTextBlock[];
  apiDocumentation?: string;
  demoUrl?: string;
}

export interface Feature {
  _id: string;
  title: string;
  slug: { current: string };
  description?: string;
  longDescription?: PortableTextBlock[];
  benefits?: string[];
  useCases?: string[];
  technicalSpecs?: PortableTextBlock[];
  featureCategory?: { title: string };
  parentFeature?: { title: string; slug: { current: string } };
  relatedSolutions?: Array<{ title: string; slug: { current: string } }>;
  relatedFeatures?: Array<{ title: string; slug: { current: string } }>;
  heroImage?: SanityImage;
  ogImage?: SanityImage;
  howItWorks?: PortableTextBlock[];
  setupGuide?: PortableTextBlock[];
  apiReference?: string;
  metaTitle?: string;
  metaDescription?: string;
  featured?: boolean;
  order?: number;
  showInNavigation?: boolean;
}

export interface FeatureDoc {
  _id: string;
  title: string;
  slug: { current: string };
  description?: string;
  heroImage?: SanityImage;
  featured?: boolean;
  order?: number;
}

export interface SiteSettings {
  siteName?: string;
  siteDescription?: string;
  logoImage?: SanityImage;
  logoImageDark?: SanityImage;
  companyTagline?: string;
  faviconImage?: SanityImage;
    primaryPhone?: string;
    primaryEmail: string;
    supportEmail?: string;
    supportPhone?: string;
  salesEmail?: string;
  socialLinks?: { twitter?: string; linkedin?: string; facebook?: string; youtube?: string; instagram?: string };
  // Navigation
  navigationLinks?: Array<{ title: string; href: string; external?: boolean; order?: number }>;
  showPricingInNav?: boolean;
  ctaButtonText?: string;
  ctaButtonLink?: string;
  // Footer
  footerDescription?: string;
  footerSolutionsLinks?: Array<{ title: string; href: string }>;
  footerFeaturesLinks?: Array<{ title: string; href: string }>;
  footerCompanyLinks?: Array<{ title: string; href: string }>;
  footerLegalLinks?: Array<{ title: string; href: string }>;
  copyrightText?: string;
  // Office Locations & Hours
  officeLocations?: Array<{ city: string; address: string; phone: string; hours: string; timezone?: string; primary?: boolean }>;
  primaryOfficeIndex?: number;
  businessHours?: {
    monday?: { open: string; close: string; closed?: boolean };
    tuesday?: { open: string; close: string; closed?: boolean };
    wednesday?: { open: string; close: string; closed?: boolean };
    thursday?: { open: string; close: string; closed?: boolean };
    friday?: { open: string; close: string; closed?: boolean };
    saturday?: { open: string; close: string; closed?: boolean };
    sunday?: { open: string; close: string; closed?: boolean };
  };
  supportHours?: string;
  holidayMessage?: string;
  // Existing fields
  defaultMetaTitle?: string;
  defaultMetaDescription?: string;
  defaultOgImage?: SanityImage;
  googleAnalyticsId?: string;
  facebookPixelId?: string;
  otherTrackingCodes?: string;
  showPricing?: boolean;
  enableBlog?: boolean;
  enableKnowledgebase?: boolean;
  enableChat?: boolean;
  maintenanceMode?: boolean;
  maintenanceMessage?: PortableTextBlock[];
  maintenanceStartDate?: string;
  maintenanceEndDate?: string;
}

export interface Page {
  _id: string;
  title: string;
  slug: { current: string };
  content?: PortableTextBlock[];
  heroImage?: SanityImage;
  metaTitle?: string;
  metaDescription?: string;
  ogImage?: SanityImage;
  showInNavigation?: boolean;
  pageOrder?: number;
  pageTemplate?: string;
  excerpt?: string;
}

export interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt?: string;
  featuredImage?: SanityImage;
  publishedAt?: string;
  body?: PortableTextBlock[];
  author?: {
    name: string;
    slug: { current: string };
    profileImage?: SanityImage;
  };
  metaTitle?: string;
  metaDescription?: string;
  categories?: string[];
  tags?: string[];
  status?: 'draft' | 'published';
}

export interface Author {
  _id: string;
  name: string;
  slug: { current: string };
  bio?: string;
  email?: string;
  profileImage?: SanityImage;
  socialLinks?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
  title?: string;
  company?: string;
}

export type SanityReference<T> = { _type: 'reference'; _ref: string } & Partial<T>;
