import type { IconType } from "react-icons"
import type { Colour } from "../../Types/Colour";

export interface TagProps {
  text?: string,
  icon?: IconType,
  shadow?: boolean,
  textColour?: Colour,
  backgroundColour?: Colour,
  size?: "sm" | "md" | "lg"
};
