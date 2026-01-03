"use client";
import React, { useState, useEffect } from "react";
import CardColumns from "react-bootstrap/CardColumns";
import ProjectCard from "./components/ProjectCard";
import ProjectRow from "./components/ProjectRow";

import debounce from "lodash.debounce";

var projects = [
  {
    name: "isit.food",
    order: -2,
    desktopOrder: -2,
    images: [
      "img/isitfood/isitfood-unknown.png",
      "img/isitfood/isitfood-checking.png",
      "img/isitfood/isitfood-yes.png",
      "img/isitfood/isitfood-no.png",
    ],
    description: "Api and client for classifying arbitrary input",
    descriptionLong: [
      "Try it out yourself!",
      "Uses vercel edge functions for faster api responses",
      "Uses proprietary algorithm for efficient and scalable classification",
      "Can determine foodiness at incredible scale and throughput",
    ],
    technologies: "Redis, Postgres, Neon.tech, Vercel Edge Runtime, Shadcn",
    demo: {
      name: "Vercel Deployment",
      url: "https://isit.food",
    },
  },
  {
    name: "Timeformer (Time Transformer)",
    order: -1,
    desktopOrder: -1,
    images: [
      "img/timeformer/timeformer-wide-view.png",
      "img/timeformer/timeformer-detail-local-time.png",
      "img/timeformer/timeformer-detail-output-zone.png",
      "img/timeformer/timeformer-detail-output-formats.png",
      "img/timeformer/timeformer-detail-output.png",
    ],
    description: "Makes time stamps in various formats and zones",
    descriptionLong: [
      "Simple static site",
      "Supports many formats, including my favorite (RFC 5322/2822)",
      "Can be used for scheduling meetings, planning events, and checking your calendar",
      "Has no observable temporal side-effects",
    ],
    technologies: "HTML, CSS, JavaScript, Vercel, simplicity",
    demo: {
      name: "Vercel Deployment",
      url: "https://timeformer.vercel.app",
    },
  },
  {
    name: "You Should Use a DateTime Library (Maybe)",
    order: 0,
    desktopOrder: 0,
    images: [
      "img/prezzy/prezzy-0.png",
      "img/prezzy/prezzy-1.jpeg",
      "img/prezzy/prezzy-2.jpeg",
    ],
    description: "Lightning talk (~20 min) crafted for the SeattleJS meetup",
    descriptionLong: [
      "Given to audience of 30-40 web developers",
      "Convinced at least a few to use DateTime libraries",
      "Built excitement around tc39 proposal for Temporal API",
      "Got at least one laugh",
    ],
    technologies: "RFC 5322 (RFC 2822), ISO 8601, ISO 9075, RFC 3339, LuxonJS",
    demo: {
      name: "Google Slides",
      url: "https://docs.google.com/presentation/d/1_DQdOYYhhWXCvhrtZeAZnX8gmu2dhpPYwVfh-g6rzWo/edit?usp=sharing",
    },
  },
  {
    name: "recipelf",
    order: 1,
    desktopOrder: 1,
    images: [
      "/img/recipelf/ingredients.png",
      "/img/recipelf/generate.png",
      "/img/recipelf/login.png",
    ],
    description:
      "Generate new recipes using chatGPT and the ingredients in your kitchen. Built at AI Future Builder Hackathon 2023",
    descriptionLong: [
      "Originally deployed on AWS EC2, now deployed on Vercel",
      "Generates recipes on-demand using the OpenAI API",
      "Supports JWT Auth for sign-ups and user management",
    ],
    technologies:
      "Generative AI, React, Expressjs, JWT Auth, PostgreSQL, Hackathon",
    github: "https://github.com/fx-wood/recipelf",
    demo: { name: "Vercel Deployment", url: "https://recipelf.com" },
  },
  {
    name: "likeable",
    order: 2,
    desktopOrder: 2,
    images: ["/img/likeable/likeable-0.png", "/img/likeable/likeable-1.png"],
    description:
      "Tinder for design options. Swipe left or right to be presented with personalized design recommendations. Built at AEC Tech Hackathon 2023",
    descriptionLong: [
      "Implements a simple recommender algorithm",
      "Front End deployed on Vercel",
      "Back End deployed on AWS EC2",
      "Displays 3D models of design options",
    ],
    technologies: "Recommender, Figma, NextJS, React, 3D, Hackathon",
    github: "https://github.com/fx-wood/mesh-server",
    demo: { name: "Vercel Deployment", url: "https://likeable.vercel.app" },
  },
  {
    name: "Dicemagic.beyond",
    order: 3,
    desktopOrder: 7,
    images: ["/img/dicemagic-beyond.png"],
    description: "Dice rolling chrome extension for tabletop games",
    descriptionLong: [
      "Uses dice-rolling api to support arbitrary dice rolls",
      "Deployed to chrome web store",
      "implemented in vanilla JavaScript",
    ],
    technologies:
      "chrome/firefox browser apis, js classes, event listeners, mutation observers",
    github: "https://www.github.com/fx-wood/dicemagic.beyond",
    demo: {
      name: "Chrome Store",
      url: "https://chrome.google.com/webstore/detail/dicemagicbeyond/jdiefafcjohmkpnbgednhedeghbbgmbe",
    },
  },
  {
    name: "SeattleJS Airtable CLI",
    order: 4,
    desktopOrder: 3,
    images: [
      "/img/seattlejs-airtable-cli/update-event.png",
      "/img/seattlejs-airtable-cli/request-token.png",
    ],
    description:
      "CLI Tool to help meetup organizers maintain the SeattleJS.com website",
    descriptionLong: [
      "Builds into an NPM package for easy consumption",
      "Queries Airtable data source, prompts user, and outputs relevant data",
      "Stores user data using netrc, only set it up once!",
      "Makes requests using Airtable JS Library",
      "UX built with Yargs and Prompts",
    ],
    technologies: "CLI, Airtable, TypeScript, NPM Package, Reconciler",
    github: "https://github.com/seattlejs/seattlejs-airtable-cli",
    demo: {
      name: "NPM Package",
      url: "https://npmjs.org/seattlejs-airtable-cli",
    },
  },
  {
    name: "Domblenon",
    order: 5,
    desktopOrder: 9,
    images: ["/img/kingdom-select.png"],
    description: "Simple Dominion kingdom picker",
    descriptionLong: ["Simple kingdom picker for dominion"],
    technologies: "Express.js, ES6 classes, Google Charts",
    github: "https://www.github.com/fx-wood/Domblenon",
    demo: {
      name: "Github Pages",
      url: "https://fx-wood.github.io/DombleHost/",
    },
  },
  {
    name: "Extra",
    order: 6,
    desktopOrder: 5,
    images: ["/img/create-cards.png"],
    description: "Flash cards as a service",
    descriptionLong: [
      "Allows users to create text-based flash cards and review them",
      "Stores data in PostgreSQL",
      "Implements full user Auth",
    ],
    technologies: "Node.js, Express.js, PostgreSQL, Sequelize ORM, Heroku",
    github: "https://www.github.com/fx-wood/extra",
    demo: {
      name: "Vercel Deployment",
      url: "https://extra-sable.vercel.app",
    },
  },
  {
    name: "Props",
    order: 7,
    desktopOrder: 6,
    images: ["/img/props-login.png"],
    description: "Give props to your colleagues",
    descriptionLong: [
      "Team project, built with React",
      "Build workplace engagement by allowing employees to give each other props",
    ],
    technologies:
      "React, Node.js, Express.js, MongoDB, Mongoose ODM, Heroku, reCharts",
    github: "https://www.github.com/fx-wood/props",
    demo: { name: "Vercel Deployment", url: "https://props-harp.vercel.app" },
  },
  {
    name: "Tic-Tac-Toe",
    order: 8,
    desktopOrder: 8,
    images: ["/img/tic-tac-toe.png"],
    description: "It's an older game, but it checks out",
    descriptionLong: [
      "Implements different AI opponents",
      "Supports all advanced tactics",
      "Supports multiplayer",
    ],
    technologies: "Javascript, shuffle algorithm, min-max algorithm",
    github: "https://www.github.com/fx-wood/tic-tac-toe",
    demo: {
      name: "Github Pages",
      url: "https://fx-wood.github.io/tic-tac-toe/",
    },
  },
  {
    name: "Mountain Road",
    order: 9,
    desktopOrder: 4,
    images: ["/img/mr-splash.png"],
    description: "Ridesharing app for skiiers and riders",
    descriptionLong: [
      "Allows riders to post when they want a ride or when they need one",
      "Snowsports enjoyers can carpool up to the mountain",
      "Implements auth and user profile",
      "Stores data in MongoDB",
    ],
    technologies:
      "React, Node.js, Express.js, MongoDB, Mongoose ODM, Heroku, Material-ui",
    github: "https://www.github.com/fx-wood/mountainroad",
    demo: {
      name: "Vercel Deployment",
      url: "https://mountainroad.vercel.app",
    },
  },
];

const HomePage = () => {
  const [isMobile, setIsMobile] = useState(false);
  const handleResize = () => {
    if (window.innerWidth < 1000) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };
  useEffect(() => {
    // TODO: figure out how to initialize the window size in a good way. This sucks
    // because there's a flash of the wrong size on mobile
    handleResize();
    window.addEventListener("resize", debounce(handleResize));
  });

  let content;
  if (isMobile) {
    content = (
      // mobile content
      <CardColumns>
        {projects.map((project) => (
          <ProjectCard key={project.order} {...project} />
        ))}
      </CardColumns>
    );
  } else {
    content =
      // desktop content
      projects
        .sort((a, b) => a.desktopOrder - b.desktopOrder)
        .map((project) => <ProjectRow key={project.order} {...project} />);
  }
  if (!content) {
    content = <p>There was an error</p>;
  }
  return <main className="projects-main">{content}</main>;
};

export default HomePage;
