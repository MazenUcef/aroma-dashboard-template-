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
        <div>
            <div className="p-4">
                <Cards />
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
                <RecentOrdersTable />
                <CustomerActivityFeed />
                <OrderTypesChart/>
                <LowStockComp list={lowStockList} />
            </div>
        </div>
    );
};

export default Home;
