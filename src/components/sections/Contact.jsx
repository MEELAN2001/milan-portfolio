import SectionTitle from '@/components/ui/SectionTitle';
import { FaLinkedin, FaFacebookSquare, FaGithubSquare } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const contactLinks = [
  { href: 'mailto:mailmilan.bomjan@gmail.com', icon: IoIosMail, label: 'mailmilan.bomjan@gmail.com' },
  { href: 'tel:+9779841907159',                icon: '📞', label: '+977 9841907159' },
  { href: 'https://www.linkedin.com/in/milan-bomjan-tamang-918167239/', icon: FaLinkedin, label: 'LinkedIn', external: true },
  { href: 'https://github.com/MEELAN2001',      icon: FaGithubSquare, label: 'GitHub',   external: true },
  { href: 'https://www.facebook.com/milan.bom/',      icon: FaFacebookSquare, label: 'Facebook',   external: true },
];

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-inner">
        <h2 className="contact-big">
          Let&apos;s work<br /><span>together.</span>
        </h2>
        <p className="contact-sub">
          Open to QA roles, freelance testing projects, and security collaborations.
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