'use client';

import { useState } from 'react';
import SectionTitle from '@/components/ui/SectionTitle';
import { skillCategories } from '@/data/skills';

export default function Skills() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? skillCategories.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) => 
      prev === skillCategories.length - 1 ? 0 : prev + 1
    );
  };

  const currentSkill = skillCategories[currentIndex];

  return (
    <section id="skills">
      <SectionTitle num="02" title="Technical Skills" />

      <div className="skills-carousel">
        <button 
          className="carousel-arrow carousel-arrow-left" 
          onClick={goToPrevious}
          aria-label="Previous skill"
        >
          ←
        </button>

        <div className="skills-carousel-container">
          <div className="skill-card-carousel">
            <div className="skill-card-icon">{currentSkill.icon}</div>
            <div className="skill-card-title">{currentSkill.title}</div>
            <div className="skill-tags">
              {currentSkill.items.map((item) => (
                <span key={item} className="skill-tag">{item}</span>
              ))}
            </div>
          </div>
        </div>

        <button 
          className="carousel-arrow carousel-arrow-right" 
          onClick={goToNext}
          aria-label="Next skill"
        >
          →
        </button>
      </div>

      <div className="carousel-indicators">
        {skillCategories.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to skill ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}