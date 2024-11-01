import React from "react";
import ImageHolder from "../common/ImageHolder";
import { services, company, resources, followUs } from "./footerContent";
import Link from "next/link";
import { FaPhone } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bg-lightGray ">
      <div className="pl-[64px] pt-[55px] pb-[96px] flex gap-16">
        <ImageHolder
          alt={"icon image"}
          priority={false}
          src={"/logo.png"}
          sizes={`127px`}
          className={"relative w-[127px] h-[105px]"}
        ></ImageHolder>
        <div className="w-[160px]">
          <p className="uppercase pb-3 text-lg font-bold">Services</p>
          <ul>
            {services.map(({ title, link }) => (
              <li key={title} className=" pb-3 last:pb-0">
                <Link
                  className="inline-block text-base font-semibold"
                  href={link}
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-[160px]">
          <p className="uppercase pb-3 text-lg font-bold">company</p>
          <ul>
            {company.map(({ title, link }) => (
              <li key={title} className=" pb-3 last:pb-0">
                <Link
                  className="inline-block text-base font-semibold"
                  href={link}
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-[160px]">
          <p className="uppercase pb-3 text-lg font-bold">resources</p>
          <ul>
            {resources.map(({ title, link }) => (
              <li key={title} className=" pb-3 last:pb-0">
                <Link
                  className="inline-block text-base font-semibold"
                  href={link}
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-[160px]">
          <p className="uppercase pb-3 text-lg font-bold">follow us</p>
          <ul>
            {followUs.map(({ title, link }) => (
              <li key={title} className=" pb-3 last:pb-0">
                <Link
                  className="inline-block text-base font-semibold"
                  href={link}
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="px-12 py-5 flex items-center justify-between bg-darkGray text-mainWhite">
        <p>Copyright © 2024 CARGO F-58 Inc. All rights reserved.</p>
        <Link className="flex items-center" href="tel:08005441213">
          <FaPhone className=" mr-2 w-[13px] h-[13px]" />
          <span>0 800 544 12 13</span>
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
