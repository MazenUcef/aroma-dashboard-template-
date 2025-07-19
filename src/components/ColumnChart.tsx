import React, { useEffect, useRef, useState } from 'react';
import ApexCharts from 'apexcharts';
import { Link } from 'react-router-dom';


interface DashboardCardProps {
    title: string;
    value: string;
    description: string;
    trendPercentage: string;
    moneySpent: string;
    conversionRate: string;
    showDropdown?: boolean;
    showReportLink?: boolean;
}


const chartData = {
    daily: {
        moneySpent: [120, 190, 90, 150, 210, 180, 80],
        conversionRate: [1.2, 1.8, 0.9, 1.5, 2.1, 1.8, 0.8]
    },
    weekly: {
        moneySpent: [850, 920, 780, 1100],
        conversionRate: [8.5, 9.2, 7.8, 11.0],
        categories: ['Week 1', 'Week 2', 'Week 3', 'Week 4']
    },
    monthly: {
        moneySpent: [3500, 4200, 3800, 4500, 5000, 4800],
        conversionRate: [35, 42, 38, 45, 50, 48],
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
    },
    yearly: {
        moneySpent: [45000, 52000, 48000, 55000],
        conversionRate: [45, 52, 48, 55],
        categories: ['2020', '2021', '2022', '2023']
    }
};

