import Button from '@/components/ui/Button';
import { site } from '@/data/site';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-glow" />
      <div className="hero-glow-2" />

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
          <Button href="#projects" variant="primary">View Projects →</Button>
          <Button
            href={site.socials.github}
            variant="secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Button>
        </div>
      </div>

      {/* STATS */}
      <div className="hero-stats">
        <div className="stat">
          <div className="stat-num">{site.stats.yearsExperience}</div>
          <div className="stat-label">Years QA Automation Experience</div>
        </div>
        <div className="stat">
          <div className="stat-num">{site.stats.projects}</div>
          <div className="stat-label">Automation Projects</div>
        </div>
        <div className="stat">
          <div className="stat-num">US</div>
          <div className="stat-label">Remote Time Zone Coverage</div>
        </div>
      </div>
    </section>
  );
}
