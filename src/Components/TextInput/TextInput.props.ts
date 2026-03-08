import type { IconType } from "react-icons";

export interface TextInputProps {
  type: "text" | "password";
  variant: "outlined" | "underlined";
  accent?: "primary" | "secondary" | "tertiary";
  placeholder?: string,
  leadingIcon?: IconType;
};