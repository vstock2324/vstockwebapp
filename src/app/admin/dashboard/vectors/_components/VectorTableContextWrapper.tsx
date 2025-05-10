import React from "react";
import VectorsTable from "./VectorsTable";
import { AdminVectorsContextProvider } from "@/context/useAdminVectors";
import { Bounce, ToastContainer } from "react-toastify";

const VectorTableContextWrapper = () => {
  return (
    <>
      <AdminVectorsContextProvider>
        <VectorsTable />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
        />
      </AdminVectorsContextProvider>
    </>
  );
};

export default VectorTableContextWrapper;
