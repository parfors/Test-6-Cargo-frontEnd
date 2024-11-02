import React from "react";

function UkraineFlag({ className }) {
  return (
    <>
      <svg
        className={className}
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.1875 2.8125H2.8125C0.948656 2.8125 0 4.19766 0 5.90625V9H18V5.90625C18 4.19766 17.0513 2.8125 15.1875 2.8125Z"
          fill="#1B75BB"
        />
        <path
          d="M0 12.0938C0 13.8023 0.948656 15.1875 2.8125 15.1875H15.1875C17.0513 15.1875 18 13.8023 18 12.0938V9H0V12.0938Z"
          fill="#F9CB38"
        />
      </svg>
    </>
  );
}

export default UkraineFlag;
