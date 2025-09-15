import React, { useState } from "react";
import {
  Button,
  Checkbox,
  Label,
  Modal,
  Select,
  TextInput,
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
      show: { on: "flex bg-overlay dark:bg-overlay", off: "hidden" },
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
    body: { base: "flex-1 overflow-auto p-6", popup: "pt-0" },
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
  const inputTheme = {
    base: "flex",
    addon:
      "inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-200 px-3 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-600 dark:text-gray-400",
    field: {
      base: "relative w-full",
      icon: {
        base: "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3",
        svg: "h-5 w-5 text-gray-500 dark:text-gray-400",
      },
      rightIcon: {
        base: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3",
        svg: "h-5 w-5 text-gray-500 dark:text-gray-400",
      },
      input: {
        base: "block w-full border focus:outline-none focus:ring-1 disabled:cursor-not-allowed disabled:opacity-50",
        sizes: {
          sm: "p-2 sm:text-xs",
          md: "p-2.5 text-sm",
          lg: "p-4 sm:text-base",
        },
        colors: {
          gray: "border-inputborder bg-forminputs text-foreground placeholder-foreground focus:border-primary-500 focus:ring-primary-500 dark:border-inputborder dark:bg-forminputs dark:text-foreground dark:placeholder-foreground dark:focus:border-primary-500 dark:focus:ring-primary-500",
          info: "border-cyan-500 bg-cyan-50 text-cyan-900 placeholder-cyan-700 focus:border-cyan-500 focus:ring-cyan-500 dark:border-cyan-400 dark:bg-cyan-100 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
          failure:
            "border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100 dark:focus:border-red-500 dark:focus:ring-red-500",
          warning:
            "border-yellow-500 bg-yellow-50 text-yellow-900 placeholder-yellow-700 focus:border-yellow-500 focus:ring-yellow-500 dark:border-yellow-400 dark:bg-yellow-100 dark:focus:border-yellow-500 dark:focus:ring-yellow-500",
          success:
            "border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500 dark:border-green-400 dark:bg-green-100 dark:focus:border-green-500 dark:focus:ring-green-500",
        },
        withRightIcon: {
          on: "pr-10",
          off: "",
        },
        withIcon: {
          on: "pl-10",
          off: "",
        },
        withAddon: {
          on: "rounded-r-lg",
          off: "rounded-lg",
        },
        withShadow: {
          on: "shadow-sm dark:shadow-sm-light",
          off: "",
        },
      },
    },
  };
  const selectTheme = {
    base: "flex ",
    addon:
      "inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-200 px-3 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-600 dark:text-gray-400 ",
    field: {
      base: "relative w-full  ",
      icon: {
        base: "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3",
        svg: "h-5 w-5 text-gray-500 dark:text-gray-400",
      },
      select: {
        base: "block w-full appearance-none border pr-10 focus:outline-none focus:ring-0 disabled:cursor-not-allowed disabled:opacity-50 ",
        withIcon: {
          on: "pl-10",
          off: "",
        },
        withAddon: {
          on: "rounded-r-lg",
          off: "rounded-lg",
        },
        withShadow: {
          on: "shadow-sm dark:shadow-sm-light",
          off: "",
        },
        sizes: {
          sm: "p-2 sm:text-xs",
          md: "p-2.5 text-sm",
          lg: "p-4 sm:text-base",
        },
        colors: {
          gray: "border border-inputborder focus:border-inputborder dark:focus:border-inputborder dark:border-inputborder bg-forminputs dark:bg-forminputs text-foreground dark:text-foreground bg-[length:0.75em_0.75em] bg-[position:right_12px_center] bg-no-repeat bg-arrow-down-icon ",
          info: " border-cyan-500 bg-cyan-50 text-cyan-900 placeholder-cyan-700 focus:border-cyan-500 focus:ring-cyan-500 dark:border-cyan-400 dark:bg-cyan-100 dark:focus:border-cyan-500 dark:focus:ring-cyan-500 bg-[length:0.75em_0.75em] bg-[position:right_12px_center] bg-no-repeat bg-arrow-down-icon",
          failure:
            " border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100 dark:focus:border-red-500 dark:focus:ring-red-500 bg-[length:0.75em_0.75em] bg-[position:right_12px_center] bg-no-repeat bg-arrow-down-icon",
          warning:
            " border-yellow-500 bg-yellow-50 text-yellow-900 placeholder-yellow-700 focus:border-yellow-500 focus:ring-yellow-500 dark:border-yellow-400 dark:bg-yellow-100 dark:focus:border-yellow-500 dark:focus:ring-yellow-500 bg-[length:0.75em_0.75em] bg-[position:right_12px_center] bg-no-repeat bg-arrow-down-icon",
          success:
            " border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500 dark:border-green-400 dark:bg-green-100 dark:focus:border-green-500 dark:focus:ring-green-500 bg-[length:0.75em_0.75em] bg-[position:right_12px_center] bg-no-repeat bg-arrow-down-icon",
        },
      },
    },
  };
  type ToggleSwitchProps = {
    checked: boolean;
    onChange: () => void;
  };
  const ToggleSwitch = ({ checked, onChange }: ToggleSwitchProps) => (
    <button
      onClick={onChange}
      className={`w-10 h-5 flex items-center bg-[#E5E7EB] rounded-full p-1 duration-300 ease-in-out ${
        checked
          ? "bg-custombtn2 dark:bg-custombtn2"
          : "bg-tabhover dark:bg-tabhover"
      }`}
    >
      <div
        className={`bg-white w-3.5 h-3.5 rounded-full shadow-md transform duration-300 ease-in-out ${
          checked ? "translate-x-5" : ""
        }`}
      />
    </button>
  );

  return (
    <div className="p-6">
      {/* Modal */}
      <Modal theme={ModalTheme} show={isOpen} onClose={onClose} size="lg" popup>
        <div className="p-6 overflow-auto">
          <h2 className="text-base font-semibold mb-4 font-poppins text-foreground dark:text-foreground">
            Add New User
          </h2>

          {/* Form Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
            <div>
              <Label
                htmlFor="fullname"
                className="text-foreground dark:text-foreground font-poppins text-[14px] font-semibold"
              >
                Full Name
              </Label>
              <TextInput
                id="fullname"
                theme={inputTheme}
                placeholder="Albeir Latef"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
            <div>
              <Label
                htmlFor="email"
                className="text-foreground dark:text-foreground font-poppins text-[14px] font-semibold"
              >
                Email
              </Label>
              <TextInput
                id="email"
                theme={inputTheme}
                type="email"
                placeholder="albeir.latef@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <Label
                htmlFor="phone"
                className="text-foreground dark:text-foreground font-poppins text-[14px] font-semibold"
              >
                Phone Number
              </Label>
              <TextInput
                id="phone"
                theme={inputTheme}
                placeholder="01215252366"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div>
              <Label
                htmlFor="password"
                className="text-foreground dark:text-foreground font-poppins text-[14px] font-semibold"
              >
                Password
              </Label>
              <TextInput
                id="password"
                theme={inputTheme}
                type="password"
                placeholder="Aroma@123"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          {/* Role */}
          <div className="mt-4">
            <Label
              htmlFor="role"
              className="text-foreground dark:text-foreground font-poppins text-[14px] font-semibold"
            >
              Role
            </Label>
            <Select
              theme={selectTheme}
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="bg-forminputs dark:bg-forminputs text-foreground dark:text-foreground"
            >
              <option className="!bg-forminputs !text-foreground">
                Store Manager
              </option>
              <option className="!bg-forminputs !text-foreground">Admin</option>
              <option className="!bg-forminputs !text-foreground">
                Cashier
              </option>
            </Select>
          </div>

          {/* Permissions */}
          <div className="mt-4">
            <p className="font-poppins text-[14px] font-semibold text-foreground dark:text-foreground">
              Permissions
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
              {allPermissions.map((perm) => (
                <div key={perm} className="flex items-center gap-2">
                  <Checkbox
                    id={perm}
                    checked={permissions.includes(perm)}
                    onChange={() => handlePermissionChange(perm)}
                    className="text-switch dark:text-switch accent-switch dark:accent-switch"
                  />
                  <Label
                    htmlFor={perm}
                    className="font-poppins text-[12px] font-normal text-foreground dark:text-foreground"
                  >
                    {perm}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          {/* Profile Image */}
          <div className="mt-4">
            <Label className="font-poppins text-[14px] font-normal text-foreground dark:text-foreground">
              Profile Image
            </Label>
            <div
              className="mt-2 flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer bg-forminputs dark:bg-forminputs "
              onClick={() => document.getElementById("fileUpload")?.click()}
            >
              <FeaturedIcon />
              <p className="text-sm text-foreground dark:text-foreground bg-forminputs dark:bg-forminputs">
                Click to upload or drag and drop
              </p>
              <p className="text-xs text-foreground dark:text-foreground">
                PNG, JPG up to 5MB
              </p>
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

          {/* Status */}
          <div className="mt-4">
            <Label className="font-poppins text-[14px] font-normal text-foreground dark:text-foreground">
              User Status
            </Label>
            <div className="flex items-center justify-between mt-1">
              <span className="text-sm text-foreground dark:text-foreground font-poppins text-[14px]">
                Enable or disable user access
              </span>
              <ToggleSwitch
                checked={status}
                onChange={() => setStatus(!status)}
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row justify-end gap-3 mt-6">
            <Button
              className="font-poppins text-tabtext dark:text-tabtext border-1 bg-transparent hover:bg-transparent border-arrowcolor dark:border-arrowcolor w-full sm:w-auto"
              color="light"
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button
              className="font-poppins bg-custombtn2 dark:bg-custombtn2 text-white w-full sm:w-auto"
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
