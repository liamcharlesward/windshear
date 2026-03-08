import type { CardProps } from "./Card.props";
import { Item } from "../Item/Item";

export const Card = (props: CardProps) => {
  //import the variables from props
  const {
    sectionTitle,
    items,
    marginTop,
    backgroundColour,
    borderColour,
    titleColour,
    textColour,
  } = props;

 const itemsChecked = (items ?? []);// ensuring items is an array as it's length is used inside a map of itself

  return (
    <section
      style={{
        background: backgroundColour ?? "var()",
        padding: "18px",
        borderRadius: "10px",
        border: `1px solid ${borderColour ?? "rgba(255, 255, 255, 0.03)"}`,
        marginBottom: "16px",
        marginTop: marginTop ?? "0px",
      }}
    >
      <h2
        style={{
          color: titleColour ?? "inherit",
          marginBottom: "12px",
          fontSize: "1.1rem",
          fontWeight: 600,
        }}
      >
        {sectionTitle}
      </h2>
      
    
      {itemsChecked.map((item, index) => (
        <div key={index} style={{ marginBottom: index < itemsChecked.length - 1 ? "12px" : "0" }}>
          <Item {...item} textColour={textColour} />
        </div>
      ))}
    </section>
  );
};