export interface Site {
  TITLE: string;
  DESCRIPTION: string;
  Favicon: string;
  EMAIL: string;
  NUM_POSTS_ON_HOMEPAGE: number;
  NUM_PROJECTS_ON_HOMEPAGE: number;
}

export interface Metadata {
  TITLE: string;
  DESCRIPTION: string;
  IMAGE: string;
  DATE?: string;
  AUTHOR?: string;
  TAGS?: string[];
}

export interface Social {
  NAME: string;
  HREF: string;
  IMAGE: string;
}

export type Socials = Social[];