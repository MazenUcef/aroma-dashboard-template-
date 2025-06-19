import { useState } from "react";
import { Label, TextInput } from "flowbite-react";

const BusinessHours = () => {
    const [hours, setHours] = useState({
        saturday: { from: "8:00", to: "5:00" },
        sunday: { from: "8:00", to: "5:00" },
        monday: { from: "8:00", to: "5:00" },
        tuesday: { from: "8:00", to: "5:00" },
        wednesday: { from: "8:00", to: "5:00" },
        thursday: { from: "8:00", to: "5:00" },
    });

    const handleTimeChange = (day: string, field: string, value: string) => {
        setHours((prev) => ({
            ...prev,
            [day]: {
                ...prev[day as keyof typeof hours],
                [field]: value,
            },
        }));
    };

    return (
        <div className="flex w-full flex-col">
            <h1 className="text-[16px] text-black mb-[16px] font-semibold font-poppins">Business Hours</h1>
            <form className="w-full">
                <div className="flex justify-between gap-8 items-center">
                    <div className="w-[33.75rem] flex flex-col gap-5">
                        <div className="flex w-full items-center justify-between">
                            <div>
                                <Label>Saturday</Label>
                            </div>
                            <div className="flex items-center gap-2">
                                <TextInput
                                    type="time"
                                    value={hours.saturday.from}
                                    onChange={(e) => handleTimeChange("saturday", "from", e.target.value)}
                                    className="w-24"
                                />
                                <span>to</span>
                                <TextInput
                                    type="time"
                                    value={hours.saturday.to}
                                    onChange={(e) => handleTimeChange("saturday", "to", e.target.value)}
                                    className="w-24"
                                />
                            </div>
                        </div>
                        <div className="flex w-full items-center justify-between">
                            <div>
                                <Label>Sunday</Label>
                            </div>
                            <div className="flex items-center gap-2">
                                <TextInput
                                    type="time"
                                    value={hours.sunday.from}
                                    onChange={(e) => handleTimeChange("sunday", "from", e.target.value)}
                                    className="w-24"
                                />
                                <span>to</span>
                                <TextInput
                                    type="time"
                                    value={hours.sunday.to}
                                    onChange={(e) => handleTimeChange("sunday", "to", e.target.value)}
                                    className="w-24"
                                />
                            </div>
                        </div>
                        <div className="flex w-full items-center justify-between">
                            <div>
                                <Label>Monday</Label>
                            </div>
                            <div className="flex items-center gap-2">
                                <TextInput
                                    type="time"
                                    value={hours.monday.from}
                                    onChange={(e) => handleTimeChange("monday", "from", e.target.value)}
                                    className="w-24"
                                />
                                <span>to</span>
                                <TextInput
                                    type="time"
                                    value={hours.monday.to}
                                    onChange={(e) => handleTimeChange("monday", "to", e.target.value)}
                                    className="w-24"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="w-[33.75rem] flex flex-col gap-5">
                        <div className="flex w-full items-center justify-between">
                            <div>
                                <Label>Tuesday</Label>
                            </div>
                            <div className="flex items-center gap-2">
                                <TextInput
                                    type="time"
                                    value={hours.tuesday.from}
                                    onChange={(e) => handleTimeChange("tuesday", "from", e.target.value)}
                                    className="w-24"
                                />
                                <span>to</span>
                                <TextInput
                                    type="time"
                                    value={hours.tuesday.to}
                                    onChange={(e) => handleTimeChange("tuesday", "to", e.target.value)}
                                    className="w-24"
                                />
                            </div>
                        </div>
                        <div className="flex w-full items-center justify-between">
                            <div>
                                <Label>Wednesday</Label>
                            </div>
                            <div className="flex items-center gap-2">
                                <TextInput
                                    type="time"
                                    value={hours.wednesday.from}
                                    onChange={(e) => handleTimeChange("wednesday", "from", e.target.value)}
                                    className="w-24"
                                />
                                <span>to</span>
                                <TextInput
                                    type="time"
                                    value={hours.wednesday.to}
                                    onChange={(e) => handleTimeChange("wednesday", "to", e.target.value)}
                                    className="w-24"
                                />
                            </div>
                        </div>
                        <div className="flex w-full items-center justify-between">
                            <div>
                                <Label>Thursday</Label>
                            </div>
                            <div className="flex items-center gap-2">
                                <TextInput
                                    type="time"
                                    value={hours.thursday.from}
                                    onChange={(e) => handleTimeChange("thursday", "from", e.target.value)}
                                    className="w-24"
                                />
                                <span>to</span>
                                <TextInput
                                    type="time"
                                    value={hours.thursday.to}
                                    onChange={(e) => handleTimeChange("thursday", "to", e.target.value)}
                                    className="w-24"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default BusinessHours;