import type { CardProps } from "../../Card/Card.props";

export interface GridProps {
  cards: CardProps[];
  columns?: number;
  columnSizes?: number[];
  inBetweenSpace?: number;
  wallSpace?: number;
  backgroundColour?: string;
}
