import { site } from '@/data/site';

/**
 * Bump this when the page content meaningfully changes.
 *
 * Deliberately a fixed date rather than `new Date()`: a lastModified that moves
 * on every deploy is noise, and Google learns to ignore the signal entirely.
 */
const CONTENT_LAST_UPDATED = new Date('2026-08-10');

export default function sitemap() {
  // Single-page site — fragment URLs (#about, #projects) are not separate
  // documents, so listing them here adds nothing and Google folds them into
  // the canonical root anyway.
  return [
    {
      url: site.url,
      lastModified: CONTENT_LAST_UPDATED,
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}
