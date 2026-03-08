import type { ItemProps } from "./Item.props";
import { Tag } from "../Tag/Tag";

//todo: add colour options for background, text, title, border etc. to be passed down from card and grid level. This will allow for more customisation and theming options. Allow items to have colours set and specified in its todo.

export const Item = (props: ItemProps) => {
  const {
    purpose,
    title,
    subtitle,
    description,
    startDate,
    endDate,
    tags = [],
    textColour = "inherit",
    backgroundColour,
    borderColour,
    titleColour,
    subtitleColour,
    descriptionColour,
    dateColour,
  } = props;

  if (purpose == "List") {
    return (
      <div style={{
        color: textColour,
        margin: 0,
        backgroundColor: backgroundColour,
        border: borderColour ? `1px solid ${borderColour}` : undefined,
        borderRadius: borderColour ? "4px" : undefined,
        padding: backgroundColour ? "8px" : undefined,
      }}>
        <a style={{ margin: 0}}>
          {title && <strong style={{ color: titleColour ?? textColour }}>{title}</strong>}
          {title && <br />}
          {subtitle && (
            <>
              <span style={{ color: subtitleColour ?? textColour }}>{subtitle}</span>
              {description && (
                <> — <em style={{ color: descriptionColour ?? textColour }}>{description}</em></>
              )}
              <br />
            </>
          )}
          {!subtitle && description && (
            <>
              <em style={{ color: descriptionColour ?? textColour }}>{description}</em>
              <br />
            </>
          )}
          <ul className="flex flex-row gap-x-2">
            {tags.map((item, index) => (
              <li key={index}>
                <Tag {...item} textColour={item.textColour ?? textColour} />
              </li>
            ))}
          </ul>
          {(startDate || endDate) && (
            <span style={{ color: dateColour ?? textColour }}>{startDate} - {endDate}</span>
          )}
        </a>
      </div>
    )
  }
  else if (purpose == "Test") {
    return (
      <p style={{
        color: textColour,
        margin: 0,
        backgroundColor: backgroundColour,
        border: borderColour ? `1px solid ${borderColour}` : undefined,
      }}>{description}</p>
    )
  };
};