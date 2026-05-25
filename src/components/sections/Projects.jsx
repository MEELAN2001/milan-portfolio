'use client';

import { useState } from 'react';
import SectionTitle from '@/components/ui/SectionTitle';
import { projects } from '@/data/projects';

export default function Projects() {
  const [expandedCard, setExpandedCard] = useState(null);

  return (
    <section id="projects">
      {/* SEO HEADER BLOCK (PROOF OF WORK) */}
      <div className="projects-seo-intro">
        <h2>QA Automation Projects - Proof of Engineering</h2>
        <p>
          These projects showcase real-world QA automation systems built with Playwright, JavaScript, API testing, and CI/CD integration.
          Each demonstrates problem-solving approach: eliminating manual testing bottlenecks, building scalable frameworks, and improving release reliability.
        </p>
      </div>

      <SectionTitle num="03" title="Projects" />

      <div className="projects-grid-container">
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`project-grid-card ${expandedCard === index ? 'expanded' : ''}`}
              onMouseEnter={() => setExpandedCard(index)}
              onMouseLeave={() => setExpandedCard(null)}
              onClick={() => setExpandedCard(expandedCard === index ? null : index)}
            >
              {/* Card Number & Title */}
              <div className="project-card-header">
                <div className="project-card-number">{project.num}</div>
                <h3 className="project-card-title">{project.title}</h3>
              </div>

              {/* Card Description */}
              <div className="project-card-content">
                <p className="project-card-desc">{project.description}</p>
              </div>

              {/* Tech Stack */}
              <div className="project-stack">
                {project.stack.map((tech, idx) => (
                  <span key={tech} className="stack-tag" style={{ animationDelay: `${idx * 0.05}s` }}>
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="project-links">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    GitHub Repo →
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    Live Demo →
                  </a>
                )}
              </div>

              {/* Card Accent Line */}
              <div className="project-card-accent"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}