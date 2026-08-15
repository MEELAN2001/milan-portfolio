'use client';

import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import { FaLinkedin, FaFacebookSquare, FaGithubSquare } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';
import Reveal, { RevealGroup, revealItem } from '@/components/motion/Reveal';
import { site } from '@/data/site';

const contactLinks = [
  { href: `mailto:${site.email}`, icon: IoIosMail, label: site.email },
  { href: `tel:${site.phoneE164.replace(/-/g, '')}`, icon: Phone, label: site.phone },
  { href: site.socials.linkedin, icon: FaLinkedin, label: 'LinkedIn', external: true },
  { href: site.socials.github, icon: FaGithubSquare, label: 'GitHub', external: true },
  { href: site.socials.facebook, icon: FaFacebookSquare, label: 'Facebook', external: true },
];

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <Reveal as="div" className="contact-inner" y={20}>
        <h2 className="contact-big">
          Let&apos;s work<br /><span>together.</span>
        </h2>
        <p className="contact-sub">
          Currently a QA Automation Engineer at {site.employer.name}, working remotely from{' '}
          {site.base.city} with US teams. Open to remote QA automation roles, freelance
          testing engagements, and security collaborations.
        </p>
        <RevealGroup as="div" className="contact-links" stagger={0.05} delay={0.15}>
          {contactLinks.map(({ href, icon: IconComponent, label, external }) => (
            <motion.a
              key={label}
              variants={revealItem}
              href={href}
              className="contact-link"
              {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
              <IconComponent />
              <span>{label}</span>
            </motion.a>
          ))}
        </RevealGroup>
      </Reveal>
    </section>
  );
}
