import { Button } from "./Button";

export default {
  component: Button,
};

export const Primary = {
  args: {
    text: "Primary Button",
    variant: "filled",
    preset: "primary",
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
    text: "Tertiary Button",
    variant: "outlined",
    preset: "tertiary",
  },
};

export const Confirmation = {
  args: {
    text: "Confirmation Button",
    variant: "translucent",
    preset: "confirm",
  },
};

export const Destructive = {
  args: {
    text: "Destructive Button",
    variant: "translucent",
    preset: "destructive",
  },
};
