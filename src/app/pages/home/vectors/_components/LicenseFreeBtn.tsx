"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { memo } from "react";

const LicenseFreeBtn=()=>{
          const router = useRouter();
            const pathname = usePathname();
            const searchParams = useSearchParams();
            const sp = new URLSearchParams(searchParams);
            
  const handleLicenseFree = () => {
    if (sp.get("license") === "free") {
      sp.delete("license");
    } else {
      sp.set("license", "free");
    }
    sp.set("page", "1");
    router.push(`${pathname}?${sp.toString()}`,{scroll:false});
  };
            return(      <button
                onClick={handleLicenseFree}
                className={`${
                 String(searchParams.get("license")) === "free"
                    ? "bg-[#2E67DD] text-white border-none"
                    : "bg-white text-black"
                } border cursor-pointer   hover:text-white hover:border-white hover:bg-[#2E67DD] border-black px-2 py-1 rounded-lg`}
              >
                Free
              </button>);
}

export default memo(LicenseFreeBtn);