import { useState } from "react";
import React, { useRef } from "react";
import Cards from "./Cards";
import {
  Dropdown,
  DropdownItem,
  Datepicker,
  Select,
  Card,
  Button,
} from "flowbite-react";
import NewUploadIcon from "../assets/icons/NewUploadIcon";
import Chart from "react-apexcharts";

const ReportsAnalytics = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Handle file selection
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      console.log("Uploaded file:", file.name);
      // You can send the file to an API here
    }
  };
  const today = new Date();
  const [dateRange, setDateRange] = useState<Date | null>(null);
  const [category, setCategory] = useState("All Categories");
  const [branch, setBranch] = useState("All Branches");
  const [comparison, setComparison] = useState("Comparison");

  const [activeTab, setActiveTab] = useState<"Years" | "Months" | "Days">(
    "Months"
  );

  // Chart datasets for each filter
  const chartData: Record<"Years" | "Months" | "Days", number[]> = {
    Years: [200, 250, 180, 300, 400, 350, 500],
    Months: [40, 45, 38, 60, 20, 40, 32],
    Days: [5, 8, 6, 10, 4, 7, 9],
  };

  const chartOptions: ApexCharts.ApexOptions = {
    chart: {
      type: "area",
      toolbar: { show: false },
      zoom: { enabled: false },
      sparkline: { enabled: true },
    },
    stroke: {
      curve: "smooth",
      width: 3,
      colors: ["#14532d"], // dark green
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.3,
        opacityTo: 0,
        stops: [0, 90, 100],
      },
    },
    tooltip: { enabled: false },
    grid: { show: false },
    xaxis: {
      labels: { show: false },
      axisTicks: { show: false },
      axisBorder: { show: false },
    },
    yaxis: { show: false },
  };

  const chartSeries = [
    {
      name: "Users",
      data: chartData[activeTab],
    },
  ];
  return (
    <div className="m-4 ">
      <div className="flex items-center justify-between bg-backgroundaccent  mb-6 w-[1128px]">
        {/* Left Section */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            Analytics & Reports
          </h2>
          <p className="text-sm text-gray-500">
            Subheading: "Business performance insights and metrics"
          </p>
        </div>

        {/* Right Section - Icon Dropdown */}
        <Dropdown
          inline
          label=""
          renderTrigger={() => (
            <button className="p-2 border border-gray-300 rounded-md hover:bg-gray-100 focus:outline-none">
              <NewUploadIcon />
            </button>
          )}
        >
          <DropdownItem onClick={() => alert("Export as CSV")}>
            Export as CSV
          </DropdownItem>
          <DropdownItem onClick={() => alert("Export as Excel")}>
            Export as Excel
          </DropdownItem>
          <DropdownItem onClick={() => fileInputRef.current?.click()}>
            Upload File
          </DropdownItem>
        </Dropdown>

        {/* Hidden File Input */}
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileUpload}
          className="hidden"
        />
      </div>
      <div className="flex flex-wrap bg-white p-4 gap-6 rounded-lg shadow-sm mb-6  w-[1128px]">
        {/* Date Range */}
        <div className="flex flex-col ">
          <label className="mb-1 text-base font-poppins font-semibold">
            Date Range
          </label>
          <Datepicker
            defaultValue={today}
            value={dateRange}
            onChange={(date: Date | null) => setDateRange(date)}
            className="w-[245.3333px]"
          />
        </div>

        {/* Categories */}
        <div className="flex flex-col ">
          <label className="mb-1 text-sm font-semibold">Categories</label>
          <Select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-[245.3333px]"
          >
            <option>All Categories</option>
            <option>Category 1</option>
            <option>Category 2</option>
          </Select>
        </div>

        {/* Branches */}
        <div className="flex flex-col ">
          <label className="mb-1 text-base font-poppins font-semibold">
            Branches
          </label>
          <Select
            value={branch}
            onChange={(e) => setBranch(e.target.value)}
            className="w-[245.3333px]"
          >
            <option>All Branches</option>
            <option>Branch 1</option>
            <option>Branch 2</option>
          </Select>
        </div>

        {/* Comparison */}
        <div className="flex flex-col ">
          <label className="mb-1 text-base font-poppins font-semibold">
            Comparison
          </label>
          <Select
            value={comparison}
            onChange={(e) => setComparison(e.target.value)}
            className="w-[245.3333px]"
          >
            <option>Comparison</option>
            <option>Option 1</option>
            <option>Option 2</option>
          </Select>
        </div>
      </div>
      <div>
        <Cards />
      </div>
      <div className="flex flex-col md:flex-row gap-6 w-full ">
        <Card className="w-full max-w-sm p-4">
          {/* Header */}
          <div className="flex justify-between items-center mb-3">
            <h5 className="text-sm font-medium text-gray-500">Sales Trend</h5>
            <div className="flex gap-1">
              {(["Years", "Months", "Days"] as const).map((tab) => (
                <Button
                  key={tab}
                  size="xs"
                  color="light"
                  className={`rounded-lg px-3 py-1 text-xs ${
                    activeTab === tab
                      ? "bg-green-100 text-green-700"
                      : "bg-gray-100 text-gray-600"
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </Button>
              ))}
            </div>
          </div>

          {/* Users count */}
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold">32.4k</h3>
              <p className="text-sm text-gray-500">Users this week</p>
            </div>
            <span className="text-green-500 text-sm font-medium">12% ↑</span>
          </div>

          {/* Chart */}
          <div className="mt-4">
            <Chart
              options={chartOptions}
              series={chartSeries}
              type="area"
              height={100}
            />
          </div>

          {/* Footer */}
          <div className="flex justify-between items-center mt-3 text-sm">
            <span className="text-gray-500 cursor-pointer">Last 7 days ▼</span>
            <span className="text-green-700 font-medium cursor-pointer">
              USERS REPORT →
            </span>
          </div>
              </Card>
              
      </div>
    </div>
  );
};

export default ReportsAnalytics;
