import { useState } from "react";
import clsx from "clsx";
import { transparentize } from "colorizr";
import { IoMdCheckmark } from "react-icons/io";
import { GlobalColourPresets } from "../../Constants/GlobalPresets";
import type { RadioGroupProps } from "./RadioGroup.props";
import type { Colour } from "../../Types/Colour";

export const RadioGroup = (props: RadioGroupProps) => {
  // TODO: Extract state
  const [selected, setSelected] = useState(0);

  const rowOptions = {
    1: "grid-cols-1",
    2: "grid-cols-2",
    3: "grid-cols-3",
    4: "grid-cols-4",
  };

  const computedColourStyles = (colour: Colour): React.CSSProperties => {
    return {
      "--colour": colour,
      "--colour-translucent": transparentize(colour, 0.8),
    } as React.CSSProperties;
  };

  const radioOptions = props.options.map((option, index) => {
    const LeadingIcon = option.leadingIcon;
    return (
      <div
        className={clsx(
          "flex justify-between cursor-pointer p-2 rounded-md border-2 transition-colors group hover:border-(--colour) hover:bg-(--colour-translucent) hover:text-(--colour)",
          selected === index
            ? "border-(--colour) bg-(--colour-translucent) text-(--colour)"
            : "border-neutral-500 bg-neutral-500/20 text-neutral-500",
        )}
        key={index}
        onClick={() => setSelected(index)}
        style={
          props.customAccent
            ? computedColourStyles(props.customAccent)
            : props.presetAccent
              ? computedColourStyles(GlobalColourPresets[props.presetAccent] as Colour)
              : undefined
        }
      >
        <div className="flex flex-row items-center gap-x-1">
          {LeadingIcon && <LeadingIcon className="text-xl" />}
          <p>{option.option}</p>
        </div>
        <div
          className={clsx(
            "rounded-full bg-white aspect-square w-6 flex items-center justify-center border group-hover:border-(--colour)",
            selected === index ? "border:[var(--colour)]" : "border-neutral-500",
          )}
        >
          <div
            className={clsx(
              "rounded-full w-4/5 aspect-square flex items-center justify-center transition-opacity bg-(--colour) group-hover:bg-(--colour)",
              selected === index ? "opacity-100" : "opacity-0",
            )}
          >
            {props.tick && <IoMdCheckmark className="text-white" />}
          </div>
        </div>
      </div>
    );
  });

  return <div className={clsx(" grid gap-y-2 gap-x-2", rowOptions[props.maxPerRow])}>{radioOptions}</div>;
};
