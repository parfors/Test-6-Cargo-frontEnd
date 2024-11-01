import Link from "next/link";
import React from "react";
import HeaderBtn from "./HeaderBtn";

function Contacts() {
  return (
    <div className="basis-1/4 flex justify-between items-center">
      <Link
        className="text-[18px] text-darkGray font-normal"
        href="tel:08005441213"
      >
        0 800 544 12 13
      </Link>
      <HeaderBtn />
    </div>
  );
}

export default Contacts;
