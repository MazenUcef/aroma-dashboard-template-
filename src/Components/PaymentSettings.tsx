import { useState } from "react";
import ToggleSwitch from "./ToggleSwitch";
import Credit from "../assets/icons/Credit";
import Cash from "../assets/icons/Cash";
import Wallet from "../assets/icons/Wallet";
import Gift from "../assets/icons/Gift";
import { TextInput } from "flowbite-react";

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

const PaymentSettings = () => {
    const [credit, setCredit] = useState<boolean>(true);
    const [wallet, setWallet] = useState<boolean>(true);
    const [gift, setGift] = useState<boolean>(true);
    const [cash, setCash] = useState<boolean>(true);
    return (
        <div className="w-full flex flex-col">
            <h1 className="text-[16px] text-foreground dark:text-foreground mb-[16px] font-semibold font-poppins">
                Payment Settings
            </h1>
            <h1 className="text-[14px] mb-[22px] text-foreground dark:text-foreground font-semibold font-poppins">
                Accepted Payment Methods
            </h1>
            <div>
                <form className="flex flex-col gap-[24px]">
                    <div className="flex items-center gap-8">
                        <div className="w-[33rem] flex justify-between items-center h-[3.5rem] rounded-lg bg-forminputs py-[8px] px-[16px]">
                            <div className="flex gap-1 items-center">
                                <Credit />
                                <span className="text-[14px] text-foreground dark:text-foreground font-semibold font-poppins ml-2">
                                    Credit Card
                                </span>
                            </div>
                            <div>
                                <ToggleSwitch
                                    isOn={credit}
                                    onToggle={() => setCredit((prev) => !prev)}
                                />
                            </div>
                        </div>
                        <div className="w-[33rem] flex justify-between items-center h-[3.5rem] rounded-lg bg-forminputs py-[8px] px-[16px]">
                            <div className="flex gap-1 items-center">
                                <Cash />
                                <span className="text-[14px] text-foreground dark:text-foreground font-semibold font-poppins ml-2">
                                    Cash
                                </span>
                            </div>
                            <div>
                                <ToggleSwitch
                                    isOn={cash}
                                    onToggle={() => setCash((prev) => !prev)}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-8">
                        <div className="w-[33rem] flex justify-between items-center h-[3.5rem] rounded-lg bg-forminputs py-[8px] px-[16px]">
                            <div className="flex gap-1 items-center">
                                <Wallet />
                                <span className="text-[14px] text-foreground dark:text-foreground font-semibold font-poppins ml-2">
                                    Digital Wallet
                                </span>
                            </div>
                            <div>
                                <ToggleSwitch
                                    isOn={wallet}
                                    onToggle={() => setWallet((prev) => !prev)}
                                />
                            </div>
                        </div>
                        <div className="w-[33rem] flex justify-between items-center h-[3.5rem] rounded-lg bg-forminputs py-[8px] px-[16px]">
                            <div className="flex gap-1 items-center">
                                <Gift />
                                <span className="text-[14px] text-foreground dark:text-foreground font-semibold font-poppins ml-2">
                                    Gift Card
                                </span>
                            </div>
                            <div>
                                <ToggleSwitch
                                    isOn={gift}
                                    onToggle={() => setGift((prev) => !prev)}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-8">
                        <div className="w-[33rem] h-[3.5rem]">
                            <label
                                htmlFor="number-input"
                                className="block mb-2 text-sm font-semibold text-foreground dark:text-foreground"
                            >
                                Tax Rate (%)
                            </label>
                            <TextInput
                                theme={inputTheme}
                                id="username"
                                type="text"
                                placeholder="14%"
                                required
                                color="gray"
                                disabled
                            />
                        </div>
                        <div className="w-[33rem] h-[3.5rem]">
                            <div className="relative">
                                <label
                                    htmlFor="currency"
                                    className="block mb-2 font-semibold text-sm"
                                >
                                    Currency
                                </label>
                                <select
                                    id="currency"
                                    className="w-full appearance-none bg-forminputs border border-inputborder dark:border-inputborder text-foreground p-2.5 pr-10  rounded-md focus:ring-blue-500 focus:border-blue-500"
                                >
                                    <option selected>EGP</option>
                                    <option value="US">United States</option>
                                    <option value="CA">Canada</option>
                                    <option value="FR">France</option>
                                    <option value="DE">Germany</option>
                                </select>

                                {/* Custom arrow icon */}
                                <div className="pointer-events-none absolute inset-y-12 right-3 flex items-center">
                                    <svg
                                        className="w-4 h-4 text-foreground"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PaymentSettings;
