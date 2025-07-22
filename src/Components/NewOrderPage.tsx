import React, { useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Dropdown,
  DropdownItem,
  TextInput,
  Label,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
  Select,
  Textarea,
} from "flowbite-react";

import RefreshIcon from "../assets/icons/RefreshIcon";
import SearchIconN from "../assets/icons/SearchIconN";
import VectorLine from "../assets/icons/VectorLine";
import AddressIcon from "../assets/icons/AddressIcon";
import { ChevronDown } from "lucide-react";
import TrashIcon from "../assets/icons/TrashIcon";

const NewOrderPage = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([
    "Iced Coffee",
    "Hot Coffee",
  ]);
  const [selectedProductName, setSelectedProductName] = useState<string[]>([
    "Risstretto",
  ]);
  const [selectedStatus, setSelectedStatus] = useState<string>("Available");
  const [selectedExtras, setSelectedExtras] = useState<string>("Milk");
  const [quantity, setQuantity] = useState(1);

  const handleRemoveCategory = (categoryToRemove: string) => {
    setSelectedCategories(
      selectedCategories.filter((category) => category !== categoryToRemove)
    );
  };
  const handleRemoveProductName = (productNameToRemove: string) => {
    setSelectedProductName(
      selectedProductName.filter(
        (productName) => productName !== productNameToRemove
      )
    );
  };
  const handleAddCategory = (categoryToAdd: string) => {
    if (!selectedCategories.includes(categoryToAdd)) {
      setSelectedCategories([...selectedCategories, categoryToAdd]);
    }
  };
  const handleAddProductName = (productNameToAdd: string) => {
    if (!selectedProductName.includes(productNameToAdd)) {
      setSelectedProductName([...selectedProductName, productNameToAdd]);
    }
  };
  const handleStatusChange = (status: string) => {
    setSelectedStatus(status);
  };
  const handleExtraChange = (extra: string) => {
    setSelectedExtras(extra);
  };

  const decrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  const increase = () => setQuantity((prev) => prev + 1);
  const [selectedCountry, setSelectedCountry] = useState("Egypt");
  const [selectedCity, setSelectedCity] = useState("City");
  const CloseIcon = ({
    onClick,
    className,
  }: {
    onClick: (e: React.MouseEvent) => void;
    className?: string;
  }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
      className={`w-3 h-3 ${className}`}
      onClick={onClick}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );

  const breadcrampThemes = {
    root: { base: "", list: "flex items-center" },
    item: {
      base: "group flex items-center",
      chevron: "mx-1 h-4 w-4 stroke-black group-first:hidden md:mx-2",
      href: {
        off: "flex items-center text-xl font-semibold text-gray-500",
        on: "flex items-center text-xl font-semibold text-gray-700 hover:text-gray-900",
      },
      icon: "mr-2 h-4 w-4 stroke-black",
    },
  };

  const [countryCode, setCountryCode] = useState("+20");
  const [phoneNumber, setPhoneNumber] = useState("");
  const selectedItemStyle =
    "mr-2 ml-1 flex items-center justify-center bg-[#F9FAFB] border border-gray-300 rounded-lg  font-poppins text-[14px] font-semibold text-[#666666] cursor-pointer hover:bg-gray-100 w-[113px] h-[24px]";
  const TableTheme = {
    root: {
      base: "w-full text-left text-sm text-gray-500 dark:text-gray-400",
      shadow:
        "absolute left-0 top-0 -z-10 h-full w-full rounded-lg bg-white drop-shadow-md dark:bg-black",
      wrapper: "relative",
    },
    body: {
      base: "group/body",
      cell: {
        base: "p-4 w-[97.75px] h-[49px] group-first/body:group-first/row:first:rounded-tl-lg group-first/body:group-first/row:last:rounded-tr-lg group-last/body:group-last/row:first:rounded-bl-lg group-last/body:group-last/row:last:rounded-br-lg",
      },
    },
    head: {
      base: "group/head text-xs uppercase text-gray-700 dark:text-gray-400 ",
      cell: {
        base: "bg-[#F9FAFB] p-4 w-[97.75px] h-[49px] group-first/head:first:rounded-tl-lg group-first/head:last:rounded-tr-lg dark:bg-gray-700",
      },
    },
    row: {
      base: "group/row",
      hovered: "hover:bg-gray-50 dark:hover:bg-gray-600",
      striped:
        "odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700 ",
    },
  };
  const [discount, setDiscount] = useState("WELCOME10");
  const [promo, setPromo] = useState("WEL10");
  const [payment, setPayment] = useState("Visa");
  const [orderStatus, setOrderStatus] = useState("Paid");
  return (
    <div>
      <div className="mb-4 ml-6 w-[1128px] h-[40px] flex items-center flex-row justify-between mt-6">
        <Breadcrumb
          aria-label="breadcrumb"
          className="mt-2 mb-4"
          theme={breadcrampThemes.root}
        >
          <BreadcrumbItem href="#">
            <span className="font-poppins text-[20px] font-semibold text-[#333333]">
              Orders Management
            </span>
          </BreadcrumbItem>
          <BreadcrumbItem href="#">
            <span className="font-poppins text-[16px] font-semibold text-[#333333]">
              New Order
            </span>
          </BreadcrumbItem>
        </Breadcrumb>
        <div className="flex items-center gap-2">
          <Button className="bg-white hover:bg-white w-[168px] h-[40px] rounded-lg border border-[#244937]">
            <RefreshIcon width={20} height={20} strokeColor="#244937" />
            <span className="font-poppins text-[14px] font-semibold text-[#244937]">
              Reset
            </span>
          </Button>
        </div>
      </div>

      <div className="flex flex-col  gap-6 w-[1128px] rounded-lg shadow-md mb-2 ml-6 mt-6  p-6 bg-[#f9fafb]">
        <div className="flex items-center justify-center gap-6">
          <div className="flex flex-col justify-start h-[977px] w-[552px] mb-1 rounded-lg">
            <div className="flex flex-col  w-full bg-white rounded-lg gap-6 p-4">
              <p className="font-poppins text-[16px] font-semibold text-[#333333]">
                Product Selection
              </p>
              <div className="max-w-md">
                <TextInput
                  id="product-name"
                  type="text"
                  icon={SearchIconN}
                  placeholder="Product name"
                  required
                />
              </div>
              <div className="flex flex-col space-y-6">
                {/* Row 1: Category + Status */}
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
                  {/* Category */}
                  <div className="flex flex-col">
                    <label className="text-gray-900 text-lg font-poppins font-semibold text-[12px] mb-2">
                      Category
                    </label>
                    <div className="relative w-full md:w-80">
                      <Dropdown
                        label=""
                        dismissOnClick={false}
                        renderTrigger={() => (
                          <div className="flex flex-wrap w-[338px] h-[40px] items-center border border-gray-300 rounded-lg min-h-[42px] cursor-pointer">
                            {selectedCategories.map((category) => (
                              <div key={category} className={selectedItemStyle}>
                                <span>{category}</span>
                                <CloseIcon
                                  className="ml-1 flex-shrink-0 cursor-pointer text-gray-600 hover:text-gray-900"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleRemoveCategory(category);
                                  }}
                                />
                              </div>
                            ))}
                            {selectedCategories.length === 0 && (
                              <span className="text-[#666666] font-poppins text-[14px] font-semibold ml-2">
                                Select categories...
                              </span>
                            )}
                            <div className="absolute right-3 top-1/2 -translate-y-1/2">
                              <svg
                                className="w-4 h-4 text-gray-500"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M19 9l-7 7-7-7"
                                />
                              </svg>
                            </div>
                          </div>
                        )}
                      >
                        {[
                          "Espresso",
                          "Latte",
                          "Cappuccino",
                          "Americano",
                          "Iced Coffee",
                          "Hot Coffee",
                        ].map((category) => (
                          <DropdownItem
                            key={category}
                            onClick={() => handleAddCategory(category)}
                          >
                            {category}
                          </DropdownItem>
                        ))}
                      </Dropdown>
                    </div>
                  </div>

                  {/* Status */}
                  <div className="flex flex-col ">
                    <label className="text-gray-900 text-lg font-poppins font-semibold text-[12px] mb-2">
                      Status
                    </label>
                    <div className="relative w-[150px] h-[40px]">
                      <Dropdown
                        label=""
                        dismissOnClick={true}
                        renderTrigger={() => (
                          <div className="flex flex-wrap w-[150px] h-[40px] items-center border border-gray-300 rounded-lg min-h-[42px] cursor-pointer">
                            {selectedStatus && (
                              <div className={selectedItemStyle}>
                                <span className="truncate max-w-[calc(100%-16px)]">
                                  {selectedStatus}
                                </span>
                                <CloseIcon
                                  className="ml-1 flex-shrink-0 cursor-pointer text-gray-600 hover:text-gray-900"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setSelectedStatus("");
                                  }}
                                />
                              </div>
                            )}
                            {!selectedStatus && (
                              <span className="text-[#666666] font-poppins text-[14px] font-semibold ml-2">
                                Select status...
                              </span>
                            )}
                            <div className="absolute right-3 top-1/2 -translate-y-1/2">
                              <svg
                                className="w-4 h-4 text-gray-500"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M19 9l-7 7-7-7"
                                />
                              </svg>
                            </div>
                          </div>
                        )}
                      >
                        {["Available", "Unavailable", "Out of Stock"].map(
                          (status) => (
                            <DropdownItem
                              key={status}
                              onClick={() => handleStatusChange(status)}
                            >
                              {status}
                            </DropdownItem>
                          )
                        )}
                      </Dropdown>
                      {/* ...keep status dropdown code here... */}
                    </div>
                  </div>
                </div>

                {/* Row 2: Product Name + Extras */}
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
                  {/* Product Name */}
                  <div className="flex flex-col">
                    <label className="text-gray-900 text-lg font-poppins font-semibold text-[12px] mb-2">
                      Product Name
                    </label>
                    <div className="relative w-full md:w-80">
                      <Dropdown
                        label=""
                        dismissOnClick={false}
                        renderTrigger={() => (
                          <div className="flex flex-wrap w-[338px] h-[40px] items-center border border-gray-300 rounded-lg min-h-[42px] cursor-pointer">
                            {selectedProductName.map((product) => (
                              <div key={product} className={selectedItemStyle}>
                                <span className="truncate max-w-[calc(100%-16px)]">
                                  {product}
                                </span>
                                <CloseIcon
                                  className="ml-1 flex-shrink-0 cursor-pointer text-gray-600 hover:text-gray-900"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleRemoveProductName(product);
                                  }}
                                />
                              </div>
                            ))}
                            {selectedProductName.length === 0 && (
                              <span className="text-[#666666] font-poppins text-[14px] font-semibold ml-2">
                                Select products...
                              </span>
                            )}
                            <div className="absolute right-3 top-1/2 -translate-y-1/2">
                              <svg
                                className="w-4 h-4 text-gray-500"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M19 9l-7 7-7-7"
                                />
                              </svg>
                            </div>
                          </div>
                        )}
                      >
                        {[
                          "Espresso",
                          "Latte",
                          "Cappuccino",
                          "Americano",
                          "Iced Coffee",
                          "Hot Coffee",
                        ].map((productName) => (
                          <DropdownItem
                            key={productName}
                            onClick={() => handleAddProductName(productName)}
                          >
                            {productName}
                          </DropdownItem>
                        ))}
                      </Dropdown>
                      {/* ...keep product name dropdown code here... */}
                    </div>
                  </div>

                  {/* Extras */}
                  <div className="flex flex-col">
                    <label className="text-gray-900 text-lg font-poppins font-semibold text-[12px] mb-2">
                      Extras
                    </label>
                    <div className="relative w-[150px] h-[40px]">
                      <Dropdown
                        label=""
                        dismissOnClick={true}
                        renderTrigger={() => (
                          <div className="flex flex-wrap w-[150px] h-[40px] items-center border border-gray-300 rounded-lg min-h-[42px] cursor-pointer">
                            {selectedExtras && (
                              <div className={selectedItemStyle}>
                                <span className="truncate max-w-[calc(100%-16px)]">
                                  {selectedExtras}
                                </span>
                                <CloseIcon
                                  className="ml-1 flex-shrink-0 cursor-pointer text-gray-600 hover:text-gray-900"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setSelectedExtras("");
                                  }}
                                />
                              </div>
                            )}
                            {!selectedExtras && (
                              <span className="text-[#666666] font-poppins text-[14px] font-semibold ml-2">
                                Select extras...
                              </span>
                            )}
                            <div className="absolute right-3 top-1/2 -translate-y-1/2">
                              <svg
                                className="w-4 h-4 text-gray-500"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M19 9l-7 7-7-7"
                                />
                              </svg>
                            </div>
                          </div>
                        )}
                      >
                        {["Milk", "ShotEspresso", "Vanilla Syrup"].map(
                          (extra) => (
                            <DropdownItem
                              key={extra}
                              onClick={() => handleExtraChange(extra)}
                            >
                              {extra}
                            </DropdownItem>
                          )
                        )}
                      </Dropdown>
                      {/* ...keep extras dropdown code here... */}
                    </div>
                  </div>
                </div>
              </div>

              {/* Quantity Selector */}
              <div className="flex items-center space-x-4 w-[504px] h-[44px] ">
                <label className="text-[16px] font-semibold text-gray-900">
                  Quantity
                </label>
                <div className="flex items-center justify-center border rounded-md overflow-hidden shadow-sm w-[283px] h-[37px] border-[#D1D5DB]">
                  <button
                    onClick={decrease}
                    className=" pt-1 text-lg text-gray-600 bg-[#F3F4F6] hover:bg-[#F3F4F6] w-[95px] h-[37px]"
                  >
                    −
                  </button>
                  <div className="relative flex items-center px-3 py-1">
                    <input
                      type="text"
                      value={quantity}
                      readOnly
                      className="text-center text-sm focus:outline-none w-[95px] h-[37px]"
                    />
                  </div>
                  <button
                    onClick={increase}
                    className=" pt-1 text-lg text-gray-600 bg-[#F3F4F6] hover:bg-[#F3F4F6] w-[95px] h-[37px]"
                  >
                    +
                  </button>
                </div>
                <Button
                  color="dark"
                  className="bg-[#183D2B]  w-[101px] h-[44px]"
                >
                  Add
                </Button>
              </div>
            </div>

            <div className="flex flex-col h-[588px] w-full bg-white rounded-lg gap-6 mt-6 p-4">
              <div className="flex flex-row h-[22px] w-full bg-white rounded-lg gap-6 ">
                <p className="font-poppins text-[16px] font-semibold text-[#333333] ">
                  Customer Information
                </p>
              </div>
              <div className="flex max-w-md flex-row gap-4">
                <div className="w-[244px] h-[65px]">
                  <div className="mb-2 block ">
                    <Label
                      htmlFor="Name"
                      className="font-poppins text-[12px] font-semibold text-[#333333]"
                    >
                      Name
                    </Label>
                  </div>
                  <TextInput
                    id="Name"
                    type="text"
                    sizing="md"
                    placeholder="Albeir"
                    required
                  />
                </div>
                <div className="w-[244px] h-[65px]">
                  <div className="mb-2 block ">
                    <Label
                      htmlFor="LastName"
                      className="font-poppins text-[12px] font-semibold text-[#333333]"
                    >
                      Last
                    </Label>
                  </div>
                  <TextInput
                    id="LastName"
                    type="text"
                    sizing="md"
                    placeholder="Latef"
                    required
                  />
                </div>
              </div>
              <div className="max-w-md w-[504px] h-[65px]">
                <div className="mb-2 block">
                  <Label
                    htmlFor="email4"
                    className="font-poppins text-[12px] font-semibold text-[#333333]"
                  >
                    Contact Email
                  </Label>
                </div>
                <TextInput
                  id="email4"
                  type="email"
                  placeholder="AlbeirLatef@aromadrips.com"
                  required
                />
              </div>
              <div className="max-w-md">
                <label
                  htmlFor="phone"
                  className="block mb-2 font-poppins text-[12px] font-semibold text-[#333333] "
                >
                  Phone Number
                </label>
                <div className="flex w-full overflow-hidden rounded-md border border-gray-300 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500">
                  {/* Country Code Section */}
                  <div className="flex items-center bg-gray-100 px-3 w-[99px] h-[40px]">
                    <div className="shrink-0 z-10 inline-flex items-center  text-sm font-medium text-center text-gray-900 bg-gray-100 ">
                      <svg
                        fill="none"
                        aria-hidden="true"
                        className="h-4 w-4 me-2"
                        viewBox="0 0 20 15"
                      >
                        <rect
                          width="19.6"
                          height="14"
                          y=".5"
                          fill="#fff"
                          rx="2"
                        />
                        <mask
                          id="a"
                          style={{ maskType: "luminance" }}
                          width="20"
                          height="15"
                          x="0"
                          y="0"
                          maskUnits="userSpaceOnUse"
                        >
                          <rect
                            width="19.6"
                            height="14"
                            y=".5"
                            fill="#fff"
                            rx="2"
                          />
                        </mask>
                        <g mask="url(#a)">
                          <path fill="#C83126" d="M0 .5h19.6v4.667H0z" />
                          <path fill="#fff" d="M0 5.167h19.6v4.666H0z" />
                          <path fill="#000" d="M0 9.833h19.6V14.5H0z" />
                          <path
                            fill="#FFC107"
                            fill-rule="evenodd"
                            d="M6.533 5.167L8.4 7.033l1.867-1.866h-3.734zm0 0L8.4 7.033l1.867-1.866h-3.734zm2.334 2.333a.778.778 0 100-1.555.778.778 0 000 1.555z"
                            clip-rule="evenodd"
                          />
                        </g>
                      </svg>
                    </div>
                    <div className="relative ">
                      <select
                        className="  bg-transparent text-sm focus:outline-none border-none text-gray-900 font-poppins text-[14px] font-normal pr-6 appearance-none relative"
                        value={countryCode}
                        onChange={(e) => setCountryCode(e.target.value)}
                        required
                      >
                        <option value="+20">+20</option>
                        <option value="+1">+1</option>
                        <option value="+44">+44</option>
                      </select>
                      {/* Custom Dropdown Arrow */}
                      <div className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 font-bold">
                        <svg
                          className="w-4 h-4 text-black"
                          fill="none"
                          stroke="black"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M19 9l-7 7-7-7"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Phone Number Input */}
                  <input
                    id="phone"
                    type="text"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="w-full px-4 py-2 focus:outline-none"
                    placeholder="123 4567 890"
                  />
                </div>
              </div>
              <VectorLine />
              <div className="flex flex-col gap-4">
                <label
                  htmlFor="address"
                  className="block mb-2 text-[16px] font-poppins font-semibold "
                >
                  Customer Address
                </label>
              </div>
              <div className="flex space-x-4">
                {/* Country Dropdown */}
                <div className="relative w-48">
                  <Dropdown
                    label=""
                    renderTrigger={() => (
                      <div className="flex items-center justify-between border border-gray-300 rounded-lg px-4 py-2 w-full cursor-pointer">
                        <div className="flex items-center space-x-2">
                          <div className="shrink-0 z-10 inline-flex items-center  text-sm font-medium text-center text-gray-900 bg-gray-100 ">
                            <svg
                              fill="none"
                              aria-hidden="true"
                              className="h-4 w-4 me-2"
                              viewBox="0 0 20 15"
                            >
                              <rect
                                width="19.6"
                                height="14"
                                y=".5"
                                fill="#fff"
                                rx="2"
                              />
                              <mask
                                id="a"
                                style={{ maskType: "luminance" }}
                                width="20"
                                height="15"
                                x="0"
                                y="0"
                                maskUnits="userSpaceOnUse"
                              >
                                <rect
                                  width="19.6"
                                  height="14"
                                  y=".5"
                                  fill="#fff"
                                  rx="2"
                                />
                              </mask>
                              <g mask="url(#a)">
                                <path fill="#C83126" d="M0 .5h19.6v4.667H0z" />
                                <path fill="#fff" d="M0 5.167h19.6v4.666H0z" />
                                <path fill="#000" d="M0 9.833h19.6V14.5H0z" />
                                <path
                                  fill="#FFC107"
                                  fill-rule="evenodd"
                                  d="M6.533 5.167L8.4 7.033l1.867-1.866h-3.734zm0 0L8.4 7.033l1.867-1.866h-3.734zm2.334 2.333a.778.778 0 100-1.555.778.778 0 000 1.555z"
                                  clip-rule="evenodd"
                                />
                              </g>
                            </svg>
                          </div>
                          <span className="text-gray-800 font-medium">
                            {selectedCountry}
                          </span>
                        </div>
                        <ChevronDown className="h-4 w-4 text-gray-600" />
                      </div>
                    )}
                  >
                    <DropdownItem onClick={() => setSelectedCountry("Egypt")}>
                      <div className="shrink-0 z-10 inline-flex items-center  text-sm font-medium text-center text-gray-900 bg-gray-100 ">
                        <svg
                          fill="none"
                          aria-hidden="true"
                          className="h-4 w-4 me-2"
                          viewBox="0 0 20 15"
                        >
                          <rect
                            width="19.6"
                            height="14"
                            y=".5"
                            fill="#fff"
                            rx="2"
                          />
                          <mask
                            id="a"
                            style={{ maskType: "luminance" }}
                            width="20"
                            height="15"
                            x="0"
                            y="0"
                            maskUnits="userSpaceOnUse"
                          >
                            <rect
                              width="19.6"
                              height="14"
                              y=".5"
                              fill="#fff"
                              rx="2"
                            />
                          </mask>
                          <g mask="url(#a)">
                            <path fill="#C83126" d="M0 .5h19.6v4.667H0z" />
                            <path fill="#fff" d="M0 5.167h19.6v4.666H0z" />
                            <path fill="#000" d="M0 9.833h19.6V14.5H0z" />
                            <path
                              fill="#FFC107"
                              fill-rule="evenodd"
                              d="M6.533 5.167L8.4 7.033l1.867-1.866h-3.734zm0 0L8.4 7.033l1.867-1.866h-3.734zm2.334 2.333a.778.778 0 100-1.555.778.778 0 000 1.555z"
                              clip-rule="evenodd"
                            />
                          </g>
                        </svg>
                      </div>{" "}
                      Egypt
                    </DropdownItem>
                    <DropdownItem onClick={() => setSelectedCountry("USA")}>
                      <div className="shrink-0 z-10 inline-flex items-center  text-sm font-medium text-center text-gray-900 bg-gray-100 ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 247 130"
                          className="h-4 w-4 me-2"
                        >
                          <rect width="247" height="130" fill="#b22234" />
                          <g fill="#fff">
                            <rect y="10" width="247" height="10" />
                            <rect y="30" width="247" height="10" />
                            <rect y="50" width="247" height="10" />
                            <rect y="70" width="247" height="10" />
                            <rect y="90" width="247" height="10" />
                            <rect y="110" width="247" height="10" />
                          </g>
                          <rect width="98.8" height="70" fill="#3c3b6e" />
                          <g fill="#fff">
                            <g id="s">
                              <polygon points="2.5,0 3.09,1.54 4.76,1.54 3.41,2.5 3.91,4.05 2.5,3.09 1.09,4.05 1.59,2.5 0.24,1.54 1.91,1.54" />
                            </g>
                            <g transform="scale(5.76)">
                              <use href="#s" x="2" y="4" />
                              <use href="#s" x="4" y="4" />
                              <use href="#s" x="6" y="4" />
                              <use href="#s" x="8" y="4" />
                              <use href="#s" x="10" y="4" />

                              <use href="#s" x="1" y="5" />
                              <use href="#s" x="3" y="5" />
                              <use href="#s" x="5" y="5" />
                              <use href="#s" x="7" y="5" />
                              <use href="#s" x="9" y="5" />
                              <use href="#s" x="11" y="5" />

                              <use href="#s" x="2" y="6" />
                              <use href="#s" x="4" y="6" />
                              <use href="#s" x="6" y="6" />
                              <use href="#s" x="8" y="6" />
                              <use href="#s" x="10" y="6" />

                              <use href="#s" x="1" y="7" />
                              <use href="#s" x="3" y="7" />
                              <use href="#s" x="5" y="7" />
                              <use href="#s" x="7" y="7" />
                              <use href="#s" x="9" y="7" />
                              <use href="#s" x="11" y="7" />

                              <use href="#s" x="2" y="8" />
                              <use href="#s" x="4" y="8" />
                              <use href="#s" x="6" y="8" />
                              <use href="#s" x="8" y="8" />
                              <use href="#s" x="10" y="8" />

                              <use href="#s" x="1" y="9" />
                              <use href="#s" x="3" y="9" />
                              <use href="#s" x="5" y="9" />
                              <use href="#s" x="7" y="9" />
                              <use href="#s" x="9" y="9" />
                              <use href="#s" x="11" y="9" />
                            </g>
                          </g>
                        </svg>
                      </div>{" "}
                      USA
                    </DropdownItem>
                    <DropdownItem onClick={() => setSelectedCountry("UK")}>
                      <div className="shrink-0 z-10 inline-flex items-center  text-sm font-medium text-center text-gray-900 bg-gray-100 ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 60 30"
                          className="h-4 w-4 me-2"
                        >
                          <rect width="60" height="30" fill="#012169" />
                          <path
                            d="M0,0 L60,30 M60,0 L0,30"
                            stroke="#fff"
                            stroke-width="6"
                          />
                          <path
                            d="M0,0 L60,30 M60,0 L0,30"
                            stroke="#C8102E"
                            stroke-width="4"
                          />
                          <rect x="25" width="10" height="30" fill="#fff" />
                          <rect y="10" width="60" height="10" fill="#fff" />
                          <rect x="26.5" width="7" height="30" fill="#C8102E" />
                          <rect y="11.5" width="60" height="7" fill="#C8102E" />
                        </svg>
                      </div>{" "}
                      UK
                    </DropdownItem>
                  </Dropdown>
                </div>

                {/* City Dropdown */}
                <div className="relative w-48">
                  <Dropdown
                    label=""
                    renderTrigger={() => (
                      <div className="flex items-center justify-between border border-gray-300 rounded-lg px-4 py-2 w-full cursor-pointer">
                        <span className="text-gray-800 font-medium">
                          {selectedCity}
                        </span>
                        <ChevronDown className="h-4 w-4 text-gray-600" />
                      </div>
                    )}
                  >
                    <DropdownItem onClick={() => setSelectedCity("Cairo")}>
                      Cairo
                    </DropdownItem>
                    <DropdownItem onClick={() => setSelectedCity("Alexandria")}>
                      Alexandria
                    </DropdownItem>
                    <DropdownItem onClick={() => setSelectedCity("Giza")}>
                      Giza
                    </DropdownItem>
                  </Dropdown>
                </div>
              </div>
              <div className="max-w-md w-[528px] h-[58px] mb-4">
                <div className="mb-2 block">
                  <Label
                    htmlFor="Address"
                    className="font-poppins text-[12px] font-semibold text-[#333333]"
                  >
                    Address
                  </Label>
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
            </div>
          </div>
          <div className="flex flex-col justify-start h-[977px] w-[552px] bg-[#f9fafb] mb-1 rounded-lg gap-6">
            <div className="flex flex-col rounded-lg gap-6 p-4 bg-white">
              {/* Order Details Section */}
              <div className="w-[504px] flex flex-col bg-white rounded-lg gap-6">
                <div className="w-[504px] h-[22px]">
                  <p className="font-poppins font-semibold text-[16px]">
                    Order Details
                  </p>
                </div>
                <div className="w-[504px]">
                  <Table hoverable theme={TableTheme}>
                    <TableHead>
                      <TableRow className="w-[97.75px] h-[49px]">
                        <TableHeadCell className="font-poppins font-semibold text-[14px] text-[#666666]">
                          Product
                        </TableHeadCell>
                        <TableHeadCell className="font-poppins font-semibold text-[14px] text-[#666666]">
                          Item
                        </TableHeadCell>
                        <TableHeadCell className="font-poppins font-semibold text-[14px] text-[#666666]">
                          Extras
                        </TableHeadCell>
                        <TableHeadCell className="font-poppins font-semibold text-[14px] text-[#666666]">
                          Price
                        </TableHeadCell>
                        <TableHeadCell className="font-poppins font-semibold text-[14px] text-[#666666]">
                          Total
                        </TableHeadCell>
                        <TableHeadCell className="font-poppins font-semibold text-[14px] text-[#666666]">
                          Act
                        </TableHeadCell>
                      </TableRow>
                    </TableHead>
                    <TableBody className="divide-y">
                      {/* Table Rows... */}
                      <TableRow className="bg-white border-gray-200">
                        <TableCell className="whitespace-nowrap font-poppins text-[12px] text-[#666666]">
                          Risstretto
                        </TableCell>
                        <TableCell>1</TableCell>
                        <TableCell>Milk</TableCell>
                        <TableCell>65</TableCell>
                        <TableCell>65</TableCell>
                        <TableCell>
                          <TrashIcon />
                        </TableCell>
                      </TableRow>
                      <TableRow className="bg-white dark:border-gray-700 border-gray-200 dark:bg-gray-800">
                        <TableCell className="whitespace-nowrap font-poppins font-normal test-[12px] text-[#666666] dark:text-white">
                          Mango(S)
                        </TableCell>
                        <TableCell>2</TableCell>
                        <TableCell className="whitespace-nowrap">
                          No Extras
                        </TableCell>
                        <TableCell>35</TableCell>
                        <TableCell>70</TableCell>
                        <TableCell>
                          <a
                            href="#"
                            className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                          >
                            <TrashIcon />
                          </a>
                        </TableCell>
                      </TableRow>
                      <TableRow className="bg-white dark:border-gray-700 border-gray-200 dark:bg-gray-800">
                        <TableCell className="whitespace-nowrap font-poppins font-normal test-[12px] text-[#666666] dark:text-white">
                          Cold Bre..
                        </TableCell>
                        <TableCell>1</TableCell>
                        <TableCell>No Extras</TableCell>
                        <TableCell>55</TableCell>
                        <TableCell>55</TableCell>
                        <TableCell>
                          <a
                            href="#"
                            className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                          >
                            <TrashIcon />
                          </a>
                        </TableCell>
                      </TableRow>
                      <TableRow className="bg-white dark:border-gray-700 border-gray-200 dark:bg-gray-800">
                        <TableCell className="whitespace-nowrap font-poppins font-normal test-[12px] text-[#666666] dark:text-white">
                          Mojito
                        </TableCell>
                        <TableCell>1</TableCell>
                        <TableCell>No Extras</TableCell>
                        <TableCell>60</TableCell>
                        <TableCell>60</TableCell>
                        <TableCell>
                          <a
                            href="#"
                            className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                          >
                            <TrashIcon />
                          </a>
                        </TableCell>
                      </TableRow>
                      {/* Add more rows as needed */}
                    </TableBody>
                  </Table>
                </div>
                <VectorLine />
              </div>

              {/* Text Under the Table */}
              <div className="w-[504px]  flex flex-col bg-white rounded-lg gap-4 ">
                <p className="font-poppins font-semibold text-[16px]">
                  Payment Method
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-xl">
                  {/* Discount */}
                  <div className="flex flex-col">
                    <Label
                      htmlFor="discount"
                      className="mb-1 font-semibold text-[14px] font-poppins text-[#4D4D4D]"
                    >
                      Discount
                    </Label>
                    <Select
                      id="discount"
                      value={discount}
                      onChange={(e) => setDiscount(e.target.value)}
                      className="rounded-lg font-normal text-[14px] font-poppins text-[#666666] "
                    >
                      <option
                        value="WELCOME10"
                        className="font-normal text-[14px] font-poppins text-[#666666]"
                      >
                        WELCOME10
                      </option>
                      <option
                        value="SAVE15"
                        className="font-normal text-[14px] font-poppins text-[#666666]"
                      >
                        SAVE15
                      </option>
                    </Select>
                  </div>

                  {/* Promo */}
                  <div className="flex flex-col">
                    <Label
                      htmlFor="promo"
                      className="mb-1 font-semibold text-[14px] font-poppins text-[#4D4D4D]"
                    >
                      Promo
                    </Label>
                    <TextInput
                      id="promo"
                      type="text"
                      value={promo}
                      onChange={(e) => setPromo(e.target.value)}
                      className="rounded-lg font-normal text-[14px] font-poppins text-[#666666]"
                    />
                  </div>

                  {/* Payment */}
                  <div className="flex flex-col">
                    <Label
                      htmlFor="payment"
                      className="mb-1 font-semibold text-[14px] font-poppins text-[#4D4D4D]"
                    >
                      Payment
                    </Label>
                    <Select
                      id="payment"
                      value={payment}
                      onChange={(e) => setPayment(e.target.value)}
                      className="rounded-lg font-normal text-[14px] font-poppins text-[#666666]"
                    >
                      <option
                        value="Visa"
                        className="font-normal text-[14px] font-poppins text-[#666666]"
                      >
                        Visa
                      </option>
                      <option
                        value="Mastercard"
                        className="font-normal text-[14px] font-poppins text-[#666666]"
                      >
                        Mastercard
                      </option>
                      <option
                        value="Paypal"
                        className="font-normal text-[14px] font-poppins text-[#666666]"
                      >
                        Paypal
                      </option>
                    </Select>
                  </div>

                  {/* Order Status */}
                  <div className="flex flex-col">
                    <Label
                      htmlFor="orderStatus"
                      className="mb-1 font-semibold text-[14px] font-poppins text-[#4D4D4D]"
                    >
                      Order Status
                    </Label>
                    <Select
                      id="orderStatus"
                      value={orderStatus}
                      onChange={(e) => setOrderStatus(e.target.value)}
                      className="rounded-lg font-normal text-[14px] font-poppins text-[#666666]"
                    >
                      <option
                        value="Paid"
                        className="font-normal text-[14px] font-poppins text-[#666666]"
                      >
                        Paid
                      </option>
                      <option
                        value="Pending"
                        className="font-normal text-[14px] font-poppins text-[#666666]"
                      >
                        Pending
                      </option>
                      <option
                        value="Failed"
                        className="font-normal text-[14px] font-poppins text-[#666666]"
                      >
                        Failed
                      </option>
                    </Select>
                  </div>
                  <VectorLine />
                </div>
                {/* OrderSummery */}
                <div>
                  <p className="font-poppins font-semibold text-[16px]">
                    Order Summary
                  </p>
                  <div className="w-[504px] bg-white rounded-lg p-2 ">
                    {/* Subtotal */}
                    <div className="flex justify-between mb-2">
                      <p className="text-[12px] font-semibold font-poppins">
                        Subtotal :
                      </p>
                      <p className="text-[12px] font-normal font-poppins">
                        EGP 250.00
                      </p>
                    </div>

                    {/* Discount */}
                    <div className="flex justify-between mb-2">
                      <p className="text-[12px] font-semibold font-poppins">
                        Discount (10%):
                      </p>
                      <p className="text-[12px] font-normal font-poppins ">
                        - EGP 25.00
                      </p>
                    </div>

                    {/* VAT */}
                    <div className="flex justify-between mb-4">
                      <p className="text-[12px] font-semibold font-poppins">
                        VAT (14%):
                      </p>
                      <p className="text-[12px] font-normal font-poppins">
                        + EGP 31.50
                      </p>
                    </div>

                    <VectorLine />

                    {/* Total */}
                    <div className="flex justify-between items-center  mt-4 rounded">
                      <p className="text-[16px] font-semibold font-poppins">
                        Total Amount:
                      </p>
                      <p className="text-[16px] font-semibold font-poppins text-gray-900">
                        256.50 EGP
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col rounded-lg gap-6 p-4 bg-white">
              <div className=" bg-white">
                <div className="max-w-md">
                  <div className="mb-2 block">
                    <Label
                      htmlFor="comment"
                      className="font-poppins text-[16px] font-semibold text-[#244937]"
                    >
                      Order Notes
                    </Label>
                  </div>
                  <Textarea
                    id="comment"
                    placeholder="Write text here ..."
                    required
                    rows={4}
                    className="w-[504px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-end justify-end mb-2 gap-6">
          <button
            type="button"
            className="border border-green text-green px-6 py-2 rounded-md text-sm font-medium w-[168px]"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-green text-white px-6 py-2 rounded-md text-sm font-medium w-[168px]"
          >
            Create Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewOrderPage;
