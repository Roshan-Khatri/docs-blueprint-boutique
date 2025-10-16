// Industry content types and constants
export type Industry = {
  name: string;
  icon: any;
  description: string;
  solutions: string[];
  metrics: string;
};

export const industries: Industry[] = [
  {
    name: 'Healthcare',
    icon: undefined, // Set icon in page
    description: 'Secure, compliant communications for hospitals, clinics, and providers.',
    solutions: ['Contact Center', 'Unified Communications', 'Compliance Tools'],
    metrics: 'HIPAA Compliant, 99.99% uptime',
  },
  {
    name: 'Finance',
    icon: undefined,
    description: 'Reliable, secure telecom for banks, fintech, and insurance.',
    solutions: ['Call Recording', 'Fraud Prevention', 'Analytics'],
    metrics: 'PCI DSS Ready, Real-time monitoring',
  },
  {
    name: 'Education',
    icon: undefined,
    description: 'Flexible solutions for schools, universities, and e-learning.',
    solutions: ['Virtual Classrooms', 'Parent Notification', 'Cloud PBX'],
    metrics: 'FERPA Compliant, Scalable',
  },
  {
    name: 'Technology',
    icon: undefined,
    description: 'Agile communications for tech companies and startups.',
    solutions: ['API Integrations', 'Global Numbers', 'Auto Dialer'],
    metrics: 'Developer Friendly, Global Reach',
  },
  {
    name: 'Retail',
    icon: undefined,
    description: 'Omnichannel solutions for stores and e-commerce.',
    solutions: ['Contact Center', 'SMS Marketing', 'Analytics'],
    metrics: 'Omnichannel, Scalable',
  },
  {
    name: 'Manufacturing',
    icon: undefined,
    description: 'Robust telecom for logistics, supply chain, and production.',
    solutions: ['Unified Communications', 'IoT Integration', 'Reporting'],
    metrics: 'Reliable, Secure',
  },
];

export const challenges: string[] = [
  'Data security & compliance',
  'Scalability for growth',
  'Omnichannel customer engagement',
  'Integration with business systems',
  'Real-time analytics & reporting',
  'Cost control & efficiency',
];

export type SuccessStory = { industry: string; story: string };
export const successStories: SuccessStory[] = [
  {
    industry: 'Healthcare',
    story: 'A hospital reduced missed appointments by 30% using automated reminders.',
  },
  {
    industry: 'Retail',
    story: 'An e-commerce brand increased customer satisfaction by 25% with omnichannel support.',
  },
  {
    industry: 'Finance',
    story: 'A bank improved fraud detection with real-time call analytics.',
  },
];
