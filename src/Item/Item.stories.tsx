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

export const WithTag = {
  args: {
    purpose: "List",
    title: "React",
    subtitle: "Frontend Framework",
    tag: "Advanced",
  },
};

export const TitleOnly = {
  args: {
    purpose: "List",
    title: "Docker",
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

export const TestOther = {
  args: {
    purpose: "Test",
    title: "Anthropic",
    subtitle: "Senior Software Engineer",
    description: "Full-time",
    startDate: "Jan 2023",
    endDate: "Present",
    textColour: "#63b3ed",
  },
};