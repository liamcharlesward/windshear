import type { TagProps } from "./Tag.props";

export const Tag = (props: TagProps) => {
  const Icon = props.icon;

  return (
    <span className="p-2 inline-flex items-center gap-x-1 rounded-lg bg-gray-500/90 text-white shadow-xl">
      {Icon && <Icon />}
      <p>{props.text}</p>
    </span>
  );
};
