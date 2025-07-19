import { useState } from "react";
import Chart from "react-apexcharts";

const OrderTypesCard = () => {
  const [selectedOrderTypes] = useState<string[]>([
    "Dine-in",
    "Takeaway",
    "Delivery",
  ]);

  const allOrderTypes = [
    { name: "Dine-in", value: 50 },
    { name: "Takeaway", value: 30 },
    { name: "Delivery", value: 20 },
  ];

  const filteredData = allOrderTypes.filter((d) =>
    selectedOrderTypes.includes(d.name)
  );

  const chartOptions = {
    chart: {
      type: "donut" as const,
      width: 300,
    },
    labels: filteredData.map((d) => d.name),
    colors: ["#244937", "#FF8A42", "#666666"],
    legend: {
      position: "top" as const,
      fontSize: "12px",
      markers: {
        width: 12,
        height: 12,
        strokeWidth: 0,
        shape: "square" as const,
        radius: 6,
      },
      itemMargin: {
        horizontal: 10,
      },
      labels: {
        colors: "#374151",
      },
    },
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        donut: {
          size: "75%",
          labels: {
            show: false,
          },
        },
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 250,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
    theme: {
      mode: "light" as const,
    },
  };

  const chartSeries = filteredData.map((d) => d.value);

  return (
    <div
      className="w-[22.5rem] h-[21.125rem] bg-background text-foreground dark:text-foreground rounded-lg mb-4 overflow-hidden"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      <div className="flex justify-between mb-3 container mx-auto p-[1.8438rem]">
        <div className="flex justify-center items-center">
          <h5 className="text-[20px] font-semibold leading-none text-nowrap pe-1">
            Order Types Distribution
          </h5>
        </div>
        <div className="hidden bg-background dark:bg-background sm:inline-flex items-center justify-center w-8 h-8 rounded-lg">
          <button>
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              viewBox="0 0 16 18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 1v11m0 0 4-4m-4 4L4 8m11 4v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="sr-only">Download data</span>
          </button>
        </div>
      </div>

      {/* Donut Chart */}
      <div className="container mx-auto flex justify-center">
        <Chart
          options={chartOptions}
          series={chartSeries}
          type="donut"
          height={222}
        />
      </div>
    </div>
  );
};

export default OrderTypesCard;
