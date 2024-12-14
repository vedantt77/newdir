import { Startup } from '@/lib/types';

export const saasdirectories: Startup = {
  id: 'saasdirectories',
  name: 'SaaS Directories',
  logo: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=500',
  shortDescription: 'Enterprise AI automation platform for business workflows',
  mrr: 500,
  category: '🔥 Featured',
  foundedDate: '2024',
  location: 'Austin, TX',
  website: 'https://aiassist.example.com',
  longDescription: 'AIAssist empowers enterprises to automate complex business processes using advanced artificial intelligence. Our platform seamlessly integrates with existing workflows, providing intelligent automation solutions that save time and reduce errors while improving operational efficiency.',
  team: [
    {
      name: 'vedant',
      role: 'CEO & Co-founder',
      bio: 'Previously led AI initiatives at Microsoft',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150',
      linkedin: 'https://linkedin.com/in/example5'
    },

  ],
  product: {
    features: [
      'Natural Language Processing',
      'Automated Document Processing',
      'Workflow Automation',
      'Custom AI Model Training',
      'Enterprise Integration APIs'
    ],
    techStack: ['Python', 'TensorFlow', 'Docker', 'Kubernetes', 'GraphQL']
  },
 metrics: {
    mrr: 500,
    launchedIn: '2024',
    founders: 'vedant',
    funding: 'bootstrapped',
    monetisation: 'Single-pay',
    commitment: 'part-time'
  },
  socialLinks: {
    twitter: 'https://twitter.com/aiassist',
    linkedin: 'https://linkedin.com/company/aiassist',
    github: 'https://github.com/aiassist',
    bluesky: 'https://github.com/aiassist',
  },

};
