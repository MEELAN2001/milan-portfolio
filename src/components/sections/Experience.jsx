import SectionTitle from '@/components/ui/SectionTitle';
import { experiences } from '@/data/experience';

export default function Experience() {
  return (
    <section id="experience">
      <SectionTitle num="01" title="Experience" />

      <div className="experience-list">
        {experiences.map((exp) => (
          <article key={exp.id} className="exp-item">
            <div className="exp-header">
              <h3 className="exp-role">
                {exp.role}
                {exp.current && <span className="exp-current-badge">Current</span>}
              </h3>
              <div className="exp-date">{exp.period}</div>
            </div>

            <div className="exp-company">
              {exp.companyUrl ? (
                <a
                  href={exp.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="exp-company-link"
                >
                  {exp.company}
                </a>
              ) : (
                exp.company
              )}
              {' · '}
              {exp.location}
              {exp.remote && <span className="exp-remote-badge">Remote</span>}
            </div>

            {exp.bullets.length > 0 && (
              <ul className="exp-bullets">
                {exp.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
