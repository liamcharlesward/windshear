import type { TextInputProps } from "./TextInput.props";
import { useState } from "react";
import clsx from "clsx";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Colors } from "../Colors";

export const TextInput = (props: TextInputProps) => {
  const [type, setType] = useState(props.type);
  const LeadingIcon = props.leadingIcon;

  const variantStyles = {
    outlined: "border-neutral-400 rounded-md border-2 ",
    underlined: "border-b-2 border-neutral-400 rounded-tl-sm rounded-tr-sm",
  };

  const handleToggle = () => {
    if (type == "password") {
      setType("text");
    } else {
      setType("password");
    }
  };

  const accent = Colors[props.accent || "primary"];

  return (
    <div className="w-auto">
      <div
        className={clsx(
          "transition-colors cursor-text p-2 bg-neutral-400/20 placeholder-neutral-400 items-center gap-x-2 inline-flex",
          variantStyles[props.variant],
          [accent.border.hover, accent.border.focusWithin],
        )}
      >
        {LeadingIcon && (
          <div className="text-neutral-400">
            <LeadingIcon />
          </div>
        )}
        <input placeholder={props.placeholder} type={type} className="w-full focus:outline-none" />
        {props.type == "password" && (
          <button
            onClick={handleToggle}
            className="text-neutral-400 text-xl hover:text-gray-600 cursor-pointer transition-colors"
          >
            {type == "password" ? <FaEye /> : <FaEyeSlash />}
          </button>
        )}
      </div>
    </div>
  );
};
