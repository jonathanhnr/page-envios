import React from "react";

const FaqItemArrow = () => {
  return (
    <span className={"rotate"} style={{ color: "#3483fa" }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={3}
        stroke="currentColor"
        style={{
          width: "0.8em",
        }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
        />
      </svg>
    </span>
  );
};

export default FaqItemArrow;
