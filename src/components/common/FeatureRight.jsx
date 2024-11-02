import React from "react";

function FeatureRight({ info }) {
  return (
    <div className="w-[659px] h-[140px] bg-featureRight flex items-center ">
      <p className="basis-4/5 text-center text-[34px] font-semibold">
        {info.content}
      </p>
      <span className="basis-1/5 ">
        <p className="w-[120px] h-[120px] text-center bg-mainBLue text-mainWhite text-[75px] rounded-full">
          {info.number}
        </p>
      </span>
    </div>
  );
}

export default FeatureRight;
