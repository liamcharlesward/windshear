import type { GridProps } from "./Grid.props";
import { Card } from "../Card/Card";

//todo: add colour options for background, text, title, border etc. to be passed down from card and grid level. This will allow for more customisation and theming options.

export const Grid = (props: GridProps) => {
  const { cards, columns = 1, columnSizes, inBetweenSpace = 24, wallSpace = 12, backgroundColour } = props;

  const getGridTemplateColumns = () => {
    if (columnSizes && columnSizes.length > 0) {
      return columnSizes.map((size) => `${size}fr`).join(" ");
    }
    return `repeat(${columns}, 1fr)`;
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: getGridTemplateColumns(),
        gap: `${inBetweenSpace}px`,
        padding: `${wallSpace}px`,
        width: "100%",
        backgroundColor: backgroundColour,
      }}
    >
      {cards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
};