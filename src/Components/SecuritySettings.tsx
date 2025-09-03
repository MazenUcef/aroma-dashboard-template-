import { useState } from "react";
import { Checkbox, Label } from "flowbite-react";
import ToggleSwitch from "./ToggleSwitch";

const checkboxTheme = {
  base: "h-4 w-4 appearance-none rounded border border-gray-300  bg-[length:0.55em_0.55em] bg-center bg-no-repeat checked:border-transparent checked:bg-current checked:bg-check-icon focus:outline-none focus:ring-2 focus:ring-offset-2 dark:border-gray-600 dark:bg-gray-700 dark:checked:border-transparent dark:checked:bg-current disabled:bg-disabled dark:disabled:bg-disabled disabled:border-borderdisabled dark:disabled:border-borderdisabled",
  color: {
    default:
      "text-primary-600 focus:ring-primary-600 dark:ring-offset-gray-800 dark:focus:ring-primary-600",
    dark: "text-gray-800 focus:ring-gray-800 dark:ring-offset-gray-800 dark:focus:ring-gray-800",
    failure:
      "text-red-900 focus:ring-red-900 dark:ring-offset-red-900 dark:focus:ring-red-900",
    gray: "text-gray-900 focus:ring-gray-900 dark:ring-offset-gray-900 dark:focus:ring-gray-900",
    info: "text-cyan-800 focus:ring-cyan-800 dark:ring-offset-gray-800 dark:focus:ring-cyan-800",
    light:
      "text-gray-900 focus:ring-gray-900 dark:ring-offset-gray-900 dark:focus:ring-gray-900",
    purple:
      "text-purple-600 focus:ring-purple-600 dark:ring-offset-purple-600 dark:focus:ring-purple-600",
    success:
      "text-green-800 focus:ring-green-800 dark:ring-offset-green-800 dark:focus:ring-green-800",
    warning:
      "text-yellow-400 focus:ring-yellow-400 dark:ring-offset-yellow-400 dark:focus:ring-yellow-400",
    blue: "text-blue-700 focus:ring-blue-600 dark:ring-offset-blue-700 dark:focus:ring-blue-700",
    cyan: "text-cyan-600 focus:ring-cyan-600 dark:ring-offset-cyan-600 dark:focus:ring-cyan-600",
    green:
      "text-green-600 focus:ring-green-600 dark:ring-offset-green-600 dark:focus:ring-green-600",
    indigo:
      "text-indigo-700 focus:ring-indigo-700 dark:ring-offset-indigo-700 dark:focus:ring-indigo-700",
    lime: "text-lime-700 focus:ring-lime-700 dark:ring-offset-lime-700 dark:focus:ring-lime-700",
    pink: "text-pink-600 focus:ring-pink-600 dark:ring-offset-pink-600 dark:focus:ring-pink-600",
    red: "text-red-600 focus:ring-red-600 dark:ring-offset-red-600 dark:focus:ring-red-600",
    teal: "text-teal-600 focus:ring-teal-600 dark:ring-offset-teal-600 dark:focus:ring-teal-600",
    yellow:
      "text-yellow-400 focus:ring-yellow-400 dark:ring-offset-yellow-400 dark:focus:ring-yellow-400",
  },
  indeterminate:
    "border-transparent bg-current bg-dash-icon dark:border-transparent dark:bg-current",
};

const SecuritySettings = () => {
  const [require2FA, setRequire2FA] = useState<boolean>(true);
  const [passwordRequirements, setPasswordRequirements] = useState({
    minCharacters: true,
    uppercaseLetter: true,
    number: false,
    specialCharacter: true,
    expiration: true,
  });

  const handleRequirementChange = (
    requirement: keyof typeof passwordRequirements
  ) => {
    setPasswordRequirements((prev) => ({
      ...prev,
      [requirement]: !prev[requirement],
    }));
  };

  return (
    <div className="w-full flex flex-col">
      <div className="flex items-center mb-4">
        <h2 className="font-poppins text-[16px] font-semibold text-foreground dark:text-foreground">
          Security Settings
        </h2>
      </div>

      <div className="flex flex-col mb-4 text-foreground">
        <div className="w-full md:w-[1050px] flex justify-between items-center  rounded-lg">
          <div className="flex flex-col">
            <h2 className="font-poppins text-[14px] font-semibold mb-2">
              Two-Factor Authentication
            </h2>
            <span className="text-[12px] font-poppins text-foreground dark:text-foreground">
              Require 2FA for all admin accounts
            </span>
          </div>
          <div className="flex items-center">
            <ToggleSwitch
              isOn={!require2FA}
              onToggle={() => setRequire2FA((prev) => !prev)}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col bg-forminputs p-4 rounded-lg w-full md:w-[1050px] text-foreground">
        <div className="flex max-w-md flex-col gap-2" id="checkbox">
          <p className="text-[16px] font-semibold font-poppins">
            Password Requirements
          </p>

          <div className="flex items-center gap-2">
            <Checkbox
              theme={checkboxTheme}
              id="characters"
              checked={passwordRequirements.minCharacters}
              onChange={() => handleRequirementChange("minCharacters")}
              className="h-4 w-4 rounded border-gray-300 bg-gray-100 focus:ring-[#244937] text-checked"
            />
            <Label
              htmlFor="characters"
              className="font-poppins text-[12px] font-normal text-foreground dark:text-foreground"
            >
              Minimum 8 characters
            </Label>
          </div>

          <div className="flex items-center gap-2">
            <Checkbox
              theme={checkboxTheme}
              id="uppercase"
              checked={passwordRequirements.uppercaseLetter}
              onChange={() => handleRequirementChange("uppercaseLetter")}
              className="h-4 w-4 rounded border-gray-300 bg-gray-100 focus:ring-[#244937] text-checked"
            />
            <Label
              htmlFor="uppercase"
              className="font-poppins text-[12px] font-normal text-foreground dark:text-foreground"
            >
              At least one uppercase letter
            </Label>
          </div>

          <div className="flex items-center gap-2">
            <Checkbox
              theme={checkboxTheme}
              id="number"
              checked={passwordRequirements.number}
              onChange={() => handleRequirementChange("number")}
              disabled
              className="h-4 w-4 rounded border-gray-300 bg-gray-100 focus:ring-[#244937] text-checked disabled:text-amber-500"
            />
            <Label
              htmlFor="number"
              className=" font-poppins text-[12px] font-normal text-foreground dark:text-foreground"
            >
              At least one number
            </Label>
          </div>

          <div className="flex items-center gap-2">
            <Checkbox
              theme={checkboxTheme}
              id="special"
              checked={passwordRequirements.specialCharacter}
              onChange={() => handleRequirementChange("specialCharacter")}
              className="h-4 w-4 rounded border-gray-300 bg-gray-100 focus:ring-[#244937] text-checked"
            />
            <Label
              htmlFor="special"
              className="font-poppins text-[12px] font-normal text-foreground dark:text-foreground"
            >
              At least one special character
            </Label>
          </div>

          <div className="flex items-center gap-2">
            <Checkbox
              theme={checkboxTheme}
              id="expiration"
              checked={passwordRequirements.expiration}
              onChange={() => handleRequirementChange("expiration")}
              className="h-4 w-4 rounded border-gray-300 bg-gray-100 focus:ring-[#244937] text-checked"
            />
            <Label
              htmlFor="expiration"
              className="font-poppins text-[12px] font-normal text-foreground dark:text-foreground"
            >
              Password expiration: 90 days
            </Label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecuritySettings;
