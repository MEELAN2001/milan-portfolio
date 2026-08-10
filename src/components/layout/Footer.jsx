import { site } from '@/data/site';

export default function Footer() {
  return (
    <footer>
      <p className="footer-text">
        © {new Date().getFullYear()} <span>{site.name}</span> · QA Automation Engineer ·{' '}
        {site.base.city}, {site.base.country} — working remotely with US teams
      </p>
      <p className="footer-text">
        Built with <span>Next.js</span>
      </p>
    </footer>
  );
}
