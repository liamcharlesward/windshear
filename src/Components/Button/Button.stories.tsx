import { Button } from "./Button";
import { FaTrash, FaPaperPlane, FaInfoCircle, FaAddressBook } from "react-icons/fa";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { BUTTON_VARIANTS, BUTTON_SIZES, BUTTON_PRESETS } from "./Button.props";
import { GlobalRoundingPresets } from "../../Constants/GlobalPresets";

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      options: BUTTON_VARIANTS,
      control: "select",
      description: "Button variant configuration to use.",
    },
    text: {
      control: "text",
      description: "Text to display on the button.",
    },
    size: {
      options: BUTTON_SIZES,
      control: "select",
      description: "Text size and padding size of the button.",
    },
    rounding: {
      options: Object.values(GlobalRoundingPresets),
      control: "select",
      description: "How rounded the button should be.",
    },
    shadow: {
      control: "boolean",
      description: "Whether or not a drop-shadow should be displayed on the button.",
    },
    disabled: {
      control: "boolean",
      description: "Whether or not the button is disabled.",
    },
    onClick: {
      action: "clicked",
      description: "Function called when the button is clicked.",
    },
    link: {
      control: "text",
      description: "URL the button should link to, if acting as an anchor.",
    },
    newTab: {
      control: "boolean",
      description: "Whether the link should open in a new tab.",
    },
    icon: {
      control: false,
      description: "React Icon component to display inside the button.",
    },
    iconPosition: {
      options: ["left", "right"],
      control: { type: "inline-radio" },
      description: "Position of the icon relative to the text.",
    },
    preset: {
      options: BUTTON_PRESETS,
      control: "select",
      description: "Preset style configuration to apply.",
    },
    customColour: {
      control: "color",
      description: "Custom background and text colour to apply, overriding presets.",
    }
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  name: "Primary Preset (Filled)",
  args: {
    text: "Primary Button",
    variant: "filled",
    preset: "primary",
    disabled: false,

  },
};

export const Secondary: Story = {
  name: "Secondary Preset (Filled)",
  args: {
    text: "Secondary Button",
    variant: "filled",
    preset: "secondary",
  },
};

export const Tertiary: Story = {
  name: "Tertiary Preset (Outlined)",
  args: {
    text: "Information",
    variant: "outlined",
    icon: FaInfoCircle,
    preset: "tertiary",
  },
};

export const Confirmation: Story = {
  name: "Confirm Preset (Translucent)",
  args: {
    text: "Send",
    variant: "translucent",
    icon: FaPaperPlane,
    preset: "confirmation",
    iconPosition: "right",
  },
};

export const Destructive: Story = {
  name: "Destructive Preset (Translucent)",
  args: {
    text: "Delete",
    variant: "translucent",
    icon: FaTrash,
    preset: "destructive",
    iconPosition: "left",
  },
};

export const CustomColourFill: Story = {
  name: "Custom Colour (Filled)",
  args: {
    text: "Contacts",
    variant: "filled",
    icon: FaAddressBook,
    iconPosition: "left",
    customColour: "#5b0085",
  },
};

export const CustomColourOut: Story = {
  name: "Custom Colour (Outlined)",
  args: {
    text: "Contacts",
    variant: "outlined",
    icon: FaAddressBook,
    iconPosition: "left",
    customColour: "#5b0085",
  },
};

export const CustomColourTrans: Story = {
  name: "Custom Colour (Translucent)",
  args: {
    text: "Contacts",
    variant: "translucent",
    icon: FaAddressBook,
    iconPosition: "left",
    customColour: "#5b0085",
  },
};
