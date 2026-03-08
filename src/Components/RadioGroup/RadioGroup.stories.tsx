import { RadioGroup } from "./RadioGroup";
import { MdEmail, MdPhone, MdLocalFireDepartment } from "react-icons/md";

export default {
  component: RadioGroup,
};

export const Primary = {
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
    maxPerRow: 3,
    accent: "primary",
  },
};
