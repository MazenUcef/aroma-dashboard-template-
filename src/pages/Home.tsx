import ColumnChart from "../components/ColumnChart"


const Home = () => {
    return (
        <div>
            <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam iste voluptate ut aliquid quis, numquam odit enim ipsum aut voluptas alias nemo exercitationem eaque eum necessitatibus, sapiente accusamus laborum saepe!</div>
            <div className="p-4">
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
    )
}

export default Home