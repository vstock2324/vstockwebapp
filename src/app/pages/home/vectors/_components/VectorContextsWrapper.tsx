import React, { memo } from "react";
import { VectorFilterContextProvider } from "@/context/useVectorFilter";
import CombineFilters from "./CombineFilters";
import VectorsGrid from "./VectorsGrid";
// import PaginateVectorGrid from "./PaginateVectorGrid";
import { VectorsDataContextProvider } from "@/context/useVectorsData";
import { VectorModalContextProvider } from "@/context/useVectorModal";
import { LoggedInUserContextProvider } from "@/context/useLoggedInUser";
import VectorsPagination from "./VectorsPagination";
import { LoggedInAdminContextProvider } from "@/context/useLoggedInAdmin";
import { VectorSortByContextProvider } from "@/context/useVectorSortBy";

const VectorContextsWrapper = () => {
  return (
    <>
    <LoggedInAdminContextProvider>
         <LoggedInUserContextProvider>
          <VectorsDataContextProvider>
          <VectorModalContextProvider>
          <VectorFilterContextProvider>
            <VectorSortByContextProvider>
          <CombineFilters />
          <VectorsGrid />
          {/* <PaginateVectorGrid /> */}
          <VectorsPagination/>
          </VectorSortByContextProvider>
          </VectorFilterContextProvider>
          </VectorModalContextProvider>
          </VectorsDataContextProvider>
          </LoggedInUserContextProvider>
          </LoggedInAdminContextProvider>
    </>
  );
};

export default memo(VectorContextsWrapper);
