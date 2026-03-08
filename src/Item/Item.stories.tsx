import { Item } from "./Item";

export default {
  component: Item,
};

export const WithTwoTags = {
  args: {

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
};

export const WithOneTag = {
  args: {
    purpose: "List",
    title: "Google",
    subtitle: "Software Engineer Intern",
    description: "Internship",
    startDate: "Jun 2022",
    endDate: "Sep 2022",
    tags: [
      { text: "Internship", backgroundColour: "#1a2a3a", textColour: "#63b3ed" },
    ],
  },
};

export const WithDateRange = {
  args: {
    purpose: "List",
    title: "University of Manchester",
    subtitle: "BSc Computer Science",
    description: "First Class Honours",
    startDate: "2019",
    endDate: "2022",
    tag: "test",
    textColour: "black"
  },
};

export const TitleOnly = {
  args:{
    purpose:"List",
    title:"Docker",
    description:"test",
    subtitle:""
  },
};

export const CustomColour = {
  args: {
    purpose: "List",
    title: "Anthropic",
    subtitle: "Senior Software Engineer",
    description: "Full-time",
    startDate: "Jan 2023",
    endDate: "Present",
    textColour: "#63b3ed",
  },
};

export const IndividualElementColors = {
  args:{
    purpose:"List",
    title:"React Developer",
    subtitle:"Frontend Specialist",
    description:"Building modern web applications",
    startDate:"2022",
    endDate:"Present",
    titleColour:"#61dafb",
    subtitleColour:"#21a3c4",
    descriptionColour:"#0d7ea0",
    dateColour:"#0a5a7a",
    tags:[
      { text: "React", backgroundColour: "#282c34", textColour: "#61dafb" },
      { text: "TypeScript", backgroundColour: "#3178c6", textColour: "white" },
    ],
  },
};

export const WithBackgroundAndBorder = {
  args: {
    purpose: "List",
    title: "Full Stack Developer",
    subtitle: "Tech Company",
    description: "Leading development team",
    startDate: "Jan 2023",
    endDate: "Present",
    backgroundColour: "rgba(59, 130, 246, 0.1)",
    borderColour: "#3b82f6",
    textColour: "#1e40af",
    tags: [
      { text: "Leadership", backgroundColour: "#1e40af", textColour: "white" },
      { text: "Full Stack", backgroundColour: "#059669", textColour: "white" },
    ],
  },
};

export const MinimalWithDefaults = {
  args: {
    purpose: "List",
    title: "Simple Item",
    tags: [{ text: "Default" }],
  },
};

export const DescriptionOnly = {
  args: {
    purpose: "List",
    title: "Project Status",
    description: "Currently in development phase with expected completion in Q2",
    tags: [
      { text: "In Progress", backgroundColour: "#fbbf24", textColour: "#92400e" },
      { text: "Q2", backgroundColour: "#10b981", textColour: "white" },
    ],
  },
};