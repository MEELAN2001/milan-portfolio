/**
 * Single source of truth for identity, contact, and employer details.
 *
 * Everything that appears in more than one place (metadata, JSON-LD, About,
 * Contact, Footer, OG image) reads from here so the site can never disagree
 * with itself — search engines treat conflicting NAP/profile data as a
 * negative trust signal.
 */

export const site = {
  name: 'Milan Bomjan Tamang',
  shortName: 'Milan Bomjan',
  initials: 'MBT',
  role: 'QA Automation Engineer',
  roleLong: 'QA Automation Engineer & SDET',
  url: 'https://milanbomjantamang.com.np',

  email: 'mailmilan.bomjan@gmail.com',
  phone: '+977 9841907159',
  phoneE164: '+977-9841907159',

  /** Where Milan is physically based — drives local search intent. */
  base: {
    city: 'Kathmandu',
    country: 'Nepal',
    countryCode: 'NP',
    latitude: '27.7172',
    longitude: '85.3240',
  },

  /** Current employer. Remote role for a US-based company. */
  employer: {
    name: 'Orion Tech Solutions',
    url: 'https://oriontsolutions.com/',
    city: 'Miami',
    region: 'Florida',
    regionCode: 'FL',
    country: 'United States',
    countryCode: 'US',
  },

  socials: {
    github: 'https://github.com/MEELAN2001',
    linkedin: 'https://www.linkedin.com/in/milan-bomjan-tamang-918167239/',
    facebook: 'https://www.facebook.com/milan.bom/',
  },

  stats: {
    yearsExperience: '2+',
    projects: '5',
  },

  /** Feeds JSON-LD `knowsAbout` and the keyword set. */
  expertise: [
    'Test Automation',
    'Playwright',
    'Cypress',
    'API Testing',
    'Performance Testing',
    'K6',
    'JMeter',
    'CI/CD',
    'JavaScript',
    'Postman',
    'SQL',
    'Agile Testing',
    'Security Testing',
  ],

  education: {
    school: 'College of Applied Business and Technology',
    url: 'https://cab.edu.np/',
  },
};

/** Absolute URL helper — keeps JSON-LD `@id` values consistent. */
export const absolute = (path = '') => `${site.url}${path}`;

export default site;
