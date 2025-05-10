"use client";
import React, { createContext, useContext, useState } from "react";
type VectorSortByContextType = {
  openVectorSortBy: boolean;
  setOpenVectorSortBy: React.Dispatch<React.SetStateAction<boolean>>;
};

const VectorSortByContext = createContext<VectorSortByContextType | undefined>(
  undefined
);

export const VectorSortByContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [openVectorSortBy, setOpenVectorSortBy] = useState<boolean>(false);
  return (
    <VectorSortByContext.Provider
      value={{ openVectorSortBy, setOpenVectorSortBy }}
    >
      {children}
    </VectorSortByContext.Provider>
  );
};

export default function useVectorSortBy() {
  const context = useContext(VectorSortByContext);
  if (context === undefined) throw new Error("Context Not Defined");
  return context;
}
