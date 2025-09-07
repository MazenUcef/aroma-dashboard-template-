import React from "react";

interface VectorLineProps {
  width?: number | string; // Accepts px, %, etc.
  height?: number | string;
  color?: string;
}

const VectorLine: React.FC<VectorLineProps> = ({
  width = "504", // default width
  height = "2", // default height
  color = "#CECECE", // default stroke color
}) => {
  return (
    <svg
      className="w-[295px] md:w-[504px]"
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d={`M0 ${Number(height) / 2} H${width}`} stroke={color} />
    </svg>
  );
};

export default VectorLine;
