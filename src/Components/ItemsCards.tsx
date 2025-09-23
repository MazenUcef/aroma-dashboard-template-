import { useState } from "react";
import { Card } from "flowbite-react";
import defaultImage from "../assets/images/white-Mocha.png";
import BadgeIcon from "../assets/icons/BadgeIcon";
import ToggleSwitch from "./ToggleSwitch";

const componenttheme = {
  root: {
    base: "flex rounded-lg border border-inputborder bg-background dark:bg-background text-foreground dark:text-foreground shadow-none dark:border-inputborder",
    children: "flex h-full flex-col justify-center gap-0 mt-2p-4",
    horizontal: {
      off: "flex-col",
      on: "flex-col md:max-w-xl md:flex-row",
    },
    href: "hover:bg-gray-100 dark:hover:bg-gray-700",
  },
  img: {
    base: "",
    horizontal: {
      off: "rounded-t-lg",
      on: "h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg",
    },
  },
};

const ItemsCards = ({
  imgSrc = defaultImage,
  title = "White Mocha",
  price = "$4.50",
  showToggle = true,
  initialToggleState = false,
  badge = "Hot Coffee",
}) => {
  const [isToggled, setIsToggled] = useState(initialToggleState);

  const toggleHandler = () => {
    if (showToggle) {
      setIsToggled(!isToggled);
    }
  };

  return (
    <Card
      theme={componenttheme}
      className="bg-background dark:bg-background border border-inputborder dark:border-inputborder rounded-2xl p-0 w-[348.5px] h-[148px] "
    >
      <div className="flex flex-row w-[316.5px]  h-[116px] gap-4  ">
        <div className="flex justify-center items-center w-[116px] h-[116px] bg-gray-200 rounded-lg">
          <img className="rounded-lg" src={imgSrc} alt="" />
        </div>
        <div className="flex flex-col justify-start items-start w-[176px] h-[116px] space-y-2 pt-[13px] ">
          <span className="font-semibold font-poppins text-[14px]">
            {title}
          </span>
          <span className="font-semibold text-[#FF8A42] w-[58px] h-[28px] font-poppins text-[20px] ">
            {price}
          </span>
          <div className="flex items-center relative w-[176.5px] justify-between h-[22px]">
            <span className="flex items-center gap-1 rounded-2xl bg-forminputs w-[100px] h-[22px] text-xs px-2 py-1">
              <BadgeIcon /> {badge}
            </span>
            {showToggle && (
              <ToggleSwitch isOn={isToggled} onToggle={toggleHandler} />
            )}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ItemsCards;
