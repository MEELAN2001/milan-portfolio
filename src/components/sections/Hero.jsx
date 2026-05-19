import Button from '@/components/ui/Button';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-glow" />
      <div className="hero-glow-2" />

      <div className="hero-content">

        {/* SEO TAG */}
        <p className="hero-tag">
          QA Automation Engineer | Playwright | Cypress | API Testing | CI/CD
        </p>

        {/* NAME (SEO STRONG) */}
        <h1>
          Milan<br />
          <span className="highlight">Bomjan</span><br />
          Tamang
        </h1>

        {/* ROLE KEYWORD LINE */}
        <p className="hero-subtitle">
          QA Automation Engineering · Test Automation · <span>CI/CD Integration</span>
        </p>

        {/* SEO DESCRIPTION (IMPORTANT PART) */}
        <p className="hero-desc">
          I am a QA Automation Engineer specializing in Playwright, Cypress, API Testing, and CI/CD automation using JavaScript. 
          I build scalable test automation frameworks that improve software quality, reduce manual testing effort, and ensure reliable releases.

          <span className="cursor" />
        </p>

        {/* CTA */}
        <div className="hero-cta">
          <Button href="#experience" variant="primary">View Experience →</Button>
          <Button href="#contact" variant="secondary">Get in Touch</Button>
        </div>
      </div>

      {/* STATS */}
      <div className="hero-stats">
        <div className="stat">
          <div className="stat-num">1.5+</div>
          <div className="stat-label">Years QA Automation Experience</div>
        </div>
        <div className="stat">
          <div className="stat-num">4+</div>
          <div className="stat-label">Automation Projects</div>
        </div>
      </div>
    </section>
  );
}