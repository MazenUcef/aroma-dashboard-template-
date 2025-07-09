import React, { useState } from "react";
import { Card, TextInput } from "flowbite-react";
import MenuHumIcon from "../assets/icons/MenuHumIcon";
import AddIcon from "../assets/icons/AddIcon";
import ArrowChevronIcon from "../assets/icons/ArrowChevroenIcon";
import { Dropdown, DropdownItem } from "flowbite-react";
import ThreeDotsIcon from "../assets/icons/threeDotsIcon";
import PluseIcon from "../assets/icons/PluseIcon";
import { SearchIcon } from "lucide-react";
import CloseX from "../assets/icons/CloseX";
import MenuProducts from "./MenuProducts";
import DownArrow from "../assets/icons/DownArrow";

const MenuCategoriesList = () => {
  const [selectedTag, setSelectedTag] = useState<string | null>("Available");

  const handleRemove = () => {
    setSelectedTag(null);
  };
  const componenttheme = {
    root: {
      base: "flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800",
      children: "flex h-full flex-col justify-start gap-0 mt-2p-4",
      horizontal: {
        off: "flex-col",
        on: "flex-col md:max-w-xl md:flex-row",
      },
      href: "hover:bg-gray-100 dark:hover:bg-gray-700",
    },
    img: {
      base: "",
      horizontal: {
        off: "rounded-t-lg",
        on: "h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg",
      },
    },
  };

  // Array of category objects
  const categories = [
    {
      id: 1,
      name: "Hot Coffee",
      count: 16,
      image: "/src/assets/images/Rectangle 97.png",
    },
    {
      id: 2,
      name: "Frappe",
      count: 20,
      image: "/src/assets/images/Rectangle 98.png",
    },
    {
      id: 3,
      name: "Mojito",
      count: 8,
      image: "/src/assets/images/Rectangle 98 (1).png",
    },
    {
      id: 4,
      name: "Breezers",
      count: 21,
      image: "/src/assets/images/Rectangle 98 (2).png",
    },
    {
      id: 5,
      name: "Smoothies",
      count: 9,
      image: "/src/assets/images/Rectangle 98 (3).png",
    },
    {
      id: 6,
      name: "Milk Shakes",
      count: 18,
      image: "/src/assets/images/Rectangle 98 (4).png",
    },
  ];

  return (
    <div>
      <div className="ml-4 p-4 flex flex-row items-center justify-between px-4 py-2 rounded-lg w-[1228px] mb-4">
        <div className="flex flex-col ">
          <h2 className="text-xl font-bold text-gray-900 font-sans">
            Menu Management
          </h2>
          <p className="text-sm font-normal text-gray-600 font-sans">
            Manage, update, and organize café items.
          </p>
        </div>

        <div>
          <button
            type="button"
            className="flex items-center justify-center gap-2 rounded-lg bg-[#244937] px-4 py-2 text-sm font-medium text-white focus:outline-none focus:ring-4 transition-colors duration-200"
          >
            <PluseIcon />
            New Products
          </button>
        </div>
      </div>
      <div className="mx-w-4xl ml-4 p-4 w-[1128px] h-[776px] bg-white dark:bg-gray-900 rounded-lg shadow-md">
        <div className="mb-4 w-[1080px] h-[40px] flex flex-row gap-6">
          <TextInput
            className=" mb-4  font-normal font-poppins text-[14px] text-[#B3B3B3] w-1/2 h-full"
            placeholder="Product Name"
            type="text"
            icon={SearchIcon}
            theme={{
              field: {
                input: {
                  base: "bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white",
                },
                icon: {
                  base: "color-[#B3B3B3]",
                },
              },
            }}
          />
          <div className="relative w-1/2 h-full">
            <div className="flex items-center min-h-[40px] border border-gray-300 rounded-md px-2 py-1 ">
              {selectedTag && (
                <span className="flex items-center text-sm bg-gray-100 text-gray-700 px-2 py-0.5 rounded mr-2">
                  {selectedTag}
                  <button
                    onClick={handleRemove}
                    className="ml-1 text-gray-500 hover:text-gray-700"
                  >
                    <CloseX />{" "}
                    {/* Replace with an appropriate close icon, e.g., X or Close from your icon set */}
                  </button>
                </span>
              )}
              <Dropdown
                label=""
                placement="bottom"
                renderTrigger={() => (
                  <button className="ml-auto text-gray-400 hover:text-gray-600"></button>
                )}
              >
                <DropdownItem onClick={() => setSelectedTag("Available")}>
                  Available
                </DropdownItem>
                <DropdownItem onClick={() => setSelectedTag("Busy")}>
                  Busy
                </DropdownItem>
                <DropdownItem onClick={() => setSelectedTag("Away")}>
                  Away
                </DropdownItem>
              </Dropdown>
              <DownArrow />
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-6 items-start justify-start flex-wrap h-[664px] w-[1080px]">
          <Card
            className="max-w-sm bg-gray-50 rounded-xl shadow-md dark:bg-gray-800 w-[335px] h-[640px]"
            theme={componenttheme}
          >
            <div className="mb-4 flex items-center w-[287px] h-[24px] relative ">
              <MenuHumIcon />
              <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white gap-2 ml-2">
                Categories
              </h5>
              <a
                href="#"
                className="text-sm font-medium text-cyan-600 hover:underline dark:text-cyan-500 ml-6 flex items-center justify-between w-[24px] h-[24px] absolute right-0 top-0"
              >
                <AddIcon />
              </a>
            </div>
            <div className="flow-root">
              <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                {categories.map((category) => (
                  <li key={category.id} className="py-3 sm:py-4">
                    <div className="flex items-center space-x-4 p-2 rounded-xl bg-[#F3F4F5] dark:bg-gray-700 w-[287px] h-[64px]">
                      <div className="shrink-0">
                        <img
                          alt={`${category.name} image`}
                          height={48}
                          src={category.image}
                          width={48}
                          className=""
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="truncate gap-4 text-[14px] font-normal text-neutral-900 dark:text-white font-poppins">
                          {category.name}
                        </p>
                      </div>
                      <div className="inline-flex font-medium items-center text-[12px] text-green-800  dark:text-white rounded-full w-[26px] h-[16px] bg-green-100 p-1.5 ">
                        {category.count}
                      </div>
                      <div>
                        <Dropdown
                          label=""
                          renderTrigger={() => (
                            <span className="cursor-pointer">
                              <ThreeDotsIcon />
                            </span>
                          )}
                          inline
                        >
                          <DropdownItem>Edit</DropdownItem>
                          <DropdownItem>Delete</DropdownItem>
                        </Dropdown>
                      </div>
                      <ArrowChevronIcon />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Card>

          {/* TODO: Replace with actual products data */}
          <div className="flex flex-row gap-6 w-[721px] h-[640px] ">
            <MenuProducts products={[]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuCategoriesList;
