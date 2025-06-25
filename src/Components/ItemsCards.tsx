import React, { useState } from "react";
import { Card } from "flowbite-react";
import defaultImage from "../assets/images/white-Mocha.png";
import BadgeIcon from "../assets/icons/BadgeIcon";
import ToggleSwitch from "../components/ToggleSwitch";

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
    <Card className="bg-white border border-[#CECECE] rounded-2xl p-0 w-[348.5px] h-[148px] ">
      <div className="flex flex-row w-[316.5px]  h-[116px] gap-4  ">
        <div className="flex justify-center items-center w-[116px] h-[116px] bg-gray-200 rounded-lg">
          <img className="rounded-lg" src={imgSrc} alt="" />
        </div>
        <div className="flex flex-col justify-start items-start w-[176px] h-[116px] space-y-2 pt-[13px] ">
          <span className="font-semibold font-poppins text-[14px] text-[#141B22]">
            {title}
          </span>
          <span className="font-semibold text-[#FF8A42] w-[58px] h-[28px] font-poppins text-[20px] ">
            {price}
          </span>
          <div className="flex items-center relative w-[176.5px] justify-between h-[22px]">
            <span className="flex items-center gap-1 rounded-2xl bg-gray-100 w-[100px] h-[22px] text-xs text-gray-600 px-2 py-1">
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
