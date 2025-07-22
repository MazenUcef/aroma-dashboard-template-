import React from 'react';

interface SearchInputProps {
    id?: string;
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
    inputClassName?: string;
    iconClassName?: string;
    disabled?: boolean;
    required?: boolean;
}

export const SearchInput: React.FC<SearchInputProps> = ({
    id = 'default-search',
    placeholder = 'Search...',
    value,
    onChange,
    className = '',
    inputClassName = '',
    iconClassName = '',
    disabled = false,
    required = false,
}) => {
    return (
        <div className={`relative ${className}`}>
            <div className={`absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none ${iconClassName}`}>
                <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                >
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                </svg>
            </div>
            <input
                type="search"
                id={id}
                className={`block w-full h-[48px] ps-10 text-sm text-foreground dark:text-foreground  border border-inputborder rounded-lg bg-forminputs focus:ring-blue-500 focus:border-blue-500 dark:bg-forminputs dark:border-inputborder dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 ${inputClassName}`}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                disabled={disabled}
                required={required}
            />
        </div>
    );
};