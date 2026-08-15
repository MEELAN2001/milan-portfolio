'use client';

import Image from 'next/image';
import { Briefcase, MapPin, Mail, Phone, CheckCircle2 } from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';
import Container from '@/components/ui/Container';
import TiltCard from '@/components/motion/TiltCard';
import Reveal from '@/components/motion/Reveal';
import { site } from '@/data/site';

export default function About() {
  return (
    <section id="about">
      <Container>
        <SectionTitle num="00" title="About Me" />

        <div className="about-wrapper">

          {/* IMAGE */}
          <Reveal as="div" className="about-image" y={16}>
            <TiltCard className="profile-tilt" max={7} glare>
              <Image
                src="/profile.jpg"
                alt={`${site.name} — QA Automation Engineer specialising in Playwright, API and performance testing`}
                width={400}
                height={490}
                priority
                sizes="(max-width: 768px) 60vw, 350px"
                className="profile-image"
              />
              <span className="profile-frame" aria-hidden="true" />
            </TiltCard>
          </Reveal>

          {/* TEXT CONTENT */}
          <div className="about-right">

            <Reveal as="div" className="about-text" delay={0.05}>

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

            </Reveal>

            {/* DETAILS */}
            <Reveal as="div" className="about-details" delay={0.1}>

              <div className="about-detail-item">
                <span className="about-detail-label">
                  <Briefcase className="detail-icon" size={15} strokeWidth={2} />
                  <span>Currently</span>
                </span>
                <span className="about-detail-value">
                  QA Automation Engineer · {site.employer.name}
                </span>
              </div>

              <div className="about-detail-item">
                <span className="about-detail-label">
                  <MapPin className="detail-icon" size={15} strokeWidth={2} />
                  <span>Based in</span>
                </span>
                <span className="about-detail-value">
                  {site.base.city}, {site.base.country} · Remote ({site.employer.countryCode} hours)
                </span>
              </div>

              <div className="about-detail-item">
                <span className="about-detail-label">
                  <Mail className="detail-icon" size={15} strokeWidth={2} />
                  <span>Email</span>
                </span>
                <a href={`mailto:${site.email}`} className="about-detail-value about-link">
                  {site.email}
                </a>
              </div>

              <div className="about-detail-item">
                <span className="about-detail-label">
                  <Phone className="detail-icon" size={15} strokeWidth={2} />
                  <span>Phone</span>
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
                  <CheckCircle2 className="detail-icon" size={15} strokeWidth={2} />
                  <span>Status</span>
                </span>
                <span className="about-detail-value about-status">
                  <span className="status-dot" />
                  <span>Open to remote QA Automation &amp; SDET collaborations</span>
                </span>
              </div>

            </Reveal>

          </div>
        </div>
      </Container>
    </section>
  );
}
