import type { HeaderProps } from "./Header.props";
import { Button } from "../Button/Button";

export const Header = (props: HeaderProps) => {
  const titleColour = props.titleColour;
  const subTitle = props.subTitle;
  const subTitleColour = props.subTitleColour;
  const buttons = props.buttons;
  const backgroundColour = props.backgroundColour;

  return (
    <header className="fixed top-0 left-0 min-w-screen bg-[#071025] shadow-[0_4px_12px_rgba(2,6,23,0.5)] flex items-center justify-between gap-5 py-2.5 px-7" style={{ backgroundColor: backgroundColour ?? "" }}>
      <div>
        <h1 className="text-3xl font-bold text-green-0" style={{ color: titleColour ?? "" }}>{props.title}</h1>
        <div className="text-md text-grey-500" style={{ color: subTitleColour ?? "" }}>{subTitle}</div>
      </div> 
      <nav>
        <ul className="flex flex-row gap-x-2">
          {buttons.map((button, index) => (
            <li key={index}>
              <Button text={button.text} variant={button.variant} />
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};