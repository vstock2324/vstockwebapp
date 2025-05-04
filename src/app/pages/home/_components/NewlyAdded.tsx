
import Link from "next/link";
import Image from "next/image";
import { memo } from "react";

const NewlyAdded = () => {
  return (
    <div className="m-1 ">
      <div className="m-1 mx-16">
        <div className="flex flex-col items-center justify-between gap-y-[24px] m-1">
          <div className="m-1 p-1 flex flex-row items-center justify-center md:justify-between  w-full">
            <div className="">
              <h3 className="font-poppins400 not-italic leading-[47.58px] text-black text-[26px] font-normal">
                Newly Added
              </h3>
            </div>
            <div className="">
              <Link href={"/"}>
                <h3 className="hidden underline md:flex font-poppins400 text-[14px] text-black leading-[25.62px] not-italic">
                  View All
                </h3>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-center justify-between gap-[47px]">
            <div className=" cursor-pointer">
              <Link href={"/"}>
                <Image
                  width={264}
                  height={187.217}
                  className=" flex-shrink-0 rounded-[9.479px] bg-cover bg-no-repeat  bg-[#D9D9D9]"
                  src="/images/Newly1.svg"
                  alt=""
                />
              </Link>
            </div>
            <div className=" cursor-pointer">
              <Link href={"/"}>
                <Image
                  width={264}
                  height={187.217}
                  className=" flex-shrink-0 rounded-[9.479px] bg-cover bg-no-repeat  bg-[#D9D9D9]"
                  src="/images/Newly2.svg"
                  alt=""
                />
              </Link>
            </div>
            <div className="cursor-pointer">
              <Link href={"/"}>
                <Image
                  width={264}
                  height={187.217}
                  className=" flex-shrink-0 rounded-[9.479px] bg-cover bg-no-repeat  bg-[#D9D9D9]"
                  src="/images/Newly3.svg"
                  alt=""
                />
              </Link>
            </div>
            <div className="cursor-pointer">
              <Link href={"/"}>
                <Image
                  width={264}
                  height={187.217}
                  className=" flex-shrink-0 rounded-[9.479px] bg-cover bg-no-repeat  bg-[#D9D9D9]"
                  src="/images/Newly4.svg"
                  alt=""
                />
              </Link>
            </div>
          </div>

          <div className="flex justify-center  py-1 items-center">
            <Link href={"/"}>
              <h5 className=" cursor-pointer font-poppins400 text-[#000] text-[14px] font-normal not-italic leading-[25.62px] underline md:hidden">
                View All
              </h5>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(NewlyAdded);
