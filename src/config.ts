import type { Metadata, Site, Socials } from "./types";

export const SITE: Site = {
  TITLE: "Isaac Talb Portfolio",
  DESCRIPTION: "Portfolio of Isaac Talb — Full-Stack Developer, DevOps enthusiast, community builder.",
  EMAIL: "isaac@duckcloud.info",
  Favicon: "/favicon.svg",
  NUM_POSTS_ON_HOMEPAGE: 5,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Full-Stack Developer, VPS & DevOps enthusiast, and community builder.",
  IMAGE: "/favicon.svg",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
  IMAGE: "/favicon.svg",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "A collection of my projects with links to repositories and live demos.",
  IMAGE: "/favicon.svg",
};

// Utility function to fetch metadata for blog and project slugs
export function getMetadata(type: "blog" | "projects", data: { title: string; description: string; SEOImage?: string; date?: string; author?: string; tags?: string[] }): Metadata {
  return {
    TITLE: data.title, // Use the actual title from the frontmatter
    DESCRIPTION: data.description, // Use the actual description from the frontmatter
    IMAGE: data.SEOImage || `/images/${type}/${data.title}.png`, // Use SEOImage or fallback
    DATE: data.date,
    AUTHOR: data.author,
    TAGS: data.tags || [],
  };
}

export const ABOUT: Metadata = {
  TITLE: "About",
  DESCRIPTION: "Learn more about Isaac Talb.",
  IMAGE: "/favicon.svg",
};

export const CONTACT: Metadata = {
  TITLE: "Contact",
  DESCRIPTION: "Get in touch with Isaac Talb.",
  IMAGE: "/favicon.svg",
};

export const SERVICES: Metadata = {
  TITLE: "Services",
  DESCRIPTION: "Development, VPS & DevOps, consulting.",
  IMAGE: "/assets/favicon.svg",
};

export const THANKYOU: Metadata = {
  TITLE: "ThankYou",
  DESCRIPTION: "Thank you for reaching out! I'll get back to you soon.",
  IMAGE: "/favicon.svg",
};

export const SOCIALS: Socials = [
  {
    NAME: "GitHub",
    HREF: "https://github.com/IsaacTalb",
    IMAGE: "/socials/github.png",
  },
  {
    NAME: "LinkedIn",
    HREF: "https://www.linkedin.com/in/isaac-talb",
    IMAGE: "/socials/linkedin.png",
  },
  {
    NAME: "Website",
    HREF: "https://isaactalb.github.io",
    IMAGE: "/socials/website.png",
  },
];