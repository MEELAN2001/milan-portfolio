'use client';

import { useState } from 'react';
import SectionTitle from '@/components/ui/SectionTitle';
import { projects } from '@/data/projects';

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? projects.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) => 
      prev === projects.length - 1 ? 0 : prev + 1
    );
  };

  const currentProject = projects[currentIndex];

  return (
    <section id="projects">
      <SectionTitle num="03" title="Projects" />

      <div className="projects-carousel">
        <button 
          className="carousel-arrow carousel-arrow-left" 
          onClick={goToPrevious}
          aria-label="Previous project"
        >
          ←
        </button>

        <div className="projects-carousel-container">
          <div className="project-card-carousel">
            <div className="project-num">{currentProject.num}</div>
            <div className="project-title">{currentProject.title}</div>
            <p className="project-desc">{currentProject.description}</p>
            <div className="project-stack">
              {currentProject.stack.map((tech) => (
                <span key={tech} className="stack-tag">{tech}</span>
              ))}
            </div>
            <div className="project-links">
              {currentProject.github && (
                <a
                  href={currentProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  GitHub Repo →
                </a>
              )}
              {currentProject.live && (
                <a
                  href={currentProject.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  Live Demo →
                </a>
              )}
            </div>
          </div>
        </div>

        <button 
          className="carousel-arrow carousel-arrow-right" 
          onClick={goToNext}
          aria-label="Next project"
        >
          →
        </button>
      </div>

      <div className="carousel-indicators">
        {projects.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}