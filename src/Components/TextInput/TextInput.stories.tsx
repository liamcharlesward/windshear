import { TextInput } from "./TextInput";
import { FaEnvelope } from "react-icons/fa";

export default {
  component: TextInput,
};

export const Outlined = {
  args: {
    type: "standard",
    placeholder: "Outlined input",
    variant: "outlined",
    accent: "primary",
  },
};

export const LeadingIcon = {
  name: "Underlined with Leading Icon",
  args: {
    type: "standard",
    placeholder: "Underlined input w/ icon",
    leadingIcon: FaEnvelope,
    variant: "underlined",
    accent: "secondary",
  },
};
