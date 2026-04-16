import { RadioGroup } from "./RadioGroup";
import { MdEmail, MdPhone, MdLocalFireDepartment } from "react-icons/md";

export default {
  component: RadioGroup,
};

export const Primary = {
  name: "3 Options, Primary Accent Preset",
  args: {
    options: [
      {
        option: "Email",
        leadingIcon: MdEmail,
      },
      {
        option: "Phone",
        leadingIcon: MdPhone,
      },
      {
        option: "Smoke Signal",
        leadingIcon: MdLocalFireDepartment,
      },
    ],
    maxPerRow: 2,
    presetAccent: "primary",
    variant: "rich",
  },
};

export const CustomAccent = {
  name: "3 Options, Custom Accent",
  args: {
    options: [
      {
        option: "Email",
        leadingIcon: MdEmail,
      },
      {
        option: "Phone",
        leadingIcon: MdPhone,
      },
      {
        option: "Smoke Signal",
        leadingIcon: MdLocalFireDepartment,
      },
    ],
    customAccent: "#5b0085",
  },
  variant: "minimal"
};
