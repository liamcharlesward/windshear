import clsx from "clsx";
import type { TextProps } from "./Text.props";
import * as Data from "./Text.data";//Holds default data
import {boldness, textSize} from "../../Types/Conversions";

export const Text = (props: TextProps) => {

  const resolveProps = (rawProps: TextProps): TextProps => {
    if (rawProps.preset === "none" || rawProps.preset === undefined) {
      return rawProps;
    }
    const presetValues = Data.Presets[rawProps.preset];
    return { ...presetValues,...rawProps};//whatever comes last has priority if the values overlap
  };

  const renderText = (textProps: TextProps) => {
    //addition safety, the defaults should colver this though
    const TextSize = textProps.size ? textSize[textProps.size] : "";
    const Boldness = textProps.boldness ? boldness[textProps.boldness] : "";

    return(
    <div
      style={{
        color: textProps.textColour,
        backgroundColor: textProps.backgroundColour,
        padding: "0px",
      }}
      className={clsx(
        TextSize,
        Boldness
      )}
    >{textProps.text}
    </div>
    )};

  //check for presets
  const resolvedProps = resolveProps(props);
  if (!resolvedProps.text) return null;// ensures now white space is created if there's no text
  //create the text
  return renderText(resolvedProps);
};