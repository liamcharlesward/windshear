export type GlobalColourPresets = keyof typeof GlobalColourPresets;
export type GlobalTextSizePresets = keyof typeof GlobalTextSizePresets;
export type GlobalTextWeightPresets = keyof typeof GlobalTextWeightPresets;
export type GlobalRoundingPresets = keyof typeof GlobalRoundingPresets;
export type GlobalSpacingPresets = keyof typeof GlobalSpacingPresets;

export const GlobalColourPresets = {
  primary: "#51a2ff",
  secondary: "#a684ff",
  tertiary: "#00bcff",
  neutral: "#a1a1a1"
}

export const GlobalTextSizePresets = {
  default: "text-base",
  sm: "text-sm",
  md: "text-md",
  lg: "text-lg",
  xl: "text-xl",
};

export const GlobalTextWeightPresets = {
  thin:       "font-thin",
  extralight: "font-extralight",
  light:      "font-light",
  normal:     "font-normal",
  medium:     "font-medium",
  semibold:   "font-semibold",
  bold:       "font-bold",
  extrabold:  "font-extrabold",
  black:      "font-black",
};

export const GlobalRoundingPresets = {
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  full: "rounded-full",
  none: "rounded-none",
};

export const GlobalSpacingPresets = {
  none: "0px",
  sm: "2px",
  md: "6px",
  lg: "12px",
};
