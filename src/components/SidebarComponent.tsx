import { Sidebar, SidebarItem, SidebarItemGroup, SidebarItems, SidebarCollapse } from "flowbite-react";
import Logo from '../assets/images/Dashbaord Logo.png'
import { Link, useLocation } from "react-router-dom";
import HomeIcon from "../assets/icons/HomeIcon";
import ShoppingCartIcon from "../assets/icons/ShoppingCartIcon";
import NoteTextIcon from "../assets/icons/NoteTextIcon";
import ShoppingBagIcon from "../assets/icons/ShoppingBagIcon";
import PieChartIcon from "../assets/icons/PieChartIcon";
import UserIcon from "../assets/icons/UserIcon";
import BuildingIcon from "../assets/icons/BuildingIcon";
import SettingsIcon from "../assets/icons/SettingsIcon";

const SidebarComponent = () => {
    const location = useLocation();

    const isActive = (href: string) => {
        if (href === '/') {
            return location.pathname === '/';
        }
        return location.pathname.startsWith(href);
    };

    const LinksBeforeDivider = [
        {
            name: 'Dashboard',
            icon: HomeIcon,
            href: '/'
        },
        {
            name: 'Orders',
            icon: ShoppingCartIcon,
            href: '/orders'
        },
        {
            name: 'Inventory',
            icon: ShoppingBagIcon,
            href: '/inventory'
        },
        {
            name: 'Analytics',
            icon: PieChartIcon,
            href: '/analytics'
        },
    ];

    const LinksAfterDivider = [
        {
            name: 'User Management',
            icon: UserIcon,
            href: '/userManagement'
        },
        {
            name: 'Marketing',
            icon: BuildingIcon,
            href: '/marketing'
        },
        {
            name: 'Settings',
            icon: SettingsIcon,
            href: '/settings'
        },
    ];

    return (
        <Sidebar className="h-screen fixed top-0 left-0" aria-label="Sidebar">
            <Link to='/' className="h-[6.519rem]">
                <img src={Logo} alt="Logo" className="w-[11.204rem] h-[2.689] mx-auto pt-2 pb-7" />
            </Link>
            <SidebarItems className="mt-5">
                <SidebarItemGroup>
                    {LinksBeforeDivider.map((link, index) => (
                        <SidebarItem
                            key={index}
                            href={link.href}
                            icon={link.icon}
                            className={`font-semibold ${isActive(link.href) ? 'bg-[#ddeee6] text-primary' : 'hover:bg-[#ddeee6]'}`}
                        >
                            {link.name}
                        </SidebarItem>
                    ))}
                    
                    <SidebarCollapse 
                        icon={NoteTextIcon}
                        label="Menu Management"
                        className={`font-semibold ${isActive('/menu') ? 'bg-[#ddeee6] text-primary' : 'hover:bg-[#ddeee6]'}`}
                    >
                        <SidebarItem 
                            href="/menu/products"
                            className={`ml-4 ${isActive('/menu/products') ? 'bg-[#ddeee6] text-primary' : 'hover:bg-[#ddeee6]'}`}
                        >
                            Products
                        </SidebarItem>
                        <SidebarItem 
                            href="/menu/categories"
                            className={`ml-4 ${isActive('/menu/categories') ? 'bg-[#ddeee6] text-primary' : 'hover:bg-[#ddeee6]'}`}
                        >
                            Categories
                        </SidebarItem>
                    </SidebarCollapse>
                </SidebarItemGroup>
                
                <SidebarItemGroup>
                    {LinksAfterDivider.map((link, index) => (
                        <SidebarItem
                            key={index}
                            href={link.href}
                            icon={link.icon}
                            className={`font-semibold ${isActive(link.href) ? 'bg-[#ddeee6] text-primary' : 'hover:bg-[#ddeee6]'}`}
                        >
                            {link.name}
                        </SidebarItem>
                    ))}
                </SidebarItemGroup>
            </SidebarItems>
        </Sidebar>
    );
};

export default SidebarComponent;