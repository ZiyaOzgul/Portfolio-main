import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  react,
  eru,
  node,
  full,
  bitesLogo,
  takosanLogo,
  upworkLogo,
  horoscopeLogo,
  mysql,
  githubtech,
  weather,
  pokemon,
  commerce,
  note,
  planner,
  todo,
  poke,
  forecast,
  recipe,
  artvicco,
  ui,
  horoscope,
  nixara,
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
    id: "cv",
    title: "CV",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Mobile Developer",
    icon: creator,
  },
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
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
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "GitHub",
    icon: githubtech,
  },
];

const experiences = [
  {
    title: "Student",
    company_name: "Erciyes University",
    icon: eru,
    iconBg: "#383E56",
    date: "2019",
    points: [
      "Begining a student of a engineer and learn lots of things. Coding journey begins here",
    ],
  },
  {
    title: "Front-End Developer",
    company_name: "Front-End Journey",
    icon: react,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - Jan 2023",
    points: [
      "After  2 years of pandemic sleep, i started to web development journey.",
      "First learned basics of HTML, CSS and JavaScript ",
      "Then working on a freamework time is come. I choose ReactJs and start working on it",
      "Finally i learn ReactJs, Redux and TailwindCss. Now working on NextJS",
    ],
  },
  {
    title: "Back-End Developer",
    company_name: "Back-End Journey",
    icon: node,
    iconBg: "#383E56",
    date: "Nov 2022 - May 2023",
    points: [
      "When i learn basics of JavaScript i start working on NodeJs.",
      "Then i started work on  front and back-end development simultaneously.",
      "While working learned MongoDb and Mysql for Data Base management.",
      "Finally i can make web api's for my Front-end works.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "As a junior",
    icon: full,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "I know im still beginning of the road. And i wil improve my skills",
      "I want to collaborate with other developers to create high-quality products.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Front-End Journey",
    icon: react,
    iconBg: "#E6DEDD",
    date: "Present",
    points: [
      "After I learn React for front-end and Node.js for back-end development i practice lots of self projects. ",
      " After them i start working on React Native for mobile development.",
      "Currently building basic projects on mobile. Mostly web projects i buileded.",
    ],
  },
  {
    title: "Engineer",
    company_name: "Erciyes University",
    icon: eru,
    iconBg: "#383E56",
    date: "2024",
    points: ["Graduated as an Engineer from Erciyes University"],
  },
  {
    title: "Web Developer",
    company_name: "Kaftek Mühendislik",
    icon: node,
    iconBg: "#333834",
    date: "",
    points: [
      "Web Development Intern at Kaftek, working with Next.js, Tailwind CSS, and MongoDB on web development projects.",
      "Developed their current website.",
      "Tech Stack: React, Next.js, Tailwind, MongoDB, Firebase",
    ],
  },
  {
    title: "Freelance Web Developer",
    company_name: "Freelance",
    icon: upworkLogo,
    iconBg: "#333834",
    date: "",
    points: [
      "Worked as a Freelance Web Developer on various web projects.",
      "Developed web applications using React and Next.js with modern and responsive user interfaces.",
      "Implemented animations and interactive UI elements.",
      "Designed and integrated MongoDB for data management.",
      "Delivered custom solutions based on client requirements.",
    ],
  },
  {
    title: "Embedded Software Engineer",
    company_name: "Takosan Automotive",
    icon: takosanLogo,
    iconBg: "#333834",
    date: "",
    points: [
      "Developed embedded software applications in C for automotive display systems.",
      "Implemented indicator control logic and motor driving modules.",
      "Worked with microcontrollers and low-level peripheral communication.",
      "Performed hardware–software integration testing and debugging.",
      "Contributed to improving stability and maintainability of embedded code.",
    ],
  },
  {
    title: "Mobile Developer",
    company_name: "BITES Defence & Aerospace",
    icon: bitesLogo,
    iconBg: "#333834",
    date: "",
    points: [
      "Built a custom video playback module from scratch in React Native.",
      "Implemented media controls, playback handling, and modular UI components.",
      "Integrated WebView rendering for dynamic embedded content.",
      "Improved understanding of performance-aware mobile component design.",
    ],
  },
  {
    title: "Mobile Application Developer",
    company_name: "Horoscope App (Production)",
    icon: horoscopeLogo,
    iconBg: "#333834",
    date: "",
    points: [
      "Developed and published a cross-platform mobile application using React Native + TypeScript.",
      "Designed scalable folder structure and reusable component-based UI architecture.",
      "Implemented secure authentication and account management with Clerk.",
      "Built backend workflows and database operations using Convex.",
      "Delivered full development lifecycle: architecture → implementation → deployment.",
      "Published on Google Play Store.",
    ],
  },
];

const projects = [
  {
    name: "Shapely",
    description:
      "AI-powered text transformation app. Rewrites, summarizes, and stylizes any text using GPT-4o. Supports 5 languages with a fully localized UI and freemium subscription model via Adapty.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "TailwindCss",
        color: "green-text-gradient",
      },
      {
        name: "Expo",
        color: "pink-text-gradient",
      },
    ],
    image: shapely,
    source_code_link: "https://github.com/ZiyaOzgul/Shapely",
  },
  {
    name: "Nixara",
    description:
      "AI-powered astrology and horoscope app. Features natal chart analysis, palm reading, and personalized daily insights powered by Claude AI. Built with React Native and Expo.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "",
        color: "pink-text-gradient",
      },
    ],
    image: nixara,
    source_code_link: "https://github.com/ZiyaOzgul",
  },
  {
    name: "Artvicco E-Commerce",
    description:
      "E commerce website for Artvicco products.Frontend and Backend development. Build with NextJs, TypeScript and MongoDB.",
    tags: [
      {
        name: "NextJs",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: artvicco,
    source_code_link: "https://github.com/ZiyaOzgul/Artvicoo",
  },
  {
    name: "Admin Dashboard",
    description:
      "Admin Dashboard project.Frontend and Backend development. Build with NextJs, TypeScript and MongoDB.",
    tags: [
      {
        name: "NextJs",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: ui,
    source_code_link: "https://github.com/ZiyaOzgul/ui-project",
  },

  {
    name: "Weather Forecast",
    description:
      "Weather Forecast application current, daily and weekly forecast of your city. Build with ReactJs and OpenWeatherApi.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "OpenWeatherApi",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: weather,
    source_code_link: "https://github.com/ZiyaOzgul/React-Weather-App",
  },
  {
    name: "Pokedex",
    description:
      "Pokedex application for pokemon info and stats. Build with ReactJs, Redux and PokedexApi",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "pokedexApi",
        color: "green-text-gradient",
      },
      {
        name: "redux",
        color: "orange-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: pokemon,
    source_code_link: "https://github.com/ZiyaOzgul/Pokedex-App",
  },
  {
    name: "E-Commerce website",
    description: "A basic E-Commerce site template. Build with ReactJs",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },

      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: commerce,
    source_code_link: "https://github.com/ZiyaOzgul/E-Commerce-Template",
  },
  {
    name: "Notes App",
    description:
      "Basic Note Application. Build with ReactJs,Redux and Tailwindcss",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },

      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "redux",
        color: "orange-text-gradient",
      },
    ],
    image: note,
    source_code_link: "https://github.com/ZiyaOzgul/Note-app-MongoDb",
  },
  {
    name: "Daily Planner",
    description:
      "Daily Planner Application. Build with ReactJs,Redux and Tailwindcss",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },

      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "redux",
        color: "orange-text-gradient",
      },
    ],
    image: planner,
    source_code_link: "https://github.com/ZiyaOzgul/Bitirme",
  },
];

