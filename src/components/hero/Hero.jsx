import React from "react";
import HeroBtn from "../common/HeroBtn";
import HeroBtn2 from "../common/HeroBtn2";

function Hero() {
  return (
    <section className="px-[47px] ">
      <div className="mb-[30px] flex items-center justify-between">
        <h1 className="font-extrabold text-[135px] basis-3/4">
          Leading the way
        </h1>
        <div className="basis-1/4 flex justify-center">
          <p className="w-[233px] pt-8 font-normal text-lg ">
            We help our customers to get and provide reliable delivery services
          </p>
        </div>
      </div>
      <div className="pb-[68px] relative">
        <HeroBtn />
        <h1 className="font-extrabold text-[135px]  absolute right-0 bottom-5">
          logistics solutions
        </h1>
      </div>
      <div className="pt-[517px] mb-[48px] bg-hero1 cover bg-no-repeat rounded-3xl"></div>
      <div className=" pt-[514px] pb-[65px] pl-[62px] bg-[url('/hero22.png'),_url('/hero21.jpg')] bg-top cover bg-no-repeat rounded-3xl">
        <div>
          <h2 className="mb-[18px] text-[76px] font-extrabold text-mainWhite">
            Directions
          </h2>
          <div className="flex items-center justify-center">
            <p className="text-mainWhite text-[24px] font-light basis-3/4">
              F-58 - is a trusted partner in international logistics, providing
              comprehensive services for efficient cargo delivery from China to
              Europe and Ukraine. We handle all key stages of the logistics
              chain, offering tailored solutions for each type of shipment.
            </p>
            <span className="basis-1/4">
              <HeroBtn2 />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
