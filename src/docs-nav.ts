export interface DocItem {
  title: string;
  path: string;
  file: string;
}

export interface DocSection {
  title: string;
  items: DocItem[];
}

export const docsNav: DocSection[] = [
  {
    title: 'Getting Started',
    items: [
      { title: 'Architecture', path: '/docs/architecture', file: 'architecture' },
      { title: 'Environment Setup', path: '/docs/environment-setup', file: 'environment-setup' },
      { title: 'Development', path: '/docs/development', file: 'development' },
    ],
  },
  {
    title: 'Guides',
    items: [
      { title: 'Authentication', path: '/docs/authentication', file: 'authentication' },
      { title: 'Testing', path: '/docs/testing', file: 'testing' },
      { title: 'CI/CD', path: '/docs/ci-cd', file: 'ci-cd' },
    ],
  },
  {
    title: 'Infrastructure',
    items: [
      { title: 'AWS Guide', path: '/docs/aws-guide', file: 'aws-guide' },
      { title: 'S3 Resilience', path: '/docs/s3-resilience', file: 's3-resilience' },
      { title: 'Rate Limiting', path: '/docs/rate-limiting', file: 'rate-limiting' },
    ],
  },
  {
    title: 'Features',
    items: [
      { title: 'Feedback System', path: '/docs/feedback-system', file: 'feedback-system' },
      { title: 'Canvas LTI Setup', path: '/docs/canvas-lti-setup', file: 'canvas-lti-setup' },
    ],
  },
];
