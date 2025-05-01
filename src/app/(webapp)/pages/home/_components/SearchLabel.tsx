import { memo } from "react";

const SearchLabel = () => {
  return (
    <>
      <div className="h-10 mx-auto" />
      <div className="text-center">
        <h1 className=" text-[#E2EAFA] font-normal not-italic leading-[43.92px] text-[18px]">
          Thousands of collections by{" "}
          <span className="inline-block text-3xl font-semibold">Vstocks</span>
        </h1>
      </div>
      <div className="h-4 mx-auto" />
    </>
  );
};

export default memo(SearchLabel);
