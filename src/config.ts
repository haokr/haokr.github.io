import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://haokr.github.io", 
  author: "hk",
  desc: "你将成为你所想的",
  title: "鹿上博客",
  ogImage: "blog-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 10,
};

export const LOCALE = {
  lang: "en", 
  langTag: [],
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  }
];
