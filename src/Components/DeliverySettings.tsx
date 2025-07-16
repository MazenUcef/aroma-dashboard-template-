import { useState } from "react";
import { TextInput, Button } from "flowbite-react";
import MapPinIcon from "../assets/icons/MapPinIcon";
import MinusIcon from "../assets/icons/MinusIcon";
import PlusIcon from "../assets/icons/PlusIcon";

const inputTheme = {
  base: "flex",
  addon:
    "inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-200 px-3 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-600 dark:text-gray-400",
  field: {
    base: "relative w-full",
    icon: {
      base: "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3",
      svg: "h-5 w-5 text-gray-500 dark:text-gray-400",
    },
    rightIcon: {
      base: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3",
      svg: "h-5 w-5 text-gray-500 dark:text-gray-400",
    },
    input: {
      base: "block w-full border focus:outline-none focus:ring-1 disabled:cursor-not-allowed disabled:opacity-50",
      sizes: {
        sm: "p-2 sm:text-xs",
        md: "p-2.5 text-sm",
        lg: "p-4 sm:text-base",
      },
      colors: {
        gray: "border-inputborder bg-secondaryinput text-foreground placeholder-foreground focus:border-primary-500 focus:ring-primary-500 dark:border-inputborder dark:bg-secondaryinput dark:text-foreground dark:placeholder-foreground dark:focus:border-primary-500 dark:focus:ring-primary-500",
        info: "border-cyan-500 bg-cyan-50 text-cyan-900 placeholder-cyan-700 focus:border-cyan-500 focus:ring-cyan-500 dark:border-cyan-400 dark:bg-cyan-100 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
        failure:
          "border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100 dark:focus:border-red-500 dark:focus:ring-red-500",
        warning:
          "border-yellow-500 bg-yellow-50 text-yellow-900 placeholder-yellow-700 focus:border-yellow-500 focus:ring-yellow-500 dark:border-yellow-400 dark:bg-yellow-100 dark:focus:border-yellow-500 dark:focus:ring-yellow-500",
        success:
          "border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500 dark:border-green-400 dark:bg-green-100 dark:focus:border-green-500 dark:focus:ring-green-500",
      },
      withRightIcon: {
        on: "pr-10",
        off: "",
      },
      withIcon: {
        on: "pl-10",
        off: "",
      },
      withAddon: {
        on: "rounded-l-lg rounded-r-none", // Remove rounding on right side
        off: "rounded-l-lg rounded-r-none", // Even when there's no addon, keep right side flat
      },
      withShadow: {
        on: "shadow-sm dark:shadow-sm-light",
        off: "",
      },
    },
  },
};

const inputTheme2 = {
  base: "flex",
  addon:
    "inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-200 px-3 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-600 dark:text-gray-400",
  field: {
    base: "relative w-full",
    icon: {
      base: "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3",
      svg: "h-5 w-5 text-gray-500 dark:text-gray-400",
    },
    rightIcon: {
      base: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3",
      svg: "h-5 w-5 text-gray-500 dark:text-gray-400",
    },
    input: {
      base: "block w-full border focus:outline-none focus:ring-1 disabled:cursor-not-allowed disabled:opacity-50",
      sizes: {
        sm: "p-2 sm:text-xs",
        md: "p-2.5 text-sm",
        lg: "p-4 sm:text-base",
      },
      colors: {
        gray: "border-inputborder bg-secondaryinput text-foreground placeholder-foreground focus:border-primary-500 focus:ring-primary-500 dark:border-inputborder dark:bg-secondaryinput dark:text-foreground dark:placeholder-foreground dark:focus:border-primary-500 dark:focus:ring-primary-500",
        info: "border-cyan-500 bg-cyan-50 text-cyan-900 placeholder-cyan-700 focus:border-cyan-500 focus:ring-cyan-500 dark:border-cyan-400 dark:bg-cyan-100 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
        failure:
          "border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100 dark:focus:border-red-500 dark:focus:ring-red-500",
        warning:
          "border-yellow-500 bg-yellow-50 text-yellow-900 placeholder-yellow-700 focus:border-yellow-500 focus:ring-yellow-500 dark:border-yellow-400 dark:bg-yellow-100 dark:focus:border-yellow-500 dark:focus:ring-yellow-500",
        success:
          "border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500 dark:border-green-400 dark:bg-green-100 dark:focus:border-green-500 dark:focus:ring-green-500",
      },
      withRightIcon: {
        on: "pr-10",
        off: "",
      },
      withIcon: {
        on: "pl-10",
        off: "",
      },
      withAddon: {
        on: "rounded-r-lg",
        off: "rounded-lg",
      },
      withShadow: {
        on: "shadow-sm dark:shadow-sm-light",
        off: "",
      },
    },
  },
};

type Amount = {
  value: number;
  currency: string;
};

