"use client";
import useLoggedInAdmin from "@/context/useLoggedInAdmin";
import useLoggedInUser from "@/context/useLoggedInUser";
import Link from "next/link";
import { memo } from "react";
import ProjectLinkLoginAlertBtn from "./ProjectLinkLoginAlertBtn";

const NavBar2ProjectsLink = () => {
  const { loggedInUser } = useLoggedInUser();
  const { loggedInAdmin } = useLoggedInAdmin();

  return (
    <li>
      {(loggedInUser && !loggedInAdmin) || (!loggedInUser && loggedInAdmin) ? (
        <Link href={"/pages/projects"}>My Projects</Link>
      ) : (
        <ProjectLinkLoginAlertBtn />
      )}
    </li>
  );
};
export default memo(NavBar2ProjectsLink);
