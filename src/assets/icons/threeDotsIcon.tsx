import React from "react";

const ThreeDotsIcon = () => {
  return (
    <div>
      <svg
        width={4}
        height={16}
        viewBox="0 0 4 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width={4} height={4} rx={2} fill="#B3B3B3" />
        <rect y={6} width={4} height={4} rx={2} fill="#B3B3B3" />
        <rect y={12} width={4} height={4} rx={2} fill="#B3B3B3" />
      </svg>
    </div>
  );
};

export default ThreeDotsIcon;
