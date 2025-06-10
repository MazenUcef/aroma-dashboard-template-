import BellIcon from "../assets/icons/BellIcons";

function NotificationBell() {
  return (
    <div>
      <button
        className=" relative
        flex
        items-center
        justify-center
        w-12    
        h-12        
        rounded-full   
        bg-gray-100   
        border        
        border-gray-200
        mt-4
        ml-4
      "
      >
        <BellIcon />
      </button>
      <div className=" absolute flex justify-center items-center top-[18px] left-[50px] bg-[#EF4444] w-[20px] h-[20px] rounded-[13px] text-[12px] text-white ">
        12
      </div>
    </div>
  );
}

export default NotificationBell;
