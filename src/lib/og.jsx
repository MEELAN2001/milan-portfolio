import { ImageResponse } from 'next/og';
import { site } from '@/data/site';

/**
 * Shared social-card renderer for `opengraph-image` and `twitter-image`.
 *
 * Rendered by Satori, which supports only a flexbox subset of CSS — every
 * element with more than one child needs an explicit `display: flex`, and no
 * custom fonts are loaded so the build never depends on the network.
 */
export const ogSize = { width: 1200, height: 630 };
export const ogContentType = 'image/png';
export const ogAlt = `${site.name} — ${site.roleLong}: Playwright, API and performance testing`;

const ACCENT = '#e85d04';
const ROSE = '#ec4899';
const VIOLET = '#8b5cf6';
const GRADIENT = `linear-gradient(135deg, ${ACCENT} 0%, ${ROSE} 50%, ${VIOLET} 100%)`;
const BG = '#12110f';
const TEXT = '#fafaf8';
const MUTED = '#a8a396';

export function renderOgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: BG,
          padding: '72px 80px',
          position: 'relative',
        }}
      >
        {/* accent wash */}
        <div
          style={{
            position: 'absolute',
            top: -320,
            right: -220,
            width: 760,
            height: 760,
            borderRadius: 760,
            // Satori has no blur filter, so keep the tint low enough that the
            // hard circle edge reads as a design element, not an artefact.
            backgroundImage: `linear-gradient(135deg, ${ACCENT}1c 0%, ${ROSE}1c 50%, ${VIOLET}1c 100%)`,
          }}
        />
        {/* left accent rule */}
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            width: 12,
            backgroundImage: GRADIENT,
          }}
        />

        {/* top: eyebrow */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ width: 56, height: 3, backgroundImage: GRADIENT }} />
          <div
            style={{
              marginLeft: 20,
              color: ACCENT,
              fontSize: 24,
              letterSpacing: 4,
              textTransform: 'uppercase',
            }}
          >
            {site.roleLong}
          </div>
        </div>

        {/* middle: name + value proposition */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              color: TEXT,
              fontSize: 92,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: -2,
              display: 'flex',
            }}
          >
            {site.name}
          </div>
          <div
            style={{
              marginTop: 24,
              color: MUTED,
              fontSize: 34,
              lineHeight: 1.35,
              maxWidth: 900,
              display: 'flex',
            }}
          >
            Playwright · API Testing · K6 &amp; JMeter · CI/CD
          </div>
        </div>

        {/* bottom: employer + location + url */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTop: `2px solid rgba(250,250,248,0.14)`,
            paddingTop: 28,
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ color: TEXT, fontSize: 26, display: 'flex' }}>
              {site.employer.name} — {site.employer.city}, {site.employer.regionCode}
            </div>
            <div style={{ color: MUTED, fontSize: 22, marginTop: 6, display: 'flex' }}>
              Remote from {site.base.city}, {site.base.country}
            </div>
          </div>
          <div style={{ color: ACCENT, fontSize: 24, display: 'flex' }}>
            {site.url.replace('https://', '')}
          </div>
        </div>
      </div>
    ),
    { ...ogSize }
  );
}
