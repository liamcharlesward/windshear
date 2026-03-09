import type { IconType } from "react-icons";
import type { HexColor } from "../../Types/HexColor";

// TODO: Conditionalise props
interface BaseButtonProps {
  variant: "filled" | "outlined" | "translucent";
  onClick: () => void;
  link?: string;
  newTab?: boolean; 

  text?: string;
  size?: "sm" | "md" | "lg";
  rounding?: "sm" | "md" | "lg" | "xl" | "full";

  shadow?: boolean;
  disabled?: boolean;
}

type ButtonWithIcon = {
  icon: IconType,
  iconPosition?: "left" | "right",
}

type ButtonWithoutIcon = {
  icon?: undefined,
  iconPosition: never,
}

type ButtonWithPreset = {
  preset: "primary" | "secondary" | "tertiary" | "confirm" | "destructive";
  customColour?: never,
}

type ButtonWithCustomColour = {
  preset?: never,
  customColour?: HexColor,
}

export type ButtonProps = BaseButtonProps & (ButtonWithIcon | ButtonWithoutIcon) & (ButtonWithPreset | ButtonWithCustomColour);