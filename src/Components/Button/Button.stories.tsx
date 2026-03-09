import { Button } from "./Button";
import { FaTrash } from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { FaAddressBook } from "react-icons/fa6";

export default {
  component: Button,
};

export const Primary = {
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
  args: {
    text: "Secondary Button",
    variant: "filled",
    preset: "secondary",
  },
};

export const Tertiary = {
  args: {
    text: "Information",
    variant: "outlined",
    icon: FaInfoCircle,
    preset: "tertiary",
  },
};

export const Confirmation = {
  args: {
    text: "Send",
    variant: "translucent",
    icon: FaPaperPlane,
    preset: "confirm",
    iconPosition: "right",
  },
};

export const Destructive = {
  args: {
    text: "Delete",
    variant: "translucent",
    icon: FaTrash,
    preset: "destructive",
    iconPosition: "left",
  },
};

export const CustomColour = {
  args: {
    text: "Contacts",
    variant: "translucent",
    icon: FaAddressBook,
    iconPosition: "left",
    customColour: "#9CAF88",
  },
};
