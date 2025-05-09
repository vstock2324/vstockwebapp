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
      <div className="mx-[120px] flex flex-row  items-center  justify-between relative py-8">
        <div className="inline-flex flex-row items-center justify-between">
          <span className="px-1 py-2 cursor-pointer">
            <BsSliders fill={"black"} size={20} />
          </span>
          <span className="font-semibold p-1 inline-flex flex-row items-center justify-between cursor-pointer">
            <h3 className=" text-black font-poppins600 text-[20px] font-medium not-italic text-center">
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
