'use client';

import { Download, GraduationCap } from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa';
import SectionTitle from '@/components/ui/SectionTitle';
import Reveal, { RevealGroup, RevealItem, revealItem } from '@/components/motion/Reveal';
import { site } from '@/data/site';

const education = [
  {
    id: 1,
    degree: 'B.Sc. Computer Science & Information Technology',
    school: 'College of Applied Business and Technology',
    period: '07/2021 – 2026',
    location: 'Kathmandu, Nepal',
  },
  {
    id: 2,
    degree: 'NEB — Higher Secondary Education',
    school: 'Morgan International College',
    period: '2017 – 2020',
    location: 'Kathmandu, Nepal',
  },
];

export default function Resume() {
  return (
    <section id="education">
      <SectionTitle num="04" title="Education" />

      <RevealGroup as="div" className="education-list" stagger={0.1}>
        {education.map((edu) => (
          <RevealItem key={edu.id} variants={revealItem} className="edu-card">
            <GraduationCap className="edu-icon" size={20} strokeWidth={1.75} />
            <div className="edu-degree">{edu.degree}</div>
            <div className="edu-school">{edu.school}</div>
            <div className="edu-year">
              {edu.period} · {edu.location}
            </div>
          </RevealItem>
        ))}
      </RevealGroup>

      {/* Resume Download */}
      <Reveal as="div" className="resume-download" delay={0.1}>
        <div className="resume-content">
          <h3 className="resume-heading">Want the full picture?</h3>
          <p className="resume-description">Download my resume to see detailed experience, projects, and technical skills.</p>
        </div>

        <div className="resume-buttons">
          <a
            href="/Milan_Resume.pdf"
            download="Milan_Resume.pdf"
            className="resume-btn resume-btn-primary"
            title="Download PDF"
          >
            <Download size={16} strokeWidth={2} />
            <span>Download Resume</span>
          </a>
          <a
            href={site.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="resume-btn resume-btn-secondary"
            title="View on LinkedIn"
          >
            <FaLinkedin size={16} />
            <span>LinkedIn</span>
          </a>
        </div>
      </Reveal>
    </section>
  );
}
