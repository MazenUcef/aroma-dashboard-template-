import { useState } from "react";
import { Label, TextInput } from "flowbite-react";
import MailIcon from "../assets/icons/MailIcon";
import NameIcon from "../assets/icons/NameIcon";
import AddressIcon from "../assets/icons/AddressIcon";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

const StoreInformation = () => {
  const [value, setValue] = useState<string | undefined>();
  return (
    <div className="flex flex-row gap-x-6 gap-y-4 flex-wrap  items-start mb-4">
      <div className="max-w-md w-[528px] h-[58px] ">
        <div className="mb-2 block  gap-2">
          <Label htmlFor="username">Business Name</Label>
        </div>
        <TextInput
          id="username"
          type="text"
          icon={NameIcon}
          placeholder="Aroma Drips Coffee"
          required
        />
      </div>
      <div className="max-w-md w-[528px] h-[58px] ">
        <div className="mb-2 block gap-6">
          <Label htmlFor="email4">Your email</Label>
        </div>
        <TextInput
          id="email4"
          type="email"
          icon={MailIcon}
          placeholder="contact@aromadrips.com"
          required
        />
      </div>
      <div className="max-w-md w-[528px] h-[58px] gap-2">
        <div className="mb-2 block  ">
          <Label htmlFor="Address">Address</Label>
        </div>
        <TextInput
          id="Address"
          type="text"
          icon={AddressIcon}
          placeholder="123 Coffee Street, Brewtown, BT 12345"
          required
        />
      </div>

      <div className="max-w-md w-[528px] h-[58px] gap-2">
        <div className="mb-2 block  ">
          <Label htmlFor="phone">Phone Number</Label>
        </div>

        <PhoneInput
          className="w-full h-[43px] border border-gray-300 rounded-lg p-2 bg-white"
          id="phone"
          maxLength={12}
          placeholder="0123 4567890"
          value={value}
          onChange={setValue}
          required
          defaultCountry="EG"
        />
      </div>
    </div>
  );
};

export default StoreInformation;
