"use client";
import React, { memo } from "react";
import { BreadcrumbItem } from "flowbite-react";
import { usePathname } from "next/navigation";
import { nanoid } from "nanoid";
import { HiHome } from "react-icons/hi";

const BreadCrumbsPath = () => {
  const pathname = usePathname();
  const nestedpath = pathname.split("/");
  const crumbspath = nestedpath.slice(1, nestedpath.length - 1);
  return (
    <div className="flex flex-row items-center justify-start space-x-2">
      {crumbspath.map((item: string) => {
        return (
          <React.Fragment key={nanoid()}>
            <BreadcrumbItem
              color="white"
              icon={item === "home" ? HiHome : undefined}
              className="text-white text-[16px] font-medium hover:text-[#EEEEEE] cursor-pointer"
            >
              {item.search("%20") === -1
                ? item.charAt(0).toUpperCase() + item.slice(1).toLowerCase()
                : item.replace("%20", " ")}
            </BreadcrumbItem>
          </React.Fragment>
        );
      })}
      <BreadcrumbItem
        color="white"
        className="text-white text-[16px] font-medium hover:text-[#EEEEEE] cursor-pointer"
      >
        {nestedpath[nestedpath.length - 1].search("%20") === -1
          ? nestedpath[nestedpath.length - 1].charAt(0).toUpperCase() +
            nestedpath[nestedpath.length - 1].slice(1).toLowerCase()
          : nestedpath[nestedpath.length - 1].replace("%20", " ")}
      </BreadcrumbItem>
    </div>
  );
};

export default memo(BreadCrumbsPath);
