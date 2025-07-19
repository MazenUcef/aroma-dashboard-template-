import ArrowRight from "../assets/icons/ArrowRight";


interface ListItem {
    image: string;
    name: string;
    count: number;
}

interface LowStockCompProps {
    list: ListItem[];
}

const LowStockComp = ({ list }: LowStockCompProps) => {
    return (
        <div className="w-[22.5rem] flex flex-col p-3 h-full bg-background text-foreground dark:text-foreground rounded-lg mt-6">
            <div>
            <h1 className="text-xl font-semibold">Low Stock Alerts</h1>
            </div>
            <div className="flex items-center justify-center">
            <ul className="mt-4 w-[20.5rem]">
                {list.map((item, index) => (
                <li
                    key={index}
                    className="flex w-full bg-forminputs h-[4.875rem] rounded-lg items-center justify-between mb-4"
                >
                    <div className="flex justify-between w-full px-4 items-center">
                    <img
                        src={item.image}
                        alt={`Product ${index + 1}`}
                        className="w-[3rem] h-[3rem] rounded-xl mr-3"
                    />
                    <div className="w-full">
                        <h2 className="text-[12px] font-bold">{item.name}</h2>
                        <span className="text-[#EF4444] text-[12px]">
                        {item.count} left
                        </span>
                    </div>
                    <button className="w-[5rem] px-2 py-1 bg-custombtn hover:bg-custombtn/80 cursor-pointer rounded-sm text-foreground h-[2rem] text-sm font-semibold transition-colors">
                        Reorder
                    </button>
                    </div>
                </li>
                ))}
            </ul>
            </div>
            <div>
            <button className="w-[20.5rem] h-[3rem] flex items-center justify-center gap-2 font-semibold  rounded-lg text-xs text-white bg-[#244937] hover:bg-green-800 cursor-pointer">
                    View Inventory
                    <ArrowRight/>
            </button>
            </div>
        </div>
    );
}

export default LowStockComp