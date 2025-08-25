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
    <div className="flex flex-wrap items-center gap-6 mb-6 text-foreground dark:text-foreground">
      {dashBordCards.map((card) => (
        <div
          key={card.id}
          className="flex flex-row-reverse justify-between items-center 
             w-full sm:w-[264px] md:w-[264px] 
             h-[160px] p-4 rounded-[8px] bg-background 
             cursor-pointer"
        >
          <div className="flex shrink-0 items-center justify-center w-[64px] h-[64px] gap-1 rounded-[100px] bg-[#244937]">
            <card.icon w={32} h={32} />
          </div>
          <div className="flex flex-col justify-between leading-normal">
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-nowrap">
              {card.title}
            </h5>
            <p className="mb-3 font-bold text-[#FF8A42]">{card.value}</p>
            <p className="mb-3 font-normal text-arrowcolor text-nowrap">
              <span className="inline-flex items-center gap-1 justify-center p-0.5">
                {card.isAverageOrder ? <ArrowDownIcon /> : <ArrowIcon />}
              </span>
              <span
                className={
                  card.isAverageOrder ? "text-arrowcolor" : "text-arrowcolor"
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
