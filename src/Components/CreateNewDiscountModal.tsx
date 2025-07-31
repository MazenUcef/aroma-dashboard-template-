/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import {
  Checkbox,
  CloseIcon,
  createTheme,
  Datepicker,
  Dropdown,
  DropdownItem,
  FooterDivider,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
  Select,
  TextInput,
} from "flowbite-react";
import { Controller, useForm } from "react-hook-form";
import SearchIconN from "../assets/icons/SearchIconN";

interface DiscountFormData {
  name: string;
  discountType: string;
  startDate: Date | null;
  endDate: Date | null;
  campaignBudget: number;
  discountRate: number;
  minOrder: number;
  maxDiscount: number;
  targetAudience: string[];
  description: string;
  campaignGoals: string[];
}

interface DiscountModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: DiscountFormData) => void;
  initialData?: Partial<DiscountFormData>;
  isEditMode?: boolean;
}

const ModalTheme = createTheme({
  root: {
    base: "fixed inset-x-0 top-0 z-50 h-screen overflow-y-auto overflow-x-hidden md:inset-0 md:h-full text-foreground dark:text-foreground",
    show: {
      on: "flex bg-overlay dark:bg-overlay",
      off: "hidden",
    },
    sizes: {
      sm: "max-w-sm",
      md: "max-w-md",
      lg: "max-w-lg",
      xl: "max-w-xl",
      "2xl": "max-w-2xl",
      "3xl": "max-w-3xl",
      "4xl": "max-w-4xl",
      "5xl": "max-w-5xl",
      "6xl": "max-w-6xl",
      "7xl": "max-w-7xl",
    },
    positions: {
      "top-left": "items-start justify-start",
      "top-center": "items-start justify-center",
      "top-right": "items-start justify-end",
      "center-left": "items-center justify-start",
      center: "items-center justify-center",
      "center-right": "items-center justify-end",
      "bottom-right": "items-end justify-end",
      "bottom-center": "items-end justify-center",
      "bottom-left": "items-end justify-start",
    },
  },
  content: {
    base: "relative h-full w-full p-4 md:h-auto",
    inner:
      "relative flex xl:w-[40rem] flex-col rounded-lg bg-backgroundaccent shadow dark:bg-backgroundaccent",
  },
  body: {
    base: "flex-1 overflow-auto p-6",
    popup: "pt-0",
  },
  header: {
    base: "flex items-start justify-between rounded-t border-b p-5 dark:border-gray-600",
    popup: "border-b-0 p-2",
    title: "text-xl font-medium text-gray-900 dark:text-white",
    close: {
      base: "ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-lightgreen hover:text-green dark:hover:bg-light-green dark:hover:text-white",
      icon: "h-5 w-5",
    },
  },
});

