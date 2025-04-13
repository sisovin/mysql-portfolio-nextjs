export interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
}

export interface BlogPost {
  id: number;
  title: string;
  content: string;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}
