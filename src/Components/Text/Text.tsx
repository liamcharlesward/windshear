import clsx from "clsx";
import type { TextProps } from "./Text.props";
import * as Data from "./Text.data";//Holds default data
import {textSize} from "../../Types/Conversions";

export const Text = (props: TextProps) => {
  if (!props.text) return null;// ensures now white space is created if there's no text

  const resolveProps = (rawProps: TextProps): TextProps => {
    if (rawProps.preset === "none" || rawProps.preset === undefined) {
      return rawProps;
    }
    const presetValues = Data.Presets[rawProps.preset];
    return { ...presetValues, ...rawProps };//whatever coems last has priority
  };

  const renderText = (textProps: TextProps) => {
    const TextSize = textProps.size ? textSize[textProps.size] : "";
    return(
    <div
      style={{
        color: textProps.textColour,
        backgroundColor: textProps.backgroundColour,
        padding: "0px"
      }}
      className={clsx(
        TextSize
      )}
    >textProps.text
    </div>
    )};

  //check for presets
  const resolvedProps = resolveProps(props);
  //create the text
  return renderText(resolvedProps);
};