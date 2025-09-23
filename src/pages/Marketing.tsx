import { useState } from "react";
import DiscountCodes from "../components/DiscountCodes";
import LoyaltyProgram from "../components/LoyaltyProgram";
import { Plus } from "lucide-react";
import CreateNewDiscountModal from "../components/CreateNewDiscountModal";

const Marketing = () => {
  const [activeTab, setActiveTab] = useState<string>("Discount Codes");
  const [showAddButton, setShowAddButton] = useState<boolean>(true);
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);

  // Product modal state
  const handleAddCategory = () => {
    setIsCategoryModalOpen(true);
  };
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

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    setShowAddButton(tabId === "Discount Codes"); // show button only for Discount Codes
  };

  return (
    <div className="sm:w-[375px] md:w-full p-[24px] bg-backgroundaccent text-foreground">
      {/* Header */}
      <div className="flex flex-row gap-2 mb-4 justify-between md:w-[1128px] sm:w-[343px]">
        <div className="flex flex-col justify-between mb-2">
          <h1 className="text-[20px] mb-[4px] font-semibold font-poppins">
            Marketing & Promotions
          </h1>
          <h2 className="text-[14px] mb-[24px]">
            Manage promotions, campaigns and loyalty programs
          </h2>
        </div>

        {showAddButton && (
          <button
            className="bg-checked dark:bg-checked text-white rounded-lg 
                     w-[32px] h-[32px] md:w-[101px] md:h-[44px] flex items-center justify-center"
            onClick={handleAddCategory}
          >
            <Plus className="w-4 h-4 block md:hidden" />
            <span className="hidden md:block">Add</span>
          </button>
        )}
      </div>

      <div className="sm:w-[343px] md:w-[70.5rem] h-auto rounded-xl bg-background p-[24px]">
        {/* Tab List */}
        <div className="flex flex-wrap gap-4 mb-4 md:justify-start sm:justify-center">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={`py-2 px-2 rounded-sm mx-2 w-[140px] h-[40px] text-sm font-semibold cursor-pointer transition-colors ${
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

      <CreateNewDiscountModal
        isOpen={isCategoryModalOpen}
        onClose={() => setIsCategoryModalOpen(false)}
        onSubmit={(data: any) => {
          console.log("Submitted Category:", data);
          setIsCategoryModalOpen(false);
        }}
      />
    </div>
  );
};

export default Marketing;
