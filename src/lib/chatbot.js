import { site } from '@/data/site';
import { experiences } from '@/data/experience';
import { projects } from '@/data/projects';

/**
 * Free, no-API-key chat assistant: matches visitor questions against a fixed
 * set of topics and replies with facts pulled straight from the site's own
 * data files, so it can never drift from what's on the page or say anything
 * off-script.
 */
export const GREETING = `Hi! I'm ${site.shortName}'s site assistant — ask me about his experience, projects, skills, or availability for freelance work.`;

const FALLBACK = `I'm not sure about that one. Ask me about Milan's skills, work experience, projects, or availability for freelance work — or email him directly at ${site.email}.`;

const currentRole = experiences.find((e) => e.current);

const rules = [
  {
    test: /\b(hi|hello|hey|yo|greetings)\b/i,
    reply: () => GREETING,
  },
  {
    test: /\b(hire|freelance|available|availability|interested|collab|contract|rate|budget|side project)\b/i,
    reply: () =>
      `Yes, Milan's interested! He can typically commit around 4-5 hours a day to freelance or side-project work alongside his full-time role. Best next step is to email him directly at ${site.email} to discuss details.`,
  },
  {
    test: /\b(contact|email|phone|reach|touch|linkedin|github)\b/i,
    reply: () =>
      `You can reach Milan at ${site.email} or ${site.phone}. He's also on LinkedIn (${site.socials.linkedin}) and GitHub (${site.socials.github}).`,
  },
  {
    test: /\b(skills?|tech ?stack|technolog|tools?|expert|stack)\b/i,
    reply: () => `Milan's core skills: ${site.expertise.join(', ')}.`,
  },
  {
    test: /\b(experiences?|work ?history|career|background|roles?|current job|where.*work)\b/i,
    reply: () => {
      const lines = experiences.map((e) => `${e.role} at ${e.company} (${e.period})`).join('; ');
      return `Milan is currently ${currentRole?.role ?? site.role} at ${currentRole?.company ?? site.employer.name}. Full history: ${lines}.`;
    },
  },
  {
    test: /\b(projects?|portfolio|built|showcase)\b/i,
    reply: () => {
      const lines = projects.map((p) => `${p.title} (${p.stack.slice(0, 3).join(', ')})`).join('; ');
      return `A few of Milan's projects: ${lines}. Full details and code are on the Projects section above, or on GitHub: ${site.socials.github}.`;
    },
  },
  {
    test: /\b(education|degree|school|college|study|university)\b/i,
    reply: () => `Milan studied at ${site.education.school}.`,
  },
  {
    test: /\b(where|location|based|live|remote|nepal|kathmandu)\b/i,
    reply: () =>
      `Milan is based in ${site.base.city}, ${site.base.country}, working remotely for ${site.employer.name} (${site.employer.city}, ${site.employer.region}).`,
  },
  {
    test: /\b(resume|cv)\b/i,
    reply: () => `You can download Milan's resume from the Resume section on this page.`,
  },
];

/** Returns a canned reply for a visitor message, or a fallback if nothing matches. */
export function getBotReply(text) {
  const rule = rules.find((r) => r.test.test(text));
  return rule ? rule.reply() : FALLBACK;
}
