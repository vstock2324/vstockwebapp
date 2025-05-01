"use client";
import React, { createContext, useContext, useState } from "react";
type VectorFilterContextType = {
  openVectorFilter: boolean;
  setOpenVectorFilter: React.Dispatch<React.SetStateAction<boolean>>;
};

const VectorFilterContext = createContext<VectorFilterContextType | undefined>(
  undefined
);

export const VectorFilterContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [openVectorFilter, setOpenVectorFilter] = useState<boolean>(false);
  return (
    <VectorFilterContext.Provider
      value={{ openVectorFilter, setOpenVectorFilter }}
    >
      {children}
    </VectorFilterContext.Provider>
  );
};

export default function useVectorFilter() {
  const context = useContext(VectorFilterContext);
  if (context === undefined) throw new Error("Context Not Defined");
  return context;
}
