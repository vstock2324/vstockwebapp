"use client";
import React, { memo } from "react";
import DropdownUser from "./DropdownUser";
import { LoggedInAdminContextProvider } from "@/context/useLoggedInAdmin";

const DropdownUserContextWrapper = () => {
  return (
    <LoggedInAdminContextProvider>
      <DropdownUser />
    </LoggedInAdminContextProvider>
  );
};

export default memo(DropdownUserContextWrapper);
