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
    "mr-2 ml-1 flex items-center justify-center bg-backgroundtertiary dark:bg-backgroundtertiary border border-inputborder rounded-lg  font-poppins text-[14px] font-semibold text-foreground cursor-pointer  w-fit py-0.5 px-1";

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
  const inputDatepickerClasses =
    "w-full rounded-lg !bg-forminputs dark:!bg-forminputs text-foreground dark:text-foreground placeholder-foreground dark:placeholder-foreground border border-gray-600 focus:ring-2 focus:ring-primary-500 focus:border-primary-500";

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
  const checkboxTheme = {
    base: "h-4 w-4 appearance-none rounded  bg-disabled dark:bg-disabled  bg-[length:0.55em_0.55em] bg-center bg-no-repeat checked:border-transparent checked:bg-switch focus:outline-none dark:border-gray-600  dark:checked:border-transparent dark:checked:bg-switch focus:ring-offset-0 focus:ring-0",
    color: {
      default:
        "text-primary-600 focus:ring-primary-600 dark:ring-offset-gray-800 dark:focus:ring-primary-600",
      dark: "text-gray-800 focus:ring-gray-800 dark:ring-offset-gray-800 dark:focus:ring-gray-800",
      failure:
        "text-red-900 focus:ring-red-900 dark:ring-offset-red-900 dark:focus:ring-red-900",
      gray: "text-gray-900 focus:ring-gray-900 dark:ring-offset-gray-900 dark:focus:ring-gray-900",
      info: "text-cyan-800 focus:ring-cyan-800 dark:ring-offset-gray-800 dark:focus:ring-cyan-800",
      light:
        "text-gray-900 focus:ring-gray-900 dark:ring-offset-gray-900 dark:focus:ring-gray-900",
      purple:
        "text-purple-600 focus:ring-purple-600 dark:ring-offset-purple-600 dark:focus:ring-purple-600",
      success:
        "text-green-800 focus:ring-green-800 dark:ring-offset-green-800 dark:focus:ring-green-800",
      warning:
        "text-yellow-400 focus:ring-yellow-400 dark:ring-offset-yellow-400 dark:focus:ring-yellow-400",
      blue: "text-blue-700 focus:ring-blue-600 dark:ring-offset-blue-700 dark:focus:ring-blue-700",
      cyan: "text-cyan-600 focus:ring-cyan-600 dark:ring-offset-cyan-600 dark:focus:ring-cyan-600",
      green:
        "text-green-600 focus:ring-green-600 dark:ring-offset-green-600 dark:focus:ring-green-600",
      indigo:
        "text-indigo-700 focus:ring-indigo-700 dark:ring-offset-indigo-700 dark:focus:ring-indigo-700",
      lime: "text-lime-700 focus:ring-lime-700 dark:ring-offset-lime-700 dark:focus:ring-lime-700",
      pink: "text-pink-600 focus:ring-pink-600 dark:ring-offset-pink-600 dark:focus:ring-pink-600",
      red: "text-red-600 focus:ring-red-600 dark:ring-offset-red-600 dark:focus:ring-red-600",
      teal: "text-teal-600 focus:ring-teal-600 dark:ring-offset-teal-600 dark:focus:ring-teal-600",
      yellow:
        "text-yellow-400 focus:ring-yellow-400 dark:ring-offset-yellow-400 dark:focus:ring-yellow-400",
    },
    indeterminate:
      "border-transparent bg-current bg-dash-icon dark:border-transparent dark:bg-current",
  };
  const datepickertheme = {
    root: {
      base: "relative w-full ", // Ensure it takes full width
    },
    input: {
      base: "w-full rounded-lg !bg-forminputs dark:!bg-forminputs text-foreground dark:text-foreground placeholder-foreground dark:placeholder-foreground border border-gray-600 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ",
      field: "px-4 py-2 flex items-center justify-between ",
      icon: "text-gray-400", // Calendar icon color
    },
    popup: {
      root: {
        base: "absolute top-12 z-50 block pt-2 ",
        inline: "relative top-0 z-auto",
        inner:
          "inline-block rounded-lg bg-forminputs dark:bg-forminputs p-4 shadow-lg",
      },
      header: {
        title: "px-2 py-3 text-center font-semibold text-white ",
        selectors: {
          base: "mb-2 flex justify-between",
          button: {
            base: "rounded-lg !bg-forminputs dark:!bg-forminputs  px-3 py-2 text-sm font-semibold text-foreground dark:text-foreground focus:outline-none focus:ring-2 focus:ring-primary-500 hover:bg-forminputs dark:hover:bg-forminputs ",
          },
        },
      },
      view: {
        base: "p-1",
      },
      footer: {
        base: "mt-2 flex space-x-2",
        button: {
          base: "w-full rounded-lg px-5 py-2 text-center text-sm font-medium focus:ring-4 focus:ring-primary-300",
          today:
            "bg-forminputs dark:bg-forminputs text-foreground dark:text-foreground  hover:bg-backgroundtertiary dark:hover:bg-backgroundtertiary ",
          clear:
            "border border-gray-500 bg-forminputs dark:bg-forminputs text-foreground dark:text-foreground  hover:bg-backgroundtertiary dark:hover:bg-backgroundtertiary ",
        },
      },
    },
    views: {
      days: {
        header: {
          base: "mb-1 grid grid-cols-7",
          title: "h-6 text-center text-sm font-medium leading-6 text-gray-400",
        },
        items: {
          base: "grid w-64 grid-cols-7",
          item: {
            base: "block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 bg-forminputs dark:bg-forminputs text-foreground dark:text-foreground hover:bg-backgroundtertiary dark:hover:bg-backgroundtertiary",
            selected:
              "bg-tabhover dark:bg-tabhover text-foreground dark:text-foreground hover:bg-backgroundtertiary dark:hover:bg-backgroundtertiary",
            disabled: "text-gray-500",
          },
        },
      },
      months: {
        items: {
          base: "grid w-64 grid-cols-4",
          item: {
            base: "block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 bg-forminputs dark:bg-forminputs text-foreground dark:text-foreground hover:bg-backgroundtertiary dark:hover:bg-backgroundtertiary",
            selected:
              "bg-tabhover dark:bg-tabhover text-foreground dark:text-foreground hover:bg-backgroundtertiary dark:hover:bg-backgroundtertiary",
            disabled: "text-gray-500",
          },
        },
      },
      years: {
        items: {
          base: "grid w-64 grid-cols-4",
          item: {
            base: "block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 bg-forminputs dark:bg-forminputs text-foreground dark:text-foreground  hover:bg-backgroundtertiary dark:hover:bg-backgroundtertiary",
            selected:
              "bg-tabhover dark:bg-tabhover text-foreground dark:text-foreground  hover:bg-backgroundtertiary dark:hover:bg-backgroundtertiary",
            disabled: "text-gray-500",
          },
        },
      },
      decades: {
        items: {
          base: "grid w-64 grid-cols-4",
          item: {
            base: "block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 bg-forminputs dark:bg-forminputs text-foreground dark:text-foreground hover:bg-backgroundtertiary dark:hover:bg-backgroundtertiary",
            selected:
              "bg-tabhover dark:bg-tabhover text-foreground dark:text-foreground  hover:bg-backgroundtertiary dark:hover:bg-backgroundtertiary",
            disabled: "text-gray-500",
          },
        },
      },
    },
  };
  const SearchbtnTheme = {
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
  const today = new Date();
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
              <label className="block mb-1 text-sm font-semibold text-foreground dark:text-foreground">
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
                    className="w-full border border-inputborder dark:border-inputborder rounded-md px-3 py-2 text-sm bg-forminputs dark:bg-forminputs text-textinput dark:text-textinput"
                    placeholder="New Member Welcome"
                  />
                )}
              />
              {errors.name && (
                <p className="text-red-500 text-xs">{errors.name.message}</p>
              )}
            </div>
            <div>
              <label className="block mb-1 text-sm font-semibold text-foreground dark:text-foreground">
                Discount Type
              </label>
              <Controller
                control={control}
                name="discountType"
                render={({ field }) => (
                  <Select {...field} theme={selectTheme}>
                    <option value="Menu">Menu</option>
                    <option value="Products">Products</option>
                  </Select>
                )}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 text-sm font-semibold text-foreground dark:text-foreground">
                Start Date
              </label>
              <Controller
                control={control}
                name="startDate"
                render={({ field }) => (
                  <Datepicker
                    defaultValue={today}
                    theme={datepickertheme}
                    className={inputDatepickerClasses}
                    value={field.value as any}
                    onChange={(date: Date | null) => field.onChange(date)}
                  />
                )}
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-semibold text-foreground dark:text-foreground">
                Expiration Date
              </label>
              <Controller
                control={control}
                name="endDate"
                render={({ field }) => (
                  <Datepicker
                    defaultValue={today}
                    theme={datepickertheme}
                    value={field.value as any}
                    onChange={(date: Date | null) => field.onChange(date)}
                  />
                )}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 text-sm font-semibold text-foreground dark:text-foreground">
                Campaign Budget
              </label>
              <Controller
                control={control}
                name="campaignBudget"
                render={({ field }) => (
                  <input
                    type="number"
                    {...field}
                    className="w-full  border border-inputborder focus:border-inputborder dark:border-inputborder  bg-forminputs dark:bg-forminputs text-textinput dark:text-textinput outline-0 focus:ring-0 rounded-md px-3 py-2 text-sm"
                    placeholder="100"
                    min={0}
                  />
                )}
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-semibold text-foreground dark:text-foreground">
                Discount Rate (%)
              </label>
              <Controller
                control={control}
                name="discountRate"
                render={({ field }) => (
                  <input
                    type="number"
                    {...field}
                    className="w-full  border border-inputborder focus:border-inputborder dark:border-inputborder  bg-forminputs dark:bg-forminputs text-textinput dark:text-textinput outline-0 focus:ring-0 rounded-md px-3 py-2 text-sm"
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
              <label className="block mb-1 text-sm font-semibold text-foreground dark:text-foreground">
                Min Order
              </label>
              <Controller
                control={control}
                name="minOrder"
                render={({ field }) => (
                  <input
                    type="number"
                    {...field}
                    className="w-full  border border-inputborder focus:border-inputborder dark:border-inputborder  bg-forminputs dark:bg-forminputs text-textinput dark:text-textinput outline-0 focus:ring-0 rounded-md px-3 py-2 text-sm"
                    placeholder="50"
                    min={0}
                  />
                )}
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-semibold text-foreground dark:text-foreground">
                Max Discount
              </label>
              <Controller
                control={control}
                name="maxDiscount"
                render={({ field }) => (
                  <input
                    type="number"
                    {...field}
                    className="w-full  border border-inputborder focus:border-inputborder dark:border-inputborder  bg-forminputs dark:bg-forminputs text-textinput dark:text-textinput outline-0 focus:ring-0 rounded-md px-3 py-2 text-sm"
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
                <label className="block mb-1 text-sm font-semibold text-foreground dark:text-foreground">
                  Product Selection
                </label>
                <div className="max-w-full">
                  <TextInput
                    id="product-name"
                    type="text"
                    icon={SearchIconN}
                    theme={SearchbtnTheme}
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
                        theme={DropDownTheme}
                        label=""
                        dismissOnClick={false}
                        renderTrigger={() => (
                          <div className="flex flex-wrap w-[280px] max-sm:w-full h-[40px] items-center border border-gray-300 rounded-lg min-h-[42px] cursor-pointer bg-forminputs dark:bg-forminputs">
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
                            <span className="mr-2 text-foreground dark:text-foreground ">
                              {category}
                            </span>
                          </DropdownItem>
                        ))}
                      </Dropdown>
                    </div>
                  </div>
                  <div>
                    <label className="block mb-1 text-sm font-semibold text-foreground dark:text-foreground">
                      Product Name
                    </label>
                    <Select theme={selectTheme}>
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
            <label className="block mb-1 text-sm font-semibold text-foreground dark:text-foreground">
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
                        theme={checkboxTheme}
                        checked={field.value?.includes(option) || false}
                        onChange={(e) =>
                          handleCheckboxChange(
                            "targetAudience",
                            option,
                            e.target.checked
                          )
                        }
                      />
                      <Label className="text-foreground dark:text-foreground">
                        {option}
                      </Label>
                    </div>
                  ))}
                </div>
              )}
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-semibold text-foreground dark:text-foreground">
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
                  className="w-full border border-inputborder dark:border-inputborder rounded-md px-3 py-2 text-sm text-foreground dark:text-foreground bg-forminputs dark:bg-forminputs focus:border-inputborder dark:focus:border-inputborder  outline-none"
                />
              )}
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-semibold text-foreground dark:text-foreground">
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
                        theme={checkboxTheme}
                        checked={field.value?.includes(option) || false}
                        onChange={(e) =>
                          handleCheckboxChange(
                            "campaignGoals",
                            option,
                            e.target.checked
                          )
                        }
                      />
                      <Label className="text-foreground dark:text-foreground">
                        {option}
                      </Label>
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
              className="border border-tabtext dark:border-tabtext text-tabtext dark:text-tabtext px-6 py-2 rounded-md text-sm font-medium"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-custombtn2 dark:bg-custombtn2 text-white px-6 py-2 rounded-md text-sm font-medium"
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
