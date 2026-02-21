import type { TextInputProps } from "./TextInput.props";
import { useState } from "react";
import clsx from "clsx";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export const TextInput = (props: TextInputProps) => {
  const [type, setType] = useState(props.type);
  const LeadingIcon = props.leadingIcon;

  const variantStyles = {
    outlined: "border-gray-500 rounded-md border-2 ",
    underlined: "border-b-2 border-gray-500 rounded-tl-sm rounded-tr-sm",
  };

  const accentColours = {
    primary: "hover:border-blue-500 focus-within:border-blue-500",
    secondary: "hover:border-violet-500 focus-within:border-violet-500",
    tertiary: "hover:border-sky-500 focus-within:border-sky-500",
  };

  const handleToggle = () => {
    if (type == "password") {
      setType("text");
    } else {
      setType("password");
    }
  };

  return (
    <div className="w-auto">
      <div
        className={clsx(
          "transition-colors cursor-text p-2 bg-gray-500/20 placeholder-gray-500 items-center gap-x-2 inline-flex",
          variantStyles[props.variant],
          props.accent ? accentColours[props.accent] : accentColours["primary"],
        )}
      >
        {LeadingIcon && (
          <div className="text-gray-500">
            <LeadingIcon />
          </div>
        )}
        <input placeholder={props.placeholder} type={type} className="w-full focus:outline-none" />
        {props.type == "password" && (
          <button
            onClick={handleToggle}
            className="text-gray-500 text-xl hover:text-gray-600 cursor-pointer transition-colors"
          >
            {type == "password" ? <FaEyeSlash /> : <FaEye />}
          </button>
        )}
      </div>
    </div>
  );
};
