export interface HeroData {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  link: string;
  image?: string;
  features?: string[];
  excerpt?: string;
  slug?: string;
  featured_media?: number;
  rendered?: string;
}

export interface StatsData {
  clients: number;
  projects: number;
  experience: number;
  countries: number;
}

export interface WhyChooseUsData {
  title: string;
  subtitle: string;
  features: {
    icon: string;
    title: string;
    description: string;
  }[];
}

export interface Testimonial {
  id: number;
  name: string;
  company: string;
  role: string;
  content: string;
  rating: number;
  image?: string;
}

export interface CTAData {
  title: string;
  description: string;
  primaryCta: {
    text: string;
    link: string;
  };
  secondaryCta: {
    text: string;
    link: string;
  };
}

export interface HomePageData {
  hero: HeroData;
  stats: StatsData;
  services: Service[];
  whyChooseUs: WhyChooseUsData;
  testimonials: Testimonial[];
  cta: CTAData;
}

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
  modified: string;
  author: {
    name: string;
    id: number;
  };
  featuredImage?: string;
  categories: {
    id: number;
    name: string;
    slug: string;
  }[];
  tags: {
    id: number;
    name: string;
    slug: string;
  }[];
  seo?: {
    title?: string;
    description?: string;
    keywords?: string;
  };
}

export interface PageData {
  id: number;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  featuredImage?: string;
  seo?: {
    title?: string;
    description?: string;
    keywords?: string;
  };
}

export interface NavigationItem {
  id: number;
  title: string;
  url: string;
  children?: NavigationItem[];
}

export interface FooterData {
  companyInfo: {
    name: string;
    description: string;
    address: string;
    phone: string;
    email: string;
  };
  services: NavigationItem[];
  company: NavigationItem[];
  social: {
    facebook: string;
    twitter: string;
    linkedin: string;
    instagram: string;
    youtube: string;
  };
}

export interface ContactFormData {
  name: string;
  company: string;
  service: string;
  message: string;
}

export interface FormResponse {
  success: boolean;
  message: string;
  errors?: Record<string, string>;
}
