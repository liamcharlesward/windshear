import clsx from "clsx";
import type { CardProps, TextProps, DateProps } from "./Card.props";
import { Tag } from "../Tag/Tag";

export const Card = (props: CardProps) => {
  const items = props.items || [];
    const textSize = {
    sm: "text-sm p-1",
    md: "text-md p-2",
    lg: "text-xl p-3",
  };
  
  const rounding = {
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
    full: "rounded-full",
    none: "rounded-none",
  };
  const spacing = {
    none: "0",
    sm: "2",
    md: "6",
    lg: "12",
  };


  const renderText = (textProps: TextProps) => (
    <div
      style={{
        color: textProps.descriptionColour,
        backgroundColor: textProps.backgroundColour,
        borderColor: textProps.borderColour,
        borderWidth: textProps.borderColour ? "1px" : undefined,
        borderStyle: textProps.borderColour ? "solid" : undefined,
        boxShadow: textProps.shadow ? "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)" : undefined,
      }}
      className={clsx(
        props.rounding ? rounding[props.rounding] : "rounded-lg",
        textProps.size ? textSize[textProps.size] : "text-md"
      )}
    >
      {textProps.subtitle && (
        <div style={{ color: textProps.subtitleColour }}>
          {textProps.subtitle}
        </div>
      )}
      {textProps.description}
    </div>
  );

  const renderDate = (dateProps: DateProps) => (
    <div
      style={{
        color: dateProps.dateColour,
        backgroundColor: dateProps.backgroundColour,
        borderColor: dateProps.borderColour,
        borderWidth: dateProps.borderColour ? "1px" : undefined,
        borderStyle: dateProps.borderColour ? "solid" : undefined,
        boxShadow: dateProps.shadow ? "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)" : undefined,
      }}
      className={clsx(
        props.rounding ? rounding[props.rounding] : "rounded-lg",
        dateProps.size ? textSize[dateProps.size] : "text-md"
      )}
    >
      {dateProps.startDate && `Start: ${dateProps.startDate}`}
      {dateProps.endDate && ` End: ${dateProps.endDate}`}
    </div>
  );

  const renderItems = () => {
    return items.map((item, index) => (
      <div key={index} style={{ marginBottom: (index < items.length - 1) && props.spacing ?  `${spacing[props.spacing]}px` : "0px" }}>
        {(item.order ?? ["text", "date", "tag"]).map((piece, index2) => (
          <div key={index2}>
            {piece === "tag" && item.tags && item.tags.map((tag, tagIndex) => (
              <Tag key={tagIndex} {...tag} />
            ))}
            {piece === "text" && item.textProps && renderText(item.textProps)}
            {piece === "date" && item.dateProps && renderDate(item.dateProps)}
          </div>
        ))}
      </div>
    ));
  };

  return (
    <section
      style={{
        backgroundColor: props.backgroundColour,
        borderColor: props.borderColour,
        borderWidth: props.borderWidth ? `${props.borderWidth}px` : undefined,
      }}
      className={clsx(
        props.rounding ? rounding[props.rounding] : "rounded-lg",
        props.size ? textSize[props.size] : "text-md p-4"
      )}
    >
      <h2
        style={{
          color: props.titleColour,
        }}
        className="font-bold text-xl"
      >
        {props.title}
      </h2>

      {renderItems()}
    </section>
  );
};
