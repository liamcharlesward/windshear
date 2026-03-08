import type { TagProps } from "./Tag.props";
import clsx from "clsx";

export const Tag = (props: TagProps) => {
  const Icon = props.icon;
  const {text, shadow, textColour, backgroundColour} = props;

  return (
    <span
      className={clsx(
        "p-2 inline-flex items-center gap-x-1 rounded-lg bg-gray-500/80 text-white",
        shadow && "shadow-xl",
      )}  style={{ backgroundColor: backgroundColour ?? "", color: textColour ?? "" }}
    >
      {Icon && <Icon />}
      {text && <p>{text}</p>}
    </span>
  );
};
