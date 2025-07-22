import { useState } from 'react';
import PlusIcon from '../assets/icons/PlusIcon'
import { FooterDivider, Pagination } from 'flowbite-react';
import { DropdownCheckbox } from '../components/DriodownCheckbox';
import { SearchInput } from '../components/SearchInput';
import Trash from '../assets/icons/Trash';
import { DataTable } from '../components/DataTable';
import { useNavigate } from "react-router-dom";
import { UploadIcon } from 'lucide-react';

const footertheme = {
    divider: {
        base: "my-6 w-full border-inputborder sm:mx-auto lg:my-8 dark:border-inputborder",
    },
};

const Orders = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchTerm2, setSearchTerm2] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const navigate = useNavigate();

    const options = [
        { id: "1", label: "New", checked: true },
        { id: "2", label: "In Progress" },
        { id: "3", label: "Ready" },
        { id: "4", label: "Completed" },
        { id: "5", label: "Cancelled" },
    ];

    const handleSelectionChange = (selectedIds: string[]) => {
        console.log("Selected IDs:", selectedIds);
    };

    const orders = [
        {
            id: "ORD-1001",
            customer: "John Doe",
            product: "Wireless Headphones",
            dateTime: "2023-05-15 10:30",
            amount: 129.99,
            items: 1,
            status: "completed",
            payment: "paid",
        },
        {
            id: "ORD-1002",
            customer: "Jane Smith",
            product: "Smart Watch",
            dateTime: "2023-05-16 14:45",
            amount: 199.99,
            items: 2,
            status: "processing",
            payment: "paid",
        },
        {
            id: "ORD-1003",
            customer: "Alice Johnson",
            product: "Bluetooth Speaker",
            dateTime: "2023-05-17 09:10",
            amount: 89.99,
            items: 1,
            status: "completed",
            payment: "paid",
        },
        {
            id: "ORD-1004",
            customer: "Michael Brown",
            product: "Gaming Mouse",
            dateTime: "2023-05-18 16:25",
            amount: 49.99,
            items: 1,
            status: "completed",
            payment: "paid",
        },
        {
            id: "ORD-1005",
            customer: "Emily Davis",
            product: "Laptop Stand",
            dateTime: "2023-05-19 11:50",
            amount: 39.99,
            items: 1,
            status: "cancelled",
            payment: "refunded",
        },
        {
            id: "ORD-1006",
            customer: "Chris Wilson",
            product: "Noise Cancelling Earbuds",
            dateTime: "2023-05-20 13:15",
            amount: 149.99,
            items: 1,
            status: "processing",
            payment: "pending",
        },
        {
            id: "ORD-1007",
            customer: "Sarah Lee",
            product: "Portable Charger",
            dateTime: "2023-05-21 17:00",
            amount: 25.99,
            items: 2,
            status: "completed",
            payment: "paid",
        },
        {
            id: "ORD-1008",
            customer: "David Taylor",
            product: "Mechanical Keyboard",
            dateTime: "2023-05-22 08:45",
            amount: 79.99,
            items: 1,
            status: "processing",
            payment: "paid",
        },
        {
            id: "ORD-1009",
            customer: "Olivia Martinez",
            product: "Wireless Mouse",
            dateTime: "2023-05-23 12:30",
            amount: 29.99,
            items: 1,
            status: "completed",
            payment: "paid",
        },
        {
            id: "ORD-1010",
            customer: "James Anderson",
            product: "External SSD 1TB",
            dateTime: "2023-05-24 15:20",
            amount: 109.99,
            items: 1,
            status: "completed",
            payment: "paid",
        },
        {
            id: "ORD-1011",
            customer: "Sophia Thomas",
            product: "Monitor Stand",
            dateTime: "2023-05-25 10:15",
            amount: 45.99,
            items: 1,
            status: "cancelled",
            payment: "refunded",
        },
        {
            id: "ORD-1012",
            customer: "Robert Garcia",
            product: "USB-C Hub",
            dateTime: "2023-05-26 14:50",
            amount: 34.99,
            items: 1,
            status: "processing",
            payment: "pending",
        },
        {
            id: "ORD-1013",
            customer: "Emma Robinson",
            product: "Desk Lamp",
            dateTime: "2023-05-27 09:30",
            amount: 27.99,
            items: 1,
            status: "completed",
            payment: "paid",
        },
        {
            id: "ORD-1014",
            customer: "William Clark",
            product: "Laptop Backpack",
            dateTime: "2023-05-28 11:45",
            amount: 59.99,
            items: 1,
            status: "completed",
            payment: "paid",
        },
        {
            id: "ORD-1015",
            customer: "Ava Rodriguez",
            product: "Wireless Charger",
            dateTime: "2023-05-29 16:10",
            amount: 19.99,
            items: 2,
            status: "processing",
            payment: "paid",
        },
        {
            id: "ORD-1016",
            customer: "Joseph Lewis",
            product: "HDMI Cable",
            dateTime: "2023-05-30 13:25",
            amount: 12.99,
            items: 3,
            status: "completed",
            payment: "paid",
        },
        {
            id: "ORD-1017",
            customer: "Mia Walker",
            product: "Screen Cleaner Kit",
            dateTime: "2023-05-31 10:50",
            amount: 9.99,
            items: 1,
            status: "cancelled",
            payment: "refunded",
        },
        {
            id: "ORD-1018",
            customer: "Charles Hall",
            product: "Webcam",
            dateTime: "2023-06-01 14:15",
            amount: 69.99,
            items: 1,
            status: "processing",
            payment: "pending",
        },
        {
            id: "ORD-1019",
            customer: "Charlotte Young",
            product: "Noise Cancelling Headphones",
            dateTime: "2023-06-02 09:40",
            amount: 179.99,
            items: 1,
            status: "completed",
            payment: "paid",
        },
        {
            id: "ORD-1020",
            customer: "Daniel Hernandez",
            product: "Ergonomic Mouse",
            dateTime: "2023-06-03 12:05",
            amount: 49.99,
            items: 1,
            status: "completed",
            payment: "paid",
        },
        {
            id: "ORD-1021",
            customer: "Amelia King",
            product: "Laptop Cooling Pad",
            dateTime: "2023-06-04 15:30",
            amount: 29.99,
            items: 1,
            status: "processing",
            payment: "paid",
        },
        {
            id: "ORD-1022",
            customer: "Matthew Wright",
            product: "USB Flash Drive 128GB",
            dateTime: "2023-06-05 10:55",
            amount: 14.99,
            items: 2,
            status: "completed",
            payment: "paid",
        },
        {
            id: "ORD-1023",
            customer: "Harper Lopez",
            product: "Bluetooth Earbuds",
            dateTime: "2023-06-06 14:20",
            amount: 59.99,
            items: 1,
            status: "cancelled",
            payment: "refunded",
        },
        {
            id: "ORD-1024",
            customer: "Andrew Hill",
            product: "Wireless Presenter",
            dateTime: "2023-06-07 09:45",
            amount: 24.99,
            items: 1,
            status: "processing",
            payment: "pending",
        },
        {
            id: "ORD-1025",
            customer: "Evelyn Scott",
            product: "Monitor Arm",
            dateTime: "2023-06-08 12:10",
            amount: 89.99,
            items: 1,
            status: "completed",
            payment: "paid",
        },
        {
            id: "ORD-1026",
            customer: "Joshua Green",
            product: "Docking Station",
            dateTime: "2023-06-09 15:35",
            amount: 129.99,
            items: 1,
            status: "completed",
            payment: "paid",
        },
        {
            id: "ORD-1027",
            customer: "Abigail Adams",
            product: "Keyboard Wrist Rest",
            dateTime: "2023-06-10 11:00",
            amount: 19.99,
            items: 1,
            status: "processing",
            payment: "paid",
        },
        {
            id: "ORD-1028",
            customer: "Christopher Baker",
            product: "Mouse Pad",
            dateTime: "2023-06-11 14:25",
            amount: 9.99,
            items: 2,
            status: "completed",
            payment: "paid",
        },
        {
            id: "ORD-1029",
            customer: "Elizabeth Gonzalez",
            product: "Laptop Sleeve",
            dateTime: "2023-06-12 09:50",
            amount: 24.99,
            items: 1,
            status: "cancelled",
            payment: "refunded",
        },
        {
            id: "ORD-1030",
            customer: "Ryan Nelson",
            product: "USB Microphone",
            dateTime: "2023-06-13 13:15",
            amount: 49.99,
            items: 1,
            status: "processing",
            payment: "pending",
        },
        {
            id: "ORD-1031",
            customer: "Sofia Carter",
            product: "Desk Organizer",
            dateTime: "2023-06-14 16:40",
            amount: 34.99,
            items: 1,
            status: "completed",
            payment: "paid",
        },
        {
            id: "ORD-1032",
            customer: "Nathan Mitchell",
            product: "Power Strip",
            dateTime: "2023-06-15 12:05",
            amount: 19.99,
            items: 1,
            status: "completed",
            payment: "paid",
        },
        {
            id: "ORD-1033",
            customer: "Avery Roberts",
            product: "Cable Management Kit",
            dateTime: "2023-06-16 15:30",
            amount: 14.99,
            items: 1,
            status: "processing",
            payment: "paid",
        },
        {
            id: "ORD-1034",
            customer: "David Phillips",
            product: "Wireless Keyboard",
            dateTime: "2023-06-17 10:55",
            amount: 59.99,
            items: 1,
            status: "completed",
            payment: "paid",
        },
        {
            id: "ORD-1035",
            customer: "Ella Turner",
            product: "Monitor Privacy Screen",
            dateTime: "2023-06-18 14:20",
            amount: 39.99,
            items: 1,
            status: "cancelled",
            payment: "refunded",
        },
        {
            id: "ORD-1036",
            customer: "Henry Parker",
            product: "USB-C to HDMI Adapter",
            dateTime: "2023-06-19 09:45",
            amount: 19.99,
            items: 2,
            status: "processing",
            payment: "pending",
        },
        {
            id: "ORD-1037",
            customer: "Scarlett Evans",
            product: "Laptop Stand",
            dateTime: "2023-06-20 13:10",
            amount: 35.99,
            items: 1,
            status: "completed",
            payment: "paid",
        },
        {
            id: "ORD-1038",
            customer: "Samuel Edwards",
            product: "Bluetooth Transmitter",
            dateTime: "2023-06-21 16:35",
            amount: 29.99,
            items: 1,
            status: "completed",
            payment: "paid",
        },
        {
            id: "ORD-1039",
            customer: "Victoria Collins",
            product: "Document Scanner",
            dateTime: "2023-06-22 12:00",
            amount: 149.99,
            items: 1,
            status: "processing",
            payment: "paid",
        },
        {
            id: "ORD-1040",
            customer: "Anthony Stewart",
            product: "External Hard Drive 2TB",
            dateTime: "2023-06-23 15:25",
            amount: 89.99,
            items: 1,
            status: "completed",
            payment: "paid",
        },
        {
            id: "ORD-1041",
            customer: "Madison Sanchez",
            product: "USB Hub",
            dateTime: "2023-06-24 10:50",
            amount: 24.99,
            items: 1,
            status: "cancelled",
            payment: "refunded",
        },
        {
            id: "ORD-1042",
            customer: "Dylan Morris",
            product: "Wireless Presenter",
            dateTime: "2023-06-25 14:15",
            amount: 34.99,
            items: 1,
            status: "processing",
            payment: "pending",
        },
        {
            id: "ORD-1043",
            customer: "Chloe Rogers",
            product: "Monitor Light Bar",
            dateTime: "2023-06-26 09:40",
            amount: 59.99,
            items: 1,
            status: "completed",
            payment: "paid",
        },
        {
            id: "ORD-1044",
            customer: "Julian Reed",
            product: "Laptop Lock",
            dateTime: "2023-06-27 13:05",
            amount: 29.99,
            items: 1,
            status: "completed",
            payment: "paid",
        },
        {
            id: "ORD-1045",
            customer: "Layla Cook",
            product: "USB-C Cable",
            dateTime: "2023-06-28 16:30",
            amount: 12.99,
            items: 3,
            status: "processing",
            payment: "paid",
        },
        {
            id: "ORD-1046",
            customer: "Carter Morgan",
            product: "Desk Mat",
            dateTime: "2023-06-29 12:55",
            amount: 19.99,
            items: 1,
            status: "completed",
            payment: "paid",
        },
    ]


    const itemsPerPage = 5;
    const totalPages = Math.ceil(orders.length / itemsPerPage);
    const paginatedOrders = orders.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const columns = [
        { key: 'id', header: 'Order ID', width: 'w-48' },
        { key: 'customer', header: 'Customer', width: 'w-48' },
        { key: 'product', header: 'Product', width: 'w-64' },
        { key: 'dateTime', header: 'Date & Time', width: 'w-40' },
        { key: 'amount', header: 'Amount', width: 'w-24' },
        { key: 'items', header: 'Items', width: 'w-20' },
        { key: 'status', header: 'Status', width: 'w-28' },
        { key: 'payment', header: 'Payment', width: 'w-28' },
    ];

    const handleSelect = (selectedIds: string[]) => {
        console.log('Selected IDs:', selectedIds);
    };

    const handleEdit = (id: string) => {
        console.log('Edit item:', id);
    };

    const handleDelete = (id: string) => {
        console.log('Delete item:', id);
    };

    const onPageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <div className='flex py-[15px] px-[24px] flex-col w-[70.5rem] min-h-screen text-foreground dark:text-foreground'>
            <div className='flex justify-between items-center w-full mb-[30px]'>
                <div className=''>
                    <h1 className='text-[20px] font-semibold'>Orders Management</h1>
                    <h2 className='text-[14px] font-normal'>Manage and track customer orders</h2>
                </div>
                <div>
                    <div className='flex gap-[24px] item-center'>
                        <button onClick={() => navigate('/new-order')} className='bg-custombtn2 dark:bg-custombtn2 w-[168px] flex justify-center items-center gap-2 cursor-pointer text-foreground dark:text-foreground h-[48px] rounded-md'>
                            <PlusIcon fill='#FFFFFF' stroke='#FFFFFF' />
                            <span className='text-[#fff] dark:text-[#fff]'>New Order</span>
                        </button>
                        <button className='borde border-1 bg-custombtn3 dark:bg-custombtn3 text-foreground dark:text-foreground border-arrowcolor dark:border-arrowcolor w-[48px] flex justify-center items-center cursor-pointer h-[48px] rounded-md'>
                            <UploadIcon />
                        </button>
                    </div>
                </div>
            </div>

            <div className='p-[14px] bg-background flex flex-col rounded-[8px] w-full'>
                <div className='w-full flex justify-between items-center'>
                    <div>
                        <DropdownCheckbox
                            buttonText="All Orders"
                            options={options}
                            onSelectionChange={handleSelectionChange}
                        />
                    </div>
                    <div className='flex gap-[24px] items-center'>
                        <div>
                            <SearchInput
                                value={searchTerm}
                                className='w-[384px] h-[48px]'
                                onChange={(e) => setSearchTerm(e.target.value)}
                                placeholder="Search by Order No. (e.g. 7240)"
                            />
                        </div>
                        <div>
                            <SearchInput
                                value={searchTerm2}
                                className='w-[384px] h-[48px]'
                                onChange={(e) => setSearchTerm2(e.target.value)}
                                placeholder="Search Customer"
                            />
                        </div>
                        <div className='h-full flex items-center justify-center'>
                            <button className='borde border-1 bg-[#FDE8E8] border-[#EF4444] w-[48px] flex justify-center items-center cursor-pointer h-[48px] rounded-md'>
                                <Trash />
                            </button>
                        </div>
                    </div>
                </div>
                <FooterDivider theme={footertheme.divider} />
                <div className='w-full overflow-x-auto'>
                    <DataTable
                        columns={columns}
                        data={paginatedOrders}
                        selectable={true}
                        onSelect={handleSelect}
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                        className="w-full mx-auto"
                    />
                </div>
                <div className="flex justify-between items-center w-full mt-4">
                    <span className="">
                        <span className='font-normal text-[14px] text-[#666666]'>Showing</span> {(currentPage - 1) * itemsPerPage + 1} <span className='font-normal text-[14px] text-[#666666]'>to</span>{' '}
                        {Math.min(currentPage * itemsPerPage, orders.length)} <span className='font-normal text-[14px] text-[#666666]'>of</span> {orders.length}
                    </span>
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={onPageChange}
                        showIcons
                    />
                </div>
            </div>
        </div>
    )
}

export default Orders;