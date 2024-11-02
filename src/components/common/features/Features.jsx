import React from "react";
import FeatureLeft from "../FeatureLeft";
import FeatureRight from "../FeatureRight";
import features from "./features.content";

function Features() {
  return (
    <section className="px-[112px] pt-12 pb-[68px] bg-[#ECECEC]">
      <h2 className="text-black font-extrabold text-[76px] mb-[48px] ">
        Why are we chosen?
      </h2>
      <ul className="flex h-[680px] flex-col flex-wrap justify-between content-between">
        {features.map((item, id) => (
          <li key={id}>
            {Number(item.number) % 2 == 0 ? (
              <FeatureLeft key={id} info={item} />
            ) : (
              <FeatureRight key={id} info={item} />
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Features;
