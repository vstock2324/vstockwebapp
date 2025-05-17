"use client";
import { MdClose } from "react-icons/md";
import { CiFileOn } from "react-icons/ci";
import { memo } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import FileVectorBtn from "./FileVectorBtn";
import FileVideosBtn from "./FileVideosBtn";

const Filter=()=>{
  const pathname= usePathname();
  const searchParams=useSearchParams();
  const sp=new URLSearchParams(searchParams);
  const router=useRouter();
  function handleClearAll(){
  sp.delete("license");
  sp.delete("orientation");
  sp.delete("format");
  sp.delete("color");
  router.push(`${pathname}?${sp.toString()}`, { scroll: false });
  }
 return (
    <>
      <div
        className={`border rounded-r-xl p-1 left-0 shadow-xl top-0 z-20 absolute  w-[300px]  lg:z-0 lg:static h-fit bg-white  hidden lg:block`}
      >
        <div className="flex flex-row items-center justify-between ">
          <div className="flex items-center w-1/2">
            <MdClose onClick={() =>{}} className="cursor-pointer lg:hidden" size={22} />
              &nbsp;&nbsp;
            <span className="text-lg font-primary">Fliter</span>
          </div>
          <div className="flex justify-end items-end w-1/2">
            <Button  onClick={handleClearAll} className="border font-primary  cursor-pointer hover:text-white hover:border-white hover:bg-[#2E67DD] border-black p-1 rounded-lg">
              Clear All
            </Button>
          </div>
        </div>
        <div className="flex flex-col w-full justify-start px-2 py-3 gap-2">
          <div className="flex items-center justify-start p-1">
            <CiFileOn color="black" size={18} />
            &nbsp;&nbsp;<h4 className="text-lg text-black font-semibold font-primary">File Type</h4>
          </div>
          <div className="grid grid-cols-2 gap-2">
           <FileVectorBtn/>
           <FileVideosBtn/>
          </div>
        </div>
 
      </div>
    </>
  );
}


export default memo(Filter);