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
    title: 'Overview',
    items: [
      { title: 'How It Works', path: '/docs/how-it-works', file: 'how-it-works' },
      { title: 'Getting Started', path: '/docs/getting-started', file: 'getting-started' },
    ],
  },
];
