import { memo } from "react";

const SearchLabel = () => {
  return (
    <>
      <div className="h-6 md:h-10 mx-auto" />
      <div className="">
        <h1 className=" text-[#E2EAFA] font-normal not-italic flex flex-row items-center  justify-start  flex-nowrap leading-[43.92px] text-[14px] sm:text-[16px] md:text-[18px]">
          <span>Thousands of collections by{" "}<strong className=" text-xl sm:text-2xl md:text-3xl">Vstocks</strong></span>
        </h1>
      </div>
      <div className="h-2 md:h-4 mx-auto" />
    </>
  );
};

export default memo(SearchLabel);
