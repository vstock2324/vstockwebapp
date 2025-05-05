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

const VectorContextsWrapper = () => {
  return (
    <>
    <LoggedInAdminContextProvider>
         <LoggedInUserContextProvider>
          <VectorsDataContextProvider>
          <VectorModalContextProvider>
          <VectorFilterContextProvider>
          <CombineFilters />
          <VectorsGrid />
          {/* <PaginateVectorGrid /> */}
          <VectorsPagination/>
          </VectorFilterContextProvider>
          </VectorModalContextProvider>
          </VectorsDataContextProvider>
          </LoggedInUserContextProvider>
          </LoggedInAdminContextProvider>
    </>
  );
};

export default memo(VectorContextsWrapper);
