/* eslint-disable @next/next/no-img-element */
"use client";
import React, { memo } from "react";
import "@/app/globals.css";
import Image from "next/image";
import Link from "next/link";


const RecommendedViews = () => {
   return (
    <div className="bg-[#F1F4FB] font-primary">
      <div className="container mx-auto">
        <div className="py-8 px-10 md:px-25 max-w-[1440px]">
          <h2 className="text-center md:text-start  text-[#001A5B]  font-medium  not-italic text-nowrap text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] xl:text-[28px]">
            Recommended to You
          </h2>
        </div>
        <div className="flex flex-col m-1 p-1  justify-center items-center pb-6  px-8 md:flex-row md:space-x-8">
          
{/*             
            <Link href={{pathname:"/"}}> 
            <img className="w-[264px] h-[188px] md:w-[557px] md:h-[395px] justify-self-center" src="/images/Navratri1.svg" alt=""/>
            </Link> */}
            <Link className="" href={"/" }>
            <div className="cursor-pointer flex flex-col items-center justify-center">
              <video
                muted
                 autoPlay
                className="w-[264px] h-[188px]  md:w-[557px] md:h-[395px] justify-self-center bg-no-repeat rounded-[15px]"
                src="https://uqmdwdzmfmvegzpietkc.supabase.co/storage/v1/object/public/vstock.bucket.1/admin_animations/animation-2.mp4"
              />
              </div>
            </Link> 
          
          <div className=" m-1 p-1 grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-4">
            <div className="">
              <Link href={"/" }>
                <Image
                  width={264}
                  height={187.217}
                  className=""
                  src="/images/r1.svg"
                  alt={""}
                />
              </Link>
            </div>
            <div className="">
              <Link href={"/" }>
                <Image
                  width={264}
                  height={187.217}
                  className=""
                  src="/images/r3.svg"
                  alt={""}
                />
              </Link>
            </div>
            <div className="">
              <Link href={"/" }>
                <Image
                  width={264}
                  height={187.217}
                  className=""
                  src="/images/r2.svg"
                  alt={""}
                />
              </Link>
            </div>
            <div className="">
              <Link href={"/" }>
                <Image
                  width={264}
                  height={187.217}
                  className=""
                  src="/images/r4.svg"
                  alt={""}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(RecommendedViews);
