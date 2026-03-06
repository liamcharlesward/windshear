import type { TagProps } from "./Tag.props";
import clsx from "clsx";

export const Tag = (props: TagProps) => {
  const Icon = props.icon;

  return (
    <span
      className={clsx(
        "p-2 inline-flex items-center gap-x-1 rounded-lg bg-gray-500/80 text-white",
        props.shadow && "shadow-xl",
      )}
    >
      {Icon && <Icon />}
      {props.text && <p>{props.text}</p>}
    </span>
  );
};
