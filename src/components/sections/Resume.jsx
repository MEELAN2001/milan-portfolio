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
        <p className="resume-download-text">Want the full picture?</p>
        <Button
          href="/Milan_Resume.pdf"
          download="Milan_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          variant="secondary"
        >
          Download Resume ↓
        </Button>
      </div>
    </section>
  );
}