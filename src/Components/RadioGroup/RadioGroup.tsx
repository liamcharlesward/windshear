import { useState, useMemo } from "react";
import clsx from "clsx";
import { transparentize } from "colorizr";
import { IoMdCheckmark } from "react-icons/io";
import { GlobalColourPresets } from "../../Constants/GlobalPresets";
import type { RadioGroupProps } from "./RadioGroup.props";
import type { Colour } from "../../Types/Colour";

// Helper to calculate column widths safely based on maxPerRow
const calculateItemWidth = (maxPerRow: number | undefined, totalOptions: number) => {
  const columns = maxPerRow ? Math.min(maxPerRow, totalOptions) : totalOptions;
  return `calc((100% - ${(columns - 1) * 0.5}rem) / ${columns})`;
};

// Map accent colours to CSS variables
const getAccentStyle = (customAccent?: Colour, presetAccent?: keyof typeof GlobalColourPresets) => {
  const colour = customAccent || (presetAccent ? GlobalColourPresets[presetAccent] as Colour : undefined);
  if (!colour) return {};

  return {
    "--colour": colour,
    "--colour-translucent": transparentize(colour, 0.8),
  } as React.CSSProperties;
};

export const RadioGroup = (props: RadioGroupProps) => {
  const [selected, setSelected] = useState(0);

  // Memoize styles to avoid recalculating on every re-render/map iteration
  const containerStyle = useMemo(
    () => getAccentStyle(props.customAccent, props.presetAccent),
    [props.customAccent, props.presetAccent]
  );

  const itemWidth = useMemo(
    () => calculateItemWidth(props.maxPerRow, props.options.length),
    [props.maxPerRow, props.options.length]
  );

  return (
    <div className="flex flex-wrap gap-2" style={containerStyle}>
      {props.options.map((option, index) => {
        const isSelected = selected === index;
        const LeadingIcon = option.leadingIcon;
        const isRich = props.variant === "rich";

        return (
          <div
            key={index}
            onClick={() => setSelected(index)}
            style={{ width: itemWidth }}
            className={clsx(
              "flex justify-between items-center cursor-pointer p-2 rounded-md transition-colors group",
              isRich && [
                "border-2 hover:border-(--colour) hover:bg-(--colour-translucent) hover:text-(--colour)",
                isSelected
                  ? "border-(--colour) bg-(--colour-translucent) text-(--colour)"
                  : "border-neutral-400 bg-neutral-500/20 text-neutral-500",
              ],
              !isRich && [
                "hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:text-(--colour)",
                isSelected ? "text-(--colour) font-medium" : "text-neutral-500",
              ]
            )}
          >
            <div className="flex flex-row items-center gap-x-1">
              {LeadingIcon && <LeadingIcon className="text-xl" />}
              <p>{option.option}</p>
            </div>

            <div
              className={clsx(
                "rounded-full aspect-square flex items-center justify-center border transition-colors group-hover:border-[var(--colour)]",
                isRich ? "bg-white w-6" : "w-5",
                isSelected ? "border-[var(--colour)]" : "border-neutral-400"
              )}
            >
              <div
                className={clsx(
                  "rounded-full aspect-square flex items-center justify-center transition-opacity bg-[var(--colour)]",
                  isRich ? "w-4/5" : "w-3/5",
                  isSelected ? "opacity-100" : "opacity-0"
                )}
              >
                {props.tick && isRich && <IoMdCheckmark className="text-white" />}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
