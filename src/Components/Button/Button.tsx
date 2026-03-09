import clsx from "clsx";
import type { ButtonProps } from "./Button.props";
import { Colors } from "../../Colors";
import { transparentize, darken } from "colorizr";
import type { HexColor } from "../../Types/HexColor";

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

  const preset = Colors[props.preset || "primary"];

  const baseClasses =
    "border-2 transition-colors duration-200 cursor-pointer disabled:border-transparent disabled:bg-slate-300 disabled:cursor-not-allowed";

  const variantClasses = {
    filled: "border-transparent text-white dark:text-black bg-[var(--btn-color)] hover:bg-[var(--btn-hover)]",
    outlined:
      "border enabled:hover:text-white enabled:dark:hover:text-black border-[var(--btn-color)] hover:bg-[var(--btn-color)] text-[var(--btn-color)]",
    translucent:
      "enabled:hover:text-white enabled:dark:hover:text-black bg-[var(--btn-translucent)] border-[var(--btn-color)] hover:bg-[var(--btn-color)] text-[var(--btn-color)]",
  };

  const presetVariantClassses = {
    filled: `${preset.bg.base} ${preset.bgDarker.hover}`,
    outlined: `${preset.border.base} ${preset.text.base} ${preset.bgDarker.hover}`,
    translucent: `${preset.border.base} ${preset.text.base} ${preset.bgTranslucent.base} ${preset.bgDarker.hover}`,
  };

  const handleClick = () => {
    if (props.link) {
      return props.newTab
        ? window.open(props.link, "_blank", "noopener,noreferrer")
        : (window.location.href = props.link);
    }
    return props.onClick;
  };

  const computedCustomColourStyles = (colour: HexColor): React.CSSProperties => {
    return {
      "--btn-color": colour,
      "--btn-hover": darken(colour, 10),
      "--btn-translucent": transparentize(colour, 0.8),
    } as React.CSSProperties;
  };

  return (
    <button
      onClick={handleClick}
      disabled={props.disabled}
      className={clsx(
        baseClasses,
        variantClasses[props.variant],
        props.preset && presetVariantClassses[props.variant],
        props.size ? size[props.size] : "text-md p-2",
        props.rounding ? rounding[props.rounding] : "rounded-lg",
        props.shadow && "drop-shadow-lg",
      )}
      // style for custom background colour
      style={props.customColour ? computedCustomColourStyles(props.customColour) : undefined}
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
