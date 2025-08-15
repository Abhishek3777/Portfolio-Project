import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  issue,
  weather
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Developer Intern",
    company_name: "Infinite Computer Solutions",
    icon: reactjs,
    iconBg: "#383E56",
    date: "June 2025 - July 2025",
    points: [
      "Built a full-stack Issue Tracker using React, Node.js, and MongoDB to manage task statuses and track work progress",
      "Implemented status transitions (Open → In Progress → Resolved → Closed/Unresolved) with automatic time tracking and SLA logic.",
      "Added authentication and role-based access, ensuring secure control over issue updates and deletions.",
      "Designed a clean UI with real-time feedback, confirmation prompts, and toast notifications for better user experience.",
    ],
  },
  {
    title: "Full Stack Developer Intern",
    company_name: "KavachOne",
    icon: reactjs,
    iconBg: "#E6DEDD",
    date: "Sept 2024 - October 2024",
    points: [
      "Interned at KavachOne, focusing on the website's React prototype, performance optimizations, and SEO improvements.",
      "Improved user experience and site efficiency by applying best development practices.",
    ],
  },

];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Issue Tracker",
    description:
      "A full-stack issue tracker app to log tasks, update statuses, and track resolution time for efficient workflow management.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: issue,
    source_code_link: "https://issue-tracker-theta-livid.vercel.app/",
  },
  {
    name: "Notes_App",
    description:
      "A full-stack notes app with user authentication and CRUD functionality to securely create, edit, and manage personal notes.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: weather,
    source_code_link: "https://weather-app-nu-six-91.vercel.app/",
  },
  {
    name: "Weather App",
    description:
      "A responsive React weather app that fetches real-time weather data based on user location or search input using a public API.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "material UI",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: weather,
    source_code_link: "https://weather-app-nu-six-91.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
