import clsx from "clsx";
import type { ButtonProps } from "./Button.props";

export const Button = (props: ButtonProps) => {
  const filledPresets = {
    primary: " bg-blue-400 enabled:hover:bg-blue-500",
    secondary: "bg-violet-400 enabled:hover:bg-violet-500",
    tertiary: "bg-sky-400 enabled:hover:bg-sky-500 text-white",
    confirm: "bg-green-400 enabled:hover:bg-green-500 text-white",
    destructive: "bg-red-400 enabled:hover:bg-red-500 text-white",
  };

  const outlinedPresets = {
    primary: "border-blue-400 enabled:hover:bg-blue-400 text-blue-400",
    secondary: "border-violet-400 enabled:hover:bg-violet-400 text-violet-400",
    tertiary: "border-sky-400 enabled:hover:bg-sky-400 text-sky-400",
    confirm: "border-green-400 enabled:hover:bg-green-400 text-green-400",
    destructive: "border-red-400 enabled:hover:bg-red-400 text-red-400",
  };

  const translucentPresets = {
    primary: "border-blue-400 bg-blue-400/20 enabled:hover:bg-blue-400 text-blue-400",
    secondary: "border-violet-400 bg-violet-400/20 enabled:hover:bg-violet-400 text-violet-400",
    tertiary: "border-sky-400 bg-sky-400/20 enabled:hover:bg-sky-400 text-sky-400 ",
    confirm: "border-green-400 bg-green-400/20 enabled:hover:bg-green-400 text-green-400",
    destructive: "border-red-400 bg-red-400/20 enabled:hover:bg-red-400 text-red-400",
  };

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
  return (
    <button
      onClick={props.onClick}
      disabled={props.disabled}
      className={clsx(
        " border-2 transition-colors cursor-pointer disabled:border-transparent disabled:bg-slate-300 disabled:cursor-not-allowed",
        // TODO: Refactor
        (() => {
          if (!props.preset) return "";

          switch (props.variant) {
            case "filled":
              return `border-transparent text-white dark:text-black ${filledPresets[props.preset]}`;
            case "outlined":
              return `enabled:hover:text-white enabled:dark:hover:text-black ${outlinedPresets[props.preset]}`;
            case "translucent":
              return `enabled:hover:text-white enabled:dark:hover:text-black ${translucentPresets[props.preset]}`;
            default:
              // Default case not really neccessary but probably better to leave it here just in case
              return "";
          }
        })(),

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
