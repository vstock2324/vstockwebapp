"use client";
import useVectorFilter from "@/context/useVectorFilter";
import React, { memo } from "react";
import VectorsData from "./VectorsData";

const VectorGridDataWrapper = () => {
  const { openVectorFilter } = useVectorFilter();
  return (
    <div
      className={`grid grid-cols-1 w-full p-1 grid-flow-dense  gap-1 object-cover place-items-center  auto-cols-max auto-rows-max  items-center  ${
        openVectorFilter === true
          ? "sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"
          : "grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6"
      }`}
    >
      <VectorsData />
    </div>
  );
};

export default memo(VectorGridDataWrapper);
