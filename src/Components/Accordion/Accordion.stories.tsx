
import { FaCar, FaInfoCircle } from "react-icons/fa";
import { Accordion } from "./Accordion";

export default {
  component: Accordion,
};

export const NoMax = {
  name: "No max active sections",
  args: {
    sections: [
      {
        headerText: "Information",
        headerIcon: FaInfoCircle,
        content: <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>,
        isOpen: false,
      },
      {
        headerText: "Car",
        headerIcon: FaCar,
        content: <img src="public/fiesta.jpg"></img>,
        isOpen: false,
      },
    ],
  },
};

export const OneMax = {
  name: "1 max active section",
  args: {
    sections: [
      {
        headerText: "Information",
        headerIcon: FaInfoCircle,
        content: <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>,
        isOpen: false,
      },
      {
        headerText: "Car",
        headerIcon: FaCar,
        content: <img src="public/fiesta.jpg"></img>,
        isOpen: false,
      },
    ],
    maxActiveSections: 1,
  },
};

export const OneMaxDefault = {
  name: "1 max active section, section 1 open on mount",
  args: {
    sections: [
      {
        headerText: "Information",
        headerIcon: FaInfoCircle,
        content: <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>,
        isOpen: true,
      },
      {
        headerText: "Car",
        headerIcon: FaCar,
        content: <img src="public/fiesta.jpg"></img>,
        isOpen: false,
      },
    ],
    maxActiveSections: 1,
  },
};