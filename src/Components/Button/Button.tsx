import clsx from "clsx";
import type { ButtonProps } from "./Button.props";
import { transparentize, darken } from "colorizr";
import type { Colour } from "../../Types/Colour";
import { GlobalColourPresets } from "../../Constants/GlobalPresets";

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

  const baseClasses =
    "border-2 transition-colors duration-200 cursor-pointer disabled:border-transparent disabled:bg-slate-300 disabled:cursor-not-allowed";

  const variantClasses = {
    filled: "border-transparent text-white dark:text-black bg-[var(--colour-bg)] hover:bg-[var(--colour-hover)]",
    outlined:
      "border enabled:hover:text-white enabled:dark:hover:text-black border-[var(--colour-bg)] hover:bg-[var(--colour-bg)] text-[var(--colour-bg)]",
    translucent:
      "enabled:hover:text-white enabled:dark:hover:text-black bg-[var(--colour-translucent)] border-[var(--colour-bg)] hover:bg-[var(--colour-bg)] text-[var(--colour-bg)]",
  };

  const ButtonSpecificColourPresets = {
    confirmation: "#05df72",
    destructive: "#ff6467",
  };

  const ButtonColourPresets = {
    ...GlobalColourPresets,
    ...ButtonSpecificColourPresets,
  };

  const handleClick = () => {
    if (props.link) {
      return props.newTab
        ? window.open(props.link, "_blank", "noopener,noreferrer")
        : (window.location.href = props.link);
    }
    return props.onClick;
  };

  const computedColourStyles = (colour: Colour): React.CSSProperties => {
    return {
      "--colour-bg": colour,
      "--colour-hover": darken(colour, 7),
      "--colour-translucent": transparentize(colour, 0.8),
    } as React.CSSProperties;
  };

  return (
    <button
      onClick={handleClick}
      disabled={props.disabled}
      className={clsx(
        baseClasses,
        variantClasses[props.variant],
        props.size ? size[props.size] : "text-md p-2",
        props.rounding ? rounding[props.rounding] : "rounded-lg",
        props.shadow && "drop-shadow-lg",
      )}
      // style for custom background colour
      style={
        props.customColour
          ? computedColourStyles(props.customColour)
          : props.preset
            ? computedColourStyles(ButtonColourPresets[props.preset] as Colour)
            : undefined
      }
    >
      <div
        className={clsx("flex items-center gap-x-1", props.iconPosition === "right" ? "flex-row-reverse" : "flex-row")}
      >
        {props.icon && <props.icon />}
        {props.text}
      </div>
    </button>
  );
};
