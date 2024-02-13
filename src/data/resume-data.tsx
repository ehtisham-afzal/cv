import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Ehtisham Afzal",
  initials: "EA",
  location: "KPK,Pakistan",
  locationLink: "https://maps.app.goo.gl/gYdFmxmn9yW5LMwW7",
  about:
    "Junior full stack Web Developer, focused on building products that are user-friendly, simple and delightful.",
  summary:
    "A front-end developer, based in Pakistan. specializing in full-stack web applications using JavaScript, TypeScript, React, Next.js, and Node.js. I love building Web-Applications that are user-friendly, simple and delightful.",
  avatarUrl: "/sham2cropped.png",
  personalWebsiteUrl: "https://ehtisham.dev",
  contact: {
    email: "shaminterprise@gmail.com",
    tel: "+923459695962",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/EHTISHAM-Afzal",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ehtisham-afzal/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://twitter.com/ehtisham_dev",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "GPI Batkhela",
      degree: "DAE Civil Engneering",
      start: "2018",
      end: "2021",
    },
  ],
  work: [
    {
      company: "Pepsico",
      link: "https://www.pepsico.com.pk/",
      badges: ["OnSite"],
      title: "KPO",
      logo: "/Pepsico.svg",
      start: "2021",
      end: "2023",
      description: "Worked as KPO",
    },
  ],
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "PostgreSQL",
    "Node.js",
    "Web Technologies",
    "React",
    "Next.js",
    "Astro",
    "UI",
    "UX",
    "TailwindCSS",
    "MongoDB",
    "ExpressJS",
    "SSR",
    "Cloadinary",
    "Git",
    "Github",
    "Figma",
  ],
  projects: [
    {
      title: "LittleLemon",
      techStack: [
        "Side Project",
        "E Commerce",
        "JavaScript",
        "React",
        "vite.js",
        "MongoDB",
        "Express",
      ],
      description: "A MERN Stack E Commerce Web Application",
      logo: "/logo/Pepsico.svg",
      link: {
        label: "Little Lemon",
        href: "https://littlelemon-sham.vercel.app/",
      },
    },
  ],
} as const;
