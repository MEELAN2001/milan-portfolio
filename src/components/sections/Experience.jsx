import SectionTitle from '@/components/ui/SectionTitle';
import { experiences } from '@/data/experience';

export default function Experience() {
  return (
    <section id="experience">
      <SectionTitle num="01" title="Experience" />

      <div className="experience-list">
        {experiences.map((exp) => (
          <div key={exp.id} className="exp-item">
            <div className="exp-header">
              <div className="exp-role">
                {exp.role}
                {exp.current && <span className="exp-current-badge">Current</span>}
              </div>
              <div className="exp-date">{exp.period}</div>
            </div>
            <div className="exp-company">
              {exp.company} · {exp.location}
            </div>
            {exp.bullets.length > 0 && (
              <ul className="exp-bullets">
                {exp.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}