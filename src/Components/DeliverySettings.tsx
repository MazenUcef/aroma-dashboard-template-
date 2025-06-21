import { useState } from "react";
import { TextInput, Button } from "flowbite-react";
import MapPinIcon from "../assets/icons/MapPinIcon";
import RefreshIcon from "../assets/icons/RefreshIcon";
import MinusIcon from "../assets/icons/MinusIcon";
import PlusIcon from "../assets/icons/PlusIcon";

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
      <h2 className="text-[1rem] font-semibold text-[#1E1E1E]">
        Delivery Settings
      </h2>

      {/* Delivery Zones */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-[#1E1E1E]">Delivery Zones</h3>

        {zones.map((zone, idx) => (
          <div
            key={idx}
            className="w-full flex flex-col md:flex-row gap-4 items-start md:items-center"
          >
            <div className="w-full">
              <label className="text-xs font-semibold text-[#1E1E1E]">
                Enter Miles
              </label>
              {/* Zone Input */}
              <TextInput
                placeholder="Zone 1 (0–2 miles)"
                value={zone}
                onChange={(e) => handleZoneChange(idx, e.target.value)}
                icon={() => (
                  <span>
                    <MapPinIcon />
                  </span>
                )}
                className="flex-1 w-full mt-2 custom-placeholder"
                style={{
                  border: "1px solid #CCCCCC",
                }}
                color="#fff"
              />
            </div>

            <div className="flex items-center justify-center mt-7">
              <RefreshIcon />
            </div>

            {/* Amount Input with Currency */}
            <div className="flex gap-2 items-center justify-center">
              <div>
                <label className="text-xs font-semibold text-[#1E1E1E]">
                  Amount
                </label>
                <div className="flex mt-2">
                  <TextInput
                    type="number"
                    value={amounts[idx].value}
                    onChange={(e) =>
                      handleAmountChange(idx, parseInt(e.target.value) || 0)
                    }
                    className="!rounded-r-none !rounded-tr-none !rounded-br-none w-24 custom-placeholder"
                    style={{
                      borderTopRightRadius: 0,
                      borderBottomRightRadius: 0,
                      border: "1px solid #CCCCCC",
                    }}
                    color="#fff"
                  />
                  <div className="flex items-center gap-1 bg-gray-100 border border-gray-300 rounded-r-md px-3 text-sm text-[#1E1E1E] font-semibold">
                    {amounts[idx].currency === "USD" ? (
                      <>
                        <span role="img" aria-label="USA Flag">
                          USD
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
          className="mt-2 w-32 text-xs font-semibold flex items-center justify-center text-[#B3B3B3] bg-[#F9FAFB]"
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
        <h3 className="text-sm font-semibold text-[#1E1E1E]">
          Estimated Delivery Times
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {["Peak Hours", "Regular Hours", "Off-Peak Hours"].map((label, i) => (
            <div key={i} className="space-y-1 relative ">
              <label className="text-xs font-semibold text-[#1E1E1E]">
                {label}
              </label>
              <div className="flex items-center border border-gray-300 rounded-md overflow-hidden mt-1.5 w-full bg-white h-[42px]">
                {/* Minus Button */}
                <button
                  onClick={() =>
                    setDeliveryTimes((prev) =>
                      prev.map((val, index) =>
                        index === i ? Math.max(val - 5, 0) : val
                      )
                    )
                  }
                  className="px-3 h-full border-r border-gray-300 text-[#1F2A37] hover:text-[#1F2A37] bg-[#f0f0f0] flex items-center justify-center"
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
                  className="w-full px-4 text-sm font-semibold text-[#6B7280] bg-[#F9FAFB] outline-none h-full"
                />

                <span className="text-sm text-[#6B7280] absolute top-[2.2563rem] left-19.5 font-semibold">
                  MIN
                </span>

                {/* Plus Button */}
                <button
                  onClick={() =>
                    setDeliveryTimes((prev) =>
                      prev.map((val, index) => (index === i ? val + 5 : val))
                    )
                  }
                  className="px-3 h-full border-l border-gray-300 text-[#1F2A37] hover:text-[#1F2A37] bg-[#f0f0f0] flex items-center justify-center"
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
