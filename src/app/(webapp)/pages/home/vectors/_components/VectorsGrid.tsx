import VectorFilters from "./VectorFilters";
import VectorGridDataWrapper from "./VectorGridDataWrapper";
import VectorsData from "./VectorsData";
import VectorModal from "./VectorModal";
import { memo } from "react";

const VectorsGrid = () => {
  return (
    <div className="items-start justify-between flex flex-row relative mx-[120px]">
      <VectorFilters />
      <VectorGridDataWrapper>
      <VectorsData />
      </VectorGridDataWrapper>
      <VectorModal/>
    </div>
  );
};

export default memo(VectorsGrid);
