import { useEffect, useState } from "react";
import { createTheme, Modal, ModalBody, ModalHeader } from "flowbite-react";
import { useForm } from "react-hook-form";
import UploadIcon from "../assets/icons/UploadIcon";
import CloseIcon from "../assets/icons/CloseIcon";
// import { HiUpload, HiX } from "react-icons/hi";

type CategoryFormData = {
  name: string;
  maxItems: number;
  description: string;
  image: File | null;
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
      "relative flex max-h-[90dvh] xl:w-[40rem] flex-col rounded-lg bg-backgroundaccent shadow dark:bg-backgroundaccent",
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

const CategoryModal: React.FC<CategoryModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  initialData,
  isEditMode = false,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm<CategoryFormData>({
    defaultValues: {
      name: "",
      maxItems: 0,
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
          {isEditMode ? "Edit Category" : "Add New Category"}
        </h3>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 text-xs text-green font-semibold">
                Categories Name
              </label>
              <input
                type="text"
                {...register("name", { required: "Name is required" })}
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm placeholder:text-[#666666] placeholder:font-normal"
                placeholder="Aroma Drips Coffee"
              />
              {errors.name && (
                <p className="text-red-500 text-xs">{errors.name.message}</p>
              )}
            </div>
            <div>
              <label className="block mb-1 text-xs text-green font-semibold">
                Max Items
              </label>
              <input
                type="number"
                {...register("maxItems", {
                  required: "Max items is required",
                  valueAsNumber: true,
                })}
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm placeholder:text-[#666666] placeholder:font-normal"
                placeholder="25"
              />
              {errors.maxItems && (
                <p className="text-red-500 text-xs">
                  {errors.maxItems.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <label className="block mb-1 text-xs text-green font-semibold">
              Description
            </label>
            <textarea
              rows={3}
              {...register("description")}
              placeholder="Write text here ..."
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm placeholder:text-[#B3B3B3] placeholder:font-normal"
            />
          </div>

          <div>
            <label className="block mb-1 text-xs text-green font-semibold">
              Category Image
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
                <input
                  id="image-upload"
                  type="file"
                  accept="image/png, image/jpeg"
                  className="hidden"
                  {...register("image")}
                  onChange={(e) => {
                    const file = e.target.files?.[0] ?? null;
                    setValue("image", file);
                  }}
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
              Save
            </button>
          </div>
        </form>
      </ModalBody>
    </Modal>
  );
};

export default CategoryModal;
