import { useEffect, useState } from "react";
import { Checkbox, createTheme, Datepicker, FooterDivider, Label, Modal, ModalBody, ModalHeader, Select } from "flowbite-react";
import { Controller, useForm } from "react-hook-form";
import UploadIcon from "../assets/icons/UploadIcon";
import CloseIcon from "../assets/icons/CloseIcon";
import ToggleSwitch from "./ToggleSwitch";

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
};

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

const CreateNewDiscountModal: React.FC<DiscountModalProps> = ({ isOpen, onClose, onSubmit, initialData, isEditMode = false }) => {
    const { control, handleSubmit, reset, setValue, watch, formState: { errors } } = useForm<DiscountFormData>({
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
            campaignGoals: []
        },
    });

    useEffect(() => {
        if (initialData) {
            reset(initialData);
        }
    }, [initialData, reset, isOpen]);

    const handleCheckboxChange = (field: "targetAudience" | "campaignGoals", value: string, checked: boolean) => {
        const currentValues = watch(field) || [];
        if (checked) {
            setValue(field, [...currentValues, value]);
        } else {
            setValue(field, currentValues.filter(item => item !== value));
        }
    };

    return (
        <Modal theme={ModalTheme} show={isOpen} onClose={onClose} size="lg" popup>
            <ModalHeader />
            <ModalBody>
                <h3 className="text-base font-semibold mb-4">
                    Create New Discount
                </h3>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block mb-1 text-sm text-[#333333] font-semibold">
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
                                        className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm placeholder:text-[#666666] placeholder:font-normal"
                                        placeholder="New Member Welcome "
                                    />
                                )}
                            />
                            {errors.name && (
                                <p className="text-red-500 text-xs">{errors.name.message}</p>
                            )}
                        </div>
                        <div>
                            <label className="block mb-1 text-sm text-[#333333] font-semibold">
                                Discount Type
                            </label>
                            <Controller
                                control={control}
                                name="discountType"
                                rules={{ required: "Discount type is required" }}
                                render={({ field }) => (
                                    <Select {...field} id="discountType" required>
                                        <option value="Menu">Menu</option>
                                        <option value="Products">Products</option>
                                    </Select>
                                )}
                            />
                            {errors.discountType && (
                                <p className="text-red-500 text-xs">{errors.discountType.message}</p>
                            )}
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block mb-1 text-sm text-[#333333] font-semibold">
                                Start Date
                            </label>
                            <Controller
                                control={control}
                                name="startDate"
                                rules={{ required: "Start date is required" }}
                                render={({ field }) => (
                                    <Datepicker
                                        onSelect={(date: any) => field.onChange(date)}
                                        defaultValue={field.value || undefined}
                                    />
                                )}
                            />
                            {errors.startDate && (
                                <p className="text-red-500 text-xs">{errors.startDate.message}</p>
                            )}
                        </div>
                        <div>
                            <label className="block mb-1 text-sm text-[#333333] font-semibold">
                                Expiration Date
                            </label>
                            <Controller
                                control={control}
                                name="endDate"
                                rules={{ required: "End date is required" }}
                                render={({ field }) => (
                                    <Datepicker
                                        onSelect={(date: any) => field.onChange(date)}
                                        defaultValue={field.value || undefined}
                                    />
                                )}
                            />
                            {errors.endDate && (
                                <p className="text-red-500 text-xs">{errors.endDate.message}</p>
                            )}
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block mb-1 text-sm text-[#333333] font-semibold">
                                Campaign Budget
                            </label>
                            <Controller
                                control={control}
                                name="campaignBudget"
                                rules={{
                                    required: "Budget is required",
                                    min: { value: 0, message: "Budget must be positive" }
                                }}
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
                                                    <path fill="#FFC107" fillRule="evenodd" d="M6.533 5.167L8.4 7.033l1.867-1.866h-3.734zm0 0L8.4 7.033l1.867-1.866h-3.734zm2.334 2.333a.778.778 0 100-1.555.778.778 0 000 1.555z" clipRule="evenodd" />
                                                </g>
                                            </svg>
                                            EGP
                                        </div>
                                        <div className="relative w-full">
                                            <input
                                                type="number"
                                                {...field}
                                                onChange={(e) => field.onChange(parseFloat(e.target.value))}
                                                className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-e-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-e-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                                                placeholder="Enter amount"
                                                required
                                                min={0}
                                            />
                                        </div>
                                    </div>
                                )}
                            />
                            {errors.campaignBudget && (
                                <p className="text-red-500 text-xs">{errors.campaignBudget.message}</p>
                            )}
                        </div>
                        <div>
                            <label className="block mb-1 text-sm text-[#333333] font-semibold">
                                Discount Rate
                            </label>
                            <Controller
                                control={control}
                                name="discountRate"
                                rules={{
                                    required: "Discount rate is required",
                                    min: { value: 0, message: "Rate must be positive" },
                                    max: { value: 100, message: "Rate cannot exceed 100%" }
                                }}
                                render={({ field }) => (
                                    <div className="max-w-[18rem] flex">
                                        <div className="relative w-full">
                                            <input
                                                type="number"
                                                {...field}
                                                onChange={(e) => field.onChange(parseFloat(e.target.value))}
                                                className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border-e-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-e-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                                                placeholder="Enter percentage"
                                                required
                                                min={0}
                                                max={100}
                                            />
                                        </div>
                                    </div>
                                )}
                            />
                            {errors.discountRate && (
                                <p className="text-red-500 text-xs">{errors.discountRate.message}</p>
                            )}
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block mb-1 text-sm text-[#333333] font-semibold">
                                Min Order
                            </label>
                            <Controller
                                control={control}
                                name="minOrder"
                                rules={{
                                    required: "Minimum order is required",
                                    min: { value: 0, message: "Value must be positive" }
                                }}
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
                                                    <path fill="#FFC107" fillRule="evenodd" d="M6.533 5.167L8.4 7.033l1.867-1.866h-3.734zm0 0L8.4 7.033l1.867-1.866h-3.734zm2.334 2.333a.778.778 0 100-1.555.778.778 0 000 1.555z" clipRule="evenodd" />
                                                </g>
                                            </svg>
                                            EGP
                                        </div>
                                        <div className="relative w-full">
                                            <input
                                                type="number"
                                                {...field}
                                                onChange={(e) => field.onChange(parseFloat(e.target.value))}
                                                className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-e-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-e-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                                                placeholder="Enter amount"
                                                required
                                                min={0}
                                            />
                                        </div>
                                    </div>
                                )}
                            />
                            {errors.minOrder && (
                                <p className="text-red-500 text-xs">{errors.minOrder.message}</p>
                            )}
                        </div>
                        <div>
                            <label className="block mb-1 text-sm text-[#333333] font-semibold">
                                Max Discount
                            </label>
                            <Controller
                                control={control}
                                name="maxDiscount"
                                rules={{
                                    required: "Maximum discount is required",
                                    min: { value: 0, message: "Value must be positive" }
                                }}
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
                                                    <path fill="#FFC107" fillRule="evenodd" d="M6.533 5.167L8.4 7.033l1.867-1.866h-3.734zm0 0L8.4 7.033l1.867-1.866h-3.734zm2.334 2.333a.778.778 0 100-1.555.778.778 0 000 1.555z" clipRule="evenodd" />
                                                </g>
                                            </svg>
                                            EGP
                                        </div>
                                        <div className="relative w-full">
                                            <input
                                                type="number"
                                                {...field}
                                                onChange={(e) => field.onChange(parseFloat(e.target.value))}
                                                className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-e-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-e-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                                                placeholder="Enter amount"
                                                required
                                                min={0}
                                            />
                                        </div>
                                    </div>
                                )}
                            />
                            {errors.maxDiscount && (
                                <p className="text-red-500 text-xs">{errors.maxDiscount.message}</p>
                            )}
                        </div>
                    </div>
                    <FooterDivider />
                    <div>
                        <label className="block mb-1 text-sm text-[#333333] font-semibold">
                            Target Audience
                        </label>
                        <Controller
                            control={control}
                            name="targetAudience"
                            render={({ field }) => (
                                <div className="flex items-center flex-wrap gap-5" id="checkbox">
                                    {["All Customers", "Loyalty Members", "New Customers", "Inactive Customers"].map((option) => (
                                        <div key={option} className="flex items-center gap-2">
                                            <Checkbox
                                                id={`audience-${option}`}
                                                checked={field.value?.includes(option) || false}
                                                onChange={(e) => handleCheckboxChange("targetAudience", option, e.target.checked)}
                                            />
                                            <Label htmlFor={`audience-${option}`}>{option}</Label>
                                        </div>
                                    ))}
                                </div>
                            )}
                        />
                    </div>
                    <div>
                        <label className="block mb-1 text-sm text-[#333333] font-semibold">
                            Campaign Description
                        </label>
                        <Controller
                            control={control}
                            name="description"
                            rules={{ required: "Description is required" }}
                            render={({ field }) => (
                                <textarea
                                    rows={3}
                                    {...field}
                                    placeholder="Write text here ..."
                                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm placeholder:text-[#B3B3B3] placeholder:font-normal"
                                />
                            )}
                        />
                        {errors.description && (
                            <p className="text-red-500 text-xs">{errors.description.message}</p>
                        )}
                    </div>

                    <div>
                        <label className="block mb-1 text-sm text-[#333333] font-semibold">
                            Campaign Goals
                        </label>
                        <Controller
                            control={control}
                            name="campaignGoals"
                            render={({ field }) => (
                                <div className="flex items-center flex-wrap gap-5" id="checkbox">
                                    {["Increase Sales", "Customer Retention", "Brand Awareness", "Acquire New Customers"].map((option) => (
                                        <div key={option} className="flex items-center gap-2">
                                            <Checkbox
                                                id={`goal-${option}`}
                                                checked={field.value?.includes(option) || false}
                                                onChange={(e) => handleCheckboxChange("campaignGoals", option, e.target.checked)}
                                            />
                                            <Label htmlFor={`goal-${option}`}>{option}</Label>
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