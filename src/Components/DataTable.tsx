import React, { useState, useRef, useEffect } from 'react';

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
    position?: 'left' | 'right';
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
    position = 'left',
    className = '',
    buttonClassName = '',
    menuClassName = '',
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className={`relative inline-block ${className}`} ref={dropdownRef}>
            <button
                id="dropdownMenuIconButton"
                onClick={toggleDropdown}
                className={`inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600 ${buttonClassName}`}
                type="button"
            >
                {icon}
            </button>
            {isOpen && (
                <div
                    className={`z-10 absolute ${position === 'right' ? 'right-0' : 'left-0'} mt-1 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 dark:divide-gray-600 ${menuClassName}`}
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

export const DataTable: React.FC<DataTableProps> = ({
    columns,
    data,
    selectable = true,
    onSelect,
    onEdit,
    onDelete,
    className = '',
}) => {
    const [selectedRows, setSelectedRows] = useState<string[]>([]);
    const [selectAll, setSelectAll] = useState(false);

    const handleRowSelect = (id: string) => {
        const newSelected = selectedRows.includes(id)
            ? selectedRows.filter(rowId => rowId !== id)
            : [...selectedRows, id];
        setSelectedRows(newSelected);
        onSelect?.(newSelected);
        setSelectAll(newSelected.length === data.length);
    };

    const handleSelectAll = () => {
        const newSelectAll = !selectAll;
        setSelectAll(newSelectAll);
        const newSelected = newSelectAll ? data.map(row => row.id) : [];
        setSelectedRows(newSelected);
        onSelect?.(newSelected);
    };

    return (
        <div className={`relative overflow-x-auto shadow-md sm:rounded-lg ${className}`}>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
                                    <label htmlFor="checkbox-all-search" className="sr-only">Select all</label>
                                </div>
                            </th>
                        )}
                        {columns.map(column => (
                            <th
                                key={column.key}
                                scope="col"
                                className={`px-6 py-3 ${column.width ? column.width : ''}`}
                            >
                                {column.header}
                            </th>
                        ))}
                        {(onEdit || onDelete) && <th scope="col" className="px-6 py-3">Action</th>}
                    </tr>
                </thead>
                <tbody>
                    {data.map(row => (
                        <tr
                            key={row.id}
                            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
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
                                        <label htmlFor={`checkbox-table-search-${row.id}`} className="sr-only">Select</label>
                                    </div>
                                </td>
                            )}
                            {columns.map(column => (
                                <td
                                    key={`${row.id}-${column.key}`}
                                    className="px-6 py-4"
                                >
                                    {column.key === 'name' ? (
                                        <th scope="row" className="font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {row[column.key]}
                                        </th>
                                    ) : (
                                        row[column.key]
                                    )}
                                </td>
                            ))}
                            {(onEdit || onDelete) && (
                                <td className="px-6 py-4">
                                    <DropdownMenu
                                        items={[
                                            ...(onEdit ? [{
                                                label: 'Edit',
                                                onClick: () => onEdit(row.id),
                                            }] : []),
                                            ...(onDelete ? [{
                                                label: 'Delete',
                                                onClick: () => onDelete(row.id),
                                            }] : []),
                                        ]}
                                        position="right"
                                    />
                                </td>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};