import { useState } from "react";
import { Label, TextInput } from "flowbite-react";
import MailIcon from "../assets/icons/MailIcon";
import NameIcon from "../assets/icons/NameIcon";
import AddressIcon from "../assets/icons/AddressIcon";
import PhoneIcon from "../assets/icons/PhoneIcon";

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
    <div className="flex flex-row gap-x-6 gap-y-4 flex-wrap items-start mb-4">
      <div className="max-w-md w-[528px] h-[58px] mb-4">
        <div className="mb-2 block gap-2">
          <Label htmlFor="username">Business Name</Label>
        </div>
        <TextInput
          id="username"
          type="text"
          icon={NameIcon}
          placeholder="Aroma Drips Coffee"
          required
          disabled
        />
      </div>
      <div className="max-w-md w-[528px] h-[58px] mb-4">
        <div className="mb-2 block gap-6">
          <Label htmlFor="email4">Your email</Label>
        </div>
        <TextInput
          id="email4"
          type="email"
          icon={MailIcon}
          placeholder="contact@aromadrips.com"
          required
          disabled
        />
      </div>
      <div className="max-w-md w-[528px] h-[58px] mb-4">
        <div className="mb-2 block">
          <Label htmlFor="Address">Address</Label>
        </div>
        <TextInput
          id="Address"
          type="text"
          icon={AddressIcon}
          placeholder="123 Coffee Street, Brewtown, BT 12345"
          required
          disabled
        />
      </div>

      <div className="max-w-md w-[528px] h-[58px] mb-4">
        <div className="mb-2 block">
          <Label htmlFor="phone">Phone Number</Label>
        </div>
        <TextInput
          id="phone"
          type="tel"
          value={phoneValue}
          onChange={handlePhoneChange}
          icon={PhoneIcon}
          placeholder="123 456 7890"
          required
          className="flex-1"
          pattern="\d*"
          disabled
          inputMode="numeric"
        />
      </div>
    </div>
  );
};

export default StoreInformation;
