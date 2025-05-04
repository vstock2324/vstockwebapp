import React from "react";
import VectorsTable from "./VectorsTable";
import { AdminVectorsContextProvider } from "@/context/useAdminVectors";

function VectorTableContextWrapper() {
  return (
    <>
      <AdminVectorsContextProvider>
        <VectorsTable />
      </AdminVectorsContextProvider>
    </>
  );
}

export default VectorTableContextWrapper;
