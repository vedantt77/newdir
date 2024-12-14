export interface Startup {
  id: string;
  name: string;
  logo: string;
  shortDescription: string;
  mrr: number;
  category: string;
  foundedDate: string;
  location: string;
  website: string;
  longDescription: string;
  team: TeamMember[];
  product: {
    features: string[];
    techStack: string[];
  };
  metrics: {
    mrr: number;
    launchedIn: string;
    founders: string;
    funding: string;
    monetisation: string;
    commitment: string;
  };
  socialLinks: {
    twitter?: string;
    linkedin?: string;
    github?: string;
    bluesky?: string;
  };
  
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  avatar: string;
  linkedin?: string;
}
