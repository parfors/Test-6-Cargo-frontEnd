import Link from "next/link";
import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";

function HeroBtn2() {
  return (
    <Link
      className="w-[215px] h-[46px] ml-[65px] flex items-center justify-center bg-btnHeroBg2 bg-contain uppercase text-darkGray font-semibold"
      href="/"
    >
      <span className="basis-4/5 text-center font-semibold text-mainWhite">
        LEARN MORE
      </span>
      <MdOutlineArrowOutward className=" basis-1/5 inline w-6 h-6 fill-mainWhite" />
    </Link>
  );
}

export default HeroBtn2;
