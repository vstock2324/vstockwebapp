"use client";

import useVectorFilter from "@/context/useVectorFilter";
import React, { memo } from "react";
import { BsSliders } from "react-icons/bs";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import SortBy from "./SortBy";

const CombineFilters = () => {
  const { openVectorFilter, setOpenVectorFilter } = useVectorFilter();
  return (
    <>
      <div className=" hidden mx-[30px]  lg:mx-[120px] 2xl:mx-auto 2xl:max-w-[1440px] md:flex md:flex-row  items-center  justify-between relative py-6">
        <div className="inline-flex flex-row items-center justify-between">
          <span className="px-1 py-2 cursor-pointer">
            <BsSliders fill={"black"} size={20} />
          </span>
          <span className="font-semibold p-1 inline-flex flex-row items-center justify-between cursor-pointer">
            <h3 className=" text-black  text-[20px] font-primary font-medium not-italic text-center">
              Filters
            </h3>

            {openVectorFilter ? (
              <MdKeyboardArrowUp
                className="cursor-pointer"
                fill={"black"}
                onClick={() => {
                  setOpenVectorFilter(!openVectorFilter);
                }}
                size={24}
              />
            ) : (
              <MdKeyboardArrowDown
                className="cursor-pointer"
                fill={"black"}
                onClick={() => setOpenVectorFilter(!openVectorFilter)}
                size={24}
              />
            )}
          </span>
        </div>
        <div>
          <SortBy />
        </div>
      </div>
    </>
  );
};

export default memo(CombineFilters);
