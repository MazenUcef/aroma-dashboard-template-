interface ToggleProps {
    isOn: boolean;
    onToggle: (value: boolean) => void;  // Updated to accept the new value
    name?: string; // Optional name for form integration
}

const ToggleSwitch = ({ isOn, onToggle }: ToggleProps) => {
    const handleToggle = () => {
        onToggle(!isOn); // Call the callback with the new value
    };

    return (
        <div
            onClick={handleToggle}
            className={`relative w-[40px] h-[22px] flex items-center rounded-full cursor-pointer transition-colors duration-300 ${isOn ? "bg-[#244937] dark:bg-text-blackish" : "bg-gray-300 dark:bg-gray-600"}`}
        >
            {/* Thumb circle */}
            <div
                className={`absolute w-[16px] h-[16px] rounded-full bg-white shadow-md transform transition-transform duration-300 ${isOn ? "translate-x-[21px]" : "translate-x-[2px]"}`}
            />
        </div>
    );
};

export default ToggleSwitch