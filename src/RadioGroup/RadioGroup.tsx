import { useState } from "react";
import clsx from "clsx";
import type { RadioGroupProps } from "./RadioGroup.props";
import { Colors } from "../Colors";
import { IoMdCheckmark } from "react-icons/io";

export const RadioGroup = (props: RadioGroupProps) => {
  // TODO: Extract state
  const [selected, setSelected] = useState(0);

  const rowOptions = {
    1: "grid-cols-1",
    2: "grid-cols-2",
    3: "grid-cols-3",
    4: "grid-cols-4",
  };

  const radioOptions = props.options.map((option, index) => {
    const accent = Colors[props.accent || "primary"];

    return (
      <div
        className={clsx(
          "flex justify-between cursor-pointer p-2 rounded-md border-2 transition-colors group",
          accent.border.hover,
          accent.bgTranslucent.hover,
          accent.text.hover,
          selected === index
            ? [accent.border.base, accent.bgTranslucent.base, accent.text.base]
            : "border-gray-500 bg-gray-500/20 text-gray-500",
        )}
        key={index}
        onClick={() => setSelected(index)}
      >
        <p>{option}</p>
        <div
          className={clsx(
            `rounded-full bg-white aspect-square w-6 flex items-center justify-center border ${accent.border.groupHover}`,
            selected === index ? accent.border.base : "border-gray-500",
          )}
        >
          {selected === index && (
            <div
              className={clsx(
                "rounded-full w-4/5 aspect-square flex items-center justify-center",
                accent.bgDarker.base,
              )}
            >
              {props.tick && <IoMdCheckmark className="text-white" />}
            </div>
          )}
        </div>
      </div>
    );
  });

  return <div className={clsx(" grid gap-y-2 gap-x-2", rowOptions[props.maxPerRow])}>{radioOptions}</div>;
};
