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
