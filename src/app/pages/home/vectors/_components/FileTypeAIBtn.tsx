import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { memo } from "react";

const FileTypeAIBtn=()=> {
      const router = useRouter();
      const pathname = usePathname();
      const searchParams = useSearchParams();
      const sp = new URLSearchParams(searchParams);

    const handleFileTypeAI = () => {
        if (sp.get("format") === "ai") {
          sp.set("format", "all");
        } else {
          sp.set("format", "ai");
        }
        sp.set("page", "1");
        router.push(`${pathname}?${sp.toString()}`,{scroll:false});
      };
    
  return (
        <button
                  onClick={handleFileTypeAI}
                  className={`${
                    sp.get("format") === "ai"
                      ? "bg-[#2E67DD] text-white border-none"
                      : "bg-white text-black"
                  } cursor-pointer hover:text-white font-primary hover:border-white hover:bg-[#2E67DD] border rounded-lg p-1 border-black`}
                >
                  AI
                </button>
  )
}

export default memo(FileTypeAIBtn);