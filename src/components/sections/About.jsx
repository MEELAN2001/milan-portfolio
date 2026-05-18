import Image from 'next/image';
import SectionTitle from '@/components/ui/SectionTitle';
import Container from '@/components/ui/Container';

export default function About() {
  return (
    <section id="about">
      <Container>
        <SectionTitle num="00" title="About Me" />
        <div className="about-wrapper">
          <div className="about-image">
            <Image
              src="/Profile.jpeg"
              alt="Milan Bomjan"
              width={300}
              height={400}
              priority
              className="profile-image"
            />
          </div>
          <div className="about-right">
            <div className="about-text">
              <p>
                I&apos;m a Quality Assurance Engineer based in Kathmandu, Nepal, currently working at
                Root Level Pvt. Ltd. I specialize in building robust test coverage through automation
                frameworks like <strong>Playwright</strong> and <strong>Cypress</strong>, combined with
                thorough manual and API testing practices.
              </p>
              <p>
                My background includes a stint in ethical hacking — giving me a security-first mindset
                that I carry into every QA engagement. I&apos;ve completed a B.Sc. in Computer Science &amp;
                Information Technology and am passionate about software quality, SDLC processes, and
                continuous improvement.
              </p>
            </div>
            <div className="about-details">
              <div className="about-detail-item">
                <span className="about-detail-label">Location</span>
                <span className="about-detail-value">Kathmandu, Nepal</span>
              </div>
              <div className="about-detail-item">
                <span className="about-detail-label">Email</span>
                <a href="mailto:mailmilan.bomjan@gmail.com" className="about-detail-value about-link">
                  mailmilan.bomjan@gmail.com
                </a>
              </div>
              <div className="about-detail-item">
                <span className="about-detail-label">Phone</span>
                <a href="tel:+9779841907159" className="about-detail-value about-link">
                  +977 9841907159
                </a>
              </div>
              <div className="about-detail-item">
                <span className="about-detail-label">Status</span>
                <span className="about-detail-value about-status">
                  <span className="status-dot" /> Available for opportunities
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}