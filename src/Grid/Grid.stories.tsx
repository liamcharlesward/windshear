import { Grid } from "./Grid";
import type { CardProps } from "../Card/Card.props";
import type { ItemProps } from "../Item/Item.props";
import type { TagProps } from "../Tag/Tag.props";

export default {
  component: Grid,
};

// Example Tag data
const techTags: TagProps[] = [
  { text: "React", shadow: true },
  { text: "TypeScript", shadow: true },
  { text: "Tailwind", shadow: true },
];

const skillTags: TagProps[] = [
  { text: "Leadership", shadow: false },
  { text: "Problem Solving", shadow: false },
  { text: "Communication", shadow: false },
];

// Example Item data
const projectItems: ItemProps[] = [
  {
    purpose: "List",
    title: "Windshear Component Library",
    subtitle: "Lead Developer",
    description: "Built a reusable component system for web applications",
    startDate: "Jan 2024",
    endDate: "Present",
    tags: techTags,
  },
  {
    purpose: "List",
    title: "E-Commerce Platform",
    subtitle: "Full Stack Developer",
    description: "Developed scalable marketplace solution",
    startDate: "Jun 2023",
    endDate: "Dec 2023",
    tags: [
      { text: "Next.js", shadow: true },
      { text: "PostgreSQL", shadow: true },
      { text: "Stripe", shadow: true },
    ],
  },
];

const educationItems: ItemProps[] = [
  {
    purpose: "List",
    title: "Bachelor of Science in Computer Science",
    subtitle: "University of Technology",
    description: "GPA: 3.8/4.0",
    startDate: "2018",
    endDate: "2022",
    tags: [
      { text: "Honors", shadow: false },
      { text: "Dean's List", shadow: false },
    ],
  },
  {
    purpose: "List",
    title: "Cloud Certifications",
    subtitle: "AWS & Azure",
    description: "Professional level cloud infrastructure certifications",
    startDate: "2023",
    endDate: "2024",
    tags: [
      { text: "AWS Solutions Architect", shadow: false },
      { text: "Azure Administrator", shadow: false },
    ],
  },
];

const skillItems: ItemProps[] = [
  {
    purpose: "List",
    title: "Technical Skills",
    subtitle: "Frontend & Backend Development",
    tags: [
      { text: "React", shadow: true },
      { text: "TypeScript", shadow: true },
      { text: "Node.js", shadow: true },
      { text: "PostgreSQL", shadow: true },
    ],
  },
  {
    purpose: "List",
    title: "Soft Skills",
    subtitle: "Team & Project Management",
    tags: skillTags,
  },
];

// Example Card data
const projectCard: CardProps = {
  title: "Projects",
  items: projectItems,
  backgroundColour: "rgba(59, 130, 246, 0.1)",
  borderColour: "rgba(59, 130, 246, 0.3)",
  titleColour: "#3b82f6",
};

const educationCard: CardProps = {
  title: "Education",
  items: educationItems,
  backgroundColour: "rgba(34, 197, 94, 0.1)",
  borderColour: "rgba(34, 197, 94, 0.3)",
  titleColour: "#22c55e",
};

const skillsCard: CardProps = {
  title: "Skills & Expertise",
  items: skillItems,
  backgroundColour: "rgba(168, 85, 247, 0.1)",
  borderColour: "rgba(168, 85, 247, 0.3)",
  titleColour: "#a855f7",
};

const experienceCard: CardProps = {
  title: "Work Experience",
  items: [
    {
      purpose: "List",
      title: "Senior Developer",
      subtitle: "Tech Company Inc.",
      description: "Led team of 5 developers on major platform redesign",
      startDate: "Jan 2023",
      endDate: "Present",
      tags: [],
    },
    {
      purpose: "List",
      title: "Full Stack Developer",
      subtitle: "Startup Co.",
      description: "Developed MVP from scratch using modern tech stack",
      startDate: "Jun 2022",
      endDate: "Dec 2022",
      tags: [
        { text: "Agile", shadow: false },
        { text: "Product Focus", shadow: false },
      ],
    },
  ],
  backgroundColour: "rgba(239, 68, 68, 0.1)",
  borderColour: "rgba(239, 68, 68, 0.3)",
  titleColour: "#ef4444",
};

/**
 * Single Column Layout
 * Basic grid showing one card per row
 */
export const SingleColumn = {
  args: {
    cards: [projectCard],
    columns: 1,
    gap: "24px",
  },
};

/**
 * Two Column Layout
 * Grid with multiple cards displayed in 2 columns
 */
export const TwoColumns = {
  args: {
    cards: [projectCard, educationCard, skillsCard, experienceCard],
    columns: 2,
    gap: "24px",
  },
};

/**
 * Three Column Layout
 * Grid with multiple cards displayed in 3 columns
 */
export const ThreeColumns = {
  args: {
    cards: [projectCard, educationCard, skillsCard, experienceCard],
    columns: 3,
    gap: "16px",
  },
};

/**
 * Responsive Grid with Custom Gap
 * Demonstrates how to use custom gap between cards
 */
export const CustomGap = {
  args: {
    cards: [projectCard, educationCard],
    columns: 2,
    gap: "32px",
  },
};

/**
 * Full Resume Layout
 * Complete example with all card types demonstrating proper nesting:
 * Grid > Card > Item > Tag
 */
export const FullResumeLayout = {
  args: {
    cards: [projectCard, educationCard, skillsCard, experienceCard],
    columns: 2,
    gap: "24px",
  },
};

/**
 * Single Card Example
 * Shows the nesting hierarchy clearly:
 * Grid contains 1 Card
 * Card contains multiple Items
 * Each Item contains multiple Tags
 */
export const SingleCardNesting = {
  args: {
    cards: [
      {
        sectionTitle: "Development Skills",
        items: [
          {
            purpose: "List",
            title: "Frontend",
            tags: [
              { text: "React", shadow: true },
              { text: "TypeScript", shadow: true },
              { text: "Tailwind CSS", shadow: true },
            ],
          },
          {
            purpose: "List",
            title: "Backend",
            tags: [
              { text: "Node.js", shadow: true },
              { text: "Express", shadow: true },
              { text: "PostgreSQL", shadow: true },
            ],
          },
          {
            purpose: "List",
            title: "DevOps",
            tags: [
              { text: "Docker", shadow: true },
              { text: "Kubernetes", shadow: true },
              { text: "CI/CD", shadow: true },
            ],
          },
        ],
        backgroundColour: "rgba(99, 102, 241, 0.1)",
        borderColour: "rgba(99, 102, 241, 0.3)",
        titleColour: "#6366f1",
      },
    ],
    columns: 1,
    gap: "24px",
  },
};
