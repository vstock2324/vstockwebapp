import { memo } from "react";
import { LoggedInUserContextProvider } from "@/context/useLoggedInUser";
import { LoggedInAdminContextProvider } from "@/context/useLoggedInAdmin";
import NavBar2ProjectsLink from "./NavBar2ProjectsLink";

const NavBar2ProjectsLinkContextWrapper = () => {
  return (
    <LoggedInAdminContextProvider>
      <LoggedInUserContextProvider>
        <NavBar2ProjectsLink />
      </LoggedInUserContextProvider>
    </LoggedInAdminContextProvider>
  );
};

export default memo(NavBar2ProjectsLinkContextWrapper);
