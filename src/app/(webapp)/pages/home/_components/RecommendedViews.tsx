"use client";
import React, { memo } from "react";
import "@/app/globals.css";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const RecommendedViews = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  return (
    <div className="bg-[#F1F4FB]">
      <div className=" mx-auto">
        <div className="py-8 px-25">
          <h2 className="text-center md:text-start  text-[#001A5B] font-poppins600 font-medium  not-italic text-nowrap text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] xl:text-[28px]">
            {" "}
            Recommended to You
          </h2>
        </div>
        <div className="flex flex-col m-1 p-1  justify-center items-center  px-8 md:flex-row md:space-x-8">
          <div className="cursor-pointer m-1 p-1">
            {/* <Link href={{pathname:"/"}}> <img className="w-[264px] h-[188px] md:w-[557px] md:h-[395px] justify-self-center" src="./images/Navratri1.svg" alt=""/></Link> */}
            <Link href={{ pathname: "/" }}>
              {" "}
              <video
                ref={videoRef}
                muted
                onMouseOver={() => {
                  videoRef.current?.play();
                }}
                onMouseOut={() => {
                  videoRef.current?.pause();
                }}
                className="w-[264px] h-[188px] rounded-md md:w-[557px] md:h-[395px] justify-self-center"
                src="https://uqmdwdzmfmvegzpietkc.supabase.co/storage/v1/object/public/vstock.bucket.1/admin_animations/animation-2.mp4"
              />
            </Link>
          </div>
          <div className=" m-1 p-1 grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-4">
            <div className="">
              <Link href={{ pathname: "/" }}>
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
              <Link href={{ pathname: "/" }}>
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
              <Link href={{ pathname: "/" }}>
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
              <Link href={{ pathname: "/" }}>
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
