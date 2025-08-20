import React from "react";

const FeaturedIcon = () => {
  return (
    <div>
      <svg
        width={44}
        height={44}
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_dii_4116_19681)">
          <path
            d="M2 9C2 4.58172 5.58172 1 10 1H34C38.4183 1 42 4.58172 42 9V33C42 37.4183 38.4183 41 34 41H10C5.58172 41 2 37.4183 2 33V9Z"
            fill="white"
          />
          <path
            d="M10 1.5H34C38.1421 1.5 41.5 4.85786 41.5 9V33C41.5 37.1421 38.1421 40.5 34 40.5H10C5.85786 40.5 2.5 37.1421 2.5 33V9C2.5 4.85786 5.85786 1.5 10 1.5Z"
            stroke="#D5D7DA"
          />
          <path
            d="M18.666 24.3333L21.9993 21M21.9993 21L25.3327 24.3333M21.9993 21V28.5M28.666 24.9524C29.6839 24.1117 30.3327 22.8399 30.3327 21.4167C30.3327 18.8854 28.2807 16.8333 25.7493 16.8333C25.5673 16.8333 25.3969 16.7383 25.3044 16.5814C24.2177 14.7374 22.2114 13.5 19.916 13.5C16.4642 13.5 13.666 16.2982 13.666 19.75C13.666 21.4718 14.3622 23.0309 15.4885 24.1613"
            stroke="#414651"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <filter
            id="filter0_dii_4116_19681"
            x={0}
            y={0}
            width={44}
            height={44}
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy={1} />
            <feGaussianBlur stdDeviation={1} />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.0392157 0 0 0 0 0.0496732 0 0 0 0 0.0705882 0 0 0 0.05 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_4116_19681"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_4116_19681"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy={-2} />
            <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.0392157 0 0 0 0 0.0496732 0 0 0 0 0.0705882 0 0 0 0.05 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect2_innerShadow_4116_19681"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feMorphology
              radius={1}
              operator="erode"
              in="SourceAlpha"
              result="effect3_innerShadow_4116_19681"
            />
            <feOffset />
            <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.0392157 0 0 0 0 0.0496732 0 0 0 0 0.0705882 0 0 0 0.18 0"
            />
            <feBlend
              mode="normal"
              in2="effect2_innerShadow_4116_19681"
              result="effect3_innerShadow_4116_19681"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default FeaturedIcon;
