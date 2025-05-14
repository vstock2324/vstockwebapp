import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { memo } from "react";

const FileTypeSVGBtn=()=> {
      const router = useRouter();
      const pathname = usePathname();
      const searchParams = useSearchParams();
      const sp = new URLSearchParams(searchParams);
    const handlFileTypeSVG = () => {
        if (sp.get("format") === "svg") {
          sp.set("format", "all");
        } else {
          sp.set("format", "svg");
        }
        sp.set("page", "1");
        router.push(`${pathname}?${sp.toString()}`,{scroll:false});
      };
  return (
    <button
    onClick={handlFileTypeSVG}
    className={`${
      sp.get("format") === "svg"
        ? "bg-[#2E67DD] text-white border-none"
        : "bg-white text-black"
    } cursor-pointer font-primary hover:text-white hover:border-white hover:bg-[#2E67DD] border rounded-lg p-1 border-black`}
  >
    SVG
  </button>
  )
}

export default memo(FileTypeSVGBtn);