import type { ReactNode } from "react"
import type { IconType } from "react-icons"

export type AccordionSectionProps = {
    headerText: string,
    headerIcon?: IconType
    content: ReactNode,
    isOpen: boolean,
}

export interface AccordionProps {
    sections: AccordionSectionProps[],
    maxActiveSections?: number,
};