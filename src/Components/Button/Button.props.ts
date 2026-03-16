import type { IconType } from "react-icons";
import type { Colour } from "../../Types/Colour";
import type { GlobalRoundingPresets } from "../../Constants/GlobalPresets";

// TODO: Conditionalise props
interface BaseButtonProps {
  variant: "filled" | "outlined" | "translucent";
  onClick: () => void;
  link?: string;
  newTab?: boolean; 

  text?: string;
  size?: "sm" | "md" | "lg";
  rounding?: GlobalRoundingPresets;

  shadow?: boolean;
  disabled?: boolean;
}

type ButtonWithIcon = {
  icon: IconType,
  iconPosition?: "left" | "right",
}

type ButtonWithoutIcon = {
  icon?: undefined,
  iconPosition?: never,
}

type ButtonWithPreset = {
  preset: "primary" | "secondary" | "tertiary" | "confirmation" | "destructive";
  customColour?: never,
}

type ButtonWithCustomColour = {
  preset?: never,
  customColour?: Colour,
}

export type ButtonProps = BaseButtonProps & (ButtonWithIcon | ButtonWithoutIcon) & (ButtonWithPreset | ButtonWithCustomColour);