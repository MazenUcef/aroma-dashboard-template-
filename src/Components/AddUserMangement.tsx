import React, { useState } from "react";
import {
  Button,
  Checkbox,
  Label,
  Select,
  TextInput,
  ToggleSwitch,
} from "flowbite-react";
import FeaturedIcon from "../assets/icons/FeaturedIcon";
const AddUserMangement = () => {
  const [open, setOpen] = useState(false);

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
    console.log("User Data Submitted: ", userData);
    alert("User data saved successfully!");
    setOpen(false);
  };

  return (
    <div>
      {/* Open Popup Button */}
      <Button color="success" onClick={() => setOpen(true)}>
        + Add New User
      </Button>

      {/* Custom Popup (div instead of Modal) */}
      {open && (
        <div className="fixed  inset-0 z-50 flex items-center justify-center bg-transparent bg-opacity-50 ">
          <div className=" max-w-3xl bg-white rounded-lg shadow-lg p-6 w-[640px] ">
            <h2 className="text-base font-semibold mb-4 font-poppins ">
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
                onClick={() => setOpen(false)}
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
        </div>
      )}
    </div>
  );
};

export default AddUserMangement;
