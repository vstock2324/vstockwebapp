"use client";
import { FileInput, Label } from "flowbite-react";
import { memo } from "react";

const VideoFileUpload=()=>{
  return (
    <div className="space-y-5">
        <Label className=" after:ml-0.5 after:text-red-500 after:content-['*'] text-gray-400 my-2 block" htmlFor="videofile">
         Upload Video File 
        </Label>
        <FileInput required className="focus:outline-none border-none cursor-pointer"  name="videofile" sizing="lg" />
    </div>
  );
}


export default memo(VideoFileUpload);