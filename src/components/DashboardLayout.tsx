import { Outlet } from 'react-router-dom'
import SidebarComponent from './SidebarComponent'
import Cards from './Cards'

const DashboardLayout = () => {
    return (
        <div className='flex min-h-screen w-full'>
            {/* Sidebar for Desktop */}
            <SidebarComponent />
            {/* Main Content */}
            <div className='w-full sm:w-[calc(100%-16rem)] bg-[#eef0f1] ml-auto  min-h-screen'>
                {/* Header with Menu Toggle for Mobile */}
                <header className="h-[5rem] bg-[#f9fafb]">
                    
                </header>
                <Cards />
                <Outlet />
            </div>
        </div>
    )
}

export default DashboardLayout