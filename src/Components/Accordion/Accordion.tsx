import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import type { AccordionProps, AccordionSectionProps } from "./Accordion.props";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

type InternalAccordionSectionProps = AccordionSectionProps & {
  isOpen: boolean;
  onToggle: () => void;
};

const AccordionSection = (props: InternalAccordionSectionProps) => {
  return (
    <motion.div className="w-full p-2 border-b border-neutral-400 flex-col">
      <div className="flex cursor-pointer justify-between items-center" onClick={props.onToggle}>
        <div className="flex items-center gap-x-2">
          {props.headerIcon && <props.headerIcon />}
          <h1 className="text-lg">{props.headerText}</h1>
        </div>
        {props.isOpen ? <FaChevronUp className="text-neutral-400" /> : <FaChevronDown className="text-neutral-400" />}
      </div>
      <AnimatePresence initial={false}>
        {props.isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pt-2">
              {props.content}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export const Accordion = (props: AccordionProps) => {
  const [openIndices, setOpenIndices] = useState<number[]>(() => {
    const initialOpenned = props.sections
      .map((sec, index) => (sec.isOpen ? index : -1))
      .filter((i) => i !== -1);

    if (props.maxActiveSections && initialOpenned.length > props.maxActiveSections) {
      return initialOpenned.slice(0, props.maxActiveSections);
    }
    return initialOpenned;
  });

  const handleToggle = (index: number) => {
    setOpenIndices((prev) => {
      const isCurrentlyOpen = prev.includes(index);
      if (isCurrentlyOpen) {
        return prev.filter((i) => i !== index);
      } else {
        const next = [...prev, index];
        if (props.maxActiveSections && next.length > props.maxActiveSections) {
          return next.slice(next.length - props.maxActiveSections);
        }
        return next;
      }
    });
  };

  return (
    <motion.div layout className="w-full flex flex-col bg-neutral-200 gap-y-0.5">
      {props.sections.map((section, index) => (
        <AccordionSection
          key={index}
          {...section}
          isOpen={openIndices.includes(index)}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </motion.div>
  );
};
