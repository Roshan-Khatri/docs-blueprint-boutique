// --- SANITY CMS INTEGRATION HOOKS ---

import { useQuery, UseQueryResult } from '@tanstack/react-query';
import {
  allPostsQuery,
  allSolutionsQuery,
  featuredFeaturesQuery,
  featuredSolutionsQuery,
  featureBySlugQuery,
  pageBySlugQuery,
  postBySlugQuery,
  siteSettingsQuery,
  solutionBySlugQuery,
  allFeaturesQuery,
} from '@/sanity/queries';
import { getSanityClient, isSanityConfigured } from '@/sanity/client';
import { getSanityStatus } from '@/sanity/env';
import type {
  Feature,
  Solution,
  Page,
  Post,
  SiteSettings,
} from '@/sanity/types';

// --- Helper function to fetch from Sanity ---
async function fetchSanity<T>(query: string, params?: Record<string, any>): Promise<T> {
  try {
    const client = getSanityClient();
    const result = await client.fetch<T>(query, params || {});
    return result;
  } catch (error) {
    console.error('Sanity fetch failed:', error);
    throw error; // Re-throw to let react-query handle it
  }
}


// --- Sanity Status ---
export function useSanityStatus(): UseQueryResult<boolean, Error> {
  const { isConfigured } = getSanityStatus();
  return useQuery<boolean>({
    queryKey: ['sanity', 'status'],
    queryFn: async () => {
      try {
        const client = getSanityClient();
        // A trivial query to check for connectivity without relying on schema.
        await client.fetch('1');
        return true;
      } catch (error) {
        console.error('Sanity connection failed:', error);
        return false;
      }
    },
    enabled: isConfigured,
    staleTime: 1000 * 60 * 2, // 2 minutes
    retry: isConfigured ? 2 : false,
    initialData: isConfigured ? undefined : false,
  });
}

// --- Site Settings ---
export function useSiteSettings(): UseQueryResult<SiteSettings | null, Error> {
  const { isConfigured } = getSanityStatus();
  return useQuery<SiteSettings | null>({
    queryKey: ['sanity', 'siteSettings'],
    queryFn: () => fetchSanity<SiteSettings | null>(siteSettingsQuery),
    staleTime: 1000 * 60 * 5, // 5 minutes
    retry: isConfigured ? 1 : false,
    enabled: isConfigured,
    initialData: isConfigured ? undefined : null,
  });
}

// --- Featured Features ---
export function useFeaturedFeatures(): UseQueryResult<Feature[], Error> {
  const { isConfigured } = getSanityStatus();
  return useQuery<Feature[]>({
    queryKey: ['sanity', 'featuredFeatures'],
    queryFn: () => fetchSanity<Feature[]>(featuredFeaturesQuery),
    staleTime: 1000 * 60 * 5, // 5 minutes
    retry: isConfigured ? 1 : false,
    enabled: isConfigured,
    initialData: isConfigured ? undefined : [],
  });
}

// --- Featured Solutions ---
export function useFeaturedSolutions(): UseQueryResult<Solution[], Error> {
  const { isConfigured } = getSanityStatus();
  return useQuery<Solution[]>({
    queryKey: ['sanity', 'featuredSolutions'],
    queryFn: () => fetchSanity<Solution[]>(featuredSolutionsQuery),
    staleTime: 1000 * 60 * 5, // 5 minutes
    retry: isConfigured ? 1 : false,
    enabled: isConfigured,
    initialData: isConfigured ? undefined : [],
  });
}

// --- All Features ---
export function useFeatures(): UseQueryResult<Feature[], Error> {
  const { isConfigured } = getSanityStatus();
  return useQuery<Feature[]>({
    queryKey: ['sanity', 'features'],
    queryFn: () => fetchSanity<Feature[]>(allFeaturesQuery),
    staleTime: 1000 * 60 * 5, // 5 minutes
    retry: isConfigured ? 1 : false,
    enabled: isConfigured,
    initialData: isConfigured ? undefined : [],
  });
}

// --- All Solutions ---
export function useSolutions(): UseQueryResult<Solution[], Error> {
  const { isConfigured } = getSanityStatus();
  return useQuery<Solution[]>({
    queryKey: ['sanity', 'solutions'],
    queryFn: () => fetchSanity<Solution[]>(allSolutionsQuery),
    staleTime: 1000 * 60 * 5, // 5 minutes
    retry: isConfigured ? 1 : false,
    enabled: isConfigured,
    initialData: isConfigured ? undefined : [],
  });
}

// --- Pages ---
export function usePageBySlug(slug: string): UseQueryResult<Page | null, Error> {
  const { isConfigured } = getSanityStatus();
  return useQuery<Page | null>({
    queryKey: ['sanity', 'page', slug],
    queryFn: () => fetchSanity<Page | null>(pageBySlugQuery, { slug }),
    enabled: isConfigured && !!slug,
    staleTime: 1000 * 60 * 5, // 5 minutes
    retry: isConfigured ? 1 : false,
    initialData: isConfigured ? undefined : null,
  });
}

export function useFeatureBySlug(slug: string): UseQueryResult<Feature | null, Error> {
  const { isConfigured } = getSanityStatus();
  return useQuery<Feature | null>({
    queryKey: ['sanity', 'feature', slug],
    queryFn: () => fetchSanity<Feature | null>(featureBySlugQuery, { slug }),
    enabled: isConfigured && !!slug,
    staleTime: 1000 * 60 * 5, // 5 minutes
    retry: isConfigured ? 1 : false,
    initialData: isConfigured ? undefined : null,
  });
}

export function useSolutionBySlug(slug: string): UseQueryResult<Solution | null, Error> {
  const { isConfigured } = getSanityStatus();
  return useQuery<Solution | null>({
    queryKey: ['sanity', 'solution', slug],
    queryFn: () => fetchSanity<Solution | null>(solutionBySlugQuery, { slug }),
    enabled: isConfigured && !!slug,
    staleTime: 1000 * 60 * 5, // 5 minutes
    retry: isConfigured ? 1 : false,
    initialData: isConfigured ? undefined : null,
  });
}


// --- Posts ---
export function usePosts(): UseQueryResult<Post[], Error> {
  const { isConfigured } = getSanityStatus();
  return useQuery<Post[]>({
    queryKey: ['sanity', 'posts'],
    queryFn: () => fetchSanity<Post[]>(allPostsQuery),
    staleTime: 1000 * 60 * 5, // 5 minutes
    retry: isConfigured ? 1 : false,
    enabled: isConfigured,
    initialData: isConfigured ? undefined : [],
  });
}

export function usePostBySlug(slug: string): UseQueryResult<Post | null, Error> {
  const { isConfigured } = getSanityStatus();
  return useQuery<Post | null>({
    queryKey: ['sanity', 'post', slug],
    queryFn: () => fetchSanity<Post | null>(postBySlugQuery, { slug }),
    enabled: isConfigured && !!slug,
    staleTime: 1000 * 60 * 5, // 5 minutes
    retry: isConfigured ? 1 : false,
    initialData: isConfigured ? undefined : null,
  });
}