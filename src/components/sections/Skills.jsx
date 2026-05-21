'use client';

import { useState } from 'react';
import SectionTitle from '@/components/ui/SectionTitle';
import { skillCategories } from '@/data/skills';

export default function Skills() {
  const [expandedCard, setExpandedCard] = useState(null);

  return (
    <section id="skills">
      <SectionTitle num="02" title="Technical Skills" />

      <div className="skills-grid-container">
        <div className="skills-grid">
          {skillCategories.map((skill, index) => (
            <div
              key={skill.id}
              className={`skill-grid-card ${expandedCard === index ? 'expanded' : ''}`}
              onMouseEnter={() => setExpandedCard(index)}
              onMouseLeave={() => setExpandedCard(null)}
              onClick={() => setExpandedCard(expandedCard === index ? null : index)}
            >
              {/* Card Header */}
              <div className="skill-card-header">
                <div className="skill-card-icon">{skill.icon}</div>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}