
import imageUrlBuilder from '@sanity/image-url';
import { getSanityClient } from './client';
import { getSanityConfig } from './env';
import type { SanityImage } from './types';

export type SanityImageSource = SanityImage | string | null | undefined;
export interface ImageUrlBuilder {
  width(w: number): ImageUrlBuilder;
  height(h: number): ImageUrlBuilder;
f// The following duplicate functions have been removed.
  format(f: 'webp' | 'jpg'): ImageUrlBuilder;
  quality(q: number): ImageUrlBuilder;
  url(): string;
}

const nullImage: ImageUrlBuilder = {
  width: () => nullImage,
  height: () => nullImage,
  format: () => nullImage,
  quality: () => nullImage,
  url: () => ''
};

let _builder: ReturnType<typeof imageUrlBuilder> | null = null;
function getBuilder(): ReturnType<typeof imageUrlBuilder> | null {
  if (_builder) return _builder;
  const config = getSanityConfig();
  if (!config) return null;
  try {
    const client = getSanityClient();
    _builder = imageUrlBuilder(client);
    return _builder;
  } catch {
    return null;
  }
}

function wrapChain(chain: any): ImageUrlBuilder {
  return {
    width: (w: number) => wrapChain(chain.width(w)),
    height: (h: number) => wrapChain(chain.height(h)),
    format: (f: 'webp' | 'jpg') => wrapChain(chain.format(f)),
    quality: (q: number) => wrapChain(chain.quality(q)),
    url: () => chain.url() || ''
  };
}

function wrapString(src: string): ImageUrlBuilder {
  return {
    width: () => wrapString(src),
    height: () => wrapString(src),
    format: () => wrapString(src),
    quality: () => wrapString(src),
    url: () => src
  };
}
export function urlFor(source: SanityImageSource): ImageUrlBuilder {
  const builder = getBuilder();
  if (!builder || !source) {
    // Return a dummy builder that always returns empty string
    const dummy = {
      width: () => dummy,
      height: () => dummy,
      format: () => dummy,
      quality: () => dummy,
      url: () => '',
    };
    return dummy;
  }
  // Sanity image-url builder is chainable
  let chain = builder.image(source);
  const api: ImageUrlBuilder = {
    width: (w) => { chain = chain.width(w); return api; },
    height: (h) => { chain = chain.height(h); return api; },
    format: (f) => { chain = chain.format(f); return api; },
    quality: (q) => { chain = chain.quality(q); return api; },
    url: () => chain.url() || '',
  };
  return api;
}

// Get a single image URL with optional width/format
export function getImageUrl(source: SanityImageSource, width?: number, format?: string): string {
  let builder = urlFor(source);
  if (width) builder = builder.width(width);
  if (format === 'webp' || format === 'jpg') builder = builder.format(format);
  return builder.url();
}

// Get a srcset string for responsive images
export function getSrcSet(
  source: SanityImageSource,
  widths: number[] = [320, 480, 640, 800, 1024, 1280, 1600],
  format?: string,
  quality?: number
): string {
  return widths
    .map((w) => {
      let builder = urlFor(source).width(w);
  if (format === 'webp' || format === 'jpg') builder = builder.format(format);
      if (quality) builder = builder.quality(quality);
      const url = builder.url();
      return url ? `${url} ${w}w` : '';
    })
    .filter(Boolean)
    .join(', ');
}

// Get full responsive image attributes for <img>
export function getResponsiveImageAttrs(
  source: SanityImageSource,
  options?: {
    widths?: number[];
    sizes?: string;
    format?: string;
    quality?: number;
    alt?: string;
    width?: number;
    height?: number;
  }
): {
  src: string;
  srcSet: string;
  sizes: string;
  alt: string;
  width?: number;
  height?: number;
} {
  const {
    widths = [320, 480, 640, 800, 1024, 1280, 1600],
    sizes = '100vw',
    format,
    quality,
    alt = '',
    width,
    height,
  } = options || {};
  const src = getImageUrl(source, width, format);
  const srcSet = getSrcSet(source, widths, format, quality);
  return { src, srcSet, sizes, alt, width, height };
}

