"use client";
import useVectorFilter from "@/context/useVectorFilter";
import React, { memo } from "react";
import VectorsData from "./VectorsData";

const VectorGridDataWrapper = () => {
  const { openVectorFilter } = useVectorFilter();
  return (
    <div
      className={`grid grid-cols-2 w-full p-1 grid-flow-dense  gap-1 object-cover place-items-center  auto-cols-max auto-rows-max  items-center  ${
        openVectorFilter === true
          ? "md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"
          : "md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7"
      }`}
    >
      <VectorsData />
    </div>
  );
};

export default memo(VectorGridDataWrapper);
