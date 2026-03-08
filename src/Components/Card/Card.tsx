import type { CardProps } from "./Card.props";
import { Item } from "../Item/Item";

export const Card = (props: CardProps) => {
  const items = props.items || [];

  return (
    <section
      style={{
        background: props.backgroundColour ?? "var()",
        border: `${props.borderColour}`,
      }}
      className="border rounded-lg mb-4 p-4"
    >
      <h2
        style={{
          color: props.titleColour,
        }}
        className="font-bold text-xl mb-3"
      >
        {props.title}
      </h2>

      {items.map((item, index) => (
        <div key={index} style={{ marginBottom: index < items.length - 1 ? "12px" : "0" }}>
          <Item {...item} textColour={props.textColour} />
        </div>
      ))}
    </section>
  );
};
