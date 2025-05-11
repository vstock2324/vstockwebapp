import VectorFilters from "./VectorFilters";
import VectorGridDataWrapper from "./VectorGridDataWrapper";
import VectorModal from "./VectorModal";

import { memo } from "react";

const VectorsGrid = () => {
  return (
    <div className="items-start justify-between flex flex-row relative  mx-[30px] lg:mx-[120px] 2xl:mx-auto 2xl:max-w-[1440px]">
      <VectorFilters />
      <VectorGridDataWrapper />
      <VectorModal />
    </div>
  );
};

export default memo(VectorsGrid);
