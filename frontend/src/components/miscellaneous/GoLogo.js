import React from "react";

// Centered GoLogo with paper plane in the middle of a square

const GoLogo = ({ onClick, size = 40, color = "#000", bg = "#7785C6" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    onClick={onClick}
    style={{
      cursor: "pointer",
      display: "block",
      background: bg,
      borderRadius: 12,
    }}
  >
    {/* Center the polyline by translating and scaling to fit the 64x64 square */}
    <g transform="translate(4,4) scale(0.105)">
      <polyline
        points="20,250 500,40 420,440 250,350 120,420 250,250"
        stroke={color}
        strokeWidth="40"
        fill="none"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </g>
  </svg>
);

export default GoLogo;
