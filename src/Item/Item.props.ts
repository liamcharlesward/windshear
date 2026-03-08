import type { TagProps } from "../Tag/Tag.props";

// set this to be export so that 
export type PurposeType = "List" | "Test"; 

export interface ItemProps {
  purpose: PurposeType ;
  title: string;
  subtitle?: string;
  description?: string;
  startDate?: string;
  endDate?: string;
  tags?: TagProps[];
  textColour?: string;
}