import type { GridProps } from "./Grid.props";
import { Card } from "../Card/Card";

//todo: add colour options for background, text, title, border etc. to be passed down from card and grid level. This will allow for more customisation and theming options.

export const Grid = (props: GridProps) => {
  const { cards, columns = 1, gap = "24px" } = props;

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap: gap,
        width: "100%",
      }}
    >
      {cards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
};