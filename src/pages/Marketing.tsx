import { useState } from "react";
import DiscountCodes from "../components/DiscountCodes";
import LoyaltyProgram from "../components/LoyaltyProgram";

const Marketing = () => {
  const [activeTab, setActiveTab] = useState<string>("Discount Codes");

  const tabs = [
    {
      id: "Discount Codes",
      title: "Discount Codes",
      content: <DiscountCodes />,
    },
    {
      id: "Loyalty Program",
      title: "Loyalty Program",
      content: <LoyaltyProgram />,
    },
  ];
  return (
    <div className="w-full p-[24px] bg-backgroundaccent text-foreground">
      <h1 className="text-[20px] mb-[4px] font-semibold font-poppins">
        Marketing & Promotions
      </h1>
      <h2 className="text-[14px] mb-[24px]">
        Manage promotions, campaigns and loyalty programs
      </h2>
      <div className="w-[70.5rem] h-auto rounded-xl bg-background p-[24px]">
        {/* Tab List */}
        <div className="flex flex-wrap gap-1 mb-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-2 px-4 rounded-sm mx-2 text-sm font-medium cursor-pointer transition-colors ${
                activeTab === tab.id
                  ? "bg-tabhover text-tabtext"
                  : "bg-forminputs text-foreground hover:bg-tabhover hover:text-tabtext"
              }`}
            >
              {tab.title}
            </button>
          ))}
        </div>
        <div className="w-full bg-linecolor h-[2px]" />
        {/* Tab Content */}
        <div className="p-4">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`text-sm text-foreground ${
                activeTab !== tab.id ? "hidden" : ""
              }`}
            >
              {tab.content}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marketing;
