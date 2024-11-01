import Link from "next/link";
import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";

function HeroBtn() {
  return (
    <Link
      className="w-[215px] h-[46px] ml-[65px] flex items-center justify-center bg-btnHeroBg bg-contain uppercase text-darkGray font-semibold"
      href="/"
    >
      <MdOutlineArrowOutward className=" basis-1/5 inline w-6 h-6 " />
      <span className="basis-4/5 text-center">ORDER DELIVERY</span>
    </Link>
  );
}

export default HeroBtn;
