import type { IconType } from "react-icons";
import type { Colour } from "../../Types/Colour";

type RadioOptionprops = {
  option: string,
  leadingIcon?: IconType,
}

interface BaseRadioGroupProps {
  options: RadioOptionprops[],
  maxPerRow?: number,
  tick?: boolean,
  variant: "minimal" | "rich",
};

type RadioGroupWithPresetAccent = {
  presetAccent: "primary" | "secondary" | "tertiary";
  customAccent?: never,
}

type RadioGroupWithCustomAccent = {
  presetAccent?: never;
  customAccent: Colour;
}

export type RadioGroupProps = BaseRadioGroupProps & (RadioGroupWithPresetAccent | RadioGroupWithCustomAccent);