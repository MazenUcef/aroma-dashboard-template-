import BellIcon from "../assets/icons/BellIcons";

function NotificationBell() {
  return (
    <div>
      <button className="relative flex cursor-pointer items-center justify-center w-12 h-12 rounded-full bg-backgroundaccent border border-inputborder">
        <BellIcon />
        <div className="absolute flex justify-center items-center top-[0px] right-[-5px] bg-[#EF4444] w-[20px] h-[20px] rounded-[13px] text-[12px] text-white ">
          12
        </div>
      </button>
    </div>
  );
}

export default NotificationBell;
