import clsx from "clsx";

export interface ButtonProps {
  text?: string;
  preset?: "primary" | "secondary" | "tertiary" | "confirm" | "destructive";
  size?: "sm" | "md" | "lg";
  rounding?: "sm" | "md" | "lg" | "xl" | "full";
  shadow?: boolean;
  disabled?: boolean;
  customClassName?: string;
}

export const Button = (props: ButtonProps) => {
  const preset = {
    primary: "bg-blue-400 enabled:hover:bg-blue-500 text-white dark:text-black",
    secondary: "bg-violet-400 enabled:hover:bg-violet-500",
    tertiary: "border-sky-500 enabled:hover:bg-sky-500 border-2 text-sky-500 hover:text-white",
    confirm: "bg-green-300 enabled:hover:bg-green-400",
    destructive: "bg-red-300 enabled:hover:bg-red-400",
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
        "transition-colors cursor-pointer disabled:border-0 disabled:bg-slate-300 disabled:cursor-not-allowed",
        props.preset ? preset[props.preset] : "",
        props.size ? size[props.size] : "text-md p-2",
        props.rounding ? rounding[props.rounding] : "rounded-md",
        props.shadow && "drop-shadow-lg",
        props.customClassName,
      )}
    >
      {props.text}
    </button>
  );
};
