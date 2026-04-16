import type { IconType } from "react-icons";
import type { Colour } from "../../Types/Colour";
import type { GlobalRoundingPresets } from "../../Constants/GlobalPresets";

// TODO: Refactor constants for consistency
export const BUTTON_VARIANTS = ["filled", "outlined", "translucent"] as const;
export const BUTTON_SIZES = ["sm", "md", "lg"] as const;
export const BUTTON_PRESETS = ["primary", "secondary", "tertiary", "confirmation", "destructive"] as const;

type ButtonVariants = typeof BUTTON_VARIANTS[number];
type ButtonSizes = typeof BUTTON_SIZES[number];
type ButtonPresets = typeof BUTTON_PRESETS[number];

interface BaseButtonProps {
  variant: ButtonVariants;
  onClick: () => void;
  link?: string;
  newTab?: boolean;

  text?: string;
  size?: ButtonSizes;
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
  preset: ButtonPresets;
  customColour?: never,
}

type ButtonWithCustomColour = {
  preset?: never,
  customColour?: Colour,
}

export type ButtonProps = BaseButtonProps & (ButtonWithIcon | ButtonWithoutIcon) & (ButtonWithPreset | ButtonWithCustomColour);