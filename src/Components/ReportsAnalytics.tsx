import { useMemo, useState } from "react";
import React, { useRef } from "react";
import Cards from "./Cards";
import {
  Dropdown,
  DropdownItem,
  Datepicker,
  Select,
  Button,
  Checkbox,
} from "flowbite-react";
import NewUploadIcon from "../assets/icons/NewUploadIcon";
import Chart from "react-apexcharts";
import ReactApexChart from "react-apexcharts";
import type { ApexOptions } from "apexcharts";
import VectorLine from "../assets/icons/VectorLine";
import { ChevronDown, MoreHorizontal } from "lucide-react";
const SERIES_COLORS = ["#1A56DB", "#16BDCA", "#FDBA8C", "#E74694"];

const DATA = {
  Years: {
    Desktop: {
      Direct: 22000,
      Sponsor: 16500,
      Affiliate: 12800,
      "Email marketing": 9400,
    },
    Tablet: {
      Direct: 8000,
      Sponsor: 5200,
      Affiliate: 3600,
      "Email marketing": 2100,
    },
    Mobile: {
      Direct: 16000,
      Sponsor: 11000,
      Affiliate: 8900,
      "Email marketing": 5700,
    },
  },
  Months: {
    Desktop: {
      Direct: 5400,
      Sponsor: 4100,
      Affiliate: 3200,
      "Email marketing": 2450,
    },
    Tablet: {
      Direct: 2100,
      Sponsor: 1300,
      Affiliate: 900,
      "Email marketing": 550,
    },
    Mobile: {
      Direct: 4800,
      Sponsor: 3300,
      Affiliate: 2700,
      "Email marketing": 1650,
    },
  },
  Days: {
    Desktop: {
      Direct: 180,
      Sponsor: 130,
      Affiliate: 92,
      "Email marketing": 71,
    },
    Tablet: { Direct: 60, Sponsor: 35, Affiliate: 24, "Email marketing": 15 },
    Mobile: { Direct: 150, Sponsor: 110, Affiliate: 88, "Email marketing": 56 },
  },
};

type Range = "Years" | "Months" | "Days";
type Device = "Desktop" | "Tablet" | "Mobile";
type Channel = "Direct" | "Sponsor" | "Affiliate" | "Email marketing";
const CHANNELS: Channel[] = [
  "Direct",
  "Sponsor",
  "Affiliate",
  "Email marketing",
];
const DEVICES: Device[] = ["Desktop", "Tablet", "Mobile"];

const sum = (arr: number[]) => arr.reduce((a, b) => a + b, 0);
const compactNumber = (n: number) =>
  n >= 1000 ? `${(n / 1000).toFixed(n % 1000 === 0 ? 0 : 1)}k` : `${n}`;

function computeSeries(range: Range, devices: Device[]): number[] {
  const active = devices.length ? devices : DEVICES;
  return CHANNELS.map((channel) =>
    sum(active.map((d) => DATA[range][d][channel] || 0))
  );
}
const getPaymentData = () => {
  return [60, 25, 15]; // Cash, Wallet, Visa
};

