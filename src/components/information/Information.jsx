import React from "react";

function Information() {
  return (
    <section className="pl-[112px] pr-[48px] py-[48px] flex items-start gap-10">
      <div className=" basis-1/2">
        <h2 className="font-extrabold text-[76px]">Who we are?</h2>
        <ul className="text-[24px] font-light text-darkGray flex flex-col gap-8">
          <li>
            Our services include air freight for urgent and high-value cargo, as
            well as sea freight for cost-effective transportation of large
            shipments. We also provide road transport across Europe and Ukraine,
            delivering goods directly to the client’s door.
          </li>
          <li>
            F-58 organizes storage and consolidation of goods in China, Europe,
            and Ukraine to optimize the logistics process. Our mission is to
            make cargo delivery as efficient, safe, and convenient as possible
            for our clients.
          </li>
          <li>
            In addition, we offer rail freight solutions for medium and heavy
            cargo, along with full customs support, ensuring seamless clearance
            and compliance with all regulations.
          </li>
          <li>
            We pride ourselves on providing personalized logistics solutions
            tailored to meet the unique needs of each client. Whether it's
            managing tight deadlines, handling sensitive or high-value cargo, or
            navigating complex customs requirements, FanwayLogistics ensures a
            smooth and reliable service at every step. With a strong network of
            partners and cutting-edge technology, we guarantee full visibility
            and control over your shipments, from origin to destination.
          </li>
        </ul>
      </div>
      <div className="bg-information h-[870px] basis-1/2 rounded-[40px]"></div>
    </section>
  );
}

export default Information;
