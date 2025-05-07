import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { memo } from "react";

const FileTypeJPEGBtn = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const sp = new URLSearchParams(searchParams);
  const handlFileTypeJPEG = () => {
    if (sp.get("format") === "jpeg") {
      sp.set("format", "all");
    } else {
      sp.set("format", "jpeg");
    }
    sp.set("page", "1");
    router.push(`${pathname}?${sp.toString()}`, { scroll: false });
  };
  return (
    <button
      onClick={handlFileTypeJPEG}
      className={`${
        sp.get("format") === "jpeg"
          ? "bg-[#2E67DD] text-white border-none"
          : "bg-white text-black"
      } cursor-pointer hover:text-white hover:border-white hover:bg-[#2E67DD] border rounded-lg p-1 border-black`}
    >
      JPEG
    </button>
  );
};

export default memo(FileTypeJPEGBtn);
