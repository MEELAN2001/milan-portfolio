'use client';

import { useState } from 'react';
import SectionTitle from '@/components/ui/SectionTitle';
import { skillCategories } from '@/data/skills';

export default function Skills() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const getCardStyle = (index) => {
    const totalCards = skillCategories.length;
    const centerIndex = (totalCards - 1) / 2;
    const offset = index - centerIndex;
    const angle = offset * 15; // 15 degrees per card
    const yOffset = Math.abs(offset) * 25; // Vertical stagger
    
    if (hoveredCard === index) {
      return {
        transform: `rotateZ(0deg) translateY(-80px) scale(1.05)`,
        zIndex: 1000,
      };
    }

    return {
      transform: `rotateZ(${angle}deg) translateY(${yOffset}px)`,
      zIndex: totalCards - Math.abs(offset),
    };
  };

  return (
    <section id="skills">
      <SectionTitle num="02" title="Technical Skills" />

      <div className="skills-hand-container">
        <div className="skills-hand-wrapper">
          {skillCategories.map((skill, index) => (
            <div
              key={skill.id}
              className="skill-card-hand"
              style={getCardStyle(index)}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="skill-card-hand-inner">
                {/* Front of card */}
                <div className="skill-card-hand-front">
                  <div className="skill-card-hand-icon">{skill.icon}</div>
                  <div className="skill-card-hand-title">{skill.title}</div>
                </div>

                {/* Back of card - Details */}
                <div className="skill-card-hand-back">
                  <h4>{skill.title}</h4>
                  <div className="skill-details-list">
                    {skill.items.map((item) => (
                      <span key={item} className="skill-detail-tag">{item}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <p className="skills-hint">Hover over cards to see details</p>
    </section>
  );
}