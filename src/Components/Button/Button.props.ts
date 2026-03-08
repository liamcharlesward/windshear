import type { IconType } from "react-icons";

// TODO: Conditionalise props
interface BaseButtonProps {
  variant: "filled" | "outlined" | "translucent";
  onClick: () => void;
  link?: string;
  newTab?: boolean; 

  text?: string;
  preset?: "primary" | "secondary" | "tertiary" | "confirm" | "destructive";
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

export type ButtonProps = BaseButtonProps & (ButtonWithIcon | ButtonWithoutIcon);