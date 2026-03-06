import type { ButtonProps } from "../Button/Button.props"

export interface HeaderProps {
  title: string,
  titleColour?: string,
  subTitle?: string,
  subTitleColour?: string,
  buttons: ButtonProps[], 
};
