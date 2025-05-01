"use client";
import React, { useState } from "react";
import { createContext, useContext } from "react";
type TabContextType = {
  tab: string;
  setTab: React.Dispatch<React.SetStateAction<string>>;
};

const TabContext = createContext<TabContextType | undefined>(undefined);

export const TabContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [tab, setTab] = useState<string>("Vectors");

  return (
    <TabContext.Provider value={{ tab, setTab }}>
      {children}
    </TabContext.Provider>
  );
};

export default function useTab() {
  const context = useContext(TabContext);
  if (context === undefined) {
    throw new Error("Context Not Defined");
  }
  return context;
}
