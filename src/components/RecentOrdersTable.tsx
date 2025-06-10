
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
      className="w-[46.5rem] bg-white rounded-lg shadow-sm  p-4 md:p-6 mt-6"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Recent Orders</h2>
          <button className="bg-[#244937] text-white px-4 py-2 rounded">
            View All →
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#F9FAFB] text-[#666666]">
                <th className="p-2">Order ID</th>
                <th className="p-2">Customer</th>
                <th className="p-2">Items</th>
                <th className="p-2">Total</th>
                <th className="p-2">STATUS</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr
                  key={order.id}
                  className="border-b border-[#EEEEEE] text-[#666666]"
                >
                  <td className="p-2">{order.id}</td>
                  <td className="p-2">{order.customer}</td>
                  <td className="p-2">{order.items}</td>
                  <td className="p-2">{order.total} LE</td>
                  <td className="p-2">
                    <span
                      className={`inline-flex items-center px-2 py-0.5 rounded ${getStatusColor(
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
