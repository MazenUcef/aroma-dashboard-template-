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
    base: "z-10 w-fit divide-y divide-gray-100 rounded shadow focus:outline-none hover:bg-backgroundaccent dark:hover:bg-backgroundaccent",
    content:
      "py-1 text-sm text-foreground dark:text-foreground hover:bg-backgroundaccent dark:hover:bg-backgroundaccent",
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
      used: 239,
      start: "Jul 7, 2025",
      end: "Aug 31, 2025",
      active: true,
    },
    {
      code: "WELCOME10",
      discount: "10% OFF",
      used: 234,
      start: "Jul 7, 2025",
      end: "Aug 31, 2025",
      active: true,
    },
    {
      code: "BDAY2025",
      discount: "25% OFF",
      used: 240,
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
    <div className="sm:p-4 md:p-0">
      <div className="flex flex-row items-center justify-between mb-4">
        <p className="hidden md:block font-poppins font-semibold text-[16px] text-foreground ">
          Discount Codes
        </p>
      </div>
      {coupons.map((coupon) => (
        <div
          key={coupon.code}
          className="flex flex-col px-4 py-4  bg-forminputs dark:bg-forminputs rounded-lg mb-4 "
        >
          {/* Top row for small screens, left side for medium screens */}
          <div className="flex justify-between items-center mb-4 md:mb-4 md:justify-start md:w-auto">
            {/* Coupon Code and Discount */}
            <div className="flex items-center justify-between gap-6 md:gap-2 w-[311px] md:w-auto">
              <span className="font-semibold font-poppins text-[16px]">
                {coupon.code}
              </span>
              <span className="text-sm w-[78px] h-[24px] pt-0.5 pl-2.5 bg-green-100 text-green dark:text-green rounded font-semibold">
                {coupon.discount}
              </span>
            </div>

            {/* EllipsisVertical dropdown for small screens */}
            <div className="md:hidden">
              <Dropdown
                className="border-b dark:border-inputborder border-inputborder rounded-lg"
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

          {/* Bottom row for small screens, right side for medium screens */}
          <div className="flex  md:flex-row md:items-center md:justify-between md:gap-2 font-normal text-xs font-poppins text-custombackground w-full md:w-auto justify-between">
            {/* Used count */}
            <p className="text-sm font-poppins font-semibold text-orange dark:text-orange mb-2 md:mb-0 md:mr-auto">
              {coupon.used} used
            </p>

            {/* "Starts" date - Hidden on small screens, flex on medium and up */}
            <div className="hidden md:flex items-center gap-1 text-xs font-normal font-poppins text-custombackground">
              <CalendarDays className="w-4 h-4" />
              Starts: {coupon.start}
            </div>

            {/* Expires date */}
            <div className="flex items-center gap-1 text-xs font-normal font-poppins text-custombackground mb-2 md:mb-0">
              <CalendarDays className="w-4 h-4" />
              Expires: {coupon.end}
            </div>

            {/* Toggle Switch - Hidden on small screens, inline-flex on medium and up */}
            <label className="hidden md:inline-flex items-center cursor-pointer relative mb-2 md:mb-0">
              <input
                type="checkbox"
                checked={coupon.active}
                onChange={() => toggleCouponStatus(coupon.code)}
                className="sr-only peer"
              />
              <div className="w-9 h-5 bg-backgroundtertiary dark:bg-backgroundtertiary rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-switch dark:peer-checked:bg-switch relative" />
            </label>

            {/* EllipsisVertical dropdown for medium screens and up */}
            <div className="hidden md:block">
              <Dropdown
                className="border-b dark:border-inputborder border-inputborder rounded-lg"
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
        </div>
      ))}
    </div>
  );
};

export default DiscountCodes;
