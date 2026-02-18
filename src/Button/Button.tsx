import clsx from "clsx";

export interface ButtonProps {
  text?: string;
  preset?: "primary" | "secondary" | "tertiary" | "confirm" | "destructive";
  size?: "sm" | "md" | "lg";
  rounding?: "sm" | "md" | "lg" | "xl" | "full";
  variant: "filled" | "outlined" | "translucent";
  shadow?: boolean;
  disabled?: boolean;
}

export const Button = (props: ButtonProps) => {
  const filledPresets = {
    primary: "border-2 border-transparent bg-blue-400 enabled:hover:bg-blue-500 text-white dark:text-black",
    secondary: "border-2 border-transparent bg-violet-400 enabled:hover:bg-violet-500 text-white dark:text-black",
    tertiary: "border-2 border-transparent bg-sky-400 enabled:hover:bg-sky-500 text-white dark:text-black",
    confirm: "border-2 border-transparent bg-green-400 enabled:hover:bg-green-500 text-white dark:text-black",
    destructive: "border-2 border-transparent bg-red-400 enabled:hover:bg-red-500 text-white dark:text-black",
  };

  const outlinedPresets = {
    primary:
      "border-blue-400 border-2 enabled:hover:bg-blue-400 text-blue-400 enabled:hover:text-white enabled:dark:hover:text-black",
    secondary:
      "border-violet-400 border-2 enabled:hover:bg-violet-400 text-violet-400 enabled:hover:text-white enabled:dark:hover:text-black",
    tertiary:
      "border-sky-400 border-2 enabled:hover:bg-sky-400 text-sky-400 enabled:hover:text-white enabled:dark:hover:text-black",
    confirm:
      "border-green-400 border-2 enabled:hover:bg-green-400 text-green-400 enabled:hover:text-white enabled:dark:hover:text-black",
    destructive:
      "border-red-400 border-2 enabled:hover:bg-red-400 text-red-400 enabled:hover:text-white enabled:dark:hover:text-black",
  };

  const translucentPresets = {
    primary:
      "border-blue-400 border-2 bg-blue-400/20 enabled:hover:bg-blue-400 text-blue-400 enabled:hover:text-white enabled:dark:hover:text-black",
    secondary:
      "border-violet-400 border-2 bg-violet-400/20 enabled:hover:bg-violet-400 text-violet-400 enabled:hover:text-white enabled:dark:hover:text-black",
    tertiary:
      "border-sky-400 border-2 bg-sky-400/20 enabled:hover:bg-sky-400 text-sky-400 enabled:hover:text-white enabled:dark:hover:text-black",
    confirm:
      "border-green-400 border-2 bg-green-400/20 enabled:hover:bg-green-400 text-green-400 enabled:hover:text-white enabled:dark:hover:text-black",
    destructive:
      "border-red-400 border-2 bg-red-400/20 enabled:hover:bg-red-400 text-red-400 enabled:hover:text-white enabled:dark:hover:text-black",
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

  return (
    <button
      disabled={props.disabled}
      className={clsx(
        "transition-colors cursor-pointer disabled:border-transparent disabled:bg-slate-300 disabled:cursor-not-allowed",
        // HANDLE VARIANT AND COLOR (explicit mappings)
        (() => {
          if (!props.preset) return "";
          switch (props.variant) {
            case "filled":
              return filledPresets[props.preset] || "";
            case "outlined":
              return outlinedPresets[props.preset] || "";
            case "translucent":
              return translucentPresets[props.preset] || "";
            default:
              return "";
          }
        })(),
        props.size ? size[props.size] : "text-md p-2",
        props.rounding ? rounding[props.rounding] : "rounded-md",
        props.shadow && "drop-shadow-lg",
      )}
    >
      {props.text}
    </button>
  );
};
