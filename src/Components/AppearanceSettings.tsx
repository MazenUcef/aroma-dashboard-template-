import { useState } from "react";
import MoonIcon from "../assets/icons/MoonIcon";
import { useContext } from "react";
import { ThemeContext } from "../context/themeContext";


const AppearanceSettings = () => {
  const themeContext = useContext(ThemeContext);
  const [notifications, setNotifications] = useState({
    newOrders: true,
    lowStock: true,
    customerReviews: true,
    dailyReports: true,
  });

  if (!themeContext) return null;

  const { theme, setTheme } = themeContext;
  const darkMode = theme === "dark";

  return (
    <div className="w-full mx-auto bg-background text-foreground  space-y-6">
      <div className="flex items-center space-x-2 mb-4">
        <h2 className="font-semibold text-[16px]">App Settings</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Dark Mode */}
        <div className="relative">
          <label className="block mb-2 font-semibold text-sm">Appearance</label>
          <div className="flex justify-between items-center py-2 px-4 bg-forminputs rounded-md">
            <div className="flex items-center space-x-2 ">
              <MoonIcon />
              <span className="font-semibold">Dark Mode</span>
            </div>
            <ToggleSwitch
              checked={darkMode}
              onChange={() => {
                setTheme(darkMode ? "light" : "dark");
              }}
            />
          </div>
        </div>

        {/* Language Dropdown */}
        <div className="relative">
          <label
            htmlFor="language"
            className="block mb-2 font-semibold text-sm"
          >
            Language
          </label>
          <select
            id="language"
            className="w-full appearance-none bg-forminputs text-foreground p-2.5 pr-10  rounded-md focus:ring-blue-500 focus:border-blue-500"
          >
            <option>English (UK)</option>
            <option>English (US)</option>
            <option>Arabic</option>
            <option>French</option>
          </select>

          {/* Custom arrow icon */}
          <div className="pointer-events-none absolute inset-y-12 right-3 flex items-center">
            <svg
              className="w-4 h-4 text-foreground"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Notifications */}
      <div className="space-y-4">
        <h2 className="font-semibold text-[16px]">Notifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <NotificationItem
            title="New Orders"
            description="Receive notifications for new orders"
            value={notifications.newOrders}
            onChange={(val) =>
              setNotifications({ ...notifications, newOrders: val })
            }
          />
          <NotificationItem
            title="Low Stock Alerts"
            description="Get notified when inventory is running low"
            value={notifications.lowStock}
            onChange={(val) =>
              setNotifications({ ...notifications, lowStock: val })
            }
          />
          <NotificationItem
            title="Customer Reviews"
            description="Notifications for new customer reviews"
            value={notifications.customerReviews}
            onChange={(val) =>
              setNotifications({ ...notifications, customerReviews: val })
            }
          />
          <NotificationItem
            title="Daily Reports"
            description="Receive daily sales and performance reports"
            value={notifications.dailyReports}
            onChange={(val) =>
              setNotifications({ ...notifications, dailyReports: val })
            }
          />
        </div>
      </div>
    </div>
  );
};

type ToggleSwitchProps = {
  checked: boolean;
  onChange: () => void;
};

const ToggleSwitch = ({ checked, onChange }: ToggleSwitchProps) => (
  <button
    onClick={onChange}
    className={`w-10 h-5 flex items-center bg-[#E5E7EB] rounded-full p-1 duration-300 ease-in-out ${
      checked ? "bg-switch dark:bg-switch" : "bg-tabhover dark:bg-tabhover"
    }`}
  >
    <div
      className={`bg-white w-3.5 h-3.5 rounded-full shadow-md transform duration-300 ease-in-out ${
        checked ? "translate-x-5" : ""
      }`}
    />
  </button>
);


type NotificationItemProps = {
  title: string;
  description: string;
  value: boolean;
  onChange: (val: boolean) => void;
};

const NotificationItem = ({
  title,
  description,
  value,
  onChange,
}: NotificationItemProps) => (
  <div className="flex justify-between items-center bg-forminputs py-2 px-4 rounded-md">
    <div>
      <h3 className="font-semibold text-sm">{title}</h3>
      <p className="text-[10px]">{description}</p>
    </div>
    <ToggleSwitch checked={value} onChange={() => onChange(!value)} />
  </div>
);

export default AppearanceSettings;
