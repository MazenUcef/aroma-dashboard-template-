interface ToggleProps {
    isOn: boolean;
    onToggle: () => void;  // Function to toggle the switch state.
}

const ToggleSwitch = ({ isOn, onToggle }: ToggleProps) => {
    return (
        <div
            onClick={onToggle}
            className={`relative w-[40px] h-[22px] flex items-center rounded-full cursor-pointer transition-colors duration-300 ${isOn ? "bg-[#244937] dark:bg-text-blackish" : "bg-gray-300 dark:bg-gray-600"}`}
        >
            {/* Thumb circle */}
            <div
                className={`absolute w-[16px] h-[16px] rounded-full bg-white shadow-md transform transition-transform duration-300 ${isOn ? "translate-x-[21px]" : "translate-x-[2px]"}`}
            />
        </div>
    );
};

export default ToggleSwitch;