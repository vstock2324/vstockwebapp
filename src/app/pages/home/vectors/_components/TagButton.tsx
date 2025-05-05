"use client";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import Link from "next/link";
import { memo } from "react";

const TagButton = ({ tag }: { tag: string }) => {
  return (
    <>
      <Link
        href={"/"}
        className="rounded-full border-2 border-black bg-[#EDEDED] flex flex-row justify-center items-center space-x-1 px-2  py-0.5"
      >
        <span className="text-[12px]">{tag}</span>
        <HiOutlineMagnifyingGlass size={14} />
      </Link>
    </>
  );
};

export default memo(TagButton);
