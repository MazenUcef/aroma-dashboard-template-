import {
  Sidebar,
  SidebarItem,
  SidebarItemGroup,
  SidebarItems,
} from "flowbite-react";
import Logo from "../assets/images/Dashbaord Logo.png";
import DarkLogo from "../assets/images/Dashbaord Logo Dark.png";
import { Link, useLocation } from "react-router-dom";
import HomeIcon from "../assets/icons/HomeIcon";
import ShoppingCartIcon from "../assets/icons/ShoppingCartIcon";
import NoteTextIcon from "../assets/icons/NoteTextIcon";
import ShoppingBagIcon from "../assets/icons/ShoppingBagIcon";
import PieChartIcon from "../assets/icons/PieChartIcon";
import UserIcon from "../assets/icons/UserIcon";
import BuildingIcon from "../assets/icons/BuildingIcon";
import SettingsIcon from "../assets/icons/SettingsIcon";
import { ThemeContext } from "../context/themeContext";
import { useContext, useState, useEffect, useRef } from "react";
import { Menu } from "lucide-react";

const SidebarComponent = () => {
  const location = useLocation();
  const themeContext = useContext(ThemeContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  if (!themeContext) return null;
  const { theme } = themeContext;
  const darkMode = theme === "dark";


  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  const isActive = (href: string) => {
    if (href === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(href);
  };

  const SidebarTheme = {
    root: {
      base: "h-full flex flex-col",
      collapsed: {
        on: "w-16",
        off: "w-64",
      },
      inner:
        "h-full overflow-y-auto overflow-x-hidden rounded-none px-3 py-4 bg-background dark:bg-background text-foreground dark:text-foreground flex flex-col flex-grow",
    },
    collapse: {
      button:
        "group flex w-full items-center rounded-lg p-2 text-base font-normal text-foreground dark:text-foreground transition duration-75",
      icon: {
        base: "h-6 w-6 text-foreground transition duration-75 group-hover:text-foreground dark:text-foreground dark:group-hover:text-foreground",
        open: {
          off: "",
          on: "text-gray-900",
        },
      },
      label: {
        base: "ml-3 flex-1 whitespace-nowrap text-left",
        title: "sr-only",
        icon: {
          base: "h-6 w-6 transition delay-0 ease-in-out",
          open: {
            on: "rotate-180",
            off: "",
          },
        },
      },
      list: "space-y-2 py-2",
    },
    cta: {
      base: "mt-6 rounded-lg bg-gray-100 p-4 dark:bg-gray-700",
      color: {
        blue: "bg-cyan-50 dark:bg-cyan-900",
        dark: "bg-dark-50 dark:bg-dark-900",
        failure: "bg-red-50 dark:bg-red-900",
        gray: "bg-gray-50 dark:bg-gray-900",
        green: "bg-green-50 dark:bg-green-900",
        light: "bg-light-50 dark:bg-light-900",
        red: "bg-red-50 dark:bg-red-900",
        purple: "bg-purple-50 dark:bg-purple-900",
        success: "bg-green-50 dark:bg-green-900",
        yellow: "bg-yellow-50 dark:bg-yellow-900",
        warning: "bg-yellow-50 dark:bg-yellow-900",
      },
    },
    item: {
      base: "flex items-center justify-center rounded-lg p-2 text-base font-normal text-foreground dark:text-foreground hover:bg-sidebarhover dark:hover:bg-sidebarhover",
      active: " ",
      collapsed: {
        insideCollapse: "group w-full pl-8 transition duration-75",
        noIcon: "font-bold",
      },
      content: {
        base: "flex-1 whitespace-nowrap px-3",
      },
      icon: {
        base: "h-6 w-6 shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white",
        active: "text-gray-700 dark:text-gray-100",
      },
      label: "",
      listItem: "",
    },
    items: {
      base: "",
    },
    itemGroup: {
      base: "mt-4 space-y-2 border-t border-[#CECECE] pt-4 first:mt-0 first:border-t-0 first:pt-0 dark:border-[#CECECE]",
    },
    logo: {
      base: "mb-5 flex items-center pl-2.5",
      collapsed: {
        on: "hidden",
        off: "self-center whitespace-nowrap text-xl font-semibold dark:text-white",
      },
      img: "mr-3 h-6 sm:h-7",
    },
  };

  const LinksBeforeDivider = [
    {
      name: "Dashboard",
      icon: HomeIcon,
      href: "/",
    },
    {
      name: "Orders",
      icon: ShoppingCartIcon,
      href: "/orders",
    },
    {
      name: "Menu Management",
      icon: NoteTextIcon,
      href: "/menu",
    },
    {
      name: "Inventory",
      icon: ShoppingBagIcon,
      href: "/inventory",
    },
    {
      name: "Analytics",
      icon: PieChartIcon,
      href: "/analytics",
    },
  ];

  const LinksAfterDivider = [
    {
      name: "User Management",
      icon: UserIcon,
      href: "/userManagement",
    },
    {
      name: "Marketing",
      icon: BuildingIcon,
      href: "/marketing",
    },
    {
      name: "Settings",
      icon: SettingsIcon,
      href: "/settings",
    },
  ];

  return (
    <>
      {/* Mobile menu button */}
      <div
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="absolute top-4 left-4 p-2 rounded-md cursor-pointer dark:bg-gray-700 sm:hidden"
      >
        <Menu size={24} />
      </div>

      {/* Backdrop */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white/30  z-30 sm:hidden" />
      )}

      <Sidebar
        ref={sidebarRef}
        theme={SidebarTheme}
        className={`h-screen fixed top-0 left-0 transition-transform duration-300 z-40
            ${isMenuOpen ? "translate-x-0" : "-translate-x-full"} 
            sm:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="flex justify-between items-center h-[6.519rem] px-4">
          <Link to="/">
            <img
              src={darkMode ? DarkLogo : Logo}
              alt="Logo"
              className="w-[11.204rem] h-[2.689]"
            />
          </Link>
        </div>

        <SidebarItems className="flex-grow">
          <SidebarItemGroup>
            {LinksBeforeDivider.map((link, index) => (
              <SidebarItem
                key={index}
                href={link.href}
                icon={link.icon}
                className={`font-semibold ${isActive(link.href)
                    ? " bg-sidebarhover  dark:bg-sidebarhover text-primary"
                    : "hover:bg-sidebarhover dark:hover:bg-sidebarhover "
                  }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </SidebarItem>
            ))}
          </SidebarItemGroup>

          <SidebarItemGroup>
            {LinksAfterDivider.map((link, index) => (
              <SidebarItem
                key={index}
                href={link.href}
                icon={link.icon}
                className={`font-semibold ${isActive(link.href)
                    ? "bg-sidebarhover dark:bg-sidebarhover  text-primary"
                    : " hover:bg-sidebarhover dark:hover:bg-sidebarhover"
                  }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </SidebarItem>
            ))}
          </SidebarItemGroup>
        </SidebarItems>

        <div className="mt-auto p-4 border-t border-[#CECECE] dark:border-[#CECECE]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center">
              <UserIcon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            </div>
            <div>
              <p className="font-medium text-sm">John Doe</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">admin@example.com</p>
            </div>
          </div>
        </div>
      </Sidebar>
    </>
  );
};

export default SidebarComponent;