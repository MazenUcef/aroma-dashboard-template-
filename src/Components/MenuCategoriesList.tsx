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
    <div>
      {/* Header */}
      <div className="w-[1128px] py-4 pl-4 ml-4 flex items-center justify-between rounded-lg mb-4 font-poppins text-foreground dark:text-foreground">
        <div className="w-full flex flex-col items-start justify-start mr-auto">
          <h2 className="text-xl font-semibold">Menu Management</h2>
          <p className="text-sm font-normal">
            Manage, update, and organize café items.
          </p>
        </div>

        <div className="w-full flex items-end justify-end ml-auto">
          <button
            type="button"
            onClick={handleAddProduct}
            className="flex items-center ml-auto justify-center gap-2 rounded-lg bg-custombtn2 px-4 py-2 text-sm font-medium text-white focus:outline-none focus:ring-4 transition-colors duration-200"
          >
            <PluseIcon />
            New Products
          </button>
        </div>
      </div>

      {/* Filters + Content */}
      <div className="ml-6 p-4 w-[1128px] h-[776px] bg-background dark:bg-background rounded-lg mb-6">
        {/* Filters */}
        <div className="mb-4 w-[1080px] h-[40px] flex flex-row gap-6">
          <TextInput
            className="w-1/2 h-full"
            placeholder="Product Name"
            type="text"
            icon={SearchIcon}
            theme={inputTheme}
            color="gray"
          />
          <div className="relative w-1/2 h-full">
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
        <div className="flex flex-row gap-6 items-start justify-start flex-wrap h-[664px] w-[1080px]">
          {/* Category List */}
          <Card
            className="max-w-sm  rounded-xl w-[335px] h-[640px]"
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
