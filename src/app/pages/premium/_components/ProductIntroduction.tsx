"use client";
import { memo } from "react";
import MonthlyYearlyBtn from "./MonthlyYearlyBtn";

const ProductIntroduction = () => {
  return (
    <main className="container mx-auto py-16 px-8 font-primary">
      <div className="m-0.5 p-0.5 flex flex-col items-center justify-between space-y-6">
        <div className=" w-full pt-2  m-0.5 p-0.5">
          <h2 className="text-3xl sm:text-4xl md:text-5xl not-italic font-poppins400 leading-[48px] text-center">
            Our Product Plans
          </h2>
        </div>
        <div className="w-full flex flex-col justify-center items-center pb-10  m-0.5">
          <p className="text-[#5D5D5D] text-justify text-wrap  w-full  m-0.5 p-0.5 text-[16px] sm:max-w-[400px] font-poppins400 font-normal">
            All plans include video editing features, unlimited storage,
            unlimited project files, and auto captions.
          </p>
        </div>
     <MonthlyYearlyBtn />
      </div>
    </main>
  );
};

export default memo(ProductIntroduction);
