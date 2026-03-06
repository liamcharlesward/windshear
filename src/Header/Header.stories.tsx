import { Header } from "./Header";

export default {
  component: Header,
};

export const Alex = {
  args:{
    title:"Alex Lancaster",
    titleColour:"white",
    subTitle:"Software Engineer",
    subTitleColour:"grey",
    backgroundColour:"#071025",
    buttons:[
      {
        variant:"filled",
        text:"Home",
      },
      {
        variant:"outlined",
        text:"Projects",
      },
      {
        variant:"translucent",
        text:"Contacts",
      }
    ]
  },
};

export const Liam = {
  args: {
    title: "Liam Ward",
    titleColour: "white",
    subTitle: "Software Engineer",
    subTitleColour: "grey",
    backgroundColour:"red",
    buttons: [
      {
        variant: "outlined",
        text: "Home",
      }
    ]
  },
};