// Function to generate chart options
const getPaymentOptions = (): ApexCharts.ApexOptions => {
  return {
    chart: {
      type: "pie",
      toolbar: { show: false },
    },
    labels: ["Cash", "Wallet", "Visa"],
    colors: ["#244937", "#FF8A42", "#f3f4f6"],
    legend: { show: false },
    plotOptions: {
      pie: {
        dataLabels: {
          offset: -20, // pushes labels into the slice
        },
      },
    },
    dataLabels: {
      enabled: true,
      style: {
        fontSize: "12px",
        fontWeight: "semi-bold",
        colors: ["#999999"], // white text for contrast
      },
      dropShadow: {
        enabled: false,
        top: 1,
        left: 1,
        blur: 2,
        opacity: 0.7,
      },
      formatter: (val: number, opts) => {
        const label = opts.w.globals.labels[opts.seriesIndex];
        return `${label}\n${val.toFixed(0)}%`; // label + percentage stacked inside
      },
    },
    stroke: {
      width: 1,
      colors: ["#fff"],
    },
  };
};

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

  const getCustomerAnalysisOptions = (): ApexCharts.ApexOptions => {
    return {
      chart: {
        type: "line",
        toolbar: { show: false },
        zoom: { enabled: false },
      },
      stroke: {
        curve: "smooth",
        width: 3,
      },
      colors: ["#14532d", "#F97316"], // Dark green, Orange
      grid: {
        borderColor: "#e5e7eb",
        strokeDashArray: 4,
      },
      xaxis: {
        categories: [],
        labels: { style: { colors: "#9ca3af" } },
      },
      yaxis: {
        labels: { style: { colors: "#9ca3af" } },
      },
      legend: { show: false },
    };
  };

  // Function to return chart series based on filter
  const getCustomerAnalysisSeries = (view: "Years" | "Months" | "Days") => {
    switch (view) {
      case "Years":
        return [
          { name: "Clicks", data: [200, 300, 400, 500, 450, 600, 550] },
          { name: "CPC", data: [150, 250, 300, 200, 350, 300, 250] },
        ];
      case "Months":
        return [
          { name: "Clicks", data: [50, 100, 150, 200, 180, 250, 220] },
          { name: "CPC", data: [80, 120, 200, 180, 160, 140, 120] },
        ];
      case "Days":
        return [
          { name: "Clicks", data: [20, 40, 60, 80, 70, 100, 90] },
          { name: "CPC", data: [30, 50, 70, 60, 50, 40, 30] },
        ];
      default:
        return [];
    }
  };

  // Function to return x-axis labels
  const getCustomerAnalysisCategories = (view: "Years" | "Months" | "Days") => {
    if (view === "Years")
      return ["2019", "2020", "2021", "2022", "2023", "2024", "2025"];
    if (view === "Months")
      return [
        "01 Feb",
        "02 Feb",
        "03 Feb",
        "04 Feb",
        "05 Feb",
        "06 Feb",
        "07 Feb",
      ];
    if (view === "Days")
      return ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    return [];
  };

  const chartSeries = [
    {
      name: "Users",
      data: chartData[activeTab],
    },
  ];
  const [range, setRange] = useState<Range>("Months");
  const [selectedDevices, setSelectedDevices] = useState<Device[]>([
    ...DEVICES,
  ]);

  const series = useMemo(
    () => computeSeries(range, selectedDevices),
    [range, selectedDevices]
  );
  const total = useMemo(() => sum(series), [series]);

  const options: ApexOptions = useMemo(
    () => ({
      chart: {
        type: "donut",
        toolbar: { show: false },
      },
      labels: CHANNELS,
      legend: { show: false }, // We'll make our own legend
      stroke: { width: 0 },
      colors: SERIES_COLORS,
      dataLabels: { enabled: false },
      plotOptions: {
        pie: {
          donut: {
            size: "78%",
            labels: {
              show: true,
              name: { show: false },
              value: { show: false },
              total: { show: false },
            },
          },
        },
      },
    }),
    []
  );

  const toggleDevice = (d: Device) =>
    setSelectedDevices((prev) =>
      prev.includes(d) ? prev.filter((x) => x !== d) : [...prev, d]
    );

  const FilterButton = ({ label }: { label: Range }) => {
    const active = range === label;
    return (
      <Button
        size="xs"
        pill
        onClick={() => setRange(label)}
        className={
          active
            ? "bg-[#DEF7EC] hover:bg-[#DEF7EC] text-gray-700 text-sm rounded-lg"
            : "bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 text-sm rounded-lg"
        }
      >
        {label}
      </Button>
    );
  };
  const [selectedPeriod, setSelectedPeriod] = useState("Months");

  const periods = ["Years", "Months", "Days"];

  const metrics = [
    {
      value: "4.2 mins",
      change: "-0.5 mins",
      changeColor: "text-red-500",
      label: "Average Prep Time",
    },
    {
      value: "42/hour",
      change: "+3/hour",
      changeColor: "text-green-500",
      label: "Peak Hour Orders",
    },
    {
      value: "96.8%",
      change: "+1.2%",
      changeColor: "text-green-500",
      label: "On-Time Delivery",
    },
  ];
  const [selectedRange, setSelectedRange] = useState<
    "years" | "months" | "days"
  >("months");

  // Chart data for each range
  const chartDataSets = {
    years: [
      { name: "Revenue", data: [500, 600, 550, 700, 680, 720, 650] },
      { name: "Orders", data: [480, 580, 500, 650, 630, 680, 600] },
    ],
    months: [
      { name: "Revenue", data: [40, 55, 40, 45, 42, 55, 30] },
      { name: "Orders", data: [45, 45, 35, 55, 30, 50, 35] },
    ],
    days: [
      { name: "Revenue", data: [5, 6, 4, 7, 8, 6, 5] },
      { name: "Orders", data: [4, 5, 3, 6, 5, 4, 3] },
    ],
  };

  const chartFinancialOptions: ApexCharts.ApexOptions = {
    chart: {
      type: "bar",
      toolbar: { show: false },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "75%",
        borderRadius: 8,
      },
    },
    colors: ["#244937", "#FF8A42", "#666666"], // green, orange
    dataLabels: { enabled: false },
    legend: { show: false },
    grid: {
      borderColor: "#f3f4f6",
      strokeDashArray: 4,
    },
    xaxis: {
      categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      labels: { style: { fontSize: "14px", colors: "#374151" } },
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    yaxis: {
      labels: { style: { fontSize: "14px", colors: "#6b7280" } },
    },
  };

  const paymentOptions = getPaymentOptions();
  const paymentData = getPaymentData();
  const [activeView, setActiveView] = useState<"Years" | "Months" | "Days">(
    "Months"
  );
  const chartOptions = {
    ...getCustomerAnalysisOptions(),
    xaxis: {
      categories: getCustomerAnalysisCategories(activeView),
      labels: { style: { colors: "#9ca3af" } },
    },
  };
  return (
    <div className="m-4 ">
      <div className="flex items-center justify-between bg-backgroundaccent  mb-6 w-[1128px]">
        {/* Left Section */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-1">
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
      <div className="flex flex-wrap bg-white p-4 gap-6 rounded-lg shadow-sm mb-6 w-[1128px]">
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
        <div className="w-full max-w-[552px] rounded-xl bg-white p-4 sm:p-5 shadow-sm border border-gray-100 ">
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
              height={250}
            />
          </div>

          {/* Footer */}
          <div className="flex justify-between items-center  mt-3 text-sm">
            <span className="text-gray-500 cursor-pointer">Last 7 days ▼</span>
            <span className="text-green-700 font-medium cursor-pointer">
              USERS REPORT →
            </span>
          </div>
        </div>
        <div className="w-full max-w-[552px] rounded-xl bg-white p-4 sm:p-5 shadow-sm border border-gray-100">
          {/* Header */}
          <div className="flex items-center justify-between">
            <h3 className="text-gray-900 font-semibold">Sales by Category</h3>
            <div className="flex gap-2 ">
              <FilterButton label="Years" />
              <FilterButton label="Months" />
              <FilterButton label="Days" />
            </div>
          </div>

          {/* Subtitle + device filters */}
          <div className="mt-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-gray-900 font-semibold">
                Website traffic
              </span>
            </div>
            <div className="flex items-center gap-5">
              {DEVICES.map((d) => (
                <label
                  key={d}
                  className="flex items-center gap-2 text-sm text-gray-700 select-none"
                >
                  <Checkbox
                    checked={selectedDevices.includes(d)}
                    onChange={() => toggleDevice(d)}
                    className="rounded border-gray-300"
                  />
                  {d}
                </label>
              ))}
            </div>
          </div>

          {/* Donut Chart with centered total */}
          <div className="relative flex items-center justify-center mt-4">
            <ReactApexChart
              options={options}
              series={series}
              type="donut"
              height={260}
            />
            <div className="absolute flex flex-col items-center">
              <span className="text-2xl font-bold">{compactNumber(total)}</span>
              <span className="text-xs text-gray-500">Unique visitors</span>
            </div>
          </div>

          {/* Custom legend like the image */}
          <div className="flex justify-center gap-5 mt-3">
            {CHANNELS.map((ch, i) => (
              <div
                key={ch}
                className="flex items-center gap-1 text-sm text-gray-700"
              >
                <span
                  className="inline-block w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: SERIES_COLORS[i] }}
                />
                {ch}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-white rounded-xl shadow-sm p-4 w-[1128px] mt-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-semibold text-gray-900 text-lg">
            Operational Metrics
          </h2>
          <div className="flex space-x-1 bg-gray-100 rounded-lg p-1">
            {periods.map((period) => (
              <Button
                key={period}
                size="xs"
                color="light"
                className={`rounded-md px-3 py-1 text-sm font-medium ${
                  selectedPeriod === period
                    ? "bg-green-100 text-gray-900"
                    : "bg-transparent text-gray-700"
                }`}
                onClick={() => setSelectedPeriod(period)}
              >
                {period}
              </Button>
            ))}
          </div>
        </div>

        {/* Metrics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="bg-gray-50 rounded-xl p-4 flex flex-col justify-between"
            >
              <div className="flex items-baseline justify-between">
                <span className="text-[#FF8A42] font-semibold text-lg">
                  {metric.value}
                </span>
                <span className={`text-xs font-medium ${metric.changeColor}`}>
                  {metric.change}
                </span>
              </div>
              <p className="mt-2 text-gray-800 font-medium">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className=" p-6 bg-white rounded-lg shadow-sm border border-gray-200 w-[1128px] mt-6">
        {/* Header */}
        <div className="mb-4">
          <h2 className="text-lg font-semibold text-gray-800 mb-6">
            Financial Summary
          </h2>
          <VectorLine width="1070" height="2" color="#CECECE" />
        </div>

        {/* Revenue & Orders Row */}
        <div className="flex justify-between items-start ">
          <div>
            <h3 className="text-base font-semibold text-gray-800">
              Revenue & Orders
            </h3>
            <div className="flex items-center mt-4 space-x-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-gray-100 rounded-lg flex items-center justify-center">
                  <svg
                    width={48}
                    height={49}
                    viewBox="0 0 48 49"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      y="0.0512695"
                      width={48}
                      height={48}
                      rx={8}
                      fill="#F3F4F6"
                    />
                    <path
                      d="M23.9993 24.7529C26.2085 24.7529 27.9993 22.8678 27.9993 20.5424C27.9993 18.217 26.2085 16.3319 23.9993 16.3319C21.7902 16.3319 19.9993 18.217 19.9993 20.5424C19.9993 22.8678 21.7902 24.7529 23.9993 24.7529Z"
                      fill="#6B7280"
                    />
                    <path
                      d="M22.666 28.9634H25.3327C26.7472 28.9634 28.1037 29.5549 29.1039 30.6077C30.1041 31.6606 30.666 33.0885 30.666 34.5774V37.3844H17.3327V34.5774C17.3327 33.0885 17.8946 31.6606 18.8948 30.6077C19.895 29.5549 21.2515 28.9634 22.666 28.9634Z"
                      fill="#6B7280"
                    />
                    <path
                      d="M27.9993 20.5424C27.9984 19.5501 27.6638 18.5902 27.0549 17.8327C26.4461 17.0751 25.6022 16.5688 24.6727 16.4034"
                      fill="#6B7280"
                    />
                    <path
                      d="M29.9993 10.7179C29.0414 10.7209 28.102 10.9965 27.2805 11.5153C26.4591 12.0341 25.7861 12.7769 25.3327 13.6652C26.8376 13.9907 28.1898 14.8525 29.1614 16.1053C30.1329 17.3581 30.6643 18.9252 30.666 20.5424C30.6638 20.995 30.6191 21.4463 30.5327 21.8898C31.896 21.7532 33.1567 21.0683 34.0524 19.9778C34.948 18.8873 35.4095 17.4751 35.3408 16.0354C35.2721 14.5956 34.6784 13.2393 33.6834 12.2488C32.6884 11.2582 31.3688 10.7099 29.9993 10.7179Z"
                      fill="#6B7280"
                    />
                    <path
                      d="M20.4873 26.482C19.3493 25.7318 18.45 24.641 17.9047 23.3494H17.3327C15.5652 23.3516 13.8708 24.0917 12.621 25.4072C11.3712 26.7228 10.6681 28.5064 10.666 30.3669V33.1739C10.666 33.5462 10.8065 33.9032 11.0565 34.1664C11.3066 34.4296 11.6457 34.5774 11.9993 34.5774H14.666C14.6691 32.7455 15.2389 30.9645 16.2892 29.5039C17.3395 28.0432 18.8132 26.9825 20.4873 26.482Z"
                      fill="#6B7280"
                    />
                    <path
                      d="M30.666 23.3494H30.094C29.5487 24.641 28.6494 25.7318 27.5114 26.482C29.1855 26.9825 30.6592 28.0432 31.7095 29.5039C32.7598 30.9645 33.3296 32.7455 33.3327 34.5774H35.9993C36.353 34.5774 36.6921 34.4296 36.9422 34.1664C37.1922 33.9032 37.3327 33.5462 37.3327 33.1739V30.3669C37.3306 28.5064 36.6275 26.7228 35.3777 25.4072C34.1279 24.0917 32.4335 23.3516 30.666 23.3494Z"
                      fill="#6B7280"
                    />
                    <path
                      d="M17.3327 20.5424C17.3344 18.9252 17.8658 17.3581 18.8373 16.1053C19.8089 14.8525 21.1611 13.9907 22.666 13.6652C22.2307 12.8144 21.5935 12.0967 20.8165 11.582C20.0395 11.0673 19.1492 10.7732 18.2321 10.7282C17.3151 10.6831 16.4026 10.8888 15.5835 11.3252C14.7643 11.7615 14.0665 12.4137 13.5579 13.2182C13.0492 14.0227 12.7471 14.9521 12.681 15.9159C12.6148 16.8797 12.7868 17.8452 13.1803 18.7183C13.5738 19.5914 14.1754 20.3424 14.9264 20.8981C15.6774 21.4539 16.5523 21.7955 17.466 21.8898C17.3796 21.4464 17.3349 20.995 17.3327 20.5424Z"
                      fill="#6B7280"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-xl font-bold">3.4k</p>
                  <p className="text-sm text-gray-500">
                    Leads generated per week
                  </p>
                </div>
              </div>
              <span className="bg-green-100 text-green-600 text-xs font-medium px-2 py-1 rounded-full">
                ↑ 24%
              </span>
            </div>

            <p className="mt-2 text-sm text-gray-600">
              Money spent:{" "}
              <span className="font-semibold text-gray-800">3,232 L.E</span>{" "}
              Conversion rate:{" "}
              <span className="font-semibold text-gray-800">1.2%</span>
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex space-x-2">
            {["years", "months", "days"].map((range) => (
              <button
                key={range}
                onClick={() =>
                  setSelectedRange(range as "years" | "months" | "days")
                }
                className={`px-3 py-1 text-sm rounded-md border ${
                  selectedRange === range
                    ? "bg-green-100 text-green-700 border-green-300"
                    : "bg-white text-gray-700 border-gray-300"
                }`}
              >
                {range.charAt(0).toUpperCase() + range.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Chart */}
        <div className="mt-6">
          <Chart
            options={chartFinancialOptions}
            series={chartDataSets[selectedRange]}
            type="bar"
            height={300}
          />
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center mt-2 text-sm text-gray-500">
          <span>Last 7 days</span>
          <a href="#" className="text-green-700 font-medium">
            USERS REPORT &gt;
          </a>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-6 w-full mt-6">
        <div className=" p-5 bg-white rounded-xl border border-gray-200 shadow-sm w-full max-w-[552px]">
          {/* Header */}
          <div className="flex justify-between items-center">
            <h5 className="text-lg font-semibold">Payment Methods</h5>
            <div className="flex items-center bg-gray-100 rounded-lg overflow-hidden text-sm font-medium">
              <button className="px-3 py-1 text-gray-700 hover:bg-gray-200">
                Years
              </button>
              <button className="px-3 py-1 bg-green-100 text-green-800">
                Months
              </button>
              <button className="px-3 py-1 text-gray-700 hover:bg-gray-200">
                Days
              </button>
            </div>
          </div>

          {/* Title & Date */}
          <div className="flex justify-between items-center mt-4">
            <div>
              <h6 className="text-base font-bold">Traffic</h6>
              <div className="flex items-center text-gray-500 text-sm">
                31 Nov - 31 Dec <ChevronDown size={16} className="ml-1" />
              </div>
            </div>
            <MoreHorizontal size={20} className="text-gray-500" />
          </div>

          {/* Chart */}
          <div className="mt-4">
            <Chart
              options={paymentOptions}
              series={paymentData}
              type="pie"
              height={250}
            />
          </div>

          {/* Legend */}
          <div className="flex justify-center space-x-6 mt-2 text-sm">
            <span className="flex items-center">
              <span className="w-3 h-3 rounded-full bg-[#244937] mr-1"></span>
              Direct
            </span>
            <span className="flex items-center">
              <span className="w-3 h-3 rounded-full bg-[#FF8A42] mr-1"></span>{" "}
              Search
            </span>
            <span className="flex items-center">
              <span className="w-3 h-3 rounded-full bg-gray-200 mr-1"></span>{" "}
              Referrals
            </span>
          </div>

          {/* Footer */}
          <div className="flex justify-between items-center text-sm mt-4">
            <span className="text-gray-500">Last 7 days</span>
            <span className="text-green-800 font-medium cursor-pointer">
              TRAFFIC ANALYSIS
            </span>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-5  w-full max-w-[552px]">
          {/* Top bar */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Customer Analysis</h2>
            <div className="flex bg-gray-100 rounded-lg p-1">
              {(["Years", "Months", "Days"] as const).map((tab) => (
                <Button
                  key={tab}
                  size="xs"
                  color="light"
                  className={`rounded-md px-3 ${
                    activeView === tab ? "bg-green-100 text-green-800" : ""
                  }`}
                  onClick={() => setActiveView(tab)}
                >
                  {tab}
                </Button>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="flex justify-between items-center mb-4">
            <div className="flex space-x-6">
              <div>
                <span className="text-gray-500 text-sm">Clicks</span>
                <p className="font-bold text-lg">234,5K</p>
              </div>
              <div>
                <span className="text-gray-500 text-sm">CPC</span>
                <p className="font-bold text-lg">300 L.E</p>
              </div>
            </div>
            <Dropdown label="Last week" inline={true} size="sm">
              <DropdownItem>Last week</DropdownItem>
              <DropdownItem>Last month</DropdownItem>
              <DropdownItem>Last year</DropdownItem>
            </Dropdown>
          </div>

          {/* Chart */}
          <ReactApexChart
            options={chartOptions}
            series={getCustomerAnalysisSeries(activeView)}
            type="line"
            height={220}
          />
        </div>
      </div>
    </div>
  );
};

export default ReportsAnalytics;
