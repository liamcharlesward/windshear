import type { TagProps } from "../Tag/Tag.props";
import type { Colour } from "../../Types/HexColor";

export interface TextProps {
  subtitle?: string;
  subtitleColour?: Colour;
  description?: string;
  descriptionColour?: Colour;
  size?: "sm" | "md" | "lg"
  shadow?: boolean,
  backgroundColour?: Colour,
  borderColour?: Colour;
}

export interface DateProps {
  startDate?: string;
  endDate?: string;
  dateColour?: Colour;
  size?: "sm" | "md" | "lg"
  shadow?: boolean,
    backgroundColour?: Colour,
  borderColour?: Colour;
}
export interface ItemProps {
  order?: ("tag" | "text" | "date")[]
  tags?: TagProps[];
  textProps?: TextProps;
  dateProps?: DateProps;
}

export interface CardProps {
  title: string;
  titleColour?: Colour;
  size?: "sm" | "md" | "lg"

  borderWidth?: number;//thickness of border
  borderColour?: Colour;
  backgroundColour?: Colour;
  rounding?: "sm" | "md" | "lg" | "xl" | "full" | "none";// rounds corners
  marginTop?: string;

  items?: ItemProps[];
}