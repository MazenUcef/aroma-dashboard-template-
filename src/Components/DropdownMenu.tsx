import React, { useState, useRef, useEffect } from "react";

interface MenuItem {
  label: string;
  onClick?: () => void;
  href?: string;
  icon?: React.ReactNode;
}

interface DropdownMenuProps {
  icon?: React.ReactNode;
  items: MenuItem[];
  position?: "left" | "right";
  className?: string;
  buttonClassName?: string;
  menuClassName?: string;
}

export const DropdownMenu: React.FC<DropdownMenuProps> = ({
  icon = (
    <svg
      className="w-5 h-5"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 4 15"
    >
      <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
    </svg>
  ),
  items,
  position = "left",
  className = "",
  buttonClassName = "",
  menuClassName = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={`relative inline-block ${className}`} ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        id="dropdownMenuIconButton"
        onClick={toggleDropdown}
        className={`inline-flex items-center p-2 text-sm font-medium text-center text-foreground bg-background rounded-lg hover:bg-backgroundaccent focus:ring-4 focus:outline-none dark:text-foreground focus:ring-gray-50 dark:bg-background dark:hover:bg-backgroundaccent dark:focus:ring-gray-600 ${buttonClassName}`}
        type="button"
      >
        {icon}
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className={`z-10 absolute ${
            position === "right" ? "right-0" : "left-0"
          } mt-1 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 dark:divide-gray-600 ${menuClassName}`}
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownMenuIconButton"
          >
            {items.map((item, index) => (
              <li key={index}>
                {item.href ? (
                  <a
                    href={item.href}
                    className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    onClick={() => {
                      item.onClick?.();
                      setIsOpen(false);
                    }}
                  >
                    {item.icon && <span className="mr-2">{item.icon}</span>}
                    {item.label}
                  </a>
                ) : (
                  <button
                    className="w-full text-left flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    onClick={() => {
                      item.onClick?.();
                      setIsOpen(false);
                    }}
                  >
                    {item.icon && <span className="mr-2">{item.icon}</span>}
                    {item.label}
                  </button>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
