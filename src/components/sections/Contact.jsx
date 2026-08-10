import { FaLinkedin, FaFacebookSquare, FaGithubSquare } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';
import { site } from '@/data/site';

const contactLinks = [
  { href: `mailto:${site.email}`, icon: IoIosMail, label: site.email },
  { href: `tel:${site.phoneE164.replace(/-/g, '')}`, icon: '📞', label: site.phone },
  { href: site.socials.linkedin, icon: FaLinkedin, label: 'LinkedIn', external: true },
  { href: site.socials.github, icon: FaGithubSquare, label: 'GitHub', external: true },
  { href: site.socials.facebook, icon: FaFacebookSquare, label: 'Facebook', external: true },
];

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-inner">
        <h2 className="contact-big">
          Let&apos;s work<br /><span>together.</span>
        </h2>
        <p className="contact-sub">
          Currently a QA Automation Engineer at {site.employer.name}, working remotely from{' '}
          {site.base.city} with US teams. Open to remote QA automation roles, freelance
          testing engagements, and security collaborations.
        </p>
        <div className="contact-links">
          {contactLinks.map(({ href, icon: IconComponent, label, external }) => (
            <a
              key={label}
              href={href}
              className="contact-link"
              {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
              {typeof IconComponent === 'function' ? <IconComponent /> : IconComponent} {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
