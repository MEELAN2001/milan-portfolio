import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { FaGithubSquare } from 'react-icons/fa';
import Button from '@/components/ui/Button';
import TiltCard from '@/components/motion/TiltCard';
import { site } from '@/data/site';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-glow" />
      <div className="hero-glow-2" />

      <div className="hero-inner">
        <div className="hero-content">

          {/* PRIMARY KEYWORD LINE */}
          <p className="hero-tag">
            QA Automation Engineer · Playwright · API &amp; Performance Testing · CI/CD
          </p>

          {/* NAME — single H1 on the page */}
          <h1>
            Milan<br />
            <span className="highlight">Bomjan</span><br />
            Tamang
          </h1>

          {/* ROLE LINE */}
          <p className="hero-subtitle">
            Test Automation · Performance Engineering · <span>CI/CD Integration</span>
          </p>

          {/* CURRENT ROLE — freshness + employer signal */}
          <p className="hero-now">
            <span className="hero-now-dot" />
            Currently QA Automation Engineer at{' '}
            <a
              href={site.employer.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-now-link"
            >
              {site.employer.name}
            </a>{' '}
            — remote from {site.base.city} for a {site.employer.city}, {site.employer.regionCode} team.
          </p>

          <p className="hero-desc">
            I build scalable QA automation systems with Playwright, API testing, and
            performance testing frameworks. My focus: eliminating manual testing
            bottlenecks, improving release reliability, and designing maintainable
            test architecture with JavaScript and CI/CD automation.
            <span className="cursor" />
          </p>

          {/* CTA */}
          <div className="hero-cta">
            <Button href="#projects" variant="primary">
              <span>View Projects</span>
              <ArrowRight size={15} strokeWidth={2.5} />
            </Button>
            <Button
              href={site.socials.github}
              variant="secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithubSquare size={16} />
              <span>GitHub</span>
            </Button>
          </div>
        </div>

        {/* VISUAL: photo + floating stat badges */}
        <div className="hero-visual">
          <TiltCard className="hero-photo-tilt" max={6} glare>
            <div className="hero-photo-frame">
              <Image
                src="/profile.jpg"
                alt={`${site.name} — ${site.roleLong}`}
                width={480}
                height={588}
                priority
                sizes="(max-width: 900px) 70vw, 380px"
                className="hero-photo"
              />
            </div>
          </TiltCard>

          <div className="hero-badge hero-badge-1">
            <span className="stat-num">{site.stats.yearsExperience}</span>
            <span className="stat-label">Years in QA Automation</span>
          </div>

          <div className="hero-badge hero-badge-2">
            <span className="stat-num">{site.stats.projects}</span>
            <span className="stat-label">Automation Projects</span>
          </div>

          <div className="hero-badge hero-badge-3">
            <span className="stat-num">US</span>
            <span className="stat-label">Remote Time Zone Coverage</span>
          </div>
        </div>
      </div>
    </section>
  );
}
