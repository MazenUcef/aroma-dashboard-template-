import ColumnChart from "../components/ColumnChart";
import CustomerActivityFeed from "../components/CustomerActivityFeed";
import LowStockComp from "../components/LowStockComp";
import RecentOrdersTable from "../components/RecentOrdersTable";
import coffeBean from "../assets/images/coffe-beans.png";
import coffeCups from "../assets/images/coffe-cups.png";
import caramel from "../assets/images/caramel.png";
import Cards from "../components/Cards";
import OrderTypesChart from "../components/OrderTypesChart";

const Home = () => {
    const lowStockList = [
        {
            image: coffeBean, // Replace with actual image URLs
            name: "Arabica Coffee Beans",
            count: 3,
        },
        {
            image: coffeCups,
            name: "Vanilla Syrup",
            count: 5,
        },
        {
            image: caramel,
            name: "To-Go Cups (Large)",
            count: 1,
        },
        {
            image: caramel,
            name: "To-Go Cups (Large)",
            count: 4,
        },
    ];

return (
    <section className="flex flex-col px-6 pt-6 pb-12">
        {/* Top row: Full-width Cards component */}
        <div className="w-full">
        <Cards />
        </div>
        {/* Second row: Two flex items */}
        <div className="flex flex-col h-[43.625rem] md:flex-row gap-6 w-full">
        <div className="h-[43.625rem] flex-col">
            <div className="">
            <OrderTypesChart />
            </div>
            <div className="">
            <CustomerActivityFeed />
            </div>
        </div>

        <div className="w-full">
            <ColumnChart
            title="Performance"
            value="3.4k"
            description="Leads generated per week"
            trendPercentage="42.5%"
            moneySpent="$3,232"
            conversionRate="1.2%"
            showDropdown={true}
            showReportLink={true}
            />
        </div>
        </div>
        {/* Third row: Three flex items */}
        <div className="flex flex-col md:flex-row gap-6 w-full h-[30.6875rem]">
        <div className="">
            <RecentOrdersTable />
        </div>
        <div className="">
            <LowStockComp list={lowStockList} />
        </div>
        </div>
    </section>
);
};

export default Home;
