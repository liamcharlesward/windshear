import { TextInput } from "./TextInput";
import { FaEnvelope } from "react-icons/fa";

export default {
  component: TextInput,
};

export const Outlined = {
  name: "Outlined with Primary Accent",
  args: {
    type: "standard",
    placeholder: "Outlined input",
    variant: "outlined",
    presetAccent: "primary",
  },
};

export const LeadingIcon = {
  name: "Underlined with Leading Icon & Custom Accent",
  args: {
    type: "standard",
    placeholder: "Underlined input w/ icon",
    leadingIcon: FaEnvelope,
    variant: "underlined",
    customAccent: "#ff0000",
  },
};
