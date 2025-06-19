import React, { useState } from "react";
import ToggleSwitch from "./ToggleSwitch";
import { Checkbox, Label } from "flowbite-react";

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
        <h2 className="font-poppins text-[16px] font-semibold text-black">
          Security Settings
        </h2>
      </div>

      <div className="flex flex-col mb-4">
        <div className="w-[1050px] flex justify-between items-center h-[48px] rounded-lg">
          <div className="flex flex-col">
            <h2 className="font-poppins text-[14px] font-semibold text-black mb-2">
              Two-Factor Authentication
            </h2>
            <span className="text-[12px] text-gray-600 font-poppins">
              Require 2FA for all admin accounts
            </span>
          </div>
          <div className="flex items-center">
            <ToggleSwitch
              isOn={require2FA}
              onToggle={() => setRequire2FA((prev) => !prev)}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col bg-[#F9FAFB] p-4 rounded-lg w-[1050px]">
        <div className="flex max-w-md flex-col gap-2" id="checkbox">
          <p className="text-[16px] text-black font-semibold font-poppins">
            Password Requirements
          </p>

          <div className="flex items-center gap-2">
            <Checkbox
              id="characters"
              checked={passwordRequirements.minCharacters}
              onChange={() => handleRequirementChange("minCharacters")}
              className="h-4 w-4 rounded border-gray-300 bg-gray-100 focus:ring-[#244937] text-[#244937]"
            />
            <Label
              htmlFor="characters"
              className="text-black font-poppins text-[12px] font-normal"
            >
              Minimum 8 characters
            </Label>
          </div>

          <div className="flex items-center gap-2">
            <Checkbox
              id="uppercase"
              checked={passwordRequirements.uppercaseLetter}
              onChange={() => handleRequirementChange("uppercaseLetter")}
              className="h-4 w-4 rounded border-gray-300 bg-gray-100 focus:ring-[#244937] text-[#244937]"
            />
            <Label
              htmlFor="uppercase"
              className="text-black font-poppins text-[12px] font-normal"
            >
              At least one uppercase letter
            </Label>
          </div>

          <div className="flex items-center gap-2">
            <Checkbox
              id="number"
              checked={passwordRequirements.number}
              onChange={() => handleRequirementChange("number")}
              disabled
              className="h-4 w-4 rounded border-gray-300 bg-gray-100 focus:ring-[#244937] text-[#244937]"
            />
            <Label
              htmlFor="number"
              className="text-gray-400 font-poppins text-[12px] font-normal"
            >
              At least one number
            </Label>
          </div>

          <div className="flex items-center gap-2">
            <Checkbox
              id="special"
              checked={passwordRequirements.specialCharacter}
              onChange={() => handleRequirementChange("specialCharacter")}
              className="h-4 w-4 rounded border-gray-300 bg-gray-100 focus:ring-[#244937] text-[#244937]"
            />
            <Label
              htmlFor="special"
              className="text-black font-poppins text-[12px] font-normal"
            >
              At least one special character
            </Label>
          </div>

          <div className="flex items-center gap-2">
            <Checkbox
              id="expiration"
              checked={passwordRequirements.expiration}
              onChange={() => handleRequirementChange("expiration")}
              className="h-4 w-4 rounded border-gray-300 bg-gray-100 focus:ring-[#244937] text-[#244937]"
            />
            <Label
              htmlFor="expiration"
              className="text-black font-poppins text-[12px] font-normal"
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
