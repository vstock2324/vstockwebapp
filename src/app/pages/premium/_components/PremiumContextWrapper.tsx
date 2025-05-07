import { memo } from "react";
import { LoggedInUserContextProvider } from "@/context/useLoggedInUser";
import { LoggedInAdminContextProvider } from "@/context/useLoggedInAdmin";
import ProductIntroduction from "./ProductIntroduction";

const PremiumContextWrapper = () => {
  return (
    <LoggedInAdminContextProvider>
      <LoggedInUserContextProvider>
        <ProductIntroduction />
      </LoggedInUserContextProvider>
    </LoggedInAdminContextProvider>
  );
};

export default memo(PremiumContextWrapper);
