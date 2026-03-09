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
  name: "Custom Background and Text Colours",
  args: {
    text: "Typescript",
    textColour: "#736B92",
    backgroundColour: "#e5beed",
  },
};

export const Colour2 = {
  name: "Custom Text Colour (Default Background)",
  args: {
    text: "Typescript",
    textColour: "#232323",
  },
};
