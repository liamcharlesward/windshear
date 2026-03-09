import type { IconType } from "react-icons";
import type { Colour } from "../../Types/Colour";

interface BaseRadioGroupProps {
  options: RadioOptionprops[],
  maxPerRow: 1 | 2 | 3 | 4,
  tick?: boolean
};

type RadioOptionprops = {
  option: string,
  leadingIcon?: IconType,
}

type RadioGroupWithPresetAccent = {
  presetAccent: "primary" | "secondary" | "tertiary";
  customAccent?: never,
}

type RadioGroupWithCustomAccent = {
  presetAccent?: never;
  customAccent: Colour;
}

export type RadioGroupProps = BaseRadioGroupProps & (RadioGroupWithPresetAccent | RadioGroupWithCustomAccent);