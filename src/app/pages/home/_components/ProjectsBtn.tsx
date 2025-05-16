import Link from "next/link";
import React from "react";
import { GrProjects } from "react-icons/gr";

const ProjectsBtn = () => {
  return (
    <Link className="w-full py-3 " href={`/pages/user/projects`}>
      <div className="flex flex-row items-center w-full justify-start">
        <GrProjects size={14} />
        &nbsp;&nbsp;&nbsp;
        <span className="text-[14px]">Projects</span>
      </div>
    </Link>
  );
};

export default ProjectsBtn;
