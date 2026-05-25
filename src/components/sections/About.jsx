import Image from 'next/image';
import SectionTitle from '@/components/ui/SectionTitle';
import Container from '@/components/ui/Container';

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
              alt="QA Automation Engineer Milan Bomjan Tamang"
              width={300}
              height={400}
              priority
              className="profile-image"
            />
          </div>

          {/* TEXT CONTENT */}
          <div className="about-right">

            <div className="about-text">

              <p>
                I&apos;m a <strong>QA Automation Engineer</strong> based in Kathmandu, Nepal, focused on building scalable test automation frameworks using
                <strong> Playwright, JavaScript, API testing, and CI/CD pipelines</strong>.
                My approach: eliminate manual testing bottlenecks, improve release confidence, and architect maintainable testing systems.
              </p>

              <p>
                I design and implement <strong>end-to-end automation solutions</strong> using Page Object Model (POM), modular framework architecture, and performance testing integration. 
                From UI automation with Playwright to API validation and performance testing (K6 & JMeter), I solve real QA engineering challenges through modern tooling and best practices.
              </p>

              <p>
                With a background in <strong>security testing</strong>, I bring a security-first perspective to test design, helping teams build robust and reliable systems.
              </p>

            </div>

            {/* DETAILS */}
            <div className="about-details">

              <div className="about-detail-item">
                <span className="about-detail-label">
                  <span className="detail-icon">📍</span> Location
                </span>
                <span className="about-detail-value">Kathmandu, Nepal</span>
              </div>

              <div className="about-detail-item">
                <span className="about-detail-label">
                  <span className="detail-icon">✉️</span> Email
                </span>
                <a href="mailto:mailmilan.bomjan@gmail.com" className="about-detail-value about-link">
                  mailmilan.bomjan@gmail.com
                </a>
              </div>

              <div className="about-detail-item">
                <span className="about-detail-label">
                  <span className="detail-icon">📱</span> Phone
                </span>
                <a href="tel:+9779841907159" className="about-detail-value about-link">
                  +977 9841907159
                </a>
              </div>

              <div className="about-detail-item">
                <span className="about-detail-label">
                  <span className="detail-icon">✓</span> Status
                </span>
                <span className="about-detail-value about-status">
                  <span className="status-dot" /> Open to QA Automation & SDET opportunities
                </span>
              </div>

            </div>

          </div>
        </div>
      </Container>
    </section>
  );
}