export const MobileProjects = [
  {
    name: "Horoscope App",
    description:
      "Mobile Horoscope Application with daily readings, compatibility checks and personalized insights. Built with React Native, Clerk, Convex and Redux.",
    tags: [
      {
        name: "react native",
        color: "blue-text-gradient",
      },
      {
        name: "clerk",
        color: "green-text-gradient",
      },
      {
        name: "convex",
        color: "orange-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
      },
    ],
    image: horoscope,
    source_code_link: "https://github.com/ZiyaOzgul",
  },
  {
    name: "Forecast Application",
    description:
      "Mobile Forecast Application. Build with React Native,Redux and Tailwindcss",
    tags: [
      {
        name: "react native",
        color: "blue-text-gradient",
      },

      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "redux",
        color: "orange-text-gradient",
      },
    ],
    image: forecast,
    source_code_link: "https://github.com/ZiyaOzgul/Native-Weather-App",
  },
  {
    name: "Recipe Application",
    description:
      "Mobile Recipe Book Application. Build with React Native,Redux and Tailwindcss",
    tags: [
      {
        name: "react native",
        color: "blue-text-gradient",
      },

      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "redux",
        color: "orange-text-gradient",
      },
    ],
    image: recipe,
    source_code_link: "https://github.com/ZiyaOzgul/Native-Recipe-App",
  },
  {
    name: "ToDo Application",
    description:
      "Mobile ToDo Application. Build with React Native,Redux and Tailwindcss",
    tags: [
      {
        name: "react native",
        color: "blue-text-gradient",
      },

      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "redux",
        color: "orange-text-gradient",
      },
    ],
    image: todo,
    source_code_link: "https://github.com/ZiyaOzgul/Native-TodoApp-With-Redux",
  },
  {
    name: "Pokedex Application",
    description:
      "Mobile Pokedex Application. Build with React Native,Redux and Tailwindcss",
    tags: [
      {
        name: "react native",
        color: "blue-text-gradient",
      },

      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "redux",
        color: "orange-text-gradient",
      },
    ],
    image: poke,
    source_code_link: "https://github.com/ZiyaOzgul/Native-Pokedex-App",
  },
];
export { services, technologies, experiences, projects };
