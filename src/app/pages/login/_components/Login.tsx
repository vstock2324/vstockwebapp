"use client";
import { memo } from "react";
// import { FcGoogle } from "react-icons/fc";
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { useState } from "react";
import {
  Exactly10Digits,
  Exactly6Digits,
} from "@/functions/validations";
import { useRouter } from "next/navigation";

const Login = () => {
  const [mobileState, setMobileState] = useState<boolean>(false);
  const [otpState, setOtpState] = useState<boolean>(false);
  const router = useRouter();
  // const pathname=usePathname();
  return (
    <div className="flex flex-col  items-center justify-between w-full lg:w-[60%] p-1">
      <div className="mb-[40px] gap-y-4 px-1 flex flex-col items-center justify-start w-full lg:w-3/5">
        <div className="">
          <h1 className=" font-poppins600 not-italic  text-[30px]  lg:text-[40px] text-center  font-bold text-[#2E67DD]">
            Login/Sign Up
          </h1>
        </div>
        <div className=" flex flex-col gap-y-4 justify-center items-center m-1 p-1">
          <div className="gap-x-[15px] m-1 p-1 flex flex-row items-center justify-center">
            <div className=" rounded-full border-[#767676] border-2 m-1 p-2">
              <FaGoogle
                onClick={() => {
                  router.push("/pages/auth");
                }}
                size={32}
                color="#767676"
                className="rounded-full cursor-pointer"
              />
            </div>
            <div className="rounded-full m-1 p-2  border-[#767676] border-2 ">
              <FaFacebookF
                size={32}
                color="#767676"
                className="rounded-full cursor-pointer"
              />
            </div>
          </div>
          <div className="my-[10px]">
            <h4 className="text-[20px] font-poppins400 not-italic text-center font-normal">
              or continue with OTP
            </h4>
          </div>
        </div>
        <div className=" items-center justify-center  flex flex-col gap-y-4  w-3/5">
          <div className=" flex flex-col items-center justify-center  gap-y-2 w-full ">
            <div className=" relative flex flex-row items-center justify-center w-full max-w-[400px]">
              <input
                onChange={(event) => {
                  setMobileState(Exactly10Digits(event.target.value));
                }}
                className="focus:outline-1 min-w-[340px]  focus:outline-[#858585] bg-[#F2F2F2] rounded-md relative  w-full  p-4  placeholder-[#9A9A9A]"
                placeholder="Mobile Number"
              />
              <button
                type="submit"
                className={` ${
                  mobileState
                    ? "bg-[#2E67DD] text-white"
                    : "bg-[#E7E6F2] text-black"
                } text-sm text-center cursor-pointer font-semibold absolute rounded-lg  focus:outline-[#858585] m-1 px-4 py-3 right-0.5 shadow-2xl`}
              >Get OTP</button>
            </div>
            <div className=" m-1 flex flex-row items-center justify-center w-full max-w-[400px] ">
              <input
                onChange={(event) => {
                  setOtpState(Exactly6Digits(event.target.value));
                }}
                className=" focus:outline-[#858585] min-w-[340px] bg-[#F2F2F2] focus:outline-1 relative rounded-md  w-full p-4  placeholder-[#9A9A9A]"
                placeholder="Enter 6 digits OTP here"
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <button
              className={` ${
                otpState && mobileState ? " bg-[#2E67DD]" : "bg-[#ABC2F1]"
              } text-lg font-normal text-nowrap text-white py-4 px-12 rounded-full`}
            >
              Verify and Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Login);
