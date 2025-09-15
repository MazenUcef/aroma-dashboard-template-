import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DeleteModal from "./DeleteComponents";

interface Column {
  key: string;
  header: string;
  width?: string;
}

interface RowData {
  [key: string]: string | number | boolean | React.ReactNode;
  id: string;
}

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

interface DataTableProps {
  columns: Column[];
  data: RowData[];
  selectable?: boolean;
  onSelect?: (selectedIds: string[]) => void;
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
  className?: string;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({
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
      <button
        id="dropdownMenuIconButton"
        onClick={toggleDropdown}
        className={`inline-flex items-center p-2 text-sm font-medium text-center text-foreground bg-background rounded-lg hover:bg-background focus:ring-2 focus:outline-none dark:text-foreground focus:ring-gray-50 dark:bg-background dark:hover:bg-background dark:focus:ring-gray-600 ${buttonClassName}`}
        type="button"
      >
        {icon}
      </button>
      {isOpen && (
        <div
          className={`z-10 absolute ${
            position === "right" ? "right-0" : "left-0"
          } mt-1 bg-backgroundaccent border border-inputborder dark:border-inputborder divide-y divide-inputborder rounded-lg shadow-sm w-44 dark:bg-backgroundaccent dark:divide-inputborder ${menuClassName}`}
        >
          <ul className="py-2 text-sm" aria-labelledby="dropdownMenuIconButton">
            {items.map((item, index) => (
              <li key={index}>
                {item.href ? (
                  <a
                    href={item.href}
                    className="flex items-center px-4 py-2 hover:bg-background dark:hover:bg-background dark:hover:text-forground"
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
                    className="w-full text-left flex items-center px-4 py-2 hover:bg-background dark:hover:bg-background dark:hover:text-forground"
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

export const DataTable: React.FC<DataTableProps> = ({
  columns,
  data,
  selectable = true,
  onSelect,
  onEdit,
  onDelete,
  className = "",
}) => {
  const [selectedRows, setSelectedRows] = useState<string[]>([]);
  const [selectAll, setSelectAll] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [deleteTargetId, setDeleteTargetId] = useState<string | null>(null);
  const navigate = useNavigate();

  const getStatusStyles = (status: string) => {
    switch (status.toLowerCase()) {
      case "completed":
        return "bg-[#DEF7EC] text-[#244937]";
      case "cancelled":
        return "bg-[#FDE8E8] text-[#9B1C1C]";
      case "processing":
      case "in progress":
        return "bg-[#EDEBFE] text-[#5521B5]";
      default:
        return "";
    }
  };

  const getPaymentStyles = (payment: string) => {
    switch (payment.toLowerCase()) {
      case "pending":
        return "text-[#FACC15]";
      case "refunded":
        return "text-[#EF4444]";
      case "paid":
        return "text-[#22C55E]";
      default:
        return "";
    }
  };

  const handleRowSelect = (id: string) => {
    const newSelected = selectedRows.includes(id)
      ? selectedRows.filter((rowId) => rowId !== id)
      : [...selectedRows, id];
    setSelectedRows(newSelected);
    onSelect?.(newSelected);
    setSelectAll(newSelected.length === data.length);
  };

  const handleSelectAll = () => {
    const newSelectAll = !selectAll;
    setSelectAll(newSelectAll);
    const newSelected = newSelectAll ? data.map((row) => row.id) : [];
    setSelectedRows(newSelected);
    onSelect?.(newSelected);
  };

  return (
    <div
      className={`relative overflow-x-auto shadow-md sm:rounded-lg ${className}`}
    >
      <table className="w-full text-sm text-left rtl:text-right text-foreground dark:text-foreground">
        <thead className="text-xs uppercase bg-forminputs dark:bg-forminputs">
          <tr>
            {selectable && (
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    checked={selectAll}
                    onChange={handleSelectAll}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="checkbox-all-search"
                    className="sr-only text-foreground dark:text-foreground"
                  >
                    Select all
                  </label>
                </div>
              </th>
            )}
            {columns.map((column, index) => (
              <th
                key={column.key}
                scope="col"
                className={`px-6 py-3 ${column.width ? column.width : ""} ${
                  index > 2 ? "hidden md:table-cell" : ""
                } font-poppins font-semibold text-sm text-foreground dark:text-foreground`}
              >
                {column.header}
              </th>
            ))}
            {(onEdit || onDelete) && (
              <th
                scope="col"
                className="px-6 py-3 font-poppins font-semibold text-sm text-foreground dark:text-foreground"
              >
                Action
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr
              key={row.id}
              className="bg-background border-b dark:bg-background dark:border-inputborder border-inputborder hover:bg-tabhover dark:hover:bg-tabhover"
            >
              {selectable && (
                <td className="w-4 p-4">
                  <div className="flex items-center">
                    <input
                      id={`checkbox-table-search-${row.id}`}
                      type="checkbox"
                      checked={selectedRows.includes(row.id)}
                      onChange={() => handleRowSelect(row.id)}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor={`checkbox-table-search-${row.id}`}
                      className="sr-only"
                    >
                      Select
                    </label>
                  </div>
                </td>
              )}
              {columns.map((column, index) => (
                <td
                  key={`${row.id}-${column.key}`}
                  className={`px-6 py-4 ${
                    index > 2 ? "hidden md:table-cell" : ""
                  }`}
                >
                  {column.key === "status" ? (
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusStyles(
                        String(row[column.key])
                      )}`}
                    >
                      {row[column.key]}
                    </span>
                  ) : column.key === "payment" ? (
                    <span
                      className={`${getPaymentStyles(String(row[column.key]))}`}
                    >
                      {row[column.key]}
                    </span>
                  ) : column.key === "name" ? (
                    <th
                      scope="row"
                      className="font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {row[column.key]}
                    </th>
                  ) : (
                    row[column.key]
                  )}
                </td>
              ))}
              {(onEdit || onDelete) && (
                <td className="px-6 py-4 ">
                  <DropdownMenu
                    items={[
                      ...(onEdit
                        ? [
                            {
                              label: "Edit",
                              onClick: () => {
                                navigate("/edit-order");
                                onEdit?.(row.id);
                              },
                            },
                          ]
                        : []),
                      ...(onDelete
                        ? [
                            {
                              label: "Delete",
                              onClick: () => {
                                setDeleteTargetId(row.id);
                                setOpenDeleteModal(true);
                              },
                            },
                          ]
                        : []),
                    ]}
                    position="right"
                  />
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
      <DeleteModal
        isOpen={openDeleteModal}
        onClose={() => setOpenDeleteModal(false)}
        onConfirm={() => {
          if (deleteTargetId) {
            onDelete?.(deleteTargetId);
          }
          setOpenDeleteModal(false);
        }}
        title="Delete Row"
        message="Are you sure you want to delete this row? This action cannot be undone."
      />
    </div>
  );
};
