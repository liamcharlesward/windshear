import clsx from "clsx";
import type { ButtonProps } from "./Button.props";
import { Colors } from "../Colors";

export const Button = (props: ButtonProps) => {
  const size = {
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
  };

  // TODO: Add support for custom background colours
  const Icon = props.icon;
  const preset = props.preset || "primary";

  return (
    <button
      onClick={props.onClick}
      disabled={props.disabled}
      className={clsx(
        " border-2 transition-colors cursor-pointer disabled:border-transparent disabled:bg-slate-300 disabled:cursor-not-allowed",
        props.variant === "filled" &&
          `border-transparent text-white dark:text-black ${Colors[preset].bg} ${Colors[preset].hoverBgDarker}`,
        props.variant === "outlined" &&
          `enabled:hover:text-white enabled:dark:hover:text-black ${Colors[preset].border} ${Colors[preset].text} ${Colors[preset].hoverBgDarker}`,
        props.variant === "translucent" &&
          `enabled:hover:text-white enabled:dark:hover:text-black ${Colors[preset].border} ${Colors[preset].text} ${Colors[preset].bgTranslucent} ${Colors[preset].hoverBgDarker}`,
        props.size ? size[props.size] : "text-md p-2",
        props.rounding ? rounding[props.rounding] : "rounded-md",
        props.shadow && "drop-shadow-lg",
      )}
    >
      <div
        className={clsx("flex items-center gap-x-1", props.iconPosition == "right" ? "flex-row-reverse" : "flex-row")}
      >
        {Icon && <Icon />}
        {props.text}
      </div>
    </button>
  );
};
