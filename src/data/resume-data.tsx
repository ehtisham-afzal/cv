import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
import RxResumeExport from "./RxResumeExport.json"; // Importing the JSON file;

const Education = RxResumeExport.sections.education.items.map((edu) => {
  return {
    school: edu.institution,
    degree: edu.studyType,
    date: edu.date,
  };
});


const Work = RxResumeExport.sections.experience.items.map((work) => {
  return {
    company: work.company,
    link : work.url.href,
    title: work.position,
    date: work.date,
    description: work.summary,
  };
});

const Skills = RxResumeExport.sections.skills.items.map((skill) => {
  return skill.name;
});


// {
//   title: "LittleLemon",
//   techStack: [
//     "Side Project",
//     "E Commerce",
//   ],
//   description: "A MERN Stack E Commerce Web Application",
//   logo: "/logo/Pepsico.svg",
//   link: {
//     label: "Little Lemon",
//     href: "https://littlelemon-sham.vercel.app/",
//   },
// },



const Projects = RxResumeExport.sections.projects.items.map((project) => {
  return {
    title: project.name,
    techStack: project.keywords,
    description: project.summary,
    link: {
      label: project.name,
      href: project.url.href,
    },
  };
});

export const RESUME_DATA = {
  name: "Ehtisham Afzal",
  initials: "EA",
  location: "KPK,Pakistan",
  locationLink: "https://maps.app.goo.gl/gYdFmxmn9yW5LMwW7",
  about:
    "Junior full stack Web Developer, focused on building products that are user-friendly, simple and delightful.",
  summary:
    "A front-end developer, based in Pakistan. specializing in full-stack web applications using JavaScript, TypeScript, React, Next.js, and Node.js. I love building Web-Applications that are user-friendly, simple and delightful.",
  avatarUrl: "/SHAM-PIC-small.webp",
  personalWebsiteUrl: "https://ehtisham.dev",
  contact: {
    email: "shaminterprise@gmail.com",
    tel: "+923459695962",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/ehtisham-afzal",
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
  education: Education,
  //  [
  //   {
  //     school: "GPI Batkhela",
  //     degree: "DAE Civil Engneering",
  //     start: "2018",
  //     end: "2021",
  //   },
  // ],
  work: Work,
  //  [
  //   {
  //     company: "Pepsico",
  //     link: "https://www.pepsico.com.pk/",
  //     badges: ["OnSite"],
  //     title: "KPO",
  //     logo: "/Pepsico.svg",
  //     start: "2021",
  //     end: "2023",
  //     description: "Worked as KPO",
  //   },
  //   ...Work,
  // ],
  skills: Skills,
  // ["HTML","CSS","JavaScript","TypeScript","PostgreSQL","Node.js","Web Technologies","React","Next.js","Astro","UI","UX","TailwindCSS","MongoDB","ExpressJS","SSR","Cloadinary","Git","Github","Figma",],
  projects: Projects,
  // [
  //   {
  //     title: "LittleLemon",
  //     techStack: [
  //       "Side Project",
  //       "E Commerce",
  //       "JavaScript",
  //       "React",
  //       "vite.js",
  //       "MongoDB",
  //       "Express",
  //     ],
  //     description: "A MERN Stack E Commerce Web Application",
  //     logo: "/logo/Pepsico.svg",
  //     link: {
  //       label: "Little Lemon",
  //       href: "https://littlelemon-sham.vercel.app/",
  //     },
  //   },
  //   ...Projects,
  // ],
} as const;
