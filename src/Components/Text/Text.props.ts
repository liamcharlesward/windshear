import type { Colour } from "../../Types/Colour";
import * as conversions from "../../Types/Conversions";
import type {Presets} from "./Text.data";

export interface TextProps{
  preset?: "none" | keyof typeof Presets;
  text?: string;
  textColour?: Colour;
  backgroundColour?: Colour,
  size?: keyof typeof conversions.textSize;
  boldness?: keyof typeof conversions.boldness;
}
