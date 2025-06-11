import React from "react";
import DollerIcon from "../assets/icons/DollerIcon";
import ArrowIcon from "../assets/icons/ArrowIcon";
import CartIcon from "../assets/icons/CartIcon";
import FileIcon from "../assets/icons/FileIcon";
import CoffeeIcon from "../assets/icons/CoffeeIcon";
import ArrowDownIcon from "../assets/icons/ArrowDownIcon";

function Cards() {
  const dashBordCards = [
    {
      id: 1,
      title: "Daily Sales",
      value: "$8,254",
      changePercentage: "12.5%",
      changeText: "vs yesterday",
      isAverageOrder: false,
      icon: DollerIcon,
    },
    {
      id: 2,
      title: "Orders Today",
      value: "142",
      changePercentage: "8.2%",
      changeText: "vs yesterday",
      isAverageOrder: false,
      icon: CartIcon,
    },
    {
      id: 3,
      title: "Average Order",
      value: "$58.12",
      changePercentage: "2.3%",
      changeText: "vs last week",
      isAverageOrder: true,
      icon: FileIcon,
    },
    {
      id: 4,
      title: "Popular Item",
      value: "Caramel Latte",
      changePercentage: "5.7%",
      changeText: "in popularity",
      isAverageOrder: false,
      icon: CoffeeIcon,
    },
  ];

  return (
    <div className="flex flex-wrap justify-between gap-4 mb-6 ">
      {dashBordCards.map((card) => (
        <div
          key={card.id}
          className="flex flex-row-reverse justify-center items-center w-[285px] h-[160px] rounded-[8px] bg-white border border-gray-200 shadow-sm md:flex-row-reverse md:max-w-xl dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 cursor-pointer" // Changed anchor to div and added cursor-pointer
        >
          <div className="flex shrink-0 items-center justify-center w-[64px] h-[64px] ml-4 gap-3 p-1.5 rounded-[100px] bg-[#244937]">
            <card.icon />
          </div>
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {card.title}
            </h5>
            <p className="mb-3 font-bold text-[#FF8A42]">{card.value}</p>
            <p className="mb-3 font-normal text-[#244937] dark:text-gray-400">
              <span className="inline-flex items-center gap-1 justify-center p-0.5">
                {card.isAverageOrder ? <ArrowDownIcon /> : <ArrowIcon />}
              </span>
              <span
                className={
                  card.isAverageOrder ? "text-black" : "text-[#244937]"
                }
              >
                {card.changePercentage}
              </span>
              <span className="text-[#333333] dark:text-gray-400">
                {" "}
                {card.changeText}
              </span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards;
