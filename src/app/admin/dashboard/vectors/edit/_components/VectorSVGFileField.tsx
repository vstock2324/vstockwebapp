"use client"
import {  FileInput, Label } from 'flowbite-react';
import { useParams } from 'next/navigation';
import React, { memo } from 'react'
import { handleChangeVectorSVGFile } from '@/actions/admin/dashboard/vectors';


const VectorSVGFileField=()=>{
  const params=useParams<{id:string}>();
   const handleChangeVectorSVGFileWithVectorId=handleChangeVectorSVGFile.bind(null,params.id)
  return (
    <form action={handleChangeVectorSVGFileWithVectorId} className="space-y-4 mt-10 w-[80%]">
        <Label className=" after:ml-0.5 after:text-red-500 after:content-['*'] text-gray-400 my-2 block" htmlFor="vectorfile">
         Change Vector SVG File 
        </Label>
        <FileInput  name="vectorsvgfile"  sizing="lg" />
        <div className='flex flex-row items-center justify-start space-x-4'>
            <button  type="submit" className="bg-[#2E67DD] disabled:bg-[#2E67FF] cursor-pointer text-white rounded p-2 w-[200px]" >Upload</button>
            <button className="border-[#2E67DD] bg-none cursor-pointer text-[#2E67DD] hover:text-white hover:border-none hover:bg-blue-500 border rounded p-2 w-[200px]" type="reset">Reset</button></div>
    </form>
  );
}

export default memo(VectorSVGFileField);