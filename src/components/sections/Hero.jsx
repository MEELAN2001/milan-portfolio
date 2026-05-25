import Button from '@/components/ui/Button';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-glow" />
      <div className="hero-glow-2" />

      <div className="hero-content">

        {/* SEO TAG */}
        <p className="hero-tag">
          QA Automation Engineer | Playwright | API Testing | Performance Testing | JavaScript | CI/CD
        </p>

        {/* NAME (SEO STRONG) */}
        <h1>
          Milan<br />
          <span className="highlight">Bomjan</span><br />
          Tamang
        </h1>

        {/* ROLE KEYWORD LINE */}
        <p className="hero-subtitle">
          QA Automation Engineering · Performance Testing · <span>CI/CD Integration</span>
        </p>

        {/* SEO DESCRIPTION (IMPACT-DRIVEN) */}
        <p className="hero-desc">
          I design and build scalable QA automation systems using Playwright, API testing, and performance testing frameworks. 
          My focus: eliminating manual testing bottlenecks, improving release reliability, and building maintainable test architecture with JavaScript and CI/CD automation.

          <span className="cursor" />
        </p>

        {/* CTA */}
        <div className="hero-cta">
          <Button href="#projects" variant="primary">View Projects →</Button>
          <Button href="#contact" variant="secondary">GitHub</Button>
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