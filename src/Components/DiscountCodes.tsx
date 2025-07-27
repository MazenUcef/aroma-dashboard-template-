import React, { useState } from "react";
import { Dropdown, DropdownItem } from "flowbite-react";
import { EllipsisVertical, CalendarDays } from "lucide-react";

interface Coupon {
  code: string;
  discount: string;
  used: number;
  start: string;
  end: string;
  active: boolean;
}
const DropDownTheme = {
  arrowIcon: "ml-2 h-4 w-4",
  content: "py-0 focus:outline-none",
  floating: {
    animation: "transition-opacity",
    arrow: {
      base: "absolute z-10 h-2 w-2 rotate-45",
      style: {
        dark: "bg-gray-900 dark:bg-gray-700",
        light: "bg-white",
        auto: "bg-white dark:bg-gray-700",
      },
      placement: "-4px",
    },
    base: "z-10 w-fit divide-y divide-gray-100 rounded shadow focus:outline-none  hover:bg-backgroundaccent dark:hover:bg-backgroundaccent",
    content:
      "py-1 text-sm text-foreground dark:text-foreground  hover:bg-backgroundaccent dark:hover:bg-backgroundaccent",
    divider: "my-1 h-px bg-background dark:bg-background",
    header: "block px-4 py-2 text-sm text-foreground dark:text-foreground",
    hidden: "invisible opacity-0",
    item: {
      container: "",
      base: "flex w-full cursor-pointer hover:bg-backgroundaccent dark:hover:bg-backgroundaccent bg-background dark:bg-background items-center justify-start px-4 text-sm text-foreground dark:text-foreground focus:bg-backgroundaccent dark:focus:bg-backgroundaccent",
      icon: "mr-2 h-4 w-4",
    },
    style: {
      dark: "bg-background text-foreground dark:bg-background",
      light: "border border-gray-200 bg-white text-gray-900",
      auto: "border border-gray-200 bg-white text-gray-900 dark:border-none dark:bg-background dark:text-white ",
    },
    target: "w-fit",
  },
  inlineWrapper: "flex items-center",
};
const DiscountCodes = () => {
  const [coupons, setCoupons] = useState<Coupon[]>([
    {
      code: "SUMMER25",
      discount: "25% OFF",
      used: 234,
      start: "Jul 7, 2025",
      end: "Aug 31, 2025",
      active: true,
    },
    {
      code: "WELCOME10",
      discount: "10% OFF",
      used: 567,
      start: "Jul 7, 2025",
      end: "Aug 31, 2025",
      active: true,
    },
    {
      code: "BDAY2025",
      discount: "30% OFF",
      used: 89,
      start: "Jul 7, 2025",
      end: "Aug 31, 2025",
      active: true,
    },
  ]);

  const toggleCouponStatus = (code: string) => {
    setCoupons((prevCoupons) =>
      prevCoupons.map((coupon) =>
        coupon.code === code ? { ...coupon, active: !coupon.active } : coupon
      )
    );
  };

  return (
    <div>
      <div className="flex flex-row items-center justify-between mb-4">
        <p className="font-poppins font-normal text-[16px] text-foreground">
          Discount Codes
        </p>
        <button className="w-[101px] h-[44px] bg-checked dark:bg-checked text-white rounded-lg">
          Add
        </button>
      </div>

      {coupons.map((coupon) => (
        <div
          key={coupon.code}
          className="flex justify-between items-center px-2 py-4 bg-forminputs dark:bg-forminputs rounded-lg mb-3"
        >
          <div>
            <div className="flex items-center gap-3">
              <span className="font-normal font-poppins text-[16px]">
                {coupon.code}
              </span>
              <span className="text-sm bg-green-100 text-green dark:text-green rounded px-2 py-0.5 font-normal">
                {coupon.discount}
              </span>
            </div>
            <p className="text-sm font-poppins text-orange dark:text-orange mt-1">
              {coupon.used} used
            </p>
          </div>

          <div className="flex items-center  gap-3 font-normal text-xs font-poppins text-custombackground">
            <div className="flex items-center gap-1 text-xs font-normal font-poppins text-custombackground">
              <CalendarDays className="w-4 h-4 text-xs font-normal font-poppins text-custombackground" />
              Starts: {coupon.start}
            </div>
            <div className="flex items-center gap-1 text-xs font-normal font-poppins text-custombackground">
              <CalendarDays className="w-4 h-4 text-xs font-normal font-poppins text-custombackground" />
              Expires: {coupon.end}
            </div>

            {/* Toggle Switch */}
            <label className="inline-flex items-center cursor-pointer relative">
              <input
                type="checkbox"
                checked={coupon.active}
                onChange={() => toggleCouponStatus(coupon.code)}
                className="sr-only peer"
              />
              <div className="w-9 h-5  bg-backgroundtertiary dark:bg-backgroundtertiary rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-switch dark:peer-checked:bg-switch relative" />
            </label>

            <Dropdown
              className="  border-b dark:border-inputborder border-inputborder  rounded-lg"
              label={
                <EllipsisVertical className="w-5 h-5 text-foreground dark:text-foreground" />
              }
              inline
              arrowIcon={false}
              theme={DropDownTheme}
            >
              <DropdownItem>Edit</DropdownItem>
              <DropdownItem>Delete</DropdownItem>
            </Dropdown>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DiscountCodes;
