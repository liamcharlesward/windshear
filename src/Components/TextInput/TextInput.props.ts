import type { IconType } from "react-icons";
import type { Colour } from "../../Types/Colour";

interface BaseTextInputProps {
  type: "text" | "password";
  variant: "outlined" | "underlined";
  placeholder?: string,
  leadingIcon?: IconType;
};

type TextInputWithPresetAccent = {
  presetAccent: "primary" | "secondary" | "tertiary";
  customAccent?: never;
}

type TextInputWithCustomAccent = {
  presetAccent?: never;
  customAccent: Colour;
}

export type TextInputProps = BaseTextInputProps & (TextInputWithPresetAccent | TextInputWithCustomAccent);