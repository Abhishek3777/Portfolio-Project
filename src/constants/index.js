import {
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
  threejs,
  issue,
  weather,
  infinite,
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
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
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
    title: "SDE Intern",
    company_name: "Slnko Energy Private Limited",
    icon: reactjs,
    iconBg: "#383E56",
    date: "Jan 2026 - Present",
    points: [
      "Built and shipped features across Protrac, a production customizable ERP (web + mobile): Next.js, React Native (Expo), and Node.js/Express APIs.",
      "Worked on event-driven backend flows using Kafka (produce/consume, async workflows/jobs via inbox -> executors) and Redis for layout/runtime caching.",
      "Implemented metadata-driven UI rendering to support configurable workflows without frontend code changes.",
      "Debugged and fixed production issues across frontend, backend, and auth; collaborated with stakeholders on release and support.",
    ],
  },
  {
    title: "Software Developer Intern",
    company_name: "Infinite Computer Solutions",
    icon: infinite,
    iconBg: "#E6DEDD",
    date: "June 2025 - July 2025",
    points: [
      "Built a full-stack Issue Tracker using React, Node.js, and MongoDB to manage task statuses and track work progress.",
      "Implemented status transitions (Open → In Progress → Resolved → Closed/Unresolved) with automatic time tracking and SLA logic.",
      "Added authentication and role-based access, ensuring secure control over issue updates and deletions.",
      "Designed a clean UI with real-time feedback, confirmation prompts, and toast notifications for better user experience.",
    ],
  },
  {
    title: "Full Stack Developer Intern",
    company_name: "KavachOne",
    icon: reactjs,
    iconBg: "#383E56",
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
      "Full-stack issue tracker to log tasks, move them through status workflows, track resolution time, and manage access with auth and role-based controls.",
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
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: issue,
    source_code_link: "https://issue-tracker-theta-livid.vercel.app/",
  },
  {
    name: "Weather App",
    description:
      "Responsive React weather app that fetches real-time data by location or search, with a clean Material UI interface for quick forecasts.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "material-ui",
        color: "green-text-gradient",
      },
      {
        name: "api",
        color: "pink-text-gradient",
      },
    ],
    image: weather,
    source_code_link: "https://weather-app-nu-six-91.vercel.app/",
  },
];

export { technologies, experiences, testimonials, projects };
