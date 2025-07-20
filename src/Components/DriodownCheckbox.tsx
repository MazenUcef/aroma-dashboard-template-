import { useState } from "react";

interface DropdownCheckboxProps {
    buttonText: string;
    options: {
        id: string;
        label: string;
        checked?: boolean;
    }[];
    onSelectionChange?: (selectedIds: string[]) => void;
}

export const DropdownCheckbox = ({
    buttonText,
    options,
    onSelectionChange,
}: DropdownCheckboxProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState<string[]>(
        options.filter((opt) => opt.checked).map((opt) => opt.id)
    );

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleCheckboxChange = (id: string) => {
        const newSelected = selectedOptions.includes(id)
            ? selectedOptions.filter((optId) => optId !== id)
            : [...selectedOptions, id];

        setSelectedOptions(newSelected);
        onSelectionChange?.(newSelected);
    };

    return (
        <div className="relative">
            {/* Dropdown Button */}
            <button
                id="dropdownCheckboxButton"
                onClick={toggleDropdown}
                className="text-[#244937] border-1 border-gray-200 bg-white font-semibold rounded-lg h-[48px] text-[16px] px-5 py-2.5 text-center inline-flex items-center"
                type="button"
            >
                {buttonText}
                <svg
                    className="w-2.5 h-2.5 ms-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                >
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 4 4 4-4"
                    />
                </svg>
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
                <div
                    id="dropdownDefaultCheckbox"
                    className="z-10 absolute mt-1 w-48 bg-white divide-y divide-gray-100 rounded-lg shadow-sm dark:bg-gray-700 dark:divide-gray-600"
                >
                    <ul
                        className="p-3 space-y-3 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="dropdownCheckboxButton"
                    >
                        {options.map((option) => (
                            <li key={option.id}>
                                <div className="flex items-center">
                                    <input
                                        id={`checkbox-item-${option.id}`}
                                        type="checkbox"
                                        checked={selectedOptions.includes(option.id)}
                                        onChange={() => handleCheckboxChange(option.id)}
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                    />
                                    <label
                                        htmlFor={`checkbox-item-${option.id}`}
                                        className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                    >
                                        {option.label}
                                    </label>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};