import { useState } from "react";
import ToggleSwitch from "./ToggleSwitch";
import Credit from "../assets/icons/Credit";
import Cash from "../assets/icons/Cash";
import Wallet from "../assets/icons/Wallet";
import Gift from "../assets/icons/Gift";


const PaymentSettings = () => {
    const [credit, setCredit] = useState<boolean>(true);
    const [wallet, setWallet] = useState<boolean>(true);
    const [gift, setGift] = useState<boolean>(true);
    const [cash, setCash] = useState<boolean>(true);
    return (
        <div className='w-full flex flex-col'>
            <h1 className="text-[16px] text-black mb-[16px] font-semibold font-poppins">Payment Settings</h1>
            <h1 className="text-[14px] mb-[22px] text-black font-semibold font-poppins">Accepted Payment Methods</h1>
            <div>
                <form className='flex flex-col gap-[24px]'>
                    <div className='flex items-center gap-8'>
                        <div className='w-[33rem] flex justify-between items-center h-[3.5rem] rounded-lg bg-[#f9fafb] py-[8px] px-[16px]'>
                            <div className="flex gap-1 items-center">
                                <Credit />
                                <span className='text-[14px] text-black font-semibold font-poppins'>Credit Card</span>
                            </div>
                            <div>
                                <ToggleSwitch
                                    isOn={credit}
                                    onToggle={() => setCredit(prev => !prev)}
                                />
                            </div>
                        </div>
                        <div className='w-[33rem] flex justify-between items-center h-[3.5rem] rounded-lg bg-[#f9fafb] py-[8px] px-[16px]'>
                            <div className="flex gap-1 items-center">
                                <Cash />
                                <span className='text-[14px] text-black font-semibold font-poppins'>Cash</span>
                            </div>
                            <div>
                                <ToggleSwitch
                                    isOn={cash}
                                    onToggle={() => setCash(prev => !prev)}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center gap-8'>
                        <div className='w-[33rem] flex justify-between items-center h-[3.5rem] rounded-lg bg-[#f9fafb] py-[8px] px-[16px]'>
                            <div className="flex gap-1 items-center">
                                <Wallet />
                                <span className='text-[14px] text-black font-semibold font-poppins'>Digital Wallet</span>
                            </div>
                            <div>
                                <ToggleSwitch
                                    isOn={wallet}
                                    onToggle={() => setWallet(prev => !prev)}
                                />
                            </div>
                        </div>
                        <div className='w-[33rem] flex justify-between items-center h-[3.5rem] rounded-lg bg-[#f9fafb] py-[8px] px-[16px]'>
                            <div className="flex gap-1 items-center">
                                <Gift />
                                <span className='text-[14px] text-black font-semibold font-poppins'>Gift Card</span>
                            </div>
                            <div>
                                <ToggleSwitch
                                    isOn={gift}
                                    onToggle={() => setGift(prev => !prev)}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center gap-8'>
                        <div className='w-[33rem] h-[3.5rem]'>
                            <label htmlFor="number-input" className="block mb-2 text-[12px] font-medium text-gray-900 dark:text-white">Tax Rate (%)</label>
                            <input disabled type="number" id="number-input" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="14%" required />
                        </div>
                        <div className='w-[33rem] h-[3.5rem]'>
                            <label htmlFor="number-input" className="block mb-2 text-[12px] font-medium text-gray-900 dark:text-white">Currency</label>
                            <select disabled id="countries_disabled" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option selected>EGP</option>
                                <option value="US">United States</option>
                                <option value="CA">Canada</option>
                                <option value="FR">France</option>
                                <option value="DE">Germany</option>
                            </select>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default PaymentSettings