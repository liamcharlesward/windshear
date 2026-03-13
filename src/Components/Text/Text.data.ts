import type { TextProps } from './Text.props';

export const Title: TextProps = {
  preset: "Title",
  text: "Hello World!",
  textColour: undefined,
  backgroundColour: undefined,
  size: "lg",
  boldness: "bold",
}
export const SubTitle: TextProps = {
  preset: "SubTitle",
  text: "Hello World!",
  textColour: undefined,
  backgroundColour: undefined,
  size: "md",
  boldness: "semibold",
}
export const Description: TextProps = {
  preset: "Description",
  text: "Hello World!",
  textColour: undefined,
  backgroundColour: undefined,
  size: "md",
}

export const Default: TextProps = {
  preset: "Blank",
  text: undefined,
  textColour: undefined,
  backgroundColour: undefined,
  size: "md",
  boldness:"normal",
};

export const Blank: TextProps = {
  preset: "Blank",
  text: undefined,
}

export const Presets = {
  Title: Title,
  SubTitle:SubTitle,
  Description: Description,
  Default: Default,
  Blank: Blank,
}
