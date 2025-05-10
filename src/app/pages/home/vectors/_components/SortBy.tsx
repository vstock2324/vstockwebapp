"use client";

import React, { useState, memo, useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BsSortAlphaDown } from "react-icons/bs";
import { BsSortAlphaDownAlt } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const SortBy = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const router = useRouter();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const sp = new URLSearchParams(searchParams);
    const [sortBy, setSortBy] = useState<string>(sp.get("sortby") ?? "");

  useEffect(() => {

  }, [sortBy]);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex flex-row items-center justify-center space-x-2 border-none focus:outline-none">
          <label className="text-[20px] font-normal not-italic text-center">
            Sort By
          </label>
          <MdKeyboardArrowDown
            className="cursor-pointer"
            color="black"
            size={24}
          />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-white">
        <DropdownMenuLabel>Sort By</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={sortBy} onValueChange={setSortBy}>
          <DropdownMenuRadioItem  className=" cursor-pointer" value="alpha">
            <BsSortAlphaDown size={16} />
            Alphabetically
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem className=" cursor-pointer" value="ralpha">
            <BsSortAlphaDownAlt size={16} />
            Alphabetically
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem className=" cursor-pointer" value="likes">
            Most Popular
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem className=" cursor-pointer" value="created_at">
            Date
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem className=" cursor-pointer" value="relevance">
            Most Relevant
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default memo(SortBy);
