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
    items: [
      {
        order: ["text", "tag", "date"],
        textProps: {
          subtitle: "University of Manchester",
          subtitleColour: "#d9f0ff",
          description: "BSc Computer Science - First Class Honours",
          descriptionColour: "#cfe7ff",
          size: "md",
          shadow: false,
          borderColour: "#d9f0ff",
        },
        tags: [
          { text: "Degree", backgroundColour: "#1a2a3a", textColour: "#63b3ed" },
          { text: "First Class", backgroundColour: "#1a3a2a", textColour: "#68d391" },
        ],
        dateProps: {
          startDate: "2019",
          endDate: "2022",
          dateColour: "#d9f0ff",
          size: "md",
          shadow: false,
          borderColour: "#d9f0ff",
        },
      },
      {
        order: ["text", "tag", "date"],
        textProps: {
          subtitle: "Stockport College",
          subtitleColour: "#d9f0ff",
          description: "Mathematics, Physics, Computer Science - A, A, B",
          descriptionColour: "#cfe7ff",
          size: "md",
          shadow: false,
          borderColour: "#d9f0ff",
        },
        tags: [{ text: "A-Levels", backgroundColour: "#1a2a3a", textColour: "#63b3ed" }],
        dateProps: {
          startDate: "2017",
          endDate: "2019",
          dateColour: "#d9f0ff",
          size: "md",
          shadow: false,
          borderColour: "#d9f0ff",
        },
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
        order: ["card", "tag", "date"],
        CardTextProps: {
          subtitle: "Anthropic",
          description: "Senior Software Engineer - Full-time",
        },
        tags: [
          { text: "Full-time", backgroundColour: "#1a2a3a", textColour: "#63b3ed" },
          { text: "AI", backgroundColour: "#2a1a3a", textColour: "#b794f4" },
        ],
        DateTextProps: {
          startDate: "Jan 2023",
          endDate: "Present",
        },
      },
      {
        order: ["card", "tag", "date"],
        CardTextProps: {
          subtitle: "Google",
          description: "Software Engineer Intern - Internship",
        },
        tags: [{ text: "Internship", backgroundColour: "#1a2a3a", textColour: "#63b3ed" }],
        DateTextProps: {
          startDate: "Jun 2022",
          endDate: "Sep 2022",
        },
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
        order: ["card", "tag"],
        CardTextProps: {
          subtitle: "Frontend",
          description: "React, TypeScript, Tailwind CSS",
        },
        tags: [
          { text: "React", backgroundColour: "#1a2a3a", textColour: "#63b3ed" },
          { text: "TypeScript", backgroundColour: "#1a2a3a", textColour: "#63b3ed" },
          { text: "Tailwind CSS", backgroundColour: "#1a2a3a", textColour: "#63b3ed" },
        ],
      },
      {
        order: ["card", "tag"],
        CardTextProps: {
          subtitle: "Backend",
          description: "Node.js, Python, PostgreSQL",
        },
        tags: [
          { text: "Node.js", backgroundColour: "#1a3a2a", textColour: "#68d391" },
          { text: "Python", backgroundColour: "#1a3a2a", textColour: "#68d391" },
          { text: "PostgreSQL", backgroundColour: "#1a3a2a", textColour: "#68d391" },
        ],
      },
      {
        order: ["card", "tag"],
        CardTextProps: {
          subtitle: "Tools",
          description: "Git, Docker, AWS",
        },
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
        order: ["card", "tag", "date"],
        CardTextProps: {
          subtitle: "Portfolio Website",
          description: "Personal site built with React & TypeScript",
        },
        tags: [
          { text: "React", backgroundColour: "#0d2a3a", textColour: "#63b3ed" },
          { text: "TypeScript", backgroundColour: "#0d2a3a", textColour: "#63b3ed" },
        ],
        DateTextProps: {
          startDate: "Mar 2024",
          endDate: "Present",
        },
      },
      {
        order: ["card", "tag", "date"],
        CardTextProps: {
          subtitle: "Component Library",
          description: "Reusable UI components with Storybook",
        },
        tags: [
          { text: "Storybook", backgroundColour: "#2a1a2a", textColour: "#f687b3" },
          { text: "UI", backgroundColour: "#2a1a2a", textColour: "#f687b3" },
        ],
        DateTextProps: {
          startDate: "Jan 2024",
          endDate: "Feb 2024",
        },
      },
    ],
  },
};

export const MinimalWithDefaults = {
  args: {
    title: "Basic Card",
    items: [
      {
        order: ["card", "tag"],
        CardTextProps: {
          subtitle: "Default Item",
          description: "Shows default styling",
        },
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
