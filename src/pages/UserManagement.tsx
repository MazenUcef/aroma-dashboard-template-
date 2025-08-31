import { useEffect, useState } from "react";
import PluseIcon from "../assets/icons/PluseIcon";
import { FooterDivider, Pagination, Avatar } from "flowbite-react";
import { DropdownCheckbox } from "../components/DriodownCheckbox";
import { SearchInput } from "../components/SearchInput";
import Trash from "../assets/icons/Trash";
import { DataTable } from "../components/DataTable";
import AddUserManagement from "../components/AddUserMangement";

const footertheme = {
  divider: {
    base: "my-4 w-full border-inputborder sm:mx-auto lg:my-6 dark:border-inputborder",
  },
};

const UserManagement = () => {
  const [searchTerm2, setSearchTerm2] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [openModal, setOpenModal] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 640);

  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth < 640);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const AllUsers = [
    { id: "1", label: "Admins", checked: true },
    { id: "2", label: "Staff" },
    { id: "3", label: "Customers" },
  ];

  const handleSelectionChange = (selectedIds: string[]) => {
    console.log("Selected IDs:", selectedIds);
  };

  const Users = [
    {
      id: "1001",
      customer: "John Doe",
      email: "john.doe@example.com",
      LastActive: "2023-05-15 10:30",
      Role: "Deal Manager",
      status: "completed",
      avatar: "https://i.pravatar.cc/150?img=1",
    },
    {
      id: "1002",
      customer: "Jane Smith",
      email: "jane.smith@example.com",
      LastActive: "2023-05-16 14:45",
      Role: "Investor",
      status: "processing",
      avatar: "https://i.pravatar.cc/150?img=2",
    },
    {
      id: "1003",
      customer: "Jane Smith",
      email: "jane.smith@example.com",
      LastActive: "2023-05-16 14:45",
      Role: "Investor",
      status: "processing",
      avatar: "https://i.pravatar.cc/150?img=3",
    },
    {
      id: "1004",
      customer: "Michael Brown",
      email: "michael.brown@example.com",
      LastActive: "2023-05-18 16:25",
      Role: "Investor",
      status: "processing",
      avatar: "https://i.pravatar.cc/150?img=4",
    },
    {
      id: "1005",
      customer: "Emily Davis",
      email: "emily.davis@example.com",
      LastActive: "2023-05-19 11:50",
      Role: "Investor",
      status: "cancelled",
      avatar: "https://i.pravatar.cc/150?img=5",
    },
    {
      id: "1006",
      customer: "Chris Wilson",
      email: "chris.wilson@example.com",
      LastActive: "2023-05-20 13:15",
      Role: "Investor",
      status: "processing",
      avatar: "https://i.pravatar.cc/150?img=6",
    },
    {
      id: "1007",
      customer: "Sarah Lee",
      email: "sarah.lee@example.com",
      LastActive: "2023-05-19 11:50",
      Role: "Investor",
      status: "cancelled",
      avatar: "https://i.pravatar.cc/150?img=7",
    },
    {
      id: "1008",
      customer: "David Taylor",
      email: "david.taylor@example.com",
      LastActive: "2023-05-19 11:50",
      Role: "Investor",
      status: "cancelled",
      avatar: "https://i.pravatar.cc/150?img=8",
    },
    {
      id: "1009",
      customer: "Olivia Martinez",
      email: "olivia.martinez@example.com",
      LastActive: "2023-05-19 11:50",
      Role: "Investor",
      status: "cancelled",
      avatar: "https://i.pravatar.cc/150?img=9",
    },
    {
      id: "1010",
      customer: "James Anderson",
      email: "james.anderson@example.com",
      LastActive: "2023-05-19 11:50",
      Role: "Investor",
      status: "cancelled",
      avatar: "https://i.pravatar.cc/150?img=10",
    },
    {
      id: "1011",
      customer: "Sophia Thomas",
      email: "sophia.thomas@example.com",
      LastActive: "2023-05-19 11:50",
      Role: "Investor",
      status: "cancelled",
      avatar: "https://i.pravatar.cc/150?img=11",
    },
    {
      id: "1012",
      customer: "Robert Garcia",
      email: "robert.garcia@example.com",
      LastActive: "2023-05-19 11:50",
      Role: "Investor",
      status: "cancelled",
      avatar: "https://i.pravatar.cc/150?img=12",
    },
    {
      id: "1013",
      customer: "Emma Robinson",
      email: "emma.robinson@example.com",
      LastActive: "2023-05-19 11:50",
      Role: "Investor",
      status: "cancelled",
      avatar: "https://i.pravatar.cc/150?img=13",
    },
    {
      id: "1014",
      customer: "William Clark",
      email: "william.clark@example.com",
      LastActive: "2023-05-19 11:50",
      Role: "Investor",
      status: "cancelled",
      avatar: "https://i.pravatar.cc/150?img=14",
    },
    {
      id: "1015",
      customer: "Ava Rodriguez",
      email: "ava.rodriguez@example.com",
      LastActive: "2023-05-19 11:50",
      Role: "Investor",
      status: "cancelled",
      avatar: "https://i.pravatar.cc/150?img=15",
    },
    {
      id: "1016",
      customer: "Joseph Lewis",
      email: "joseph.lewis@example.com",
      LastActive: "2023-05-19 11:50",
      Role: "Investor",
      status: "cancelled",
      avatar: "https://i.pravatar.cc/150?img=16",
    },
    {
      id: "1017",
      customer: "Mia Walker",
      email: "mia.walker@example.com",
      LastActive: "2023-05-19 11:50",
      Role: "Investor",
      status: "cancelled",
      avatar: "https://i.pravatar.cc/150?img=17",
    },
    {
      id: "1018",
      customer: "Charles Hall",
      email: "charles.hall@example.com",
      LastActive: "2023-05-19 11:50",
      Role: "Investor",
      status: "cancelled",
      avatar: "https://i.pravatar.cc/150?img=18",
    },
    {
      id: "1019",
      customer: "Charlotte Young",
      email: "charlotte.young@example.com",
      LastActive: "2023-05-19 11:50",
      Role: "Investor",
      status: "cancelled",
      avatar: "https://i.pravatar.cc/150?img=19",
    },
    {
      id: "1020",
      customer: "Daniel Hernandez",
      email: "daniel.hernandez@example.com",
      LastActive: "2023-05-19 11:50",
      Role: "Investor",
      status: "cancelled",
      avatar: "https://i.pravatar.cc/150?img=20",
    },

    {
      id: "1021",
      customer: "Amelia King",
      email: "amelia.king@example.com",
      LastActive: "2023-05-19 11:50",
      Role: "Investor",
      status: "cancelled",
      avatar: "https://i.pravatar.cc/150?img=21",
    },
    {
      id: "1022",
      customer: "Matthew Wright",
      email: "matthew.wright@example.com",
      LastActive: "2023-05-19 11:50",
      Role: "Investor",
      status: "cancelled",
      avatar: "https://i.pravatar.cc/150?img=22",
    },
    {
      id: "1023",
      customer: "Harper Lopez",
      email: "harper.lopez@example.com",
      LastActive: "2023-05-19 11:50",
      Role: "Investor",
      status: "cancelled",
      avatar: "https://i.pravatar.cc/150?img=23",
    },
    {
      id: "1024",
      customer: "Andrew Hill",
      email: "andrew.hill@example.com",
      LastActive: "2023-05-19 11:50",
      Role: "Investor",
      status: "cancelled",
      avatar: "https://i.pravatar.cc/150?img=24",
    },
    {
      id: "1025",
      customer: "Evelyn Scott",
      email: "evelyn.scott@example.com",
      LastActive: "2023-05-19 11:50",
      Role: "Investor",
      status: "cancelled",
      avatar: "https://i.pravatar.cc/150?img=25",
    },
    {
      id: "1026",
      customer: "Joshua Green",
      email: "joshua.green@example.com",
      LastActive: "2023-05-19 11:50",
      Role: "Investor",
      status: "cancelled",
      avatar: "https://i.pravatar.cc/150?img=26",
    },
    {
      id: "1027",
      customer: "Abigail Adams",
      email: "abigail.adams@example.com",
      LastActive: "2023-05-19 11:50",
      Role: "Investor",
      status: "cancelled",
      avatar: "https://i.pravatar.cc/150?img=27",
    },
    {
      id: "1028",
      customer: "Christopher Baker",
      email: "christopher.baker@example.com",
      LastActive: "2023-05-19 11:50",
      Role: "Investor",
      status: "cancelled",
      avatar: "https://i.pravatar.cc/150?img=28",
    },
    {
      id: "1029",
      customer: "Elizabeth Gonzalez",
      email: "elizabeth.gonzalez@example.com",
      LastActive: "2023-05-19 11:50",
      Role: "Investor",
      status: "cancelled",
      avatar: "https://i.pravatar.cc/150?img=29",
    },
    {
      id: "1030",
      customer: "Ryan Nelson",
      email: "ryan.nelson@example.com",
      LastActive: "2023-05-19 11:50",
      Role: "Investor",
      status: "cancelled",
      avatar: "https://i.pravatar.cc/150?img=30",
    },
    {
      id: "1031",
      customer: "Sofia Carter",
      email: "sofia.carter@example.com",
      LastActive: "2023-05-19 11:50",
      Role: "Investor",
      status: "cancelled",
      avatar: "https://i.pravatar.cc/150?img=31",
    },
    {
      id: "1032",
      customer: "Nathan Mitchell",
      email: "nathan.mitchell@example.com",
      LastActive: "2023-05-19 11:50",
      Role: "Investor",
      status: "cancelled",
      avatar: "https://i.pravatar.cc/150?img=32",
    },
    {
      id: "1033",
      customer: "Avery Roberts",
      email: "avery.roberts@example.com",
      LastActive: "2023-05-19 11:50",
      Role: "Investor",
      status: "cancelled",
      avatar: "https://i.pravatar.cc/150?img=33",
    },
    {
      id: "1034",
      customer: "David Phillips",
      email: "david.phillips@example.com",
      LastActive: "2023-05-19 11:50",
      Role: "Investor",
      status: "cancelled",
      avatar: "https://i.pravatar.cc/150?img=34",
    },
    {
      id: "1035",
      customer: "Ella Turner",
      email: "ella.turner@example.com",
      LastActive: "2023-05-19 11:50",
      Role: "Investor",
      status: "cancelled",
      avatar: "https://i.pravatar.cc/150?img=35",
    },
    {
      id: "1036",
      customer: "Henry Parker",
      email: "henry.parker@example.com",
      LastActive: "2023-05-19 11:50",
      Role: "Investor",
      status: "cancelled",
      avatar: "https://i.pravatar.cc/150?img=36",
    },
    {
      id: "1037",
      customer: "Scarlett Evans",
      email: "scarlett.evans@example.com",
      LastActive: "2023-05-19 11:50",
      Role: "Investor",
      status: "cancelled",
      avatar: "https://i.pravatar.cc/150?img=37",
    },
    {
      id: "1038",
      customer: "Samuel Edwards",
      email: "samuel.edwards@example.com",
      LastActive: "2023-05-19 11:50",
      Role: "Investor",
      status: "cancelled",
      avatar: "https://i.pravatar.cc/150?img=38",
    },
    {
      id: "1039",
      customer: "Victoria Collins",
      email: "victoria.collins@example.com",
      LastActive: "2023-05-19 11:50",
      Role: "Investor",
      status: "cancelled",
      avatar: "https://i.pravatar.cc/150?img=39",
    },
    {
      id: "1040",
      customer: "Anthony Stewart",
      email: "anthony.stewart@example.com",
      LastActive: "2023-05-19 11:50",
      Role: "Investor",
      status: "cancelled",
      avatar: "https://i.pravatar.cc/150?img=40",
    },
    {
      id: "1041",
      customer: "Madison Sanchez",
      email: "madison.sanchez@example.com",
      LastActive: "2023-05-19 11:50",
      Role: "Investor",
      status: "cancelled",
      avatar: "https://i.pravatar.cc/150?img=41",
    },
    {
      id: "1042",
      customer: "Dylan Morris",
      email: "dylan.morris@example.com",
      LastActive: "2023-05-19 11:50",
      Role: "Investor",
      status: "cancelled",
      avatar: "https://i.pravatar.cc/150?img=42",
    },
    {
      id: "1043",
      customer: "Chloe Rogers",
      email: "chloe.rogers@example.com",
      LastActive: "2023-05-19 11:50",
      Role: "Investor",
      status: "cancelled",
      avatar: "https://i.pravatar.cc/150?img=43",
    },
    {
      id: "1044",
      customer: "Julian Reed",
      email: "julian.reed@example.com",
      LastActive: "2023-05-19 11:50",
      Role: "Investor",
      status: "cancelled",
      avatar: "https://i.pravatar.cc/150?img=44",
    },
    {
      id: "1045",
      customer: "Layla Cook",
      email: "layla.cook@example.com",
      LastActive: "2023-05-19 11:50",
      Role: "Investor",
      status: "cancelled",
      avatar: "https://i.pravatar.cc/150?img=45",
    },
    {
      id: "1046",
      customer: "Carter Morgan",
      email: "carter.morgan@example.com",
      LastActive: "2023-05-19 11:50",
      Role: "Investor",
      status: "cancelled",
      avatar: "https://i.pravatar.cc/150?img=46",
    },
  ];

  const itemsPerPage = 5;
  const totalPages = Math.ceil(Users.length / itemsPerPage);
  const paginatedUsers = Users.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Full version (desktop & tablet)
  const formattedUsers = paginatedUsers.map((user) => ({
    ...user,
    customerInfo: (
      <div className="flex items-center gap-3">
        <Avatar img={user.avatar} size="sm" />
        <div className="flex flex-col">
          <span className="font-medium text-gray-900">{user.customer}</span>
          <span className="text-sm text-gray-500">{user.email}</span>
        </div>
      </div>
    ),
  }));

  // Small screen version (just username text, no avatar, no email)
  const formattedUsersSmall = paginatedUsers.map((user) => ({
    ...user,
    customerInfo: (
      <span className="font-medium text-gray-900">{user.customer}</span>
    ),
  }));

  // Responsive columns: hide on small screens, show on md+
  const columns = [
    {
      key: "customerInfo",
      header: "Username",
      width: "w-64",
    },
    { key: "Role", header: "ROLE", width: "w-64" },
    {
      key: "status",
      header: "Status",
      width: "w-64 hidden md:table-cell", // hides automatically on mobile
    },
    {
      key: "LastActive",
      header: "LAST ACTIVE",
      width: "w-64 hidden md:table-cell",
    },
  ];

  // Columns for small screens (show only essential columns)
  const smallScreenColumns = [
    {
      key: "customerInfo",
      header: "Username",
      width: "w-64",
    },
    { key: "Role", header: "ROLE", width: "w-64" },
  ];

  const handleSelect = (selectedIds: string[]) => {
    console.log("Selected IDs:", selectedIds);
  };

  const handleEdit = (id: string) => {
    console.log("Edit:", id);
  };

  const handleDelete = (id: string) => {
    console.log("Delete:", id);
  };

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleAddUser = () => {
    setOpenModal(true);
  };

  return (
    <div className="flex py-[15px] px-[24px] flex-col w-full lg:w-[70.5rem] min-h-screen text-foreground dark:text-foreground">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-xl font-semibold">User Management</h1>
          <p className="text-sm text-gray-500">
            Manage users, roles, and permissions
          </p>
        </div>
        <div className="flex gap-4">
          {/* Responsive Button */}
          <button
            onClick={handleAddUser}
            className="flex items-center justify-center rounded-lg bg-custombtn2 px-4 py-2 text-sm font-medium text-white focus:outline-none focus:ring-4 transition-colors duration-200"
          >
            {/* Small screen: + only */}
            <span className="sm:hidden">
              <PluseIcon />
            </span>
            {/* md+ screen: icon + text */}
            <span className="hidden sm:flex items-center gap-2">
              <PluseIcon /> Add New User
            </span>
          </button>
        </div>
      </div>

      {/* Filter + Search */}
      <div className="p-4 bg-background rounded-lg shadow-sm">
        {/* Small screen layout */}
        <div className="flex flex-col gap-4 sm:hidden">
          {/* Search above */}
          <SearchInput
            value={searchTerm2}
            className="w-full h-[48px]"
            onChange={(e) => setSearchTerm2(e.target.value)}
            placeholder="Search"
          />

          {/* Dropdown + Delete */}
          <div className="flex justify-between items-center w-full">
            <DropdownCheckbox
              buttonText="All"
              options={AllUsers}
              onSelectionChange={handleSelectionChange}
            />
            <button className="bg-[#FDE8E8] border border-[#EF4444] w-[48px] h-[48px] flex justify-center items-center rounded-md">
              <Trash />
            </button>
          </div>
        </div>

        {/* md+ layout (unchanged) */}
        <div className="hidden sm:flex flex-col sm:flex-row justify-between items-center gap-4">
          <DropdownCheckbox
            buttonText="All"
            options={AllUsers}
            onSelectionChange={handleSelectionChange}
          />
          <div className="flex gap-4 items-center w-full sm:w-auto">
            <SearchInput
              value={searchTerm2}
              className="w-full sm:w-[320px] h-[48px]"
              onChange={(e) => setSearchTerm2(e.target.value)}
              placeholder="Search Customer"
            />
            <button className="bg-[#FDE8E8] border border-[#EF4444] w-[48px] h-[48px] flex justify-center items-center rounded-md">
              <Trash />
            </button>
          </div>
        </div>

        <FooterDivider theme={footertheme.divider} />

        {/* Table */}
        <div className="overflow-x-auto">
          <DataTable
            columns={isSmallScreen ? smallScreenColumns : columns}
            data={isSmallScreen ? formattedUsersSmall : formattedUsers}
            selectable={true}
            onSelect={handleSelect}
            onEdit={handleEdit}
            onDelete={handleDelete}
            className="w-full"
          />
        </div>

        {/* Pagination */}
        <div className="flex flex-col sm:flex-row justify-between items-center w-full mt-4 gap-3">
          <span className="text-sm text-[#666666]">
            Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
            {Math.min(currentPage * itemsPerPage, Users.length)} of{" "}
            {Users.length}
          </span>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={onPageChange}
            showIcons
          />
        </div>
      </div>

      <AddUserManagement
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        onSubmit={(data: any) => {
          console.log("Submitted User:", data);
          setOpenModal(false);
        }}
      />
    </div>
  );
};

export default UserManagement;
