import { useState } from "react";
import { Label, TextInput } from "flowbite-react";
import MailIcon from "../assets/icons/MailIcon";
import NameIcon from "../assets/icons/NameIcon";
import AddressIcon from "../assets/icons/AddressIcon";
import PhoneIcon from "../assets/icons/PhoneIcon";

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

const StoreInformation = () => {
  const [phoneValue, setPhoneValue] = useState<string | undefined>();

  const formatPhoneNumber = (value: string) => {
    const numbers = value.replace(/\D/g, ""); // Remove all non-digit characters
    return numbers.replace(/(\d{3})(?=\d)/g, "$1 ").trim(); // Add space after every 3 digits
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    // Only allow changes if the input (after removing spaces) contains only digits
    const cleanedValue = inputValue.replace(/\s/g, ""); // Remove spaces for validation
    if (/^\d*$/.test(cleanedValue)) {
      setPhoneValue(formatPhoneNumber(inputValue));
    } else {
      // Revert to previous valid value if non-numeric character is entered
      e.target.value = phoneValue || "";
    }
  };

  return (
    <div className="flex flex-row gap-x-6 gap-y-4 flex-wrap items-start mb-4 text-foreground dark:text-foreground">
      <div className="max-w-md w-[528px] h-[58px] mb-4">
        <div className="mb-2 block gap-2">
          <Label
            className="text-foreground dark:text-foreground"
            htmlFor="username"
          >
            Business Name
          </Label>
        </div>
        <TextInput
          theme={inputTheme}
          id="username"
          type="text"
          icon={NameIcon}
          placeholder="Aroma Drips Coffee"
          required
          color="gray"
          disabled
        />
      </div>
      <div className="max-w-md w-[528px] h-[58px] mb-4">
        <div className="mb-2 block gap-6">
          <Label
            className="text-foreground dark:text-foreground"
            htmlFor="email4"
          >
            Your email
          </Label>
        </div>
        <TextInput
          theme={inputTheme}
          id="email4"
          type="email"
          icon={MailIcon}
          placeholder="contact@aromadrips.com"
          required
          color="gray"
          disabled
        />
      </div>
      <div className="max-w-md w-[528px] h-[58px] mb-4">
        <div className="mb-2 block">
          <Label
            className="text-foreground dark:text-foreground"
            htmlFor="Address"
          >
            Address
          </Label>
        </div>
        <TextInput
          theme={inputTheme}
          id="Address"
          type="text"
          icon={AddressIcon}
          placeholder="123 Coffee Street, Brewtown, BT 12345"
          required
          color="gray"
          disabled
        />
      </div>

      <div className="max-w-md w-[528px] h-[58px] mb-4">
        <div className="mb-2 block">
          <Label
            className="text-foreground dark:text-foreground"
            htmlFor="phone"
          >
            Phone Number
          </Label>
        </div>
        <TextInput
          theme={inputTheme}
          id="phone"
          type="tel"
          value={phoneValue}
          onChange={handlePhoneChange}
          icon={PhoneIcon}
          placeholder="123 456 7890"
          required
          className="flex-1"
          pattern="\d*"
          inputMode="numeric"
          color="gray"
          disabled
        />
      </div>
    </div>
  );
};

export default StoreInformation;
