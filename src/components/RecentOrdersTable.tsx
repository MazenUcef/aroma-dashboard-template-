import ArrowRight from "../assets/icons/ArrowRight";

interface Order {
  id: string;
  customer: string;
  items: number;
  total: number;
  status: string;
}

const orders: Order[] = [
  {
    id: "#ORD-7245",
    customer: "Eleanor Pena",
    items: 2,
    total: 2000,
    status: "Completed",
  },
  {
    id: "#ORD-7244",
    customer: "Dianne Russell",
    items: 3,
    total: 600,
    status: "Completed",
  },
  {
    id: "#ORD-7243",
    customer: "Savannah Nguyen",
    items: 6,
    total: 250,
    status: "Cancelled",
  },
  {
    id: "#ORD-7242",
    customer: "Jerome Bell",
    items: 8,
    total: 690,
    status: "In progress",
  },
  {
    id: "#ORD-7241",
    customer: "Theresa Webb",
    items: 9,
    total: 340,
    status: "Completed",
  },
  {
    id: "#ORD-7240",
    customer: "Cody Fisher",
    items: 4,
    total: 945,
    status: "Completed",
  },
];

const RecentOrdersTable = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-800";
      case "Cancelled":
        return "bg-red-100 text-red-800";
      case "In progress":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div
      className="w-full md:w-[46.5rem] h-full bg-background text-foreground dark:text-foreground rounded-lg p-6 md:p-6 mt-6"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold ">Recent Orders</h2>
          <button className="flex items-center justify-center gap-2 font-semibold cursor-pointer  rounded-lg text-xs bg-[#244937] text-white hover:bg-green-800 px-4 py-2">
            View All
            <ArrowRight />
          </button>
        </div>
        <div className="text-[16px] font-normal overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-forminputs">
                {/* Always show Order ID */}
                <th className="p-2.5">Order ID</th>

                {/* Hide Customer & Items on small screens */}
                <th className="p-2.5 hidden md:table-cell">Customer</th>
                <th className="p-2.5 hidden md:table-cell">Items</th>

                {/* Always show Total & Status */}
                <th className="p-2.5">Total</th>
                <th className="p-2.5">STATUS</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr
                  key={order.id}
                  className="border-b border-[#EEEEEE] last:border-b-0"
                >
                  {/* Always show Order ID */}
                  <td className="p-2.5">{order.id}</td>

                  {/* Hide on small screens */}
                  <td className="p-2.5 hidden md:table-cell">
                    {order.customer}
                  </td>
                  <td className="p-2.5 hidden md:table-cell">{order.items}</td>

                  {/* Always show Total & Status */}
                  <td className="p-2.5">{order.total} LE</td>
                  <td className="p-2.5">
                    <span
                      className={`inline-flex items-center px-2 py-1 rounded ${getStatusColor(
                        order.status
                      )}`}
                    >
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RecentOrdersTable;
