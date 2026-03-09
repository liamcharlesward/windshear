import type { IconType } from "react-icons"
import type { Colour } from "../../Types/HexColor";

export interface TagProps {
  text?: string,
  icon?: IconType,
  shadow?: boolean,
  textColour?: Colour,
  backgroundColour?: Colour,
  size?: "sm" | "md" | "lg"
};
