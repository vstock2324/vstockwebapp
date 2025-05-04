"use client";
import { FileInput, Label } from "flowbite-react";
import { memo } from "react";

const VectorAIFileUpload=()=>{
  return (
    <div className="space-y-5 w-[80%]">
        <Label className=" after:ml-0.5 after:text-red-500 after:content-['*'] text-gray-400 my-2 block" htmlFor="vectorfile">
         Upload AI Vector File 
        </Label>
        <FileInput required name="vectoraifile" id="vectoraifile" sizing="lg" />
    </div>
  );
}


export default memo(VectorAIFileUpload);