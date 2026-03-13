import type { TextProps } from './Text.props';

export const Default: TextProps = {
  preset: "Blank",
  text: 'Skills',
};

export const Blank: TextProps = {
  preset: "Blank",
  text: "undefined",
  textColour: undefined,
  backgroundColour: undefined,
  size: undefined,
}

export const Preset1: TextProps = {
  preset: "Preset1",
  text: "Hello World!",
  textColour: undefined,
  backgroundColour: undefined,
  size: "md",
}

export const Presets = {
  Preset1: Preset1,
  Default: Default,
  Blank: Blank,
}