const ColumnChart: React.FC<DashboardCardProps> = ({
    title,
    value,
    description,
    trendPercentage,
    moneySpent,
    conversionRate,
    showReportLink = true,
}) => {
    const chartRef = useRef<HTMLDivElement>(null);
    const chartInstance = useRef<ApexCharts | null>(null);
    const [timeRange, setTimeRange] = useState<'daily' | 'weekly' | 'monthly' | 'yearly'>('daily');
    const [activeTab, setActiveTab] = useState<'daily' | 'weekly' | 'monthly' | 'yearly'>('daily');
    useEffect(() => {


        if (chartRef.current && typeof ApexCharts !== 'undefined') {
            const categories = timeRange === 'daily'
                ? ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                : chartData[timeRange].categories;

            const options = {
                colors: ["#244937", "#ff8a42"], // Custom colors for Money Spent and Conversion Rate
                series: [
                    {
                        name: "Money Spent",
                        data: chartData[timeRange].moneySpent
                    },
                    {
                        name: "Conversion Rate",
                        data: chartData[timeRange].conversionRate
                    }
                ],
                chart: {
                    type: "bar",
                    height: "420px", // changed it from 320 to 420 ---> Joe
                    fontFamily: "Inter, sans-serif",
                    toolbar: {
                        show: false,
                    },
                },
                plotOptions: {
                    bar: {
                        horizontal: false,
                        columnWidth: "70%",
                        borderRadiusApplication: "end",
                        borderRadius: 8,
                    },
                },
                dataLabels: {
                    enabled: false,
                },
                stroke: {
                    show: true,
                    width: 2,
                    colors: ["transparent"]
                },
                xaxis: {
                    categories: categories,
                    labels: {
                        style: {
                            fontFamily: "Inter, sans-serif",
                            cssClass: 'text-xs font-normal fill-foreground dark:fill-foreground'
                        }
                    },
                    axisBorder: {
                        show: false,
                    },
                    axisTicks: {
                        show: false,
                    },
                },
                yaxis: [
                    {
                        title: {
                            text: "Money Spent ($)",
                            style: {
                                color: "transparent",
                                fontFamily: "Inter, sans-serif"
                            }
                        },
                        labels: {
                            style: {
                                colors: "transparent",
                                fontFamily: "Inter, sans-serif"
                            }
                        }
                    },
                    {
                        opposite: true,
                        title: {
                            text: "Conversion Rate (%)",
                            style: {
                                color: "transparent",
                                fontFamily: "Inter, sans-serif"
                            }
                        },
                        labels: {
                            style: {
                                colors: "transparent",
                                fontFamily: "Inter, sans-serif"
                            }
                        }
                    }
                ],
                tooltip: {
                    y: {
                        formatter: function (val: number, { seriesIndex }: { seriesIndex: number }) {
                            return seriesIndex === 0 ? `$${val}` : `${val}%`;
                        }
                    }
                },
                legend: {
                    position: 'bottom',
                    horizontalAlign: 'left',
                    fontFamily: "Inter, sans-serif",
                    markers: {
                        radius: 12
                    },
                    itemMargin: {
                        horizontal: 10
                    },
                    style: {
                        colors: "#ff8a42",
                        fontFamily: "Inter, sans-serif"
                    }
                },
                grid: {
                    borderColor: "transparent"
                }
            };

            if (chartInstance.current) {
                chartInstance.current.destroy();
            }

            chartInstance.current = new ApexCharts(chartRef.current, options);
            chartInstance.current.render();
        }

        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        };
    }, [timeRange]);

    const handleTimeRangeChange = (range: 'daily' | 'weekly' | 'monthly' | 'yearly') => {
        setTimeRange(range);
    };

    return (
        <div className="w-[46.5rem] h-full bg-background rounded-lg p-4 md:p-6 text-foreground dark:text-foreground">
            <div className='w-full flex justify-between items-center mb-4'>
                <div>
                    <h1 className='text-[20px] font-semibold'>Revenue & Orders</h1>
                </div>
                <div className='font-semibold'>
                    <button onClick={() => {
                        setActiveTab('yearly');
                        handleTimeRangeChange('yearly');
                    }} className={`w-[5.063rem] rounded-l-md border border-customborder h-[2.375rem] cursor-pointer ${activeTab === 'yearly' ? 'bg-customtab' : ''}`}>Years</button>
                    <button onClick={() => {
                        setActiveTab('monthly');
                        handleTimeRangeChange('monthly');
                    }} className={`w-[5.063rem] border border-customborder h-[2.375rem] cursor-pointer ${activeTab === 'monthly' ? 'bg-customtab' : ''}`}>Months</button>
                    <button onClick={() => {
                        setActiveTab('weekly');
                        handleTimeRangeChange('weekly');
                    }} className={`w-[5.063rem] border border-customborder h-[2.375rem] cursor-pointer ${activeTab === 'weekly' ? 'bg-customtab' : ''}`}>Week</button>
                    <button onClick={() => {
                        setActiveTab('daily');
                        handleTimeRangeChange('daily');
                    }} className={`w-[5.063rem] rounded-r-md border border-customborder h-[2.375rem] cursor-pointer ${activeTab === 'daily' ? 'bg-customtab' : ''}`}>Daily</button>
                </div>
            </div>
            <div className="flex justify-between pb-4 mb-4 border-b border-[#CECECE] dark:border-[#CECECE]">
                <div className="flex items-center">
                    <div className="w-12 h-12 rounded-lg bg-[#BBDDCD] dark:bg-[#BBDDCD] flex items-center justify-center me-3">
                        <svg className="w-6 h-6 text-[#F9FAFB]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 19">
                            <path d="M14.5 0A3.987 3.987 0 0 0 11 2.1a4.977 4.977 0 0 1 3.9 5.858A3.989 3.989 0 0 0 14.5 0ZM9 13h2a4 4 0 0 1 4 4v2H5v-2a4 4 0 0 1 4-4Z" />
                            <path d="M5 19h10v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2ZM5 7a5.008 5.008 0 0 1 4-4.9 3.988 3.988 0 1 0-3.9 5.859A4.974 4.974 0 0 1 5 7Zm5 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm5-1h-.424a5.016 5.016 0 0 1-1.942 2.232A6.007 6.007 0 0 1 17 17h2a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5ZM5.424 9H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h2a6.007 6.007 0 0 1 4.366-5.768A5.016 5.016 0 0 1 5.424 9Z" />
                        </svg>
                    </div>
                    <div>
                        <h5 className="leading-none text-2xl font-bold  pb-1">{value}</h5>
                        <p className="text-sm font-normal ">{description}</p>
                    </div>
                </div>
                <div>
                    <span className="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-1 rounded-md dark:bg-green-900 dark:text-green-300">
                        <svg className="w-2.5 h-2.5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13V1m0 0L1 5m4-4 4 4" />
                        </svg>
                        {trendPercentage}
                    </span>
                </div>
            </div>

            <div className="flex gap-16">
                <dl className="flex items-center">
                    <dt className=" text-sm font-normal me-1">Money spent:</dt>
                    <dd className=" text-sm  font-semibold">{moneySpent}</dd>
                </dl>
                <dl className="flex items-center justify-end">
                    <dt className=" text-sm font-normal me-1">Conversion rate:</dt>
                    <dd className=" text-sm  font-semibold">{conversionRate}</dd>
                </dl>
            </div>

            <div id="column-chart" ref={chartRef}></div>

            <div className="grid grid-cols-1 items-center border-[#CECECE] border-t dark:border-[#CECECE] justify-between">
                <div className="flex justify-between items-center pt-5">

                    {showReportLink && (
                        <Link
                            to="#"
                            className="uppercase text-sm font-semibold inline-flex items-center rounded-lg text-foreground hover:text-[#ff8a42]  dark:hover:text-[#ff8a42]  px-3 py-2">
                            {title} Report
                            <svg className="w-2.5 h-2.5 ms-1.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                            </svg>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ColumnChart;