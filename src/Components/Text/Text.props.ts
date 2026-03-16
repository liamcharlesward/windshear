import type { GlobalTextSizePresets, GlobalTextWeightPresets } from "../../Constants/GlobalPresets";
import type { Colour } from "../../Types/Colour";
import type {Presets} from "./Text.data";

export interface TextProps{
  preset?: "none" | keyof typeof Presets;
  text?: string;
  textColour?: Colour;
  backgroundColour?: Colour,
  size?: keyof typeof GlobalTextSizePresets;
  boldness?: keyof typeof GlobalTextWeightPresets;
}
