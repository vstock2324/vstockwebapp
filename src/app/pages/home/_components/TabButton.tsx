"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { memo } from "react";
const TabButton = ({ newtab }: { newtab: string }) => {
const pathname=usePathname();
  return (
    <>
      <Link
        type="button"
        href={`/pages/home/${newtab.toLowerCase()}?page=1`}
        className={`${
          pathname.startsWith(`/pages/home/${newtab.toLowerCase()}`) === true
            ? "bg-[#2E67DD] text-white font-medium border-white"
            : "bg-white text-black border-black hover:bg-[#2E67DD] hover:border-white hover:text-white"
        } px-[50px] py-[10px] text-center cursor-pointer font-poppins600 font-medium not-italic text-[20px] rounded-[82px] border`}
      >
        {newtab}
      </Link>
    </>
  );
};

export default memo(TabButton);
