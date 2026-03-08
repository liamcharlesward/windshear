import type { CardProps } from "../Card/Card.props";

export interface GridProps {
  cards: CardProps[];
  columns?: number;
  gap?: string;
}
