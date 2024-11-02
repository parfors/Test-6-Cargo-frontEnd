import React from "react";
import UkraineFlag from "./UkraineFlag";
import Link from "next/link";
import FormBtn from "./FormBtn";

function Form() {
  return (
    <form className="w-[722px] absolute top-[90px] right-11 py-10 px-[32px] bg-mainWhite opacity-80 rounded-[20px]">
      <label>
        <span className="inline font-bold text-black">Your name</span>
        <span>
          <input
            className="border-[1px] border-gray rounded-md block w-full h-10 pl-[10px] mt-[6px] mb-3"
            type="text"
            placeholder="Enter your name"
            name="name"
          />
        </span>
      </label>
      <label>
        <span className="inline font-bold text-black">Company (optional)</span>
        <span>
          <input
            className="border-[1px] border-gray rounded-md block w-full h-10 pl-[10px] mt-[6px] mb-3"
            type="text"
            name="company"
            placeholder="Enter your company name (optional)"
          />
        </span>
      </label>
      <label className="block relative">
        <span className=" inline font-bold text-black">Phone Number</span>
        <span>
          <input
            className=" border-[1px] border-gray rounded-md  w-full h-10 pl-[34px] mt-[6px] mb-3"
            type="tel"
            name="tel"
            placeholder="+380"
          />
        </span>
        <span>
          <UkraineFlag
            className={"w-[18px] h-[18px] absolute top-[42px] left-[10px]"}
          />
        </span>
      </label>
      <label>
        <span className="inline font-bold text-black">E-mail</span>
        <span>
          <input
            className="border-[1px] border-gray rounded-md block w-full h-10 pl-[10px] mt-[6px] mb-3"
            type="email"
            name="email"
            placeholder="Enter your email"
          />
        </span>
      </label>
      <label>
        <span className="inline font-bold text-black">Type of Inquiry</span>
        <span>
          <select className="border-[1px] border-gray text-gray rounded-md block w-full h-10 pl-[10px] mt-[6px] mb-3">
            <option defaultValue={"null"} value="" disabled hidden>
              Choose from the menu
            </option>
          </select>
        </span>
      </label>
      <label>
        <span className="inline font-bold text-black">Message</span>
        <span>
          <textarea
            className="border-[1px] border-gray rounded-md block w-full h-[100px] pl-[10px] mt-[6px] mb-3"
            type="email"
            name="message"
            placeholder="Describe your inquiry or question"
          />
        </span>
      </label>
      <label className=" block text-center mb-6">
        <input type="checkbox" name="agreement" />
        <span className="ml-[10px] ">
          I agree to the processing of my personal data according to the
        </span>
        <Link className="text-mainBLue ml-1" href="/">
          privacy policy
        </Link>
      </label>
      <FormBtn />
    </form>
  );
}

export default Form;
