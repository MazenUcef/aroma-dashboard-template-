import { useState } from "react";

const Settings = () => {
    const [activeTab, setActiveTab] = useState<string>("StoreInformation");

    const tabs = [
        { id: "StoreInformation", title: "Store Information", content: "Content 1" },
        { id: "BusinessHours", title: "Business Hours", content: "Content 2" },
        { id: "Payment", title: "Payment", content: "Content 3" },
        { id: "Delivery", title: "Delivery", content: "Content 4" },
        { id: "App", title: "App", content: "Content 5" },
        { id: "Security", title: "Security", content: "Content 6" },
        { id: "Accessability", title: "Accessability", content: "Content 7" },
    ];

    return (
        <div className="w-full p-[24px]">
            <h1 className="text-[20px] mb-[4px] font-semibold font-poppins">Settings</h1>
            <h2 className="text-[14px] mb-[24px]">Manage your store preferences and configurations</h2>
            <div className="w-[70.5rem] h-[20.003rem] rounded-xl bg-white p-[24px]">
                {/* Tab List */}
                <div className="flex flex-wrap gap-1 mb-4">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`py-2 px-4 rounded-sm mx-2 text-sm font-medium cursor-pointer transition-colors ${activeTab === tab.id
                                ? "bg-[#def7ec] text-[#244937]"
                                : "bg-[#f9fafb] text-[#4d4d4d] hover:bg-gray-100"
                                }`}
                        >
                            {tab.title}
                        </button>
                    ))}
                </div>
                <div className="w-full bg-[#eeeeee] h-[2px]" />
                {/* Tab Content */}
                <div className="p-4">
                    {tabs.map((tab) => (
                        <div
                            key={tab.id}
                            className={`text-sm text-gray-500 dark:text-gray-400 ${activeTab !== tab.id ? "hidden" : ""
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