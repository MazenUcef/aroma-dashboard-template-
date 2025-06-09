import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import DashboardLayout from "../components/DashboardLayout";
import Home from "../pages/Home";
import Orders from "../pages/Orders";
import Inventory from "../pages/Inventory";
import Analytics from "../pages/Analytics";
import UserManagement from "../pages/UserManagement";
import Marketing from "../pages/Marketing";
import Settings from "../pages/Settings";
import Products from "../pages/Products";
import Category from "../pages/Category";

const AppRoutes = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<DashboardLayout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="orders" element={<Orders />} />
            <Route path="inventory" element={<Inventory />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="userManagement" element={<UserManagement />} />
            <Route path="marketing" element={<Marketing />} />
            <Route path="settings" element={<Settings />} />
            <Route path="menu/products" element={<Products />} />
            <Route path="menu/categories" element={<Category />} />
        </Route>
    )
);

export default AppRoutes;