import Image from 'next/image';
import SectionTitle from '@/components/ui/SectionTitle';
import Container from '@/components/ui/Container';
import { site } from '@/data/site';

export default function About() {
  return (
    <section id="about">
      <Container>
        <SectionTitle num="00" title="About Me" />

        <div className="about-wrapper">

          {/* IMAGE */}
          <div className="about-image">
            <Image
              src="/Profile.jpeg"
              alt={`${site.name} — QA Automation Engineer specialising in Playwright, API and performance testing`}
              width={300}
              height={400}
              priority
              sizes="(max-width: 768px) 60vw, 300px"
              className="profile-image"
            />
          </div>

          {/* TEXT CONTENT */}
          <div className="about-right">

            <div className="about-text">

              <p>
                I&apos;m a <strong>QA Automation Engineer</strong> at{' '}
                <a
                  href={site.employer.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="about-link"
                >
                  {site.employer.name}
                </a>
                , a {site.employer.city}, {site.employer.region} based company — working{' '}
                <strong>remotely from {site.base.city}, {site.base.country}</strong> with a
                distributed US team. I build scalable test automation using{' '}
                <strong>Playwright, JavaScript, API testing, and CI/CD pipelines</strong>.
              </p>

              <p>
                I design and implement <strong>end-to-end automation solutions</strong> using
                Page Object Model (POM), modular framework architecture, and integrated
                performance testing. From UI automation with Playwright to API validation and
                load testing with <strong>K6 and JMeter</strong>, I solve real QA engineering
                problems with modern tooling and disciplined practices.
              </p>

              <p>
                With a background in <strong>security testing</strong>, I bring a
                security-first perspective to test design — helping teams ship systems that
                are reliable as well as correct.
              </p>

            </div>

            {/* DETAILS */}
            <div className="about-details">

              <div className="about-detail-item">
                <span className="about-detail-label">
                  <span className="detail-icon">💼</span> Currently
                </span>
                <span className="about-detail-value">
                  QA Automation Engineer · {site.employer.name}
                </span>
              </div>

              <div className="about-detail-item">
                <span className="about-detail-label">
                  <span className="detail-icon">📍</span> Based in
                </span>
                <span className="about-detail-value">
                  {site.base.city}, {site.base.country} · Remote ({site.employer.countryCode} hours)
                </span>
              </div>

              <div className="about-detail-item">
                <span className="about-detail-label">
                  <span className="detail-icon">✉️</span> Email
                </span>
                <a href={`mailto:${site.email}`} className="about-detail-value about-link">
                  {site.email}
                </a>
              </div>

              <div className="about-detail-item">
                <span className="about-detail-label">
                  <span className="detail-icon">📱</span> Phone
                </span>
                <a
                  href={`tel:${site.phoneE164.replace(/-/g, '')}`}
                  className="about-detail-value about-link"
                >
                  {site.phone}
                </a>
              </div>

              <div className="about-detail-item">
                <span className="about-detail-label">
                  <span className="detail-icon">✓</span> Status
                </span>
                <span className="about-detail-value about-status">
                  <span className="status-dot" /> Open to remote QA Automation &amp; SDET collaborations
                </span>
              </div>

            </div>

          </div>
        </div>
      </Container>
    </section>
  );
}
