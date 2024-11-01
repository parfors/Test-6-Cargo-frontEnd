import Link from "next/link";
import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";

function HeaderBtn() {
  return (
    <Link
      className="w-[216px] h-[46px] flex items-center justify-center bg-btnBg bg-cover uppercase text-mainWhite font-semibold"
      href="/"
    >
      <span className="basis-4/5 text-center">Contact Us</span>
      <MdOutlineArrowOutward className=" basis-1/5 inline w-6 h-6 " />
    </Link>
  );
}

export default HeaderBtn;
