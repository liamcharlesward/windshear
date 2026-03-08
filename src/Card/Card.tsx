import type { CardProps } from "./Card.props";
import { Item } from "../Item/Item";

export const Card = (props: CardProps) => {
  //import the variables from props
  const {
    sectionTitle,
    items = [],
    marginTop = "0px",
    backgroundColour,
    borderColour = "rgba(255, 255, 255, 0.03)",
    borderWidth = 1,
    titleColour = "inherit",
    textColour = "inherit",
  } = props;

  return (
    <section
      style={{
        background: backgroundColour ?? "var()",
        padding: "18px",
        borderRadius: "1px",
        border: `${borderWidth}px solid ${borderColour}`,
        marginBottom: "0px",
        marginTop: marginTop,
      }}
    >
      <h2
        style={{
          color: titleColour,
          marginBottom: "12px",
          fontSize: "1.1rem",
          fontWeight: 600,
        }}
      >
        {sectionTitle}
      </h2>
      
    
      {items.map((item, index) => (
          <div key={index} style={{ marginBottom: index < items.length - 1 ? "12px" : "0" }}>
          <Item {...item} textColour={textColour} />
        </div>
      ))}
    </section>
  );
};