import { useState } from "react";
import { Label, TextInput } from "flowbite-react";

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
        gray: "border-inputborder bg-forminputs text-foreground placeholder-foreground focus:border-primary-500 focus:ring-primary-500 dark:border-inputborder dark:bg-forminputs dark:text-foreground dark:placeholder-foreground dark:focus:border-primary-500 dark:focus:ring-primary-500",
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

const BusinessHours = () => {
  const [hours, setHours] = useState({
    saturday: { from: "8:00", to: "5:00" },
    sunday: { from: "8:00", to: "5:00" },
    monday: { from: "8:00", to: "5:00" },
    tuesday: { from: "8:00", to: "5:00" },
    wednesday: { from: "8:00", to: "5:00" },
    thursday: { from: "8:00", to: "5:00" },
  });

  const handleTimeChange = (day: string, field: string, value: string) => {
    setHours((prev) => ({
      ...prev,
      [day]: {
        ...prev[day as keyof typeof hours],
        [field]: value,
      },
    }));
  };

  return (
    <div className="flex w-full flex-col">
      <h1 className="text-[16px] text-foreground dark:text-foreground mb-[16px] font-semibold font-poppins">
        Business Hours
      </h1>
      <form className="w-full">
        {/* Two-column responsive wrapper */}
        <div className="flex flex-col md:flex-row md:justify-between md:gap-8">
          {/* First Column (Sat–Mon) */}
          <div className="w-full md:w-[33.75rem] flex flex-col gap-5">
            {/* Saturday */}
            <div className="flex w-full items-center justify-between">
              <Label className="text-[14px] text-foreground dark:text-foreground">
                Saturday
              </Label>
              <div className="flex items-center gap-3">
                <TextInput
                  theme={inputTheme}
                  disabled
                  type="time"
                  value={hours.saturday.from}
                  onChange={(e) =>
                    handleTimeChange("saturday", "from", e.target.value)
                  }
                  className="md:w-24 w-[78px]"
                  color="gray"
                />
                <span className="text-[16px] capitalize font-semibold text-foreground dark:text-foreground">
                  to
                </span>
                <TextInput
                  theme={inputTheme}
                  disabled
                  type="time"
                  value={hours.saturday.to}
                  onChange={(e) =>
                    handleTimeChange("saturday", "to", e.target.value)
                  }
                  className="md:w-24 w-[78px]"
                  color="gray"
                />
              </div>
            </div>

            {/* Sunday */}
            <div className="flex w-full items-center justify-between">
              <Label className="text-[14px] text-foreground dark:text-foreground">
                Sunday
              </Label>
              <div className="flex items-center gap-3">
                <TextInput
                  theme={inputTheme}
                  disabled
                  type="time"
                  value={hours.sunday.from}
                  onChange={(e) =>
                    handleTimeChange("sunday", "from", e.target.value)
                  }
                  className="md:w-24 w-[78px]"
                  color="gray"
                />
                <span className="text-[16px] capitalize font-semibold text-foreground dark:text-foreground">
                  to
                </span>
                <TextInput
                  theme={inputTheme}
                  disabled
                  type="time"
                  value={hours.sunday.to}
                  onChange={(e) =>
                    handleTimeChange("sunday", "to", e.target.value)
                  }
                  className="md:w-24 w-[78px]"
                  color="gray"
                />
              </div>
            </div>

            {/* Monday */}
            <div className="flex w-full items-center justify-between">
              <Label className="text-[14px] text-foreground dark:text-foreground">
                Monday
              </Label>
              <div className="flex items-center gap-3">
                <TextInput
                  theme={inputTheme}
                  disabled
                  type="time"
                  value={hours.monday.from}
                  onChange={(e) =>
                    handleTimeChange("monday", "from", e.target.value)
                  }
                  className="md:w-24 w-[78px]"
                  color="gray"
                />
                <span className="text-[16px] capitalize font-semibold text-foreground dark:text-foreground">
                  to
                </span>
                <TextInput
                  theme={inputTheme}
                  disabled
                  type="time"
                  value={hours.monday.to}
                  onChange={(e) =>
                    handleTimeChange("monday", "to", e.target.value)
                  }
                  className="md:w-24 w-[78px]"
                  color="gray"
                />
              </div>
            </div>
          </div>

          {/* Second Column (Tue–Fri) */}
          <div className="w-full md:w-[33.75rem] flex flex-col gap-5 mt-5 md:mt-0">
            {/* Tuesday */}
            <div className="flex w-full items-center justify-between">
              <Label className="text-[14px] text-foreground dark:text-foreground">
                Tuesday
              </Label>
              <div className="flex items-center gap-3">
                <TextInput
                  theme={inputTheme}
                  disabled
                  type="time"
                  value={hours.tuesday.from}
                  onChange={(e) =>
                    handleTimeChange("tuesday", "from", e.target.value)
                  }
                  className="md:w-24 w-[78px]"
                  color="gray"
                />
                <span className="text-[16px] capitalize font-semibold text-foreground dark:text-foreground">
                  to
                </span>
                <TextInput
                  theme={inputTheme}
                  disabled
                  type="time"
                  value={hours.tuesday.to}
                  onChange={(e) =>
                    handleTimeChange("tuesday", "to", e.target.value)
                  }
                  className="md:w-24 w-[78px]"
                  color="gray"
                />
              </div>
            </div>

            {/* Wednesday */}
            <div className="flex w-full items-center justify-between">
              <Label className="text-[14px] text-foreground dark:text-foreground">
                Wednesday
              </Label>
              <div className="flex items-center gap-3">
                <TextInput
                  theme={inputTheme}
                  disabled
                  type="time"
                  value={hours.wednesday.from}
                  onChange={(e) =>
                    handleTimeChange("wednesday", "from", e.target.value)
                  }
                  className="md:w-24 w-[78px]"
                  color="gray"
                />
                <span className="text-[16px] capitalize font-semibold text-foreground dark:text-foreground">
                  to
                </span>
                <TextInput
                  theme={inputTheme}
                  disabled
                  type="time"
                  value={hours.wednesday.to}
                  onChange={(e) =>
                    handleTimeChange("wednesday", "to", e.target.value)
                  }
                  className="md:w-24 w-[78px]"
                  color="gray"
                />
              </div>
            </div>

            {/* Thursday */}
            <div className="flex w-full items-center justify-between">
              <Label className="text-[14px] text-foreground dark:text-foreground">
                Thursday
              </Label>
              <div className="flex items-center gap-3">
                <TextInput
                  theme={inputTheme}
                  disabled
                  type="time"
                  value={hours.thursday.from}
                  onChange={(e) =>
                    handleTimeChange("thursday", "from", e.target.value)
                  }
                  className="md:w-24 w-[78px]"
                  color="gray"
                />
                <span className="text-[16px] capitalize font-semibold text-foreground dark:text-foreground">
                  to
                </span>
                <TextInput
                  theme={inputTheme}
                  disabled
                  type="time"
                  value={hours.thursday.to}
                  onChange={(e) =>
                    handleTimeChange("thursday", "to", e.target.value)
                  }
                  className="md:w-24 w-[78px]"
                  color="gray"
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BusinessHours;
