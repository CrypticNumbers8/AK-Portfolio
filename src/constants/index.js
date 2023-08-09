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
  u_logo,
  cosm_logo,
  egi_logo,
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
    title: "Front-End Developer",
    icon: web,
  },
  {
    title: "Full Stack Developer",
    icon: mobile,
  },
  {
    title: "UI/UX Designer",
    icon: backend,
  },
  {
    title: "Magician",
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
    name: "React JS",
    icon: reactjs,
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
    title: "Volunteer Researcher",
    company_name: "The School of Computing, University of Utah",
    icon: u_logo,
    iconBg: "#ffffff",
    date: "July 2023 - Present",
    points: [
      "Performed running time analysis on multiple static python code benchmarks to figure out gradual soundness.",
    ],
  },
  {
    title: "Graduate Teaching Assistant",
    company_name: "College of Science, University of Utah",
    icon: u_logo,
    iconBg: "#ffffff",
    date: "August 2022 - May 2023",
    points: [
      "Teaching Assistant for CS 2420: Intro to Algorithms and Data Structures(Fall 2021).",
      "Reinforced lessons presented by Professors, developed programming assignments and conducted lab sessions.",
    ],
  },
  {
    title: "Engineering Intern",
    company_name: "Evans & Sutherland, A Cosm Company",
    icon: cosm_logo,
    iconBg: "#ffffff",
    date: "June 2022 - August 2022",
    points: [
      "Created a highly efficient C# and XAML-based WPF tool during my summer internship, resulting in a 30% optimization in library search time for astronomical entities within the Digistar software.",
      "Implemented an efficient recursive algorithm to traverse folder structures and Optimized file content search by utilizing file streams to read data in 1024-byte chunks, enhancing performance and memory usage.",
      "Hands-on coding in C#, XAML, Windows Presentation Foundation, Visual Studio, Git.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Energy and Geoscience Institute, University of Utah",
    icon: egi_logo,
    iconBg: "#ffffff",
    date: "Feb 2022 - August 2022",
    points: [
      "Assisted in web architecture development, deployment, documentation, debugging, and testing of the EGI website.",
      "Implemented Angular Universal for server-side rendering, resulting in reduction of the First Contentful Paint (FCP) time by 600 ms and improved SEO.",
      "Deployed the website on GCloud virtual machines and configured NGINX for hosting.",
      "Hands-on coding using HTML5, CSS, JavaScript in Angular framework.",
    ],
  },
  {
    title: "Graduate Teaching Assistant",
    company_name: "The School of Computing, University of Utah",
    icon: u_logo,
    iconBg: "#ffffff",
    date: "August 2021 - December 2021",
    points: [
      "Teaching Assistant for CS 2420: Intro to Algorithms and Data Structures(Fall 2021).",
      "Reinforced lessons presented by Professors, developed programming assignments and conducted lab sessions.",
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
    name: "StoreFront Full Stack E-Commerce Website",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "NodeJS",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link:
      "https://github.com/CrypticNumbers8/StoreFront-Full-Stack-E-Commerce",
  },
  {
    name: "EightVape Website",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/CrypticNumbers8/EightVape",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
  {
    name: "Movie Review Website",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Fantasy Premier Leauge Optimal Team Generator",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Linear Programming",
        color: "green-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Starbucks Landing Page",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
