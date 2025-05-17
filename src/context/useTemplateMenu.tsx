"use client";
import React, { createContext, useContext, useState } from "react";
type TemplateMenuContextType = {
  openTemplateMenu: boolean;
  setOpenTemplateMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

const TemplateMenuContext = createContext<TemplateMenuContextType | undefined>(
  undefined
);

export const TemplateMenuContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [openTemplateMenu, setOpenTemplateMenu] = useState<boolean>(false);
  return (
    <TemplateMenuContext.Provider
      value={{ openTemplateMenu, setOpenTemplateMenu }}
    >
      {children}
    </TemplateMenuContext.Provider>
  );
};

export default function useTemplateMenu() {
  const context = useContext(TemplateMenuContext);
  if (context === undefined) throw new Error("Context Not Defined");
  return context;
}

