"use client";
import { FileInput, Label } from "flowbite-react";
import { memo } from "react";

const VectorSVGFileUpload=()=>{
  return (
    <div className="space-y-5">
        <Label className=" after:ml-0.5 after:text-red-500 after:content-['*'] text-gray-400 my-2 block" htmlFor="vectorfile">
         Upload SVG Vector File 
        </Label>
        <FileInput required name="vectorsvgfile" id="vectorsvgfile" sizing="lg" />
    </div>
  );
}


export default memo(VectorSVGFileUpload);