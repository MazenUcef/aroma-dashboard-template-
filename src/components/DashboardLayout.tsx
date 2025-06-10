import { Outlet } from 'react-router-dom'
import SidebarComponent from './SidebarComponent'
import NotificationBell from './NotificationBell'
import { Avatar, Dropdown, DropdownDivider, DropdownHeader, DropdownItem } from 'flowbite-react'

const DashboardLayout = () => {
    return (
        <div className='flex min-h-screen w-full'>
            {/* Sidebar for Desktop */}
            <SidebarComponent />
            {/* Main Content */}
            <div className='w-full sm:w-[calc(100%-16rem)] bg-[#eef0f1] ml-auto  min-h-screen'>
                {/* Header with Menu Toggle for Mobile */}
                <header className="h-[5rem] flex items-center gap-8 justify-end bg-[#f9fafb]">
                    <NotificationBell />
                    <div>
                        <Dropdown
                            arrowIcon={false}
                            inline
                            label={
                                <div className='flex cursor-pointer w-[12.75rem] items-center justify-start gap-3'>
                                    <div>
                                        <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
                                    </div>
                                    <div>
                                        <h1 className='font-semibold'>Albeir Attef</h1>
                                        <h1 className='text-sm'>UI/UX Dev</h1>
                                    </div>
                                </div>
                            }
                        >
                            <DropdownItem>View Profile</DropdownItem>
                            <DropdownItem>Settings</DropdownItem>
                            <DropdownItem>Logout</DropdownItem>
                        </Dropdown>
                    </div>
                </header>
                <Outlet />
            </div>
        </div>
    )
}

export default DashboardLayout