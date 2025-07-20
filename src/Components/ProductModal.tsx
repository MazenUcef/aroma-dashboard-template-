import { useEffect, useState } from "react";
import { createTheme, Modal, ModalBody, ModalHeader, Select } from "flowbite-react";
import { Controller, useForm } from "react-hook-form";
import UploadIcon from "../assets/icons/UploadIcon";
import CloseIcon from "../assets/icons/CloseIcon";
import ToggleSwitch from "./ToggleSwitch";

interface CategoryFormData {
  name: string;
  price: number;
  categoriesName: string;
  description: string;
  image: File | null;
  productActivity: boolean
};

interface CategoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: CategoryFormData) => void;
  initialData?: Partial<CategoryFormData>;
  isEditMode?: boolean;
}

const ModalTheme = createTheme({
  root: {
    base: "fixed inset-x-0 top-0 z-50 h-screen overflow-y-auto overflow-x-hidden md:inset-0 md:h-full text-[#333333]",
    show: {
      on: "flex bg-black/22 dark:bg-black/22",
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
      "relative flex xl:w-[40rem] flex-col rounded-lg bg-white shadow dark:bg-gray-700",
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
 
const ProductModal: React.FC<CategoryModalProps> = ({ isOpen, onClose, onSubmit, initialData, isEditMode = false }) => {
  const { control, handleSubmit, reset, setValue, watch, formState: { errors } } = useForm<CategoryFormData>({
    defaultValues: {
      name: "",
      price: 0,
      categoriesName: "",
      description: "",
      image: null,
    },
  });

  const image = watch("image");
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  useEffect(() => {
    if (initialData) {
      reset({
        ...initialData,
        image: null,
      });
    }
  }, [initialData, reset, isOpen]);

  useEffect(() => {
    if (image && image instanceof File) {
      const url = URL.createObjectURL(image);
      setPreviewUrl(url);
      return () => URL.revokeObjectURL(url);
    } else {
      setPreviewUrl(null);
    }
  }, [image]);

  const handleRemoveImage = () => {
    setValue("image", null);
    setPreviewUrl(null);
  };

  return (
    <Modal theme={ModalTheme} show={isOpen} onClose={onClose} size="lg" popup>
      <ModalHeader />
      <ModalBody>
        <h3 className="text-base font-semibold mb-4">
          {isEditMode ? "Edit Product" : "Add New Product"}
        </h3>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 text-xs text-green font-semibold">
                Product Name
              </label>
              <Controller
                name="name"
                control={control}
                rules={{ required: "Name is required" }}
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm placeholder:text-[#666666] placeholder:font-normal"
                    placeholder="White Mocha"
                  />
                )}
              />
              {errors.name && (
                <p className="text-red-500 text-xs">{errors.name.message}</p>
              )}
            </div>
            <div>
              <label className="block mb-1 text-xs text-green font-semibold">
                Price
              </label>
              <Controller
                control={control}
                name="price"
                rules={{ required: "Price is required" }}
                render={({ field }) => (
                  <div className="max-w-[18rem] flex">
                    <div className="shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg dark:bg-gray-700 dark:text-white dark:border-gray-600">
                      <svg fill="none" aria-hidden="true" className="h-4 w-4 me-2" viewBox="0 0 20 15">
                        <rect width="19.6" height="14" y=".5" fill="#fff" rx="2" />
                        <mask id="a" style={{ maskType: "luminance" }} width="20" height="15" x="0" y="0" maskUnits="userSpaceOnUse">
                          <rect width="19.6" height="14" y=".5" fill="#fff" rx="2" />
                        </mask>
                        <g mask="url(#a)">
                          <path fill="#C83126" d="M0 .5h19.6v4.667H0z" />
                          <path fill="#fff" d="M0 5.167h19.6v4.666H0z" />
                          <path fill="#000" d="M0 9.833h19.6V14.5H0z" />
                          <path fill="#FFC107" fill-rule="evenodd" d="M6.533 5.167L8.4 7.033l1.867-1.866h-3.734zm0 0L8.4 7.033l1.867-1.866h-3.734zm2.334 2.333a.778.778 0 100-1.555.778.778 0 000 1.555z" clip-rule="evenodd" />
                        </g>
                      </svg>
                      EGP
                    </div>
                    <div className="relative w-full">
                      <input
                        type="number"
                        {...field}
                        className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg  border-e-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-e-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                        placeholder="Enter amount"
                        required
                        min={0}
                      />
                    </div>
                  </div>
                )}
              />
              {errors.price && (
                <p className="text-red-500 text-xs">{errors.price.message}</p>
              )}
            </div>
          </div>

          <div>
            <label className="block mb-1 text-xs text-green font-semibold">
              Categories Name
            </label>
            <Controller
              control={control}
              name="categoriesName"
              rules={{ required: "Product Activity is required" }}
              render={({ field }) => (
                <Select {...field} id="categories" required>
                  <option>Hot Coffe</option>
                  <option>Ice Coffe</option>
                  <option>Brezzers</option>
                  <option>Smothies</option>
                </Select>
              )}
            />
          </div>
          <div>
            <label className="block mb-1 text-xs text-green font-semibold">
              Description
            </label>
            <Controller
              control={control}
              name="description"
              render={({ field }) => (
                <textarea
                  rows={3}
                  {...field}
                  placeholder="Write text here ..."
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm placeholder:text-[#B3B3B3] placeholder:font-normal"
                />
              )}
            />
          </div>

          <div>
            <label className="block mb-1 text-xs text-green font-semibold">
              Product Image
            </label>

            {!previewUrl ? (
              <label
                htmlFor="image-upload"
                className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-md cursor-pointer py-8 text-center text-sm text-gray-500 hover:border-green"
              >
                <UploadIcon />
                <span className="text-[#666666] text-sm font-normal mt-2.5">
                  Click to upload or drag and drop <br />
                  <span>PNG, JPG up to 5MB</span>
                </span>
                <Controller
                  control={control}
                  name="image"
                  render={({ field }) => (
                    <input
                      id="image-upload"
                      type="file"
                      accept="image/png, image/jpeg"
                      className="hidden"
                      name={field.name}
                      ref={field.ref}
                      onBlur={field.onBlur}
                      onChange={(e) => {
                        const file = e.target.files?.[0] ?? null;
                        setValue("image", file);
                      }}
                    />
                  )}
                />
              </label>
            ) : (
              <div className="relative mt-2 flex flex-col items-start justify-start border-2 border-dashed border-gray-300 rounded-md cursor-pointer p-2 text-center text-sm text-gray-500 hover:border-green">
                <img
                  src={previewUrl}
                  alt="Preview"
                  className="h-40 w-auto object-contain rounded-md"
                />
                <button
                  type="button"
                  onClick={handleRemoveImage}
                  className="absolute top-1 right-1 bg-white rounded-full p-1 border border-gray-300 hover:bg-gray-100"
                  title="Remove image"
                >
                  <CloseIcon />
                </button>
              </div>
            )}
          </div>
          <div className="w-full items-center flex justify-between">
            <div className="flex flex-col gap-2">
              <h1 className="text-[16px] font-bold">Product Availability</h1>
              <h1 className="text-[16px]">Make this product available for purchase</h1>
            </div>
            <div>
              <Controller
                control={control}
                name="productActivity"
                defaultValue={false} // Set default value
                render={({ field: { value, onChange } }) => (
                  <ToggleSwitch
                    isOn={value}
                    onToggle={(newValue: boolean) => onChange(newValue)}
                  />
                )}
              />
            </div>
          </div>
          <div className="flex justify-end gap-4 pt-4">
            <button
              type="button"
              onClick={() => {
                reset();
                setPreviewUrl(null);
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
              Save Changes
            </button>
          </div>
        </form>
      </ModalBody>
    </Modal>
  );
};

export default ProductModal;
