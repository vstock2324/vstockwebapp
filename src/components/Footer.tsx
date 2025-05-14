import Link from "next/link";
import React, { memo } from "react";
import { MdFacebook } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={`bg-[#2E67DD] shadow-headershadow   h-auto`}>
      <footer className=" container mx-auto">
        <div className="flex flex-col justify-center items-center py-8">
          <div className=" cursor-pointer">
            <Link href={"/"}>
              <Image
                alt=""
                className="hover:brightness-200"
                src="/logo.svg"
                width={40}
                height={50}
              />
            </Link>
          </div>
          <p className=" text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:[text-24px] hover:brightness-200 text-nowrap font-poppins font-normal  text-white text-center py-8">
            There are three responses to a piece <br />
            of design - yes, no, and WOW!
          </p>
          <div className="font-normal py-2 sm:py-4 text-white flex flex-col md:flex-row items-center  space-y-4 md:space-y-0  sm:font-medium  md:space-x-6 lg:space-x-12 justify-between">
            <span className="font-poppins text-[10px] sm:text-[12px] md:text-[14px] lg:-text-[16px] xl:text-[18px] 2xl:[text-20px]  hover:font-bold hover:transition-all duration-100 hover:brightness-200 cursor-pointer  ">
              Privacy Policy
            </span>
            <span className=" font-poppins text-[10px] sm:text-[12px] md:text-[14px] lg:-text-[16px] xl:text-[18px] 2xl:[text-20px] hover:font-bold hover:transition-all duration-100 hover:brightness-200 cursor-pointer   ">
              Contact Us
            </span>
            <span className="font-poppins text-[10px] sm:text-[12px] md:text-[14px] lg:-text-[16px] xl:text-[18px] 2xl:[text-20px] hover:font-bold hover:transition-all duration-100 hover:brightness-200 cursor-pointer  ">
              Terms and conditions
            </span>
            <span className="font-poppins text-[10px] sm:text-[12px] md:text-[14px] lg:-text-[16px] xl:text-[18px] 2xl:[text-20px] hover:font-bold hover:transition-all duration-100 hover:brightness-200 cursor-pointer  ">
              About
            </span>
            <span className="font-poppins text-[10px] sm:text-[12px] md:text-[14px] lg:-text-[16px] xl:text-[18px] 2xl:[text-20px] hover:font-bold hover:transition-all duration-100 hover:brightness-200 cursor-pointer  ">
              FAQs
            </span>
          </div>
          <div className="flex flex-row justify-center items-center py-2 sm:py-4">
            <Link href={"/"} className=" cursor-pointer">
              <div className="rounded-full p-2 m-1 ">
                <MdFacebook color="#FFFFFF" size={35} />
              </div>
            </Link>
            <Link href={"/"} className=" cursor-pointer">
              <div className="rounded-full p-3 m-1 ">
                <FaXTwitter color="#FFFFFF" size={22} />
              </div>
            </Link>
            <Link href={"/"} className="cursor-pointer">
              <div className="rounded-full p-3 m-1 ">
                <FaInstagram color="#FFFFFF" size={25} />
              </div>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default memo(Footer);
