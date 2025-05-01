"use client";
import { memo } from "react";
import { useRouter, usePathname } from "next/navigation";
import useTab from "@/context/useTab";

const TabButton = ({ newtab }: { newtab: string }) => {
  const router = useRouter();
  const pathname = usePathname();
  const {setTab}= useTab();

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setTab(newtab);  
          router.push(`/pages/home/${newtab.toLowerCase()}?page=1`);
        }}
        className={`${
          pathname.startsWith(`/pages/home/${newtab.toLowerCase()}`) === true
            ? "bg-[#2E67DD] text-white font-medium border-white"
            : "bg-white text-black border-black hover:bg-[#2E67DD] hover:border-white hover:text-white"
        } px-[50px] py-[10px] text-center cursor-pointer font-poppins600 font-medium not-italic text-[20px] rounded-[82px] border`}
      >
        {newtab}
      </button>
    </>
  );
};

export default memo(TabButton);