const DeliverySettings = () => {
  const [zones, setZones] = useState<string[]>([
    "",
    "",
  ]);
  const [amounts, setAmounts] = useState<Amount[]>([
    { value: 16, currency: "USD" },
    { value: 16, currency: "EGP" },
  ]);
  const [deliveryTimes, setDeliveryTimes] = useState<number[]>([45, 45, 45]);

  const handleZoneChange = (index: number, value: string) => {
    const updated = [...zones];
    updated[index] = value;
    setZones(updated);
  };

  const handleAmountChange = (index: number, value: number) => {
    const updated = [...amounts];
    updated[index].value = value;
    setAmounts(updated);
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Section Title */}
      <h2 className="text-[1rem] font-semibold text-foreground dark:text-foreground">
        Delivery Settings
      </h2>

      {/* Delivery Zones */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-foreground dark:text-foreground">
          Delivery Zones
        </h3>

        {zones.map((zone, idx) => (
          <div
            key={idx}
            className="w-full flex flex-col md:flex-row gap-4 items-start md:items-center"
          >
            <div className="w-full">
              <label className="text-xs font-semibold text-foreground dark:text-foreground">
                Enter Miles
              </label>
              {/* Zone Input */}
              <TextInput
                theme={inputTheme2}
                placeholder="Zone 1 (0–2 miles)"
                value={zone}
                onChange={(e) => handleZoneChange(idx, e.target.value)}
                icon={() => (
                  <span>
                    <MapPinIcon />
                  </span>
                )}
                className="flex-1 w-full mt-2 custom-placeholder"
                color="gray"
              />
            </div>

            {/* Amount Input with Currency */}
            <div className="flex gap-2 items-center justify-center">
              <div>
                <label className="text-xs font-semibold text-foreground dark:text-foreground">
                  Amount
                </label>
                <div className="flex mt-2">
                  <TextInput
                    theme={inputTheme}
                    type="number"
                    value={amounts[idx].value}
                    onChange={(e) =>
                      handleAmountChange(idx, parseInt(e.target.value) || 0)
                    }
                    className="!rounded-r-none !rounded-tr-none !rounded-br-none w-24 custom-placeholder"
                    color="gray"
                  />
                  <div className="flex items-center gap-1 bg-inputaccent border border-inputborder rounded-r-md px-3 text-sm text-foreground dark:text-foreground font-semibold">
                    {amounts[idx].currency === "USD" ? (
                      <>
                        <span role="img" aria-label="USA Flag">
                          EGP
                        </span>
                      </>
                    ) : (
                      <>
                        <span role="img" aria-label="Egypt Flag">
                          EGP
                        </span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Add Zone Button */}
        <Button
          color="light"
          size="lg"
          className="mt-2 w-32 text-xs font-semibold flex items-center justify-center text-[#B3B3B3] bg-checked hover:bg-checked dark:hover:bg-checked dark:bg-checked"
          onClick={() => {
            setZones([...zones, ""]);
            setAmounts([...amounts, { value: 0, currency: "EGP" }]);
          }}
        >
          Add Zone
        </Button>
      </div>

      {/* Estimated Delivery Times */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-foreground dark:text-foreground">
          Estimated Delivery Times
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {["Peak Hours", "Off-Peak Hours"].map((label, i) => (
            <div key={i} className="space-y-1 relative ">
              <label className="text-xs font-semibold text-foreground dark:text-foreground">
                {label}
              </label>
              <div className="flex items-center border border-inputborder rounded-md overflow-hidden mt-1.5 w-full h-[42px]">
                {/* Minus Button */}
                <button
                  onClick={() =>
                    setDeliveryTimes((prev) =>
                      prev.map((val, index) =>
                        index === i ? Math.max(val - 5, 0) : val
                      )
                    )
                  }
                  className="px-3 h-full border-r border-inputborder text-foreground bg-backgroundtertiary flex items-center justify-center"
                >
                  <MinusIcon />
                </button>

                {/* Editable Input */}
                <input
                  type="number"
                  min={0}
                  value={deliveryTimes[i]}
                  onChange={(e) =>
                    setDeliveryTimes((prev) =>
                      prev.map((val, index) =>
                        index === i ? Math.max(Number(e.target.value), 0) : val
                      )
                    )
                  }
                  className="w-full px-4 text-sm font-semibold text-foreground bg-forminputs outline-none h-full"
                />

                <span className="text-sm text-foreground absolute top-[2.2563rem] left-19.5 font-semibold">
                  MIN
                </span>

                {/* Plus Button */}
                <button
                  onClick={() =>
                    setDeliveryTimes((prev) =>
                      prev.map((val, index) => (index === i ? val + 5 : val))
                    )
                  }
                  className="px-3 h-full border-l border-inputborder text-foreground bg-backgroundtertiary flex items-center justify-center"
                >
                  <PlusIcon />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DeliverySettings;
