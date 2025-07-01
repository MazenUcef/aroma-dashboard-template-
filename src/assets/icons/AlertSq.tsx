import React from "react";

const AlertSq = ({ className }: { className?: string }) => {
  return (
    <div className={className}>
      <svg
        width={49}
        height={48}
        viewBox="0 0 49 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M24.5 16V24M24.5 32H24.52M16.1 42H32.9C36.2603 42 37.9405 42 39.2239 41.346C40.3529 40.7708 41.2708 39.8529 41.846 38.7239C42.5 37.4405 42.5 35.7603 42.5 32.4V15.6C42.5 12.2397 42.5 10.5595 41.846 9.27606C41.2708 8.14708 40.3529 7.2292 39.2239 6.65396C37.9405 6 36.2603 6 32.9 6H16.1C12.7397 6 11.0595 6 9.77606 6.65396C8.64708 7.2292 7.7292 8.14708 7.15396 9.27606C6.5 10.5595 6.5 12.2397 6.5 15.6V32.4C6.5 35.7603 6.5 37.4405 7.15396 38.7239C7.7292 39.8529 8.64708 40.7708 9.77606 41.346C11.0595 42 12.7397 42 16.1 42Z"
          stroke="#EF4444"
          strokeWidth={4}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default AlertSq;
