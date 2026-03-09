import type { TagProps } from "./Tag.props";
import clsx from "clsx";

export const Tag = (props: TagProps) => {
  const size = {
    sm: "text-sm p-1",
    md: "text-md p-2",
    lg: "text-xl p-3",
  };

  return (
    <span
      className={clsx(
        "p-2 inline-flex items-center gap-x-1 rounded-lg text-white",
        !props.customBackgroundColour && "bg-gray-500/80",
        props.shadow && "shadow-xl",
        size[props.size || "md"],
      )}
      style={
        props.customBackgroundColour || props.customTextColour
          ? { backgroundColor: props.customBackgroundColour, color: props.customTextColour }
          : undefined
      }
    >
      {props.icon && <props.icon />}
      {props.text && <p>{props.text}</p>}
    </span>
  );
};
