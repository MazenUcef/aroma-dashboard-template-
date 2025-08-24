import React, { useState } from "react";
import {
  Button,
  Checkbox,
  Label,
  Modal,
  Select,
  TextInput,
  ToggleSwitch,
} from "flowbite-react";
import FeaturedIcon from "../assets/icons/FeaturedIcon";
interface AddUserManagementProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: any) => void;
}

// component implementation

const AddUserManagement: React.FC<AddUserManagementProps> = ({
  isOpen,
  onClose,
  onSubmit,
}) => {
  // form states
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Store Manager");
  const [permissions, setPermissions] = useState<string[]>([]);
  const [status, setStatus] = useState(true);
  const [profileImage, setProfileImage] = useState<File | null>(null);

  const allPermissions = [
    "Order Management",
    "Report Access",
    "Inventory Management",
    "User Management",
    "Settings Access",
    "Menu Management",
  ];

  const handlePermissionChange = (perm: string) => {
    setPermissions((prev) =>
      prev.includes(perm) ? prev.filter((p) => p !== perm) : [...prev, perm]
    );
  };

  const handleSubmit = () => {
    const userData = {
      fullName,
      email,
      phone,
      password,
      role,
      permissions,
      status,
      profileImage,
    };
    onSubmit(userData);
    alert("User data saved successfully!");
    onClose(); // close after saving
  };
  const ModalTheme = {
    root: {
      base: "fixed inset-x-0 top-0 z-50 h-screen overflow-y-auto overflow-x-hidden md:inset-0 md:h-full text-foreground dark:text-foreground",
      show: {
        on: "flex bg-overlay dark:bg-overlay",
        off: "hidden",
      },
      sizes: {
        sm: "max-w-sm",
        md: "max-w-md",
        lg: "max-w-lg",
        xl: "max-w-xl",
        "2xl": "max-w-2xl",
        "3xl": "max-w-3xl",
        "4xl": "max-w-4xl",
        "5xl": "max-w-5xl",
        "6xl": "max-w-6xl",
        "7xl": "max-w-7xl",
      },
      positions: {
        "top-left": "items-start justify-start",
        "top-center": "items-start justify-center",
        "top-right": "items-start justify-end",
        "center-left": "items-center justify-start",
        center: "items-center justify-center",
        "center-right": "items-center justify-end",
        "bottom-right": "items-end justify-end",
        "bottom-center": "items-end justify-center",
        "bottom-left": "items-end justify-start",
      },
    },
    content: {
      base: "relative h-full w-full p-4 md:h-auto",
      inner:
        "relative flex xl:w-[40rem] flex-col rounded-lg bg-backgroundaccent shadow dark:bg-backgroundaccent",
    },
    body: {
      base: "flex-1 overflow-auto p-6",
      popup: "pt-0",
    },
    header: {
      base: "flex items-start justify-between rounded-t border-b p-5 dark:border-gray-600",
      popup: "border-b-0 p-2",
      title: "text-xl font-medium text-gray-900 dark:text-white",
      close: {
        base: "ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-lightgreen hover:text-green dark:hover:bg-light-green dark:hover:text-white",
        icon: "h-5 w-5",
      },
    },
  };
  return (
    <div className="p-6">
      {/* Modal */}
      <Modal theme={ModalTheme} show={isOpen} onClose={onClose} size="lg" popup>
        <div className="p-6  overflow-auto">
          <h2 className="text-base font-semibold mb-4 font-poppins">
            Add New User
          </h2>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="fullname">Full Name</Label>
              <TextInput
                id="fullname"
                placeholder="Albeir Latef"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <TextInput
                id="email"
                type="email"
                placeholder="albeir.latef@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <TextInput
                id="phone"
                placeholder="01215252366"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <TextInput
                id="password"
                type="password"
                placeholder="Aroma@123"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="mt-4">
            <Label htmlFor="role">Role</Label>
            <Select
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option>Store Manager</option>
              <option>Admin</option>
              <option>Cashier</option>
            </Select>
          </div>

          <div className="mt-4">
            <p className="font-medium">Permissions</p>
            <div className="grid grid-cols-2 gap-2 mt-2">
              {allPermissions.map((perm) => (
                <div key={perm} className="flex items-center gap-2">
                  <Checkbox
                    id={perm}
                    checked={permissions.includes(perm)}
                    onChange={() => handlePermissionChange(perm)}
                  />
                  <Label htmlFor={perm}>{perm}</Label>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4">
            <Label>Profile Image</Label>
            <div
              className="mt-2 flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
              onClick={() => document.getElementById("fileUpload")?.click()}
            >
              <FeaturedIcon />
              <p className="text-sm text-gray-500">
                Click to upload or drag and drop
              </p>
              <p className="text-xs text-gray-400">PNG, JPG up to 5MB</p>
              <input
                id="fileUpload"
                type="file"
                accept="image/png, image/jpeg"
                className="hidden"
                onChange={(e) =>
                  setProfileImage(e.target.files ? e.target.files[0] : null)
                }
              />
            </div>
          </div>

          <div className="mt-4">
            <Label className="font-medium text-gray-700">User Status</Label>
            <div className="flex items-center justify-between mt-1">
              <span className="text-sm text-gray-500">
                Enable or disable user access
              </span>
              <ToggleSwitch checked={status} onChange={setStatus} />
            </div>
          </div>

          <div className="flex justify-end gap-3 mt-6">
            <Button
              className="font-poppins text-green border-2 border-[#244937]"
              color="light"
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button
              className="font-poppins bg-switch dark:bg-switch text-white"
              color="success"
              onClick={handleSubmit}
            >
              Save Changes
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default AddUserManagement;
