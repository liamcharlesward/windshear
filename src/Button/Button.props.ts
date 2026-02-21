import type { IconType } from "react-icons";

// TODO: Conditionalise props
export interface ButtonProps {
  variant: "filled" | "outlined" | "translucent";
  onClick: () => void;

  text?: string;
  preset?: "primary" | "secondary" | "tertiary" | "confirm" | "destructive";
  size?: "sm" | "md" | "lg";
  rounding?: "sm" | "md" | "lg" | "xl" | "full";

  icon?: IconType;
  iconPosition?: "left" | "right";

  shadow?: boolean;
  disabled?: boolean;
}