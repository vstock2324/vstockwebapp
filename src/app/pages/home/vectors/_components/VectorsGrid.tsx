"use client";
import VectorFilters from "./VectorFilters";
import VectorModal from "./VectorModal";
import { memo } from "react";
import VectorsData from "./VectorsData";
import useVectorFilter from "@/context/useVectorFilter";

const VectorsGrid = () => {
  const { openVectorFilter } = useVectorFilter();
  return (
    <div className={`${openVectorFilter ? "md:grid md:grid-cols-[300px_1fr] md:gap-2":""}  mx-[30px] lg:mx-[120px] 2xl:mx-auto 2xl:max-w-[1440px]`}>
      <VectorFilters />
      <VectorsData/>
      <VectorModal />
    </div>
  );
};

export default memo(VectorsGrid);
