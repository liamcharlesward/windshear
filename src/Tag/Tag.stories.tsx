import { Tag } from "./Tag";
import { SiTypescript } from "react-icons/si";

export default {
  component: Tag,
};

export const TextAndIcon = {
  args: {
    text: "Typescript",
    icon: SiTypescript,
  },
};

export const TextOnly = {
  args: {
    text: "Typescript",
  },
};

export const IconOnly = {
  args: {
    icon: SiTypescript,
  },
};
export const Colour1 = {
  args: {
    text: "Typescript",
    textColour: "Red",
    backgroundColour: "Grey",
  },
};

export const Colour2 = {
  args: {
    text: "Typescript",
    textColour: "White",
    backgroundColour: "Blue",
  },
};
