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

          <div className="flex items-center  gap-3 font-normal text-xs font-poppins text-[#999999]">
            <div className="flex items-center gap-1 text-xs font-normal font-poppins text-[#999999]">
              <CalendarDays className="w-4 h-4 text-xs font-normal font-poppins text-[#999999]0" />
              Starts: {coupon.start}
            </div>
            <div className="flex items-center gap-1 text-xs font-normal font-poppins text-[#999999]">
              <CalendarDays className="w-4 h-4 text-xs font-normal font-poppins text-[#999999]" />
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
              <div className="w-9 h-5 bg-gray-200  rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-green relative" />
            </label>

            <Dropdown
              label={<EllipsisVertical className="w-5 h-5 text-gray-600" />}
              inline
              arrowIcon={false}
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
