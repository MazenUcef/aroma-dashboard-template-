import { useState } from 'react';
import PlusIcon from '../assets/icons/PlusIcon'
import { FooterDivider } from 'flowbite-react';
import Upload from '../assets/icons/Upload';
import { DropdownCheckbox } from '../components/DriodownCheckbox';
import { SearchInput } from '../components/SearchInput';
import Trash from '../assets/icons/Trash';
import { DataTable } from '../components/DataTable';


const Orders = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchTerm2, setSearchTerm2] = useState('');

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
            id: 'ORD-1001',
            customer: 'John Doe',
            product: 'Wireless Headphones',
            dateTime: '2023-05-15 10:30',
            amount: 129.99,
            items: 1,
            status: 'completed',
            payment: 'paid'
        },
        {
            id: 'ORD-1002',
            customer: 'Jane Smith',
            product: 'Smart Watch',
            dateTime: '2023-05-16 14:45',
            amount: 199.99,
            items: 2,
            status: 'processing',
            payment: 'paid'
        },

    ];


    const columns = [
        { key: 'id', header: 'Order ID', width: 'w-32' },
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



    return (
        <div className='flex py-[15px] px-[24px] flex-col w-[70.5rem] h-full'>
            <div className='flex justify-between items-center w-full mb-[30px]'>
                <div>
                    <h1 className='text-[20px] font-bold'>Orders Management</h1>
                    <h2 className='text-[14px] font-normal'>Manage and track customer orders</h2>
                </div>
                <div>
                    <div className='flex gap-[24px] item-center'>
                        <button className='bg-[#244937] w-[168px] flex justify-center items-center gap-2 cursor-pointer text-white h-[48px] rounded-md'>
                            <PlusIcon fill='#FFFFFF' stroke='#FFFFFF' />
                            <span>New Order</span>
                        </button>
                        <button className='borde border-1 bg-white border-[#244937] w-[48px] flex justify-center items-center cursor-pointer h-[48px] rounded-md'>
                            <Upload />
                        </button>
                    </div>
                </div>
            </div>

            <div className='p-[14px] bg-white flex flex-col rounded-[8px] w-full'>
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
                            <button className='borde border-1 bg-white border-[#EF4444] w-[48px] flex justify-center items-center cursor-pointer h-[48px] rounded-md'>
                                <Trash />
                            </button>
                        </div>
                    </div>
                </div>
                <FooterDivider />
                <div className='w-full overflow-x-auto'>
                    <DataTable
                        columns={columns}
                        data={orders}
                        selectable={true}
                        onSelect={handleSelect}
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                        className="w-full mx-auto"
                    />
                </div>
            </div>
        </div >
    )
}

export default Orders