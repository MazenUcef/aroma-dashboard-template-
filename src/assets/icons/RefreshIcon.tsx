import React from "react";

interface RefreshIconProps {
  width?: number | string;
  height?: number | string;
  className?: string; // Optional: allow Tailwind or extra class control
  strokeColor?: string; // Optional: make stroke color customizable
}

const RefreshIcon: React.FC<RefreshIconProps> = ({
  width = 24,
  height = 24,
  className = "",
  strokeColor = "black",
}) => {
  return (
    <div className={className}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 44 45"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 20.0508C12 20.0508 12.1213 19.2015 15.636 15.6868C19.1508 12.1721 24.8492 12.1721 28.364 15.6868C29.6092 16.9321 30.4133 18.4515 30.7762 20.0508M12 20.0508V14.0508M12 20.0508H18M32 24.0508C32 24.0508 31.8787 24.9 28.364 28.4147C24.8492 31.9295 19.1508 31.9295 15.636 28.4147C14.3908 27.1695 13.5867 25.6501 13.2238 24.0508M32 24.0508V30.0508M32 24.0508H26"
          stroke={strokeColor}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default RefreshIcon;
