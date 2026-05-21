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
                I&apos;m a <strong>QA Automation Engineer</strong> based in Kathmandu, Nepal, specializing in
                <strong> Playwright, Cypress, API Testing, and CI/CD automation using JavaScript</strong>.
                I focus on building scalable and maintainable test automation frameworks that improve software quality and release confidence.
              </p>

              <p>
                I design and implement <strong>end-to-end automation testing solutions</strong>, including UI automation, API validation,
                and regression testing integrated into CI/CD pipelines. My engineering approach follows modern QA practices such as
                Page Object Model (POM), reusable test architecture, and modular framework design.
              </p>

              <p>
                I also have a background in <strong>ethical hacking and security testing</strong>, which gives me a security-first mindset
                when analyzing applications and designing test strategies across the SDLC.
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
