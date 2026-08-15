'use client';

import { useState } from 'react';
import { Workflow, Gauge, Terminal, ClipboardCheck, ShieldCheck, Users } from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';
import TiltCard from '@/components/motion/TiltCard';
import { RevealGroup, revealItem } from '@/components/motion/Reveal';
import { skillCategories } from '@/data/skills';

const ICONS = { Workflow, Gauge, Terminal, ClipboardCheck, ShieldCheck, Users };

export default function Skills() {
  const [expandedCard, setExpandedCard] = useState(null);

  return (
    <section id="skills">
      <SectionTitle num="02" title="Technical Skills" />

      <div className="skills-grid-container">
        <RevealGroup as="div" className="skills-grid" stagger={0.07}>
          {skillCategories.map((skill, index) => {
            const Icon = ICONS[skill.icon];
            return (
              <TiltCard
                key={skill.id}
                variants={revealItem}
                max={5}
                glare={false}
                className={`skill-grid-card ${expandedCard === index ? 'expanded' : ''}`}
                onMouseEnter={() => setExpandedCard(index)}
                onMouseLeave={() => setExpandedCard(null)}
                onClick={() => setExpandedCard(expandedCard === index ? null : index)}
              >
                {/* Card Header */}
                <div className="skill-card-header">
                  <div className="skill-card-icon">
                    {Icon && <Icon size={22} strokeWidth={1.75} />}
                  </div>
                  <h3 className="skill-card-title">{skill.title}</h3>
                </div>

                {/* Card Content */}
                <div className="skill-card-content">
                  <div className="skill-items-list">
                    {skill.items.map((item, idx) => (
                      <div key={item} className="skill-item" style={{ animationDelay: `${idx * 0.05}s` }}>
                        <span className="skill-item-text">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Accent Line */}
                <div className="skill-card-accent"></div>
              </TiltCard>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
