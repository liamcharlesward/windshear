import type { Colour } from "../../Types/Colour";
import type { ItemProps } from "../Item/Item.props"

export interface CardProps {
  title: string;
  items?: ItemProps[];
  marginTop?: string;
  backgroundColour?: Colour;
  borderColour?: Colour;
  borderWidth?: number;
  titleColour?: Colour;
  textColour?: Colour;
  rounding?: number;
}