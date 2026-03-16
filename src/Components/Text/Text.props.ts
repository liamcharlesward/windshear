import type { GlobalTextSizePresets, GlobalTextWeightPresets } from "../../Constants/GlobalPresets";
import type { Colour } from "../../Types/Colour";
import {Presets} from "./Text.data";

export interface TextProps{
  preset?: "none" | keyof typeof Presets;
  text?: string;
  textColour?: Colour;
  backgroundColour?: Colour,
  size?: GlobalTextSizePresets;
  boldness?: GlobalTextWeightPresets;
}
