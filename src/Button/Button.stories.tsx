import { Button } from "./Button";

export default {
  component: Button,
};

export const Primary = {
  args: {
    text: "Primary Button",
    preset: "primary",
  },
};

export const Secondary = {
  args: {
    text: "Secondary Button",
    preset: "secondary",
  },
};

export const Tertiary = {
  args: {
    text: "Tertiary Button",
    preset: "tertiary",
  },
};

export const Confirmation = {
  args: {
    text: "Confirmation",
    preset: "confirm",
  },
};

export const Destructive = {
  args: {
    text: "Destructive",
    preset: "destructive",
  },
};
