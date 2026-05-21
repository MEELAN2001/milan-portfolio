import SectionTitle from '@/components/ui/SectionTitle';
import Button from '@/components/ui/Button';

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

      <div className="education-list">
        {education.map((edu) => (
          <div key={edu.id} className="edu-card">
            <div className="edu-degree">{edu.degree}</div>
            <div className="edu-school">{edu.school}</div>
            <div className="edu-year">
              {edu.period} · {edu.location}
            </div>
          </div>
        ))}
      </div>

      {/* Resume Download */}
      <div className="resume-download">
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
            Download Resume
          </a>
          <a
            href="https://linkedin.com/in/milan-bomjan"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-btn resume-btn-secondary"
            title="View on LinkedIn"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}