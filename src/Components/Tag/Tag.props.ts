import type { IconType } from "react-icons"
import type { HexColor } from "../../Types/HexColor";

export interface TagProps {
  text?: string,
  icon?: IconType,
  shadow?: boolean,
  customTextColour?: HexColor,
  customBackgroundColour?: HexColor,
  size?: "sm" | "md" | "lg"
};
