import { useState } from "react";
import AppearanceSettings from "../components/AppearanceSettings";
import PaymentSettings from "../components/PaymentSettings";
import DeliverySettings from "../components/DeliverySettings";
import StoreInformation from "../components/StoreInformation";
import SecuritySettings from "../components/SecuritySettings";
import BusinessHours from "../components/BusinessHours";

const Settings = () => {
  const [activeTab, setActiveTab] = useState<string>("StoreInformation");

  const tabs = [
    {
      id: "StoreInformation",
      title: "Store Information",
      content: <StoreInformation />,
    },
    {
      id: "BusinessHours",
      title: "Business Hours",
      content: <BusinessHours />,
    },
    { id: "Payment", title: "Payment", content: <PaymentSettings /> },
    { id: "Delivery", title: "Delivery", content: <DeliverySettings /> },
    { id: "App", title: "App", content: <AppearanceSettings /> },
    { id: "Security", title: "Security", content: <SecuritySettings /> },
    { id: "Accessability", title: "Accessability", content: "Content 7" },
  ];

  return (
    <div className="w-full p-[24px] bg-backgroundaccent text-foreground">
      <h1 className="text-[20px] mb-[4px] font-semibold font-poppins">
        Settings
      </h1>
      <h2 className="text-[14px] mb-[24px]">
        Manage your store preferences and configurations
      </h2>
      <div className="w-full md:w-[70.5rem] h-auto rounded-xl bg-background p-[24px]">
        {/* Tab List or Dropdown based on screen size */}
        <div className="mb-4">
          {/* Mobile: Dropdown with custom arrow */}
          <div className="md:hidden relative">
            <select
              id="mobile-tabs"
              value={activeTab}
              onChange={(e) => setActiveTab(e.target.value)}
              className="w-full p-2 border rounded appearance-none pr-10 cursor-pointer bg-forminputs border-inputborder text-foreground focus:outline-none focus:ring-0 focus:border-inputborder dark:bg-forminputs dark:border-inputborder dark:focus:border-inputborder dark:text-foreground bg-[length:0.75em_0.75em] bg-[position:right_12px_center] bg-no-repeat bg-arrow-down-icon"
            >
              {tabs.map((tab) => (
                <option
                  key={tab.id}
                  value={tab.id}
                  className="bg-forminputs text-foreground"
                >
                  {tab.title}
                </option>
              ))}
            </select>

            {/* Custom arrow */}
            <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
              <svg
                className="w-5 h-5 text-gray-500"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>

          {/* Desktop: Buttons */}
          <div className="hidden md:flex md:flex-wrap md:gap-1">
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

export default Settings;
