import { Button } from "./Button";
import { FaTrash } from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { FaAddressBook } from "react-icons/fa6";

export default {
  component: Button,
};

export const Primary = {
  name: "Primary Preset (Filled)",
  args: {
    text: "Primary Button",
    variant: "filled",
    preset: "primary",
    shadow: true,
    link: "https://www.w3schools.com/REACT/react_css_styling.asp",
    newTab: false,
  },
};

export const Secondary = {
  name: "Secondary Preset (Filled)",
  args: {
    text: "Secondary Button",
    variant: "filled",
    preset: "secondary",
  },
};

export const Tertiary = {
  name: "Tertiary Preset (Outlined)",
  args: {
    text: "Information",
    variant: "outlined",
    icon: FaInfoCircle,
    preset: "tertiary",
  },
};

export const Confirmation = {
  name: "Confirm Preset (Translucent)",
  args: {
    text: "Send",
    variant: "translucent",
    icon: FaPaperPlane,
    preset: "confirm",
    iconPosition: "right",
  },
};

export const Destructive = {
  name: "Destructive Preset (Filled)",
  args: {
    text: "Delete",
    variant: "translucent",
    icon: FaTrash,
    preset: "destructive",
    iconPosition: "left",
  },
};

export const CustomColourFill = {
  name: "Custom Colour (Filled)",
  args: {
    text: "Contacts",
    variant: "filled",
    icon: FaAddressBook,
    iconPosition: "left",
    customColour: "#5b0085",
  },
};

export const CustomColourOut = {
  name: "Custom Colour (Outlined)",
  args: {
    text: "Contacts",
    variant: "outlined",
    icon: FaAddressBook,
    iconPosition: "left",
    customColour: "#5b0085",
  },
};

export const CustomColourTrans = {
  name: "Custom Colour (Translucent)",
  args: {
    text: "Contacts",
    variant: "translucent",
    icon: FaAddressBook,
    iconPosition: "left",
    customColour: "#5b0085",
  },
};
