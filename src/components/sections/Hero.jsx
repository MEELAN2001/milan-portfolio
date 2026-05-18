import Button from '@/components/ui/Button';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-glow" />
      <div className="hero-glow-2" />

      <div className="hero-content">
        <p className="hero-tag">Quality Assurance Engineer</p>
        <h1>
          Milan<br />
          <span className="highlight">Bomjan</span><br />
          Tamang
        </h1>
        <p className="hero-subtitle">
          Testing · Automation · <span>Security</span>
        </p>
        <p className="hero-desc">
          Building confidence in software through rigorous manual &amp; automated testing,
          Playwright, Cypress, Postman, Jmeter, Maestro, Appium, Burpsuite, <strong>OWASP ZAP</strong> — and a background in ethical hacking.
          <span className="cursor" />
        </p>
        <div className="hero-cta">
          <Button href="#experience" variant="primary">View Experience →</Button>
          <Button href="#contact" variant="secondary">Get in Touch</Button>
        </div>
      </div>

      <div className="hero-stats">
        <div className="stat">
          <div className="stat-num">1.5+</div>
          <div className="stat-label">Years Experience</div>
        </div>
        <div className="stat">
          <div className="stat-num">4+</div>
          <div className="stat-label">Projects Shipped</div>
        </div>
      </div>
    </section>
  );
}