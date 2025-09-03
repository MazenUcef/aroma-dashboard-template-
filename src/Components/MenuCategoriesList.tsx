/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Card, TextInput, Dropdown, DropdownItem } from "flowbite-react";
import { SearchIcon } from "lucide-react";

import MenuHumIcon from "../assets/icons/MenuHumIcon";
import AddIcon from "../assets/icons/AddIcon";
import ArrowChevronIcon from "../assets/icons/ArrowChevroenIcon";
import ThreeDotsIcon from "../assets/icons/threeDotsIcon";
import PluseIcon from "../assets/icons/PluseIcon";
import CloseX from "../assets/icons/CloseX";
import DownArrow from "../assets/icons/DownArrow";

import CategoryModal from "../components/CategoryModal";
import ProductModal from "../components/ProductModal";
import DeleteModal from "./DeleteComponents";
import MenuProducts from "./MenuProducts";

const MenuCategoriesList = () => {
  const [selectedTag, setSelectedTag] = useState<string | null>("Available");

  // Category modal state
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);
  const [isEditingCategory, setIsEditingCategory] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<any>(null);

  // Product modal state
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [isEditingProduct, setIsEditingProduct] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  // Delete modal state
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [deleteTargetId, setDeleteTargetId] = useState<string | null>(null);

  const handleRemove = () => setSelectedTag(null);

  const handleAddCategory = () => {
    setSelectedCategory(null);
    setIsEditingCategory(false);
    setIsCategoryModalOpen(true);
  };

  const handleEditCategory = (category: any) => {
    setSelectedCategory(category);
    setIsEditingCategory(true);
    setIsCategoryModalOpen(true);
  };

  const handleDeleteCategory = (id: string | number) => {
    setDeleteTargetId(String(id));
    setOpenDeleteModal(true);
  };

  const onDeleteCategory = (id: string) => {
    console.log("Deleting category with ID:", id);
  };

  const handleAddProduct = () => {
    setSelectedProduct(null);
    setIsEditingProduct(false);
    setIsProductModalOpen(true);
  };

  const handleEditProduct = (product: any) => {
    setSelectedProduct(product);
    setIsEditingProduct(true);
    setIsProductModalOpen(true);
  };

  const handleDeleteProduct = (productId: string | number) => {
    console.log("Deleting product with ID:", productId);
    // You can add delete modal confirmation here if needed
  };

  const componenttheme = {
    root: {
      base: "flex rounded-lg border border-none bg-forminputs dark:bg-forminputs shadow-none dark:border-none",
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

  const customTheme = {
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
      base: "z-10 w-fit divide-y divide-gray-100 rounded shadow focus:outline-none",
      content: "py-1 text-sm  text-foreground dark:text-foreground",
      divider: "my-1 h-px bg-gray-100 dark:bg-gray-600",
      header: "block px-4 py-2 text-sm text-gray-700 dark:text-gray-200",
      hidden: "invisible opacity-0",
      item: {
        container: "",
        base: "flex w-full cursor-pointer items-center justify-start px-4 py-2 text-sm  text-foreground dark:text-foreground hover:bg-gray-100 focus:bg-gray-100 focus:outline-none  dark:hover:bg-gray-600 dark:hover:text-white dark:focus:bg-gray-600 dark:focus:text-white",
        icon: "mr-2 h-4 w-4",
      },
      style: {
        dark: "bg-gray-900 text-white dark:bg-gray-700",
        light: "border border-gray-200 bg-white text-gray-900",
        auto: "border border-gray-200 bg-white text-gray-900 dark:border-none dark:bg-gray-700 dark:text-white",
      },
      target: "w-fit",
    },
    inlineWrapper: "flex items-center",
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
    <div className="sm:w-[375px] md:w-full p-4 bg-backgroundaccent text-foreground">
      {/* Header */}
      <div className="w-full max-w-[1128px] py-4 px-4 flex items-center justify-between rounded-lg mb-4 font-poppins text-foreground dark:text-foreground">
        {/* Left side */}
        <div className="flex flex-col">
          <h2 className="text-xl font-semibold">Menu Management</h2>
          <p className="text-sm font-normal">
            Manage, update, and organize café items.
          </p>
        </div>

        {/* Right side (Button) */}
        <button
          type="button"
          onClick={handleAddProduct}
          className="flex items-center justify-center gap-2 rounded-lg bg-custombtn2 px-3 md:px-4 py-2 text-sm font-medium text-white focus:outline-none focus:ring-4 transition-colors duration-200"
        >
          <PluseIcon />
          {/* hide label on small, show from md */}
          <span className="hidden md:inline">New Products</span>
        </button>
      </div>

      {/* Filters + Content */}
      <div className="p-4 w-full md:w-[1128px] h-[776px] bg-background dark:bg-background rounded-lg mb-6">
        {/* Filters */}
        <div className="mb-4 w-full max-w-[1080px] h-auto flex flex-col md:flex-row gap-6">
          <TextInput
            className="w-full md:w-1/2 h-[40px]"
            placeholder="Product Name"
            type="text"
            icon={SearchIcon}
            theme={inputTheme}
            color="gray"
          />

          <div className="relative w-full md:w-1/2 h-[40px]">
            <div className="flex items-center min-h-[40px] border bg-forminputs border-inputborder rounded-md px-2 py-1">
              {selectedTag && (
                <span className="flex items-center text-sm bg-backgroundaccent border border-inputborder text-foreground px-2 py-0.5 rounded mr-2">
                  {selectedTag}
                  <button onClick={handleRemove} className="ml-1">
                    <CloseX />
                  </button>
                </span>
              )}
              <Dropdown
                label=""
                placement="bottom"
                renderTrigger={() => (
                  <button className="ml-auto text-gray-400 hover:text-gray-600">
                    <DownArrow />
                  </button>
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
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-row gap-6 items-start justify-start flex-wrap h-[664px] w-full md:w-[1080px]">
          {/* Category List */}
          {/* ✅ نسخة الـ md و lg (زي الصورة الأولى) */}
          <Card
            className="hidden md:block max-w-sm rounded-xl w-[335px] h-[640px]"
            theme={componenttheme}
          >
            <div className="mb-4 flex items-center w-[287px] h-[24px] relative text-foreground dark:text-foreground">
              <MenuHumIcon />
              <h5 className="text-xl font-bold leading-none text-foreground dark:text-foreground gap-2 ml-2">
                Categories
              </h5>
              <button
                onClick={handleAddCategory}
                className="absolute right-0 top-0 text-sm font-medium text-foreground dark:text-foreground hover:underline "
              >
                <AddIcon />
              </button>
            </div>
            <div className="flow-root text-foreground dark:text-foreground">
              <ul className="divide-y divide-[#CECECE] dark:divide-[#CECECE]">
                {categories.map((category) => (
                  <li key={category.id} className="py-3 sm:py-4">
                    <div className="flex items-center space-x-4 p-2 rounded-xl bg-forminputs dark:bg-forminputs w-[287px] h-[64px]">
                      <div className="shrink-0">
                        <img
                          alt={category.name}
                          height={48}
                          width={48}
                          src={category.image}
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-[14px] font-normal text-foreground dark:text-foreground font-poppins">
                          {category.name}
                        </p>
                      </div>
                      <div className="inline-flex font-medium items-center justify-center text-[12px] text-green-800 rounded-full w-[26px] h-[16px] bg-green-100 p-1.5">
                        {category.count}
                      </div>
                      <div>
                        <Dropdown
                          theme={customTheme}
                          className="bg-backgroundaccent border border-inputborder dark:border-inputborder"
                          label=""
                          renderTrigger={() => (
                            <span className="cursor-pointer">
                              <ThreeDotsIcon />
                            </span>
                          )}
                          inline
                        >
                          <DropdownItem
                            className="bg-backgroundaccent hover:bg-background dark:hover:bg-background  dark:border-inputborder"
                            onClick={() => handleEditCategory(category)}
                          >
                            Edit
                          </DropdownItem>
                          <DropdownItem
                            className="bg-backgroundaccent hover:bg-background dark:hover:bg-background  dark:border-inputborder"
                            onClick={() => handleDeleteCategory(category.id)}
                          >
                            Delete
                          </DropdownItem>
                        </Dropdown>
                      </div>
                      <ArrowChevronIcon />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Card>

          {/* ✅ نسخة الموبايل (Top Bar بس) */}
          <div className="block md:hidden w-full p-3">
            <div className="flex items-center justify-between">
              {/* Dropdown */}
              <div className="w-1/2 relative">
                <div className="flex items-center gap-2">
                  <MenuHumIcon />
                  <select
                    className="w-full p-2 pr-4 border rounded-lg text-sm font-medium text-gray-700 appearance-none focus:outline-none"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L5 5L9 1' stroke='%23B3B3B3' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right 0.5rem center",
                      backgroundSize: "1rem",
                    }}
                  >
                    <option>Categories</option>
                    {categories.map((category) => (
                      <option key={category.id}>{category.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                {/* Add */}
                <button
                  onClick={handleAddCategory}
                  className=" rounded-lg text-white"
                >
                  <svg
                    width="32"
                    height="33"
                    viewBox="0 0 32 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 8.5C0 4.08172 3.58172 0.5 8 0.5H24C28.4183 0.5 32 4.08172 32 8.5V24.5C32 28.9183 28.4183 32.5 24 32.5H8C3.58172 32.5 0 28.9183 0 24.5V8.5Z"
                      fill="#244937"
                    />
                    <path
                      d="M15.9987 11.8334V21.1667M11.332 16.5H20.6654"
                      stroke="white"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                {/* Edit */}
                <button
                  className=" rounded-lg text-green-600"
                  onClick={handleEditCategory}
                >
                  <svg
                    width="32"
                    height="33"
                    viewBox="0 0 32 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 1H24C28.1421 1 31.5 4.35786 31.5 8.5V24.5C31.5 28.6421 28.1421 32 24 32H8C3.85786 32 0.5 28.6421 0.5 24.5V8.5C0.5 4.35786 3.85786 1 8 1Z"
                      fill="white"
                    />
                    <path
                      d="M8 1H24C28.1421 1 31.5 4.35786 31.5 8.5V24.5C31.5 28.6421 28.1421 32 24 32H8C3.85786 32 0.5 28.6421 0.5 24.5V8.5C0.5 4.35786 3.85786 1 8 1Z"
                      stroke="#244937"
                    />
                    <g clipPath="url(#clip0_4213_58004)">
                      <path
                        d="M15.332 11.1667H12.532C11.4119 11.1667 10.8519 11.1667 10.4241 11.3846C10.0477 11.5764 9.74176 11.8824 9.55002 12.2587C9.33203 12.6865 9.33203 13.2466 9.33203 14.3667V19.9667C9.33203 21.0868 9.33203 21.6468 9.55002 22.0746C9.74176 22.451 10.0477 22.7569 10.4241 22.9487C10.8519 23.1667 11.4119 23.1667 12.532 23.1667H18.132C19.2521 23.1667 19.8122 23.1667 20.24 22.9487C20.6163 22.7569 20.9223 22.451 21.114 22.0746C21.332 21.6468 21.332 21.0868 21.332 19.9667V17.1667M13.332 19.1667H14.4484C14.7745 19.1667 14.9376 19.1667 15.091 19.1298C15.2271 19.0972 15.3571 19.0433 15.4764 18.9702C15.611 18.8877 15.7263 18.7724 15.9569 18.5418L22.332 12.1667C22.8843 11.6144 22.8843 10.7189 22.332 10.1667C21.7797 9.61437 20.8843 9.61437 20.332 10.1667L13.9569 16.5418C13.7263 16.7724 13.6109 16.8877 13.5285 17.0223C13.4554 17.1416 13.4015 17.2716 13.3689 17.4077C13.332 17.5611 13.332 17.7242 13.332 18.0503V19.1667Z"
                        stroke="#244937"
                        strokeWidth="1.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_4213_58004">
                        <rect
                          width="16"
                          height="16"
                          fill="white"
                          transform="translate(8 8.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
                {/* Delete */}
                <button
                  className=" rounded-lg text-red-600"
                  onClick={() => handleDeleteCategory(1)}
                >
                  <svg
                    width="32"
                    height="33"
                    viewBox="0 0 32 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 1H24C28.1421 1 31.5 4.35786 31.5 8.5V24.5C31.5 28.6421 28.1421 32 24 32H8C3.85786 32 0.5 28.6421 0.5 24.5V8.5C0.5 4.35786 3.85786 1 8 1Z"
                      fill="white"
                    />
                    <path
                      d="M8 1H24C28.1421 1 31.5 4.35786 31.5 8.5V24.5C31.5 28.6421 28.1421 32 24 32H8C3.85786 32 0.5 28.6421 0.5 24.5V8.5C0.5 4.35786 3.85786 1 8 1Z"
                      stroke="#EF4444"
                    />
                    <g clipPath="url(#clip0_4213_57861)">
                      <path
                        d="M18.6667 12.5V11.9667C18.6667 11.22 18.6667 10.8466 18.5213 10.5614C18.3935 10.3105 18.1895 10.1065 17.9387 9.9787C17.6534 9.83337 17.2801 9.83337 16.5333 9.83337H15.4667C14.7199 9.83337 14.3466 9.83337 14.0613 9.9787C13.8105 10.1065 13.6065 10.3105 13.4787 10.5614C13.3333 10.8466 13.3333 11.22 13.3333 11.9667V12.5M14.6667 16.1667V19.5M17.3333 16.1667V19.5M10 12.5H22M20.6667 12.5V19.9667C20.6667 21.0868 20.6667 21.6469 20.4487 22.0747C20.2569 22.451 19.951 22.757 19.5746 22.9487C19.1468 23.1667 18.5868 23.1667 17.4667 23.1667H14.5333C13.4132 23.1667 12.8532 23.1667 12.4254 22.9487C12.049 22.757 11.7431 22.451 11.5513 22.0747C11.3333 21.6469 11.3333 21.0868 11.3333 19.9667V12.5"
                        stroke="#EF4444"
                        strokeWidth="1.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_4213_57861">
                        <rect
                          width="16"
                          height="16"
                          fill="white"
                          transform="translate(8 8.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          {/* Product Grid */}
          <div className="flex flex-row gap-6 w-[721px] h-[640px]">
            <MenuProducts
              products={[]} // Replace with real product list
              onEdit={handleEditProduct}
              onDelete={handleDeleteProduct}
            />
          </div>
        </div>
      </div>

      {/* Modals */}
      <CategoryModal
        isOpen={isCategoryModalOpen}
        onClose={() => setIsCategoryModalOpen(false)}
        onSubmit={(data) => {
          console.log("Submitted Category:", data);
          setIsCategoryModalOpen(false);
        }}
        isEditMode={isEditingCategory}
        initialData={isEditingCategory ? selectedCategory : undefined}
      />

      <ProductModal
        isOpen={isProductModalOpen}
        onClose={() => setIsProductModalOpen(false)}
        onSubmit={(data) => {
          console.log("Submitted Product:", data);
          setIsProductModalOpen(false);
        }}
        isEditMode={isEditingProduct}
        initialData={isEditingProduct ? selectedProduct : undefined}
      />

      <DeleteModal
        isOpen={openDeleteModal}
        onClose={() => setOpenDeleteModal(false)}
        onConfirm={() => {
          if (deleteTargetId) {
            onDeleteCategory(deleteTargetId);
          }
          setOpenDeleteModal(false);
        }}
        title="Delete Row"
        message="Are you sure you want to delete this row? This action cannot be undone."
      />
    </div>
  );
};

export default MenuCategoriesList;