const CreateNewDiscountModal: React.FC<DiscountModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  initialData,
  isEditMode = false,
}) => {
  const {
    control,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm<DiscountFormData>({
    defaultValues: {
      name: "",
      discountType: "Menu",
      startDate: null,
      endDate: null,
      campaignBudget: 0,
      discountRate: 0,
      minOrder: 0,
      maxDiscount: 0,
      targetAudience: [],
      description: "",
      campaignGoals: [],
    },
  });

  const [selectedCategories, setSelectedCategories] = useState<string[]>([
    "Iced Coffee",
    "Hot Coffee",
  ]);

  const selectedItemStyle =
    "mr-2 ml-1 flex items-center justify-center bg-backgroundaccent border border-inputborder rounded-lg  font-poppins text-[14px] font-semibold text-foreground cursor-pointer hover:bg-inputborder w-fit py-0.5 px-1";

  const selectedDiscountType = watch("discountType");
  const handleRemoveCategory = (categoryToRemove: string) => {
    setSelectedCategories(
      selectedCategories.filter((category) => category !== categoryToRemove)
    );
  };

  const handleAddCategory = (categoryToAdd: string) => {
    if (!selectedCategories.includes(categoryToAdd)) {
      setSelectedCategories([...selectedCategories, categoryToAdd]);
    }
  };

  useEffect(() => {
    if (initialData) {
      reset(initialData);
    }
  }, [initialData, reset, isOpen]);

  const handleCheckboxChange = (
    field: "targetAudience" | "campaignGoals",
    value: string,
    checked: boolean
  ) => {
    const currentValues = watch(field) || [];
    if (checked) {
      setValue(field, [...currentValues, value]);
    } else {
      setValue(
        field,
        currentValues.filter((item) => item !== value)
      );
    }
  };

  return (
    <Modal theme={ModalTheme} show={isOpen} onClose={onClose} size="lg" popup>
      <ModalHeader />
      <ModalBody>
        <h3 className="text-base font-semibold mb-4">
          {isEditMode ? "Edit Discount" : "Create New Discount"}
        </h3>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 text-sm font-semibold text-[#333]">
                Discount Name
              </label>
              <Controller
                name="name"
                control={control}
                rules={{ required: "Name is required" }}
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                    placeholder="New Member Welcome"
                  />
                )}
              />
              {errors.name && (
                <p className="text-red-500 text-xs">{errors.name.message}</p>
              )}
            </div>
            <div>
              <label className="block mb-1 text-sm font-semibold text-[#333]">
                Discount Type
              </label>
              <Controller
                control={control}
                name="discountType"
                render={({ field }) => (
                  <Select {...field}>
                    <option value="Menu">Menu</option>
                    <option value="Products">Products</option>
                  </Select>
                )}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 text-sm font-semibold text-[#333]">
                Start Date
              </label>
              <Controller
                control={control}
                name="startDate"
                render={({ field }) => (
                  <Datepicker
                    value={field.value as any}
                    onChange={(date: Date | null) => field.onChange(date)}
                  />
                )}
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-semibold text-[#333]">
                Expiration Date
              </label>
              <Controller
                control={control}
                name="endDate"
                render={({ field }) => (
                  <Datepicker
                    value={field.value as any}
                    onChange={(date: Date | null) => field.onChange(date)}
                  />
                )}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 text-sm font-semibold text-[#333]">
                Campaign Budget
              </label>
              <Controller
                control={control}
                name="campaignBudget"
                render={({ field }) => (
                  <input
                    type="number"
                    {...field}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                    placeholder="100"
                    min={0}
                  />
                )}
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-semibold text-[#333]">
                Discount Rate (%)
              </label>
              <Controller
                control={control}
                name="discountRate"
                render={({ field }) => (
                  <input
                    type="number"
                    {...field}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                    placeholder="20"
                    min={0}
                    max={100}
                  />
                )}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 text-sm font-semibold text-[#333]">
                Min Order
              </label>
              <Controller
                control={control}
                name="minOrder"
                render={({ field }) => (
                  <input
                    type="number"
                    {...field}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                    placeholder="50"
                    min={0}
                  />
                )}
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-semibold text-[#333]">
                Max Discount
              </label>
              <Controller
                control={control}
                name="maxDiscount"
                render={({ field }) => (
                  <input
                    type="number"
                    {...field}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                    placeholder="300"
                    min={0}
                  />
                )}
              />
            </div>
          </div>

          {/* ✅ Conditional Product Section */}
          {selectedDiscountType === "Products" && (
            <>
              <FooterDivider />

              <div className="space-y-4">
                <label className="block mb-1 text-sm font-semibold text-[#333]">
                  Product Selection
                </label>
                <div className="max-w-full">
                  <TextInput
                    id="product-name"
                    type="text"
                    icon={SearchIconN}
                    placeholder="Product name"
                    required
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <label className="text-lg font-poppins font-semibold text-[12px] mb-2">
                      Category
                    </label>
                    <div className="relative w-full md:w-80">
                      <Dropdown
                        label=""
                        dismissOnClick={false}
                        renderTrigger={() => (
                          <div className="flex flex-wrap w-[280px] max-sm:w-full h-[40px] items-center border border-gray-300 rounded-lg min-h-[42px] cursor-pointer">
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
                              <span className="font-poppins text-[14px] font-semibold ml-2">
                                Select categories...
                              </span>
                            )}
                            <div className="absolute right-12.5 max-sm:right-2.5 top-1/2 -translate-y-1/2">
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
                  <div>
                    <label className="block mb-1 text-sm font-semibold text-[#333]">
                      Product Name
                    </label>
                    <Select>
                      <option>Ristretto</option>
                      <option>Mojito</option>
                    </Select>
                  </div>
                </div>
                <div className="flex flex-wrap mt-2 gap-2">
                  {["Ristretto + Milk", "Mango", "Cold Brew"].map(
                    (category) => (
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
                    )
                  )}
                </div>
              </div>
            </>
          )}

          <FooterDivider />

          <div>
            <label className="block mb-1 text-sm font-semibold text-[#333]">
              Target Audience
            </label>
            <Controller
              control={control}
              name="targetAudience"
              render={({ field }) => (
                <div className="flex flex-wrap gap-5">
                  {[
                    "All Customers",
                    "Loyalty Members",
                    "New Customers",
                    "Inactive Customers",
                  ].map((option) => (
                    <div key={option} className="flex items-center gap-2">
                      <Checkbox
                        checked={field.value?.includes(option) || false}
                        onChange={(e) =>
                          handleCheckboxChange(
                            "targetAudience",
                            option,
                            e.target.checked
                          )
                        }
                      />
                      <Label>{option}</Label>
                    </div>
                  ))}
                </div>
              )}
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-semibold text-[#333]">
              Campaign Description
            </label>
            <Controller
              control={control}
              name="description"
              render={({ field }) => (
                <textarea
                  {...field}
                  rows={3}
                  placeholder="Write text here ..."
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                />
              )}
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-semibold text-[#333]">
              Campaign Goals
            </label>
            <Controller
              control={control}
              name="campaignGoals"
              render={({ field }) => (
                <div className="flex flex-wrap gap-5">
                  {[
                    "Increase Sales",
                    "Customer Retention",
                    "Brand Awareness",
                    "Acquire New Customers",
                  ].map((option) => (
                    <div key={option} className="flex items-center gap-2">
                      <Checkbox
                        checked={field.value?.includes(option) || false}
                        onChange={(e) =>
                          handleCheckboxChange(
                            "campaignGoals",
                            option,
                            e.target.checked
                          )
                        }
                      />
                      <Label>{option}</Label>
                    </div>
                  ))}
                </div>
              )}
            />
          </div>

          <div className="flex justify-end gap-4 pt-4">
            <button
              type="button"
              onClick={() => {
                reset();
                onClose();
              }}
              className="border border-green text-green px-6 py-2 rounded-md text-sm font-medium"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-green text-white px-6 py-2 rounded-md text-sm font-medium"
            >
              {isEditMode ? "Update Discount" : "Create Discount"}
            </button>
          </div>
        </form>
      </ModalBody>
    </Modal>
  );
};

export default CreateNewDiscountModal;
