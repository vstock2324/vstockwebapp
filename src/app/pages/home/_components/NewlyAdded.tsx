import Link from "next/link";
import { memo } from "react";
import NewlyAddedGroup from "./NewlyAddedGroup";
const NewlyAdded = () => {
  return (
        <div className="flex mt-10 flex-col items-center justify-between gap-y-[24px] mx-[10px] sm:mx-[50px] md:mx-[80px] lg:mx-[120px]">
          <div className="hidden lg:flex lg:flex-row lg:items-center lg:justify-between w-full 2xl:max-w-[1440px]">
            <h3 className="font-primary not-italic leading-[47.58px] text-black text-[clamp(12px,12px_+1.1vw,37px)] font-normal">
                Newly Added
            </h3>
            <Link className="underline  text-[clamp(10px,10px_+1.1vw,16px)] text-black leading-[25.62px] not-italic" href={"/"}>
              View All
            </Link>
          </div>

        <NewlyAddedGroup/>

          <div className="flex justify-center  py-1 items-center">
            <Link href={"/"}>
              <h5 className=" cursor-pointer font-poppins text-[#000] text-[clamp(10px,10px_+1.1vw,16px)] font-normal not-italic leading-[25.62px] underline md:hidden">
                View All
              </h5>
            </Link>
          </div>
        </div>
  );
};

export default memo(NewlyAdded);
