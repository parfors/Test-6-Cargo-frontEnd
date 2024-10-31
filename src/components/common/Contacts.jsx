import Link from "next/link";
import React from "react";

function Contacts() {
  return (
    <div className="basis-1/4 flex justify-between items-center">
      <Link
        className="text-[18px] text-darkGray font-normal"
        href="tel:08005441213"
      >
        0 800 544 12 13
      </Link>
      <Link className="px-[34px] py-[14px]  bg-mainBLue rounded-full" href="/">
        Contact Us
        <span></span>
      </Link>
    </div>
  );
}

export default Contacts;
