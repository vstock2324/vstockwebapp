"use client";
import { nanoid } from "nanoid";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import React, { memo } from "react";
import { IoMdHome } from "react-icons/io";
import { FaChevronRight } from "react-icons/fa6";

const BreadCrumbsHome = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const pathName = decodeURIComponent(pathname)
    .split("/")
    .filter((item) => item !== "")
    .filter((item) => item !== "pages");
  const arr = new Array(pathName.length);
  return (
    <div className="hidden w-full lg:flex lg:flex-row items-center justify-start text-[16px]  font-semibold">
      <div className="flex flex-row  items-center justify-center space-x-2">
        {pathName.map((item: string) => {
          arr.push(item);
          if (item === "home") {
            return (
              <div
                className="flex flex-row items-center justify-center space-x-2"
                key={nanoid().toString()}
              >
                <span>
                  <IoMdHome color="white" className="mb-1" size={18} />
                </span>
                <Link className="text-white font-poppins" href={`/pages/${arr.join("/")}`}>
                  {item.slice(0, 1).toUpperCase() +
                    item.slice(1, item.length).toLowerCase()}
                </Link>
                <FaChevronRight color="white" size={13} />
              </div>
            );
          } else {
            if (pathName[pathName.length - 1] !== item) {
              return (
                <div
                  className="flex flex-row items-center justify-center space-x-2"
                  key={nanoid().toString()}
                >
                  <Link
                    className="text-white font-poppins"
                    href={`/pages/${arr.join("/")}?page=${searchParams.get(
                      "page"
                    )}`}
                  >
                    {item.split(" ").length < 2
                      ? item.slice(0, 1).toUpperCase() +
                        item.slice(1, item.length).toLowerCase()
                      : item
                          .split(" ")
                          .map(
                            (ans) =>
                              ans.slice(0, 1).toUpperCase() +
                              ans.slice(1, ans.length).toLowerCase()
                          )
                          .join(" ")}
                  </Link>
                  <FaChevronRight color="white" size={13} />
                </div>
              );
            } else {
              return (
                <div
                  className="flex flex-row items-center justify-center space-x-2"
                  key={nanoid().toString()}
                >
                  <Link
                    className="text-white"
                    href={`/pages/${arr.join("/")}?page=${searchParams.get(
                      "page"
                    )}`}
                  >
                    {item.split(" ").length < 2
                      ? item.slice(0, 1).toUpperCase() +
                        item.slice(1, item.length).toLowerCase()
                      : item
                          .split(" ")
                          .map(
                            (ans) =>
                              ans.slice(0, 1).toUpperCase() +
                              ans.slice(1, ans.length).toLowerCase()
                          )
                          .join(" ")}
                  </Link>
                </div>
              );
            }
          }
        })}
      </div>
    </div>
  );
};

export default memo(BreadCrumbsHome);
