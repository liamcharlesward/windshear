import type { ItemProps } from "./Item.props";
import { Tag } from "../Tag/Tag";

export const Item = (props: ItemProps) => {
  const { purpose, title, subtitle, description, startDate, endDate, tags, textColour } = props;
  const tagsChecked = (tags ?? []); // ensuring tags is an array as it's length is used inside a map of itself
  
  if (purpose == "List"){ return (
    <p style={{ color: textColour ?? "inherit", margin: 0, lineHeight: 1.6 }}>
      <strong>{title}</strong>
      <br/>
      {subtitle && (
        <>
          {description
            ? <>{subtitle} — <em>{description}</em></>
            : subtitle}
          <br/>
        </>
      )}
        <ul className="flex flex-row gap-x-2">
          {tagsChecked.map((item, index) => (
            <li key={index}>
              <Tag {...item} textColour={item.textColour ?? textColour} />
            </li>
          ))}
        </ul>
      {(startDate || endDate) && (
        <>{startDate} - {endDate}</>
      )}
    </p>
  )}
  else if (purpose == "Test"){
    
  };
};