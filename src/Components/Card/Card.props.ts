import type { ItemProps } from "../Item/Item.props"

export interface CardProps {
  title: string;
  items?: ItemProps[];
  marginTop?: string;
  backgroundColour?: string;
  borderColour?: string;
  borderWidth?: number;
  titleColour?: string;
  textColour?: string;
  rounding?: number;
}