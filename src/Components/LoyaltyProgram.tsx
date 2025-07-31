import React, { useState } from "react";
import { ToggleSwitch } from "flowbite-react";
import { EllipsisVertical } from "lucide-react";

interface Tier {
  title: string;
  points: number;
  benefits: { label: string; checked: boolean }[];
  members: number;
  active: boolean;
}

const initialTiers: Tier[] = [
  {
    title: "Bronze",
    points: 500,
    benefits: [
      { label: "5% off all drinks", checked: false },
      { label: "Birthday reward", checked: false },
      { label: "Free size upgrade", checked: false },
    ],
    members: 2450,
    active: true,
  },
  {
    title: "Silver",
    points: 1500,
    benefits: [
      { label: "10% off all items", checked: false },
      { label: "Free drink monthly", checked: false },
      { label: "Priority ordering", checked: false },
    ],
    members: 890,
    active: true,
  },
  {
    title: "Gold",
    points: 1750,
    benefits: [
      { label: "15% off all items", checked: false },
      { label: "2 free drinks monthly", checked: false },
      { label: "Exclusive events", checked: false },
    ],
    members: 340,
    active: true,
  },
  {
    title: "Platinum",
    points: 3000,
    benefits: [
      { label: "20% off all items", checked: false },
      { label: "4 free drinks monthly", checked: false },
      { label: "VIP exclusive event invitations", checked: false },
    ],
    members: 120,
    active: true,
  },
];

const LoyaltyProgram = () => {
  const [tiersState, setTiersState] = useState<Tier[]>(initialTiers);

  const toggleTier = (index: number) => {
    const updatedTiers = [...tiersState];
    updatedTiers[index].active = !updatedTiers[index].active;
    setTiersState(updatedTiers);
  };

  const toggleBenefit = (tierIndex: number, benefitIndex: number) => {
    const updatedTiers = [...tiersState];
    const benefit = updatedTiers[tierIndex].benefits[benefitIndex];
    if (benefit && benefit.label) {
      benefit.checked = !benefit.checked;
      setTiersState(updatedTiers);
    }
  };
  const toggleTheme = {
    root: {
      base: "group flex rounded-lg focus:outline-none",
      active: {
        on: "cursor-pointer",
        off: "cursor-not-allowed opacity-50",
      },
      label:
        "ms-3 mt-0.5 text-start text-sm font-medium text-gray-900 dark:text-gray-300",
      input: "sr-only",
    },
    toggle: {
      base: "relative rounded-full after:absolute after:rounded-full after:border after:bg-white after:transition-all group-focus:ring-1",
      checked: {
        on: "after:translate-x-full after:border-transparent rtl:after:-translate-x-full",
        off: "bg-gray-200 after:border-gray-300 dark:bg-gray-700",
        color: {
          default:
            "bg-switch dark:bg-switch group-focus:ring-switch dark:group-focus:ring-switch",
          blue: "bg-blue-700 group-focus:ring-blue-300 dark:group-focus:ring-blue-800",
          dark: "bg-gray-700 group-focus:ring-gray-300 dark:group-focus:ring-gray-800",
          failure:
            "bg-red-700 group-focus:ring-red-300 dark:group-focus:ring-red-800",
          gray: "bg-gray-500 group-focus:ring-gray-300 dark:group-focus:ring-gray-800",
          green:
            "bg-green-600 group-focus:ring-green-300 dark:group-focus:ring-green-800",
          light:
            "bg-gray-300 group-focus:ring-gray-300 dark:group-focus:ring-gray-800",
          red: "bg-red-700 group-focus:ring-red-300 dark:group-focus:ring-red-800",
          purple:
            "bg-purple-700 group-focus:ring-purple-300 dark:group-focus:ring-purple-800",
          success:
            "bg-green-500 group-focus:ring-green-300 dark:group-focus:ring-green-800",
          yellow:
            "bg-yellow-400 group-focus:ring-yellow-300 dark:group-focus:ring-yellow-800",
          warning:
            "bg-yellow-600 group-focus:ring-yellow-300 dark:group-focus:ring-yellow-800",
          cyan: "bg-cyan-500 group-focus:ring-cyan-300 dark:group-focus:ring-cyan-800",
          lime: "bg-lime-400 group-focus:ring-lime-300 dark:group-focus:ring-lime-800",
          indigo:
            "bg-indigo-400 group-focus:ring-indigo-300 dark:group-focus:ring-indigo-800",
          teal: "bg-teal-400 group-focus:ring-teal-300 dark:group-focus:ring-teal-800",
          info: "bg-cyan-600 group-focus:ring-cyan-300 dark:group-focus:ring-cyan-800",
          pink: "bg-pink-600 group-focus:ring-pink-300 dark:group-focus:ring-pink-800",
        },
      },
      sizes: {
        sm: "h-5 w-9 min-w-9 after:left-0.5 after:top-0.5 after:h-4 after:w-4 rtl:after:right-0.5",
        md: "h-6 w-11 min-w-11 after:left-0.5 after:top-0.5 after:h-5 after:w-5 rtl:after:right-0.5",
        lg: "h-7 w-[52px] min-w-[52px] after:left-0.5 after:top-0.5 after:h-6 after:w-6 rtl:after:right-0.5",
      },
    },
  };
  return (
    <div className="p-4">
      <h2 className="text-base font-semibold mb-4 font-poppins">
        Loyalty Program Sections
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {tiersState.map((tier, index) => (
          <div
            key={tier.title}
            className={`bg-secondaryinput dark:bg-secondaryinput rounded-lg shadow-sm border-customborder dark:border-customborder  p-4  flex flex-col justify-between h-full transition-opacity duration-300 ${
              !tier.active ? "opacity-50" : "opacity-100"
            }`}
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-sm text-tabtext dark:text-tabtext font-poppins mb-2">
                  {tier.title}
                </h3>
                <p className="text-xs text-foreground font-poppins font-semibold">
                  {tier.points} points
                </p>
              </div>
              <ToggleSwitch
                checked={tier.active}
                onChange={() => toggleTier(index)}
                theme={toggleTheme}
              />
            </div>

            <ul className="mt-4 space-y-2">
              {tier.benefits.map((benefit, idx) => (
                <li
                  key={idx}
                  className={`flex items-center text-xs font-poppins font-normal text-custombackground ${
                    tier.active
                      ? "text-custombackground"
                      : "text-custombackground"
                  }`}
                >
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="mr-2 accent-switch dark:accent-switch checked:border-transparent focus:ring-0"
                      checked={benefit.checked}
                      onChange={() => toggleBenefit(index, idx)}
                      disabled={!tier.active}
                    />
                    <span>{benefit.label}</span>
                  </label>
                </li>
              ))}
            </ul>

            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center text-xs text-orange font-semibold font-poppins">
                <div className="w-4 h-4 mr-2 flex items-center justify-center text-usersicon dark:text-usersicon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                  >
                    <path
                      d="M5.66732 7.70056C7.32417 7.70056 8.66732 6.28672 8.66732 4.54266C8.66732 2.7986 7.32417 1.38477 5.66732 1.38477C4.01046 1.38477 2.66732 2.7986 2.66732 4.54266C2.66732 6.28672 4.01046 7.70056 5.66732 7.70056Z"
                      fill="currentColor"
                    />
                    <path
                      d="M6.66732 8.40231H4.66732C3.78359 8.40342 2.93636 8.77345 2.31146 9.43124C1.68657 10.089 1.33504 10.9808 1.33398 11.9111V14.0163C1.33398 14.2025 1.40422 14.381 1.52925 14.5126C1.65427 14.6442 1.82384 14.7181 2.00065 14.7181H9.33398C9.5108 14.7181 9.68036 14.6442 9.80539 14.5126C9.93041 14.381 10.0007 14.2025 10.0007 14.0163V11.9111C9.99959 10.9808 9.64806 10.089 9.02317 9.43124C8.39828 8.77345 7.55105 8.40342 6.66732 8.40231Z"
                      fill="currentColor"
                    />
                    <path
                      d="M8.11332 6.3588C8.47288 5.82878 8.66654 5.19395 8.66732 4.54266C8.66589 4.31142 8.6404 4.08104 8.59132 3.85564C8.31981 4.19791 8.13387 4.60618 8.05039 5.04334C7.96691 5.48049 7.98854 5.93268 8.11332 6.3588Z"
                      fill="currentColor"
                    />
                    <path
                      d="M10.6673 2.78827C10.348 2.79085 10.0318 2.85433 9.73398 2.97564C10.0082 3.75256 10.0741 4.59392 9.92439 5.40761C9.7747 6.22131 9.41523 6.97596 8.88532 7.58898C9.18435 7.76347 9.46445 7.97171 9.72065 8.21003C10.0223 8.33476 10.3432 8.39994 10.6673 8.40231C11.3746 8.40231 12.0528 8.10657 12.5529 7.58015C13.053 7.05374 13.334 6.33976 13.334 5.59529C13.334 4.85082 13.053 4.13685 12.5529 3.61043C12.0528 3.08401 11.3746 2.78827 10.6673 2.78827Z"
                      fill="currentColor"
                    />
                    <path
                      d="M11.334 9.10406H10.4827C11.035 9.92476 11.3324 10.9053 11.334 11.9111V14.0163C11.3318 14.256 11.2903 14.4934 11.2113 14.7181H14.0007C14.1775 14.7181 14.347 14.6442 14.4721 14.5126C14.5971 14.381 14.6673 14.2025 14.6673 14.0163V12.6128C14.6663 11.6826 14.3147 10.7908 13.6898 10.133C13.0649 9.47521 12.2177 9.10518 11.334 9.10406Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                {/* <Users className="w-4 h-4 mr-1 " /> */}
                {tier.members} members
              </div>
              <EllipsisVertical className="w-4 h-4 text-gray-400 cursor-pointer" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoyaltyProgram;
