/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import React, { memo } from "react";
import Image from "next/image";

const EditOwn = () => {
  return (
    <div className="bg-[#F1F4FC] w-full h-auto mx-auto flex flex-row items-center justify-center">
  <div className=" mt-4 sm:mt-0 mx-auto xl:m-4 container w-full flex flex-row items-center justify-center ">
    <div className="flex flex-col w-full 2xl:max-w-[1440px] lg:flex-row xl:flex-row justify-around items-center p-2 sm:p-5">
      <div className="lg:mb-0">
        <Image width={425} height={425} src="/images/edi.svg" alt="" className="" />
      </div>

      <div className=" sm:mt-1 md:mt-5 lg:mt-4 xl:mt-5">
        <p>
        <span className="text-[clamp(16px,16px_+_1.1vw,34px)] font-semibold text-[#000] leading-[40.68px] font-poppins ">
          Now You Can Edit Your
        </span><br/>
        <span className="text-[clamp(16px,16px_+_1.1vw,34px)] text-[#000] font-semibold leading-[40.68px] font-poppins ">
          Templates Online By Own
        </span>
        </p>

        <p className="inline-flex flex-col mt-10 ">
          <span className=" font-poppins text-[clamp(12px,12px_+_1.1vw,26px)] font-normal text-[#000]">You can now simply replace and edit</span>
          <span className=" font-poppins text-[clamp(12px,12px_+_1.1vw,26px)] font-normal text-[#000]">text & media and simply download it.</span>
        </p>
        <div className="xl:mt-8">
          <span className="text-base">
            <Link className="text-[#2E67DD] text-[clamp(8px,8px_+_1.1vw,31px)] no-underline" href="">
              Explore <img src="/images/arrow.svg" className="inline-block stroke-2" alt="" />
            </Link>
          </span>
        </div>
      </div>
    </div>
  </div>
</div>

  );
};

export default  memo(EditOwn);
