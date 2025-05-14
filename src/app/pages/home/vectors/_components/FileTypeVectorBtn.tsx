import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { memo } from "react";

const FileTypeVectorBtn = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const sp = new URLSearchParams(searchParams);
  const handlFileTypeVector = () => {
    sp.set("format", "all");
    router.push(`${pathname}?${sp.toString()}`, { scroll: false });
  };
  return (
    <button
      onClick={handlFileTypeVector}
      className={`${
        sp.get("format") === "all"
          ? "bg-[#2E67DD] text-white border-none"
          : "bg-white text-black"
      } cursor-pointer  font-primary hover:text-white hover:border-white hover:bg-[#2E67DD] border rounded-lg p-1 border-black`}
    >
      Vector
    </button>
  );
};

export default memo(FileTypeVectorBtn);
