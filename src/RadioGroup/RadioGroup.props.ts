import type { IconType } from "react-icons";

export interface RadioGroupProps {
  options: RadioGroupOptions[],
  maxPerRow: 1 | 2 | 3 | 4,
  accent?: "primary" | "secondary" | "tertiary";
  tick?: boolean
};

export interface RadioGroupOptions {
  option: string,
  leadingIcon?: IconType,
}