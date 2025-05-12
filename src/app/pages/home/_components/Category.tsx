import React, { memo } from "react";
import "../../../globals.css";
import CategoryVectorLink from "./CategoryVectorLink";
import CategoryAnimationLink from "./CategoryAnimationLink";
import CategoryIllustrationsLink from "./CategoryIllustrationsLink";


const Category = () => {
  return (
    <div className="my-1 mx-[20px] sm:mx-[64px] max-w-[1440px]">
      <div className="flex flex-col m-1 ">
        <div className="flex flex-col  py-6 space-y-2 justify-center items-center">
          <h1 className=" text-center text-[14px] px-6 sm:px-8 md:px-10  sm:text-[25px] md:text-[30px] lg:[35px] xl:text-[40px] font-semibold text-[#1E1E1E]  font-poppins600  tracking-[0.0375rem] text-nowrap">
            Unleash Your Creativity with V-Stocks!
          </h1>
          <h4 className="text-center  px-6 sm:px-12 md:px-16 text-[11px] sm:text-[13.5px] md:text-[16px] lg:text-[18.5px] xl:text-[22px] tracking-[0.02063rem] font-normal text-[#000]  text-wrap">
            Where Ideas Come to Life - Your One Stop Destination for Stunning
            Visual Content
          </h4>
        </div>
        <div className="flex flex-col items-center justify-around p-1 space-y-4 py-6 px-6 sm:px-32 lg:flex-row lg:space-y-0 lg:space-x-2 lg:px-0 lg:justify-between lg:items-center lg:pt-[60px]">
          <CategoryVectorLink />
          <CategoryAnimationLink/>
          <CategoryIllustrationsLink/>
        </div>
      </div>
    </div>
  );
};

export default memo(Category);
