import { Card } from "./Card";

export default {
  component: Card,
};

export const Education = {
  args: {
    title: "Education",
    marginTop: "0px",
    backgroundColour: "#0b1220",
    borderColour: "1px solid rgba(255, 255, 255, 0.03)",
    titleColour: "#d9f0ff",
    textColour: "#d9f0ff",
    items: [
      {
        purpose: "List",
        title: "University of Manchester",
        subtitle: "BSc Computer Science",
        description: "First Class Honours",
        startDate: "2019",
        endDate: "2022",
        tags: [
          { text: "Degree", backgroundColour: "#1a2a3a", textColour: "#63b3ed" },
          { text: "First Class", backgroundColour: "#1a3a2a", textColour: "#68d391" },
        ],
      },
      {
        purpose: "List",
        title: "Stockport College",
        subtitle: "Mathematics, Physics, Computer Science",
        description: "A, A, B",
        startDate: "2017",
        endDate: "2019",
        tags: [{ text: "A-Levels", backgroundColour: "#1a2a3a", textColour: "#63b3ed" }],
      },
    ],
  },
};

export const WorkExperience = {
  args: {
    title: "Work Experience",
    marginTop: "0",
    backgroundColour: "#0b1220",
    borderColour: "1px solid rgba(255, 255, 255, 0.03)",
    titleColour: "white",
    textColour: "white",
    items: [
      {
        purpose: "List",
        title: "Anthropic",
        subtitle: "Senior Software Engineer",
        description: "Full-time",
        startDate: "Jan 2023",
        endDate: "Present",
        tags: [
          { text: "Full-time", backgroundColour: "#1a2a3a", textColour: "#63b3ed" },
          { text: "AI", backgroundColour: "#2a1a3a", textColour: "#b794f4" },
        ],
      },
      {
        purpose: "List",
        title: "Google",
        subtitle: "Software Engineer Intern",
        description: "Internship",
        startDate: "Jun 2022",
        endDate: "Sep 2022",
        tags: [{ text: "Internship", backgroundColour: "#1a2a3a", textColour: "#63b3ed" }],
      },
    ],
  },
};

export const Skills = {
  args: {
    title: "Skills",
    backgroundColour: "#0b1220",
    borderColour: "1px solid rgba(255, 255, 255, 0.03)",
    titleColour: "white",
    textColour: "white",
    items: [
      {
        purpose: "List",
        title: "Frontend",
        subtitle: "React, TypeScript, Tailwind CSS",
        tags: [
          { text: "React", backgroundColour: "#1a2a3a", textColour: "#63b3ed" },
          { text: "TypeScript", backgroundColour: "#1a2a3a", textColour: "#63b3ed" },
          { text: "Tailwind CSS", backgroundColour: "#1a2a3a", textColour: "#63b3ed" },
        ],
      },
      {
        purpose: "List",
        title: "Backend",
        subtitle: "Node.js, Python, PostgreSQL",
        tags: [
          { text: "Node.js", backgroundColour: "#1a3a2a", textColour: "#68d391" },
          { text: "Python", backgroundColour: "#1a3a2a", textColour: "#68d391" },
          { text: "PostgreSQL", backgroundColour: "#1a3a2a", textColour: "#68d391" },
        ],
      },
      {
        purpose: "List",
        title: "Tools",
        subtitle: "Git, Docker, AWS",
        tags: [
          { text: "Git", backgroundColour: "#2a1a1a", textColour: "#fc8181" },
          { text: "Docker", backgroundColour: "#2a1a1a", textColour: "#fc8181" },
          { text: "AWS", backgroundColour: "#2a1a1a", textColour: "#fc8181" },
        ],
      },
    ],
  },
};

export const CustomStyled = {
  args: {
    title: "Projects",
    backgroundColour: "#0d1b2a",
    borderColour: "rgba(99, 179, 237, 0.2)",
    titleColour: "#63b3ed",
    textColour: "#e2e8f0",
    items: [
      {
        purpose: "List",
        title: "Portfolio Website",
        subtitle: "Personal site built with React & TypeScript",
        startDate: "Mar 2024",
        endDate: "Present",
        tags: [
          { text: "React", backgroundColour: "#0d2a3a", textColour: "#63b3ed" },
          { text: "TypeScript", backgroundColour: "#0d2a3a", textColour: "#63b3ed" },
        ],
      },
      {
        purpose: "List",
        title: "Component Library",
        subtitle: "Reusable UI components with Storybook",
        startDate: "Jan 2024",
        endDate: "Feb 2024",
        tags: [
          { text: "Storybook", backgroundColour: "#2a1a2a", textColour: "#f687b3" },
          { text: "UI", backgroundColour: "#2a1a2a", textColour: "#f687b3" },
        ],
      },
    ],
  },
};

export const MinimalWithDefaults = {
  args: {
    title: "Basic Card",
    items: [
      {
        purpose: "List",
        title: "Default Item",
        subtitle: "Shows default styling",
        tags: [{ text: "Default" }],
      },
    ],
  },
};

export const EmptyCard = {
  args: {
    title: "Empty Card",
  },
};
