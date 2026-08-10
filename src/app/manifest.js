import { site } from '@/data/site';

export default function manifest() {
  return {
    name: `${site.name} — ${site.roleLong}`,
    short_name: site.shortName,
    description: `Portfolio of ${site.name}, ${site.role} specialising in Playwright, API testing, and performance testing with K6 and JMeter.`,
    start_url: '/',
    display: 'standalone',
    background_color: '#fafaf8',
    theme_color: '#e85d04',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
