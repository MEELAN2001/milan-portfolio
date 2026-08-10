import { site } from '@/data/site';

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // Next.js internals carry no ranking value and waste crawl budget.
        disallow: ['/_next/', '/api/'],
      },
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
