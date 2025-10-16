import { Helmet } from 'react-helmet-async';
import { useSiteSettings } from '@/hooks/useSanityContent';
import { urlFor } from '@/sanity/image';

export interface SEOProps {
  title?: string;
  description?: string;
  ogImage?: string;
  favicon?: string;
}

function getImageUrl(image: any): string {
  if (!image) return '';
  if (typeof image === 'string') return image;
  try {
    return urlFor(image).url();
  } catch {
    return '';
  }
}

const SEO = ({ title, description, ogImage, favicon }: SEOProps) => {
  const { data: siteSettings } = useSiteSettings();

  const metaTitle = title || siteSettings?.defaultMetaTitle || siteSettings?.siteName || 'FoneRoute';
  const metaDescription = description || siteSettings?.defaultMetaDescription || siteSettings?.siteDescription || '';
  const metaOgImage = getImageUrl(ogImage || siteSettings?.defaultOgImage);
  const metaFavicon = getImageUrl(favicon || siteSettings?.faviconImage);

  return (
    <Helmet>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      {metaOgImage && <meta property="og:image" content={metaOgImage} />}
      {metaFavicon && <link rel="icon" href={metaFavicon} />}
    </Helmet>
  );
};

export default SEO;
