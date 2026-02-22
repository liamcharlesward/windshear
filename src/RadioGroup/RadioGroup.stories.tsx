import { RadioGroup } from "./RadioGroup";

export default {
  component: RadioGroup,
};

export const Primary = {
  args: {
    options: ["One", "Two", "Three", "Four"],
    maxPerRow: 4,
    accent: "primary",
  },
};
