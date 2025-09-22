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
import PlusIcon from "../assets/icons/PlusIcon";

const EditOrder = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([
    "Iced Coffee",
    "Hot Coffee",
  ]);
  const [selectedProductName, setSelectedProductName] = useState<string[]>([
    "Risstretto",
  ]);
  const [selectedStatus, setSelectedStatus] = useState<string>("Available");
  const [selectedExtras, setSelectedExtras] = useState<string>("Milk");
  const [quantity, setQuantity] = useState<number>(2);

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

  const breadcrampTheme = {
    root: {
      base: "",
      list: "flex items-center",
    },
    item: {
      base: "group flex items-center",
      chevron:
        "mx-1 h-4 w-4 text-foreground dark:text-foreground group-first:hidden md:mx-2",
      href: {
        off: "flex items-center text-sm font-medium text-foreground dark:text-foreground",
        on: "flex items-center text-sm font-medium text-foreground hover:text-foreground dark:text-foreground dark:hover:text-foreground",
      },
      icon: "mr-2 h-4 w-4",
    },
  };

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

  const [countryCode, setCountryCode] = useState("+20");
  const [phoneNumber, setPhoneNumber] = useState("");
  const selectedItemStyle =
    "mr-2 ml-1 flex items-center justify-center bg-backgroundtertiary dark:bg-backgroundtertiary border border-inputborder rounded-lg  font-poppins text-[14px] font-semibold text-foreground cursor-pointer hover:bg-inputborder w-[113px] h-[24px]";
  const TableTheme = {
    root: {
      base: "w-full text-left text-sm text-gray-500 dark:text-gray-400",
      shadow:
        "absolute left-0 top-0 -z-10 h-full w-full rounded-lg bg-background drop-shadow-md dark:bg-black",
      wrapper: "relative",
    },
    body: {
      base: "group/body",
      cell: {
        base: "p-4 w-[97.75px] h-[49px] group-first/body:group-first/row:first:rounded-tl-lg group-first/body:group-first/row:last:rounded-tr-lg group-last/body:group-last/row:first:rounded-bl-lg group-last/body:group-last/row:last:rounded-br-lg",
      },
    },
    head: {
      base: "group/head text-xs uppercase text-gray-700 dark:text-gray-400",
      cell: {
        base: "bg-forminputs p-4 w-[97.75px] h-[49px] group-first/head:first:rounded-tl-lg group-first/head:last:rounded-tr-lg dark:bg-forminputs",
      },
    },
    row: {
      base: "group/row",
      hovered:
        "hover:bg-tabhover dark:hover:bg-tabhover text-foreground dark:text-foreground",
      striped:
        "odd:bg-background even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700",
    },
  };
  const [discount, setDiscount] = useState("WELCOME10");
  const [promo, setPromo] = useState("WEL10");
  const [payment, setPayment] = useState("Visa");
  const [orderStatus, setOrderStatus] = useState("Paid");

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };
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
        light: "border border-inputborder dark:border-inputborder",
        auto: "border border-inputborder dark:border-inputborder bg-white text-gray-900 dark:border-none dark:bg-background dark:text-white ",
      },
      target: "w-fit",
    },
    inlineWrapper: "flex items-center",
  };
  const selectTheme = {
    base: "flex ",
    addon:
      "inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-200 px-3 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-600 dark:text-gray-400 ",
    field: {
      base: "relative w-full  ",
      icon: {
        base: "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3",
        svg: "h-5 w-5 text-gray-500 dark:text-gray-400",
      },
      select: {
        base: "block w-full appearance-none border pr-10 focus:outline-none focus:ring-0 disabled:cursor-not-allowed disabled:opacity-50 ",
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
        sizes: {
          sm: "p-2 sm:text-xs",
          md: "p-2.5 text-sm",
          lg: "p-4 sm:text-base",
        },
        colors: {
          gray: "border border-inputborder focus:border-inputborder dark:focus:border-inputborder dark:border-inputborder bg-forminputs dark:bg-forminputs text-foreground dark:text-foreground bg-[length:0.75em_0.75em] bg-[position:right_12px_center] bg-no-repeat bg-arrow-down-icon ",
          info: " border-cyan-500 bg-cyan-50 text-cyan-900 placeholder-cyan-700 focus:border-cyan-500 focus:ring-cyan-500 dark:border-cyan-400 dark:bg-cyan-100 dark:focus:border-cyan-500 dark:focus:ring-cyan-500 bg-[length:0.75em_0.75em] bg-[position:right_12px_center] bg-no-repeat bg-arrow-down-icon",
          failure:
            " border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100 dark:focus:border-red-500 dark:focus:ring-red-500 bg-[length:0.75em_0.75em] bg-[position:right_12px_center] bg-no-repeat bg-arrow-down-icon",
          warning:
            " border-yellow-500 bg-yellow-50 text-yellow-900 placeholder-yellow-700 focus:border-yellow-500 focus:ring-yellow-500 dark:border-yellow-400 dark:bg-yellow-100 dark:focus:border-yellow-500 dark:focus:ring-yellow-500 bg-[length:0.75em_0.75em] bg-[position:right_12px_center] bg-no-repeat bg-arrow-down-icon",
          success:
            " border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500 dark:border-green-400 dark:bg-green-100 dark:focus:border-green-500 dark:focus:ring-green-500 bg-[length:0.75em_0.75em] bg-[position:right_12px_center] bg-no-repeat bg-arrow-down-icon",
        },
      },
    },
  };
  return (
    <div className="!text-foreground !dark:text-foreground w-[375px] md:w-[1128px] ">
      {/* Main header section */}
      <div className="m-6  flex flex-row items-center justify-between ">
        {/* Breadcrumb */}
        <Breadcrumb
          aria-label="breadcrumb"
          className="mt-2 mb-4 md:mb-0"
          theme={breadcrampTheme.root}
        >
          <BreadcrumbItem theme={breadcrampTheme.item} href="#">
            <span className="font-poppins text-[16px] md:text-[20px] font-semibold">
              Orders Management
            </span>
          </BreadcrumbItem>
          <BreadcrumbItem theme={breadcrampTheme.item} href="#">
            <span className="font-poppins text-[14px] md:text-[16px] font-semibold">
              Edit Order
            </span>
          </BreadcrumbItem>
        </Breadcrumb>

        {/* Buttons */}
        <div className="flex items-center">
          {/* Small screen icon button */}
          <button className="md:hidden w-9 h-9 flex items-center justify-center  bg-white">
            {/* Inline your SVG here */}
            <svg
              width={36}
              height={36}
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_dii_4205_51324)">
                <path
                  d="M2 9C2 4.58172 5.58172 1 10 1H26C30.4183 1 34 4.58172 34 9V25C34 29.4183 30.4183 33 26 33H10C5.58172 33 2 29.4183 2 25V9Z"
                  fill="white"
                />
                <path
                  d="M10 1.5H26C30.1421 1.5 33.5 4.85786 33.5 9V25C33.5 29.1421 30.1421 32.5 26 32.5H10C5.85786 32.5 2.5 29.1421 2.5 25V9C2.5 4.85786 5.85786 1.5 10 1.5Z"
                  stroke="#244937"
                />
                <path
                  d="M11.332 15.6667C11.332 15.6667 11.4129 15.1005 13.7561 12.7574C16.0992 10.4142 19.8982 10.4142 22.2413 12.7574C23.0715 13.5875 23.6076 14.6005 23.8495 15.6667M11.332 15.6667V11.6667M11.332 15.6667H15.332M24.6654 18.3333C24.6654 18.3333 24.5845 18.8995 22.2413 21.2426C19.8982 23.5858 16.0992 23.5858 13.7561 21.2426C12.9259 20.4125 12.3898 19.3995 12.1479 18.3333M24.6654 18.3333V22.3333M24.6654 18.3333H20.6654"
                  stroke="#244937"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <filter
                  id="filter0_dii_4205_51324"
                  x={0}
                  y={0}
                  width={36}
                  height={36}
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity={0} result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy={1} />
                  <feGaussianBlur stdDeviation={1} />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.0392157 0 0 0 0 0.0496732 0 0 0 0 0.0705882 0 0 0 0.05 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_4205_51324"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_4205_51324"
                    result="shape"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy={-2} />
                  <feComposite
                    in2="hardAlpha"
                    operator="arithmetic"
                    k2={-1}
                    k3={1}
                  />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.0392157 0 0 0 0 0.0496732 0 0 0 0 0.0705882 0 0 0 0.05 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="shape"
                    result="effect2_innerShadow_4205_51324"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feMorphology
                    radius={1}
                    operator="erode"
                    in="SourceAlpha"
                    result="effect3_innerShadow_4205_51324"
                  />
                  <feOffset />
                  <feComposite
                    in2="hardAlpha"
                    operator="arithmetic"
                    k2={-1}
                    k3={1}
                  />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.0392157 0 0 0 0 0.0496732 0 0 0 0 0.0705882 0 0 0 0.18 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="effect2_innerShadow_4205_51324"
                    result="effect3_innerShadow_4205_51324"
                  />
                </filter>
              </defs>
            </svg>
          </button>

          {/* MD+ Reset button */}
          <button className="hidden md:flex items-center justify-center border border-arrowcolor text-arrowcolor px-6 py-2 text-sm font-medium w-[168px] h-[40px] rounded-lg gap-1">
            <RefreshIcon width={34} height={34} strokeColor="currentColor" />
            <span className="font-poppins text-[14px] font-semibold">
              Reset
            </span>
          </button>
        </div>
      </div>

      <div className="flex flex-col w-full gap-6 md:w-[1128px] rounded-lg mb-2 ml-6 bg-backgroundaccent ">
        {/* Sections left + right */}
        <div className="flex flex-col sm:flex-col md:flex-row flex-wrap items-center justify-center gap-4 sm:gap-6 lg:gap-8 w-full">
          {/* left section */}
          <div className="flex flex-col h-[-webkit-fill-available] justify-start w-full md:w-[552px] bg-backgroundaccent mb-1 rounded-lg gap-6 flex-1">
            <div className="flex flex-col w-[343px] md:w-full bg-background rounded-lg gap-6 p-4">
              <p className="font-poppins text-[16px] font-semibold">
                Product Selection
              </p>
              <div className="w-full md:max-w-md">
                <TextInput
                  id="product-name"
                  type="text"
                  icon={SearchIconN}
                  placeholder="Product name"
                  required
                  theme={inputTheme}
                  className="w-full md:w-[504px] h-[40px] bg-forminputs dark:bg-forminputs border border-inputborder dark:border-inputborder rounded-lg !text-foreground !dark:!text-foreground"
                />
              </div>
              <div className="flex flex-col space-y-6 !text-textinput !dark:text-textinput">
                {/* Row 1: Category + Status */}
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
                  {/* Category */}
                  <div className="flex flex-col">
                    <label className="text-lg font-poppins font-semibold text-[12px] mb-2 text-textinput dark:text-textinput">
                      Category
                    </label>
                    <div className="relative w-full md:w-80">
                      <Dropdown
                        theme={DropDownTheme}
                        label=""
                        dismissOnClick={false}
                        renderTrigger={() => (
                          <div className="flex flex-wrap w-full md:w-[338px] h-[40px] items-center border border-inputborder dark:border-inputborder  rounded-lg min-h-[42px] cursor-pointer bg-forminputs dark:bg-forminputs ">
                            {selectedCategories.map((category) => (
                              <div key={category} className={selectedItemStyle}>
                                <span>{category}</span>
                                <CloseIcon
                                  className="ml-1 flex-shrink-0 cursor-pointer text-textinput dark:text-textinput hover:text-gray-900"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleRemoveCategory(category);
                                  }}
                                />
                              </div>
                            ))}
                            {selectedCategories.length === 0 && (
                              <span className="font-poppins text-[14px] font-semibold ml-2">
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
                  <div className="flex flex-col">
                    <label className="text-lg font-poppins font-semibold text-[12px] mb-2">
                      Status
                    </label>
                    <div className="relative w-full md:w-[150px] h-[40px]">
                      <Dropdown
                        theme={DropDownTheme}
                        label=""
                        dismissOnClick={true}
                        renderTrigger={() => (
                          <div className="flex flex-wrap w-full md:w-[150px] h-[40px] items-center rounded-lg min-h-[42px] cursor-pointer bg-forminputs dark:bg-forminputs border border-inputborder dark:border-inputborder">
                            {selectedStatus && (
                              <div className={selectedItemStyle}>
                                <span className="truncate max-w-[calc(100%-16px)]">
                                  {selectedStatus}
                                </span>
                                <CloseIcon
                                  className="ml-1 flex-shrink-0 cursor-pointer text-textinput dark:text-textinput hover:text-gray-900"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setSelectedStatus("");
                                  }}
                                />
                              </div>
                            )}
                            {!selectedStatus && (
                              <span className="font-poppins text-[14px] font-semibold ml-2">
                                Select status...
                              </span>
                            )}
                            <div className="absolute right-3 top-1/2 -translate-y-1/2">
                              <svg
                                className="w-4 h-4 text-textinput dark:text-textinput"
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
                    </div>
                  </div>
                </div>

                {/* Row 2: Product Name + Extras */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Product Name */}
                  <div className="flex flex-col w-[240px]">
                    <label className="text-lg font-poppins font-semibold text-[12px] mb-2">
                      Product Name
                    </label>
                    <div className="relative w-full">
                      <Dropdown
                        theme={DropDownTheme}
                        label=""
                        dismissOnClick={false}
                        renderTrigger={() => (
                          <div className="flex flex-wrap w-full md:w-[240px] h-[40px] items-center bg-forminputs dark:bg-forminputs rounded-lg min-h-[42px] cursor-pointer border border-inputborder dark:border-inputborder">
                            {selectedProductName.map((product) => (
                              <div key={product} className={selectedItemStyle}>
                                <span className="truncate max-w-[calc(100%-16px)]">
                                  {product}
                                </span>
                                <CloseIcon
                                  className="ml-1 flex-shrink-0 cursor-pointer text-textinput dark:text-textinput hover:text-gray-900"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleRemoveProductName(product);
                                  }}
                                />
                              </div>
                            ))}
                            {selectedProductName.length === 0 && (
                              <span className="font-poppins text-[14px] font-semibold ml-2">
                                Select products...
                              </span>
                            )}
                            <div className="absolute right-3 top-1/2 -translate-y-1/2">
                              <svg
                                className="w-4 h-4 text-textinput dark:text-textinput"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
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
                    </div>
                  </div>

                  {/* Extras */}
                  <div className="flex flex-col w-[240px]">
                    <label className="text-lg font-poppins font-semibold text-[12px] mb-2">
                      Extras
                    </label>
                    <div className="relative w-full h-[40px]">
                      <Dropdown
                        theme={DropDownTheme}
                        label=""
                        dismissOnClick={true}
                        renderTrigger={() => (
                          <div className="flex flex-wrap w-full md:w-[240px] h-[40px] items-center bg-forminputs dark:bg-forminputs rounded-lg min-h-[42px] cursor-pointer border border-inputborder dark:border-inputborder">
                            {selectedExtras && (
                              <div className={selectedItemStyle}>
                                <span className="truncate max-w-[calc(100%-16px)]">
                                  {selectedExtras}
                                </span>
                                <CloseIcon
                                  className="ml-1 flex-shrink-0 cursor-pointer text-textinput dark:text-textinput hover:text-gray-900"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setSelectedExtras("");
                                  }}
                                />
                              </div>
                            )}
                            {!selectedExtras && (
                              <span className="font-poppins text-[14px] font-semibold ml-2">
                                Select extras...
                              </span>
                            )}
                            <div className="absolute right-3 top-1/2 -translate-y-1/2">
                              <svg
                                className="w-4 h-4 text-textinput dark:text-textinput"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
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
                    </div>
                  </div>
                </div>
              </div>

              {/* Quantity Selector */}
              <div className="flex items-end gap-6">
                <div className="flex flex-col">
                  <Label className="text-sm font-semibold" />
                  Quantity
                  <Select
                    theme={selectTheme}
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value))}
                    className="mt-1 text-switch dark:text-switch font-medium w-[230px] md:w-[440px]"
                  >
                    {[1, 2, 3, 4, 5].map((num) => (
                      <option key={num} value={num}>
                        {num}
                      </option>
                    ))}
                  </Select>
                </div>

                <Button
                  color="light"
                  onClick={handleIncrement}
                  className="border border-switch dark:border-switch text-switch dark:text-switch mt-6 px-2 py-1 rounded-md w-[40px] h-[40px] "
                >
                  <PlusIcon />
                </Button>
              </div>
            </div>

            <div className="flex flex-col  w-[343px] md:w-full bg-background rounded-lg gap-6 mt-6 p-4 !text-foreground !dark:text-foreground">
              <div className="flex flex-row h-[22px] w-full bg-background rounded-lg gap-6 ">
                <p className="font-poppins text-[16px] font-semibold">
                  Customer Information
                </p>
              </div>
              <div className="flex flex-col max-w-md md:flex-row gap-4 !text-foreground !dark:text-foreground">
                <div className="w-full md:w-[244px] h-[65px]">
                  <div className="mb-2 block ">
                    <Label
                      htmlFor="Name"
                      className="font-poppins text-[12px] font-semibold !text-foreground !dark:text-foreground"
                    >
                      Name
                    </Label>
                  </div>
                  <TextInput
                    theme={inputTheme}
                    color="gray"
                    id="Name"
                    type="text"
                    sizing="md"
                    placeholder="Albeir"
                    required
                  />
                </div>
                <div className="w-full md:w-[244px] h-[65px]">
                  <div className="mb-2 block ">
                    <Label
                      htmlFor="LastName"
                      className="font-poppins text-[12px] font-semibold !text-foreground !dark:text-foreground"
                    >
                      Last
                    </Label>
                  </div>
                  <TextInput
                    theme={inputTheme}
                    color="gray"
                    id="LastName"
                    type="text"
                    sizing="md"
                    placeholder="Latef"
                    required
                  />
                </div>
              </div>
              <div className="max-w-md  w-full md:w-[504px] h-[65px]">
                <div className="mb-2 block">
                  <Label
                    htmlFor="email4"
                    className="font-poppins text-[12px] font-semibold !text-foreground !dark:text-foreground"
                  >
                    Contact Email
                  </Label>
                </div>
                <TextInput
                  theme={inputTheme}
                  color="gray"
                  id="email4"
                  type="email"
                  placeholder="AlbeirLatef@aromadrips.com"
                  required
                />
              </div>
              <div className="max-w-md">
                <label
                  htmlFor="phone"
                  className="block mb-2 font-poppins text-[12px] font-semibold !text-foreground !dark:text-foreground"
                >
                  Phone Number
                </label>
                <div className="flex w-full overflow-hidden rounded-md focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 bg-forminputs dark:bg-forminputs border border-inputborder dark:border-inputborder">
                  {/* Country Code Section */}
                  <div className="flex items-center bg-inputaccent dark:bg-inputaccent px-3 w-[99px] h-[40px]">
                    <div className="shrink-0 z-10 inline-flex items-center  text-sm font-medium text-center">
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
                        className="  bg-inputaccent dark:bg-inputaccent text-sm focus:outline-none border-none font-poppins text-[14px] font-normal pr-6 appearance-none relative"
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
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
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
              <div className="flex flex-col gap-4 ">
                <label
                  htmlFor="address"
                  className="block mb-2 text-[16px] font-poppins font-semibold !text-foreground !dark:text-foreground"
                >
                  Customer Address
                </label>
              </div>
              <div className="flex flex-col md:flex-row space-x-4 gap-4">
                {/* Country Dropdown */}
                <div className="relative w-full md:w-48">
                  <Dropdown
                    theme={DropDownTheme}
                    className="bg-background dark:bg-background text-textinput dark:text-textinput !hover:bg-background !dark:hover:bg-background border border-inputborder dark:border-inputborder"
                    label=""
                    renderTrigger={() => (
                      <div className="flex items-center justify-between  rounded-lg px-4 py-2 w-[295px] md:w-full cursor-pointer bg-forminputs dark:bg-forminputs border border-inputborder dark:border-inputborder">
                        <div className="flex items-center space-x-2">
                          <div className="shrink-0 z-10 inline-flex items-center  text-sm font-medium text-center bg-background ">
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
                          <span className=" font-medium">
                            {selectedCountry}
                          </span>
                        </div>
                        <ChevronDown className="h-4 w-4 text-foreground dark:text-foreground" />
                      </div>
                    )}
                  >
                    <DropdownItem
                      className="text-textinput dark:text-textinput hover:bg-backgroundaccent dark:hover:bg-backgroundaccent "
                      onClick={() => setSelectedCountry("Egypt")}
                    >
                      <div className="shrink-0 z-10 inline-flex items-center  text-sm font-medium text-center">
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
                    <DropdownItem
                      className="text-textinput dark:text-textinput hover:bg-backgroundaccent dark:hover:bg-backgroundaccent"
                      onClick={() => setSelectedCountry("USA")}
                    >
                      <div className="shrink-0 z-10 inline-flex items-center  text-sm font-medium text-center">
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
                    <DropdownItem
                      className="text-textinput dark:text-textinput hover:bg-backgroundaccent dark:hover:bg-backgroundaccent"
                      onClick={() => setSelectedCountry("UK")}
                    >
                      <div className="shrink-0 z-10 inline-flex items-center  text-sm font-medium text-center">
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
                <div className="relative w-full md:w-48">
                  <Dropdown
                    theme={DropDownTheme}
                    className="bg-background dark:bg-background text-textinput dark:text-textinput hover:bg-backgroundaccent dark:hover:bg-backgroundaccent border border-inputborder dark:border-inputborder"
                    label=""
                    renderTrigger={() => (
                      <div
                        className="flex items-center justify-between bg-forminputs dark:bg-forminputs  rounded-lg px-4 py-2 
                      w-[295px] md:w-full cursor-pointer border border-inputborder dark:border-inputborder"
                      >
                        <span className=" font-medium">{selectedCity}</span>
                        <ChevronDown className="h-4 w-4 text-foreground dark:text-foreground" />
                      </div>
                    )}
                  >
                    <DropdownItem
                      className="text-textinput dark:text-textinput hover:bg-backgroundaccent dark:hover:bg-backgroundaccent"
                      onClick={() => setSelectedCity("Cairo")}
                    >
                      Cairo
                    </DropdownItem>
                    <DropdownItem
                      className="text-textinput dark:text-textinput hover:bg-backgroundaccent dark:hover:bg-backgroundaccent"
                      onClick={() => setSelectedCity("Alexandria")}
                    >
                      Alexandria
                    </DropdownItem>
                    <DropdownItem
                      className="text-textinput dark:text-textinput hover:bg-backgroundaccent dark:hover:bg-backgroundaccent"
                      onClick={() => setSelectedCity("Giza")}
                    >
                      Giza
                    </DropdownItem>
                  </Dropdown>
                </div>
              </div>
              <div className="max-w-md   w-full md:w-[528px] h-[58px] mb-4">
                <div className="mb-2 block">
                  <Label
                    htmlFor="Address"
                    className="font-poppins text-[12px] font-semibold !text-foreground !dark:text-foreground"
                  >
                    Address
                  </Label>
                </div>
                <TextInput
                  theme={inputTheme}
                  color="gray"
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
          {/* right section */}
          <div className="flex flex-col justify-start w-full md:w-[552px] bg-backgroundaccent mb-1 rounded-lg gap-6">
            <div className="flex flex-col w-[340px] md:w-full rounded-lg gap-6 p-4 bg-background">
              {/* Order Details Section */}
              <div className=" w-full md:w-[504px] flex flex-col bg-background rounded-lg gap-6">
                <div className="w-full md:w-[504px] h-[22px]">
                  <p className="font-poppins font-semibold text-[16px]">
                    Order Details
                  </p>
                </div>
                <div className="w-[292px] md:w-[504px]">
                  <Table hoverable theme={TableTheme}>
                    <TableHead>
                      <TableRow className="w-full md:w-[97.75px] h-[49px]">
                        <TableHeadCell className="font-poppins font-semibold text-[14px] text-textinputnew dark:text-textinputnew">
                          Product
                        </TableHeadCell>
                        <TableHeadCell className="font-poppins font-semibold text-[14px] text-textinputnew dark:text-textinputnew">
                          Item
                        </TableHeadCell>
                        <TableHeadCell className="font-poppins font-semibold text-[14px] hidden md:table-cell text-textinputnew dark:text-textinputnew">
                          Extras
                        </TableHeadCell>
                        <TableHeadCell className="font-poppins font-semibold text-[14px] hidden md:table-cell text-textinputnew dark:text-textinputnew">
                          Price
                        </TableHeadCell>
                        <TableHeadCell className="font-poppins font-semibold text-[14px] text-textinputnew dark:text-textinputnew">
                          Total
                        </TableHeadCell>
                        <TableHeadCell className="font-poppins font-semibold text-[14px] text-textinputnew dark:text-textinputnew ">
                          Act
                        </TableHeadCell>
                      </TableRow>
                    </TableHead>
                    <TableBody className="divide-y">
                      <TableRow className="bg-background border-inputborder">
                        <TableCell className="whitespace-nowrap font-poppins text-[12px] font-normal text-textinputnew dark:text-textinputnew">
                          Risstretto
                        </TableCell>
                        <TableCell>1</TableCell>
                        <TableCell className="hidden md:table-cell font-normal text-textinputnew dark:text-textinputnew">
                          Milk
                        </TableCell>
                        <TableCell className="hidden md:table-cell font-normal text-textinputnew dark:text-textinputnew">
                          65
                        </TableCell>
                        <TableCell>65</TableCell>
                        <TableCell>
                          <TrashIcon />
                        </TableCell>
                      </TableRow>
                      <TableRow className="bg-background border-inputborder">
                        <TableCell className="whitespace-nowrap font-poppins font-normal text-[12px]  text-textinputnew dark:text-textinputnew">
                          Mango(S)
                        </TableCell>
                        <TableCell>2</TableCell>
                        <TableCell className="hidden md:table-cell font-normal text-textinputnew dark:text-textinputnew">
                          No Extras
                        </TableCell>
                        <TableCell className="hidden md:table-cell font-normal text-textinputnew dark:text-textinputnew">
                          35
                        </TableCell>
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
                      <TableRow className="bg-background border-inputborder">
                        <TableCell className="whitespace-nowrap font-poppins font-normal text-[12px] text-textinputnew dark:text-textinputnew">
                          Cold Bre..
                        </TableCell>
                        <TableCell>1</TableCell>
                        <TableCell className="hidden md:table-cell font-normal text-textinputnew dark:text-textinputnew">
                          No Extras
                        </TableCell>
                        <TableCell className="hidden md:table-cell font-normal text-textinputnew dark:text-textinputnew">
                          55
                        </TableCell>
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
                      <TableRow className="bg-background border-inputborder">
                        <TableCell className="whitespace-nowrap font-poppins font-normal text-[12px] text-textinputnew dark:text-textinputnew">
                          Mojito
                        </TableCell>
                        <TableCell>1</TableCell>
                        <TableCell className="hidden md:table-cell font-normal text-textinputnew dark:text-textinputnew">
                          No Extras
                        </TableCell>
                        <TableCell className="hidden md:table-cell font-normal text-textinputnew dark:text-textinputnew">
                          60
                        </TableCell>
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
                    </TableBody>
                  </Table>
                </div>
                <VectorLine />
              </div>

              {/* Text Under the Table */}
              <div className="w-full md:w-[504px]  flex flex-col bg-background rounded-lg gap-4 ">
                <p className="font-poppins font-semibold text-[16px]">
                  Payment Method
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-xl">
                  {/* Discount */}
                  <div className="flex flex-col">
                    <Label
                      htmlFor="discount"
                      className="mb-1 font-semibold text-[14px] font-poppins !text-foreground !dark:text-foreground"
                    >
                      Discount
                    </Label>
                    <Select
                      theme={selectTheme}
                      id="discount"
                      value={discount}
                      onChange={(e) => setDiscount(e.target.value)}
                      className="rounded-lg font-normal text-[14px] font-poppins bg-background dark:bg-background text-foreground dark:text-foreground "
                    >
                      <option
                        value="WELCOME10"
                        className="bg-background dark:bg-background text-foreground dark:text-foreground font-normal text-[14px] font-poppins focus:bg-backgroundaccent dark:focus:bg-backgroundaccent hover:bg-backgroundaccent dark:hover:bg-backgroundaccent"
                      >
                        WELCOME10
                      </option>
                      <option
                        value="SAVE15"
                        className="bg-background dark:bg-background text-foreground dark:text-foreground font-normal text-[14px] font-poppins"
                      >
                        SAVE15
                      </option>
                    </Select>
                  </div>

                  {/* Promo */}
                  <div className="flex flex-col">
                    <Label
                      htmlFor="promo"
                      className="mb-1 font-semibold text-[14px] font-poppins !text-foreground !dark:text-foreground"
                    >
                      Promo
                    </Label>
                    <TextInput
                      theme={inputTheme}
                      color="gray"
                      id="promo"
                      type="text"
                      value={promo}
                      onChange={(e) => setPromo(e.target.value)}
                      className="rounded-lg font-normal text-[14px] font-poppins"
                    />
                  </div>

                  {/* Payment */}
                  <div className="flex flex-col">
                    <Label
                      htmlFor="payment"
                      className="mb-1 font-semibold text-[14px] font-poppins !text-foreground !dark:text-foreground"
                    >
                      Payment
                    </Label>
                    <Select
                      theme={selectTheme}
                      id="payment"
                      value={payment}
                      onChange={(e) => setPayment(e.target.value)}
                      className="rounded-lg font-normal text-[14px] font-poppins"
                    >
                      <option
                        value="Visa"
                        className="font-normal text-[14px] font-poppins !text-foreground !dark:text-foreground"
                      >
                        Visa
                      </option>
                      <option
                        value="Mastercard"
                        className="font-normal text-[14px] font-poppins !text-foreground !dark:text-foreground"
                      >
                        Mastercard
                      </option>
                      <option
                        value="Paypal"
                        className="font-normal text-[14px] font-poppins !text-foreground !dark:text-foreground"
                      >
                        Paypal
                      </option>
                    </Select>
                  </div>

                  {/* Order Status */}
                  <div className="flex flex-col">
                    <Label
                      htmlFor="orderStatus"
                      className="mb-1 font-semibold text-[14px] font-poppins !text-foreground !dark:text-foreground"
                    >
                      Order Status
                    </Label>
                    <Select
                      theme={selectTheme}
                      id="orderStatus"
                      value={orderStatus}
                      onChange={(e) => setOrderStatus(e.target.value)}
                      className="rounded-lg font-normal text-[14px] font-poppins  !text-textinput !dark:text-textinput"
                    >
                      <option
                        value="Paid"
                        className="font-normal text-[14px] font-poppins !text-textinput !dark:text-textinput"
                      >
                        Paid
                      </option>
                      <option
                        value="Pending"
                        className="font-normal text-[14px] font-poppins !text-textinput !dark:text-textinput"
                      >
                        Pending
                      </option>
                      <option
                        value="Failed"
                        className="font-normal text-[14px] font-poppins !text-textinput !dark:text-textinput"
                      >
                        Failed
                      </option>
                    </Select>
                  </div>
                  <VectorLine />
                </div>
                {/* OrderSummery */}
                <div>
                  <p className="font-poppins font-semibold text-[16px] !text-textinput !dark:text-textinput">
                    Order Summary
                  </p>
                  <div className="w-full md:w-[504px] bg-background rounded-lg p-2 ">
                    {/* Subtotal */}
                    <div className="flex justify-between mb-2">
                      <p className="text-[12px] font-semibold font-poppins !text-textinput !dark:text-textinput">
                        Subtotal :
                      </p>
                      <p className="text-[12px] font-normal font-poppins !text-textinput !dark:text-textinput">
                        EGP 250.00
                      </p>
                    </div>

                    {/* Discount */}
                    <div className="flex justify-between mb-2">
                      <p className="text-[12px] font-semibold font-poppins !text-textinput !dark:text-textinput">
                        Discount (10%):
                      </p>
                      <p className="text-[12px] font-normal font-poppins !text-textinput !dark:text-textinput">
                        - EGP 25.00
                      </p>
                    </div>

                    {/* VAT */}
                    <div className="flex justify-between mb-4">
                      <p className="text-[12px] font-semibold font-poppins !text-textinput !dark:text-textinput">
                        VAT (14%):
                      </p>
                      <p className="text-[12px] font-normal font-poppins !text-textinput !dark:text-textinput">
                        + EGP 31.50
                      </p>
                    </div>

                    <VectorLine />

                    {/* Total */}
                    <div className="flex justify-between items-center  mt-4 rounded">
                      <p className="text-[16px] font-semibold font-poppins !text-textinput !dark:text-textinput">
                        Total Amount:
                      </p>
                      <p className="text-[16px] font-semibold font-poppins !text-textinput !dark:text-textinput">
                        256.50 EGP
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[340px] md:w-full flex flex-col rounded-lg gap-6 p-4 bg-background">
              <div className=" bg-background">
                <div className="max-w-md">
                  <div className="mb-2 block">
                    <Label
                      htmlFor="comment"
                      className="font-poppins text-[16px] font-semibold !text-textinput !dark:text-textinput"
                    >
                      Order Notes
                    </Label>
                  </div>
                  <Textarea
                    theme={inputTheme}
                    color="gray"
                    id="comment"
                    placeholder="Write text here ..."
                    required
                    rows={4}
                    className="w-full md:w-[504px] bg-forminputs dark:bg-forminputs  !text-textinput !dark:text-textinput rounded-lg border border-inputborder dark:border-inputborder"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* buttons save and cancel */}
        <div className="flex sm:flex-row md:flex-row md:justify-end gap-6 mt-4 md:mt-0 md:mb-2">
          <button
            type="button"
            className="border border-arrowcolor text-arrowcolor px-6 py-2 rounded-md text-sm font-medium  w-[168px]"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-custombtn2 text-white px-6 py-2 rounded-md text-sm font-medium w-[168px]"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditOrder;
