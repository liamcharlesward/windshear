// Text.stories.ts
import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "./Text";

const meta: Meta<typeof Text> = {
  title: "Components/Text",
  component: Text,
  tags: ["autodocs"],
  argTypes: {
    preset: {
      control: "select",
      options: ["none", "Blank", "Default", "Preset1"],
      description: "Preset configuration to use. 'none' uses raw props.",
    },
    text: {
      control: "text",
      description: "The text content to display.",
    },
    textColour: {
      control: "color",
      description: "Text colour (CSS colour value).",
    },
    backgroundColour: {
      control: "color",
      description: "Background colour (CSS colour value).",
    },
    size: {
      control: "select",
      options: [undefined, "sm", "md", "lg"],
      description: "Text size key from conversions.",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

// --- Preset stories ---

export const PresetDefault: Story = {
  name: "Preset / Default",
  args: {
    preset: "Default",
  },
};

export const PresetBlank: Story = {
  name: "Preset / Blank",
  args: {
    preset: "Blank",
    text: "Blank preset — all styling undefined",
  },
};

export const PresetOne: Story = {
  name: "Preset / Preset1",
  args: {
    preset: "Preset1",
  },
};

// --- No preset (raw props) ---

export const NoPreset: Story = {
  name: "No Preset / Plain text",
  args: {
    preset: "none",
    text: "No preset applied",
  },
};

export const NoPresetWithColours: Story = {
  name: "No Preset / With colours",
  args: {
    preset: "none",
    text: "Custom colours",
    textColour: "#ffffff",
    backgroundColour: "#1a1a2e",
  },
};

export const NoPresetWithSize: Story = {
  name: "No Preset / With size",
  args: {
    preset: "none",
    text: "Custom size",
    size: "lg",
  },
};

// --- Preset override stories (explicit props win over preset) ---

export const PresetOverrideText: Story = {
  name: "Preset Override / Custom text",
  args: {
    preset: "Preset1",
    text: "Overriding Preset1 text",
  },
};

export const PresetOverrideColour: Story = {
  name: "Preset Override / Custom colour",
  args: {
    preset: "Preset1",
    textColour: "#e63946",
  },
};

// --- Playground (all controls exposed) ---

export const Playground: Story = {
  name: "Playground",
  args: {
    preset: "none",
    text: "Edit me in the controls panel",
    textColour: "#000000",
    backgroundColour: "#ffffff",
    size: "md",
  },
};