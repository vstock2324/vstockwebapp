"use client";
import { MdClose } from "react-icons/md";
import { FaCrown } from "react-icons/fa";
import { CiFileOn } from "react-icons/ci";
import { IoColorPaletteOutline } from "react-icons/io5";
import { TbFileOrientation } from "react-icons/tb";
import  useVectorFilter  from "@/context/useVectorFilter";
import { memo } from "react";
import OrientationSquareBtn from "./OrientationSquareBtn";
import OrientationVerticalBtn from "./OrientationVerticalBtn";
import OrientationHorizontalBtn from "./OrientationHorizontalBtn";
import LicenseFreeBtn from "./LicenseFreeBtn";
import LicensePremiumBtn from "./LicensePremiumBtn";
import FileTypeJPEGBtn from "./FileTypeJPEGBtn";
import FileTypeSVGBtn from "./FileTypeSVGBtn";
import FileTypeVectorBtn from "./FileTypeVectorBtn";
import FileTypeAIBtn from "./FileTypeAIBtn";
const VectorFilters=()=>{
  const {openVectorFilter} = useVectorFilter();
 return (
    <>
      <div
        className={`border rounded-r-xl p-1 left-0 shadow-xl mr-2 top-0 w-full h-full z-10 md:relative md:max-w-[30%] md:z-0 md:top-0 md:left-0 bg-white flex flex-col ${
          openVectorFilter === true ? "flex" : "hidden"
        } `}
      >
        <div className="flex flex-row md:hidden">
          <div className="flex items-center w-1/2">
            <button onClick={() =>{}}>
              <MdClose size={22} />
            </button>
            &nbsp;&nbsp;
            <span className="text-lg">Fliter</span>
          </div>
          <div className="flex justify-end items-end w-1/2">
            <button className="border hover:text-white hover:border-white hover:bg-[#2E67DD] border-black p-1 rounded-lg">
              Clear All
            </button>
          </div>
        </div>
        <div className="flex justify-start w-full px-2 flex-col gap-2 py-3">
          <div className="flex p-1 items-center">
            <FaCrown color="black" size={22} />
            &nbsp;&nbsp;<span className=" text-black text-lg font-semibold">License</span>
          </div>
          <div className="flex gap-4">
      <LicenseFreeBtn/>
        <LicensePremiumBtn/>
          </div>
        </div>
        <div className=" flex flex-col w-full gap-2 justify-start px-2 py-3 ">
          <div className="flex items-center">
            <TbFileOrientation color="black" size={18}/>
            &nbsp;&nbsp;
            <span className="text-lg text-black font-semibold">Orientation</span>
          </div>
          <div className="flex flex-col gap-2">
           <OrientationHorizontalBtn/>
            <div className="flex flex-row gap-2">
             <OrientationVerticalBtn/>
             <OrientationSquareBtn/>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full justify-start px-2 py-3 gap-2">
          <div className="flex items-center justify-start p-1">
            <CiFileOn color="black" size={18} />
            &nbsp;&nbsp;<h4 className="text-lg text-black font-semibold">File Type</h4>
          </div>
          <div className="grid grid-cols-2 gap-2">
             <FileTypeVectorBtn/>
            <FileTypeJPEGBtn/>
            <FileTypeSVGBtn/>
            <FileTypeAIBtn/>
          </div>
        </div>
        <div className="flex flex-col w-full px-2 py-3 gap-2">
          <div className="flex items-center justify-start p-1">
            <IoColorPaletteOutline color="black" size={18} />
            &nbsp;&nbsp;<h4 className="text-lg text-black font-semibold">Colors</h4>
          </div>
          <div className="grid grid-cols-6 gap-2 justify-center items-center">
            <button className="w-6 h-6 cursor-pointer bg-red-600 flex justify-center items-center rounded-full"></button>
            <button className="w-6 h-6 cursor-pointer bg-green-800 items-center rounded-full"></button>
            <button className="w-6 h-6 cursor-pointer bg-gray-300 items-center rounded-full"></button>
            <button className="w-6 h-6 cursor-pointer bg-yellow-200 items-center rounded-full"></button>
            <button className="w-6 h-6 cursor-pointer bg-orange-600 items-center rounded-full"></button>
            <button className="w-6 h-6 cursor-pointer bg-yellow-600 items-center rounded-full"></button>
            <button className="w-6 h-6 cursor-pointer bg-blue-600 items-center rounded-full"></button>
            <button className="w-6 h-6 cursor-pointer bg-violet-600 items-center rounded-full"></button>
            <button className="w-6 h-6 cursor-pointer bg-amber-400 items-center rounded-full"></button>
            <button className="w-6 h-6 cursor-pointer bg-green-400  items-center rounded-full"></button>
          </div>
        </div>
      </div>
    </>
  );
}


export default memo(VectorFilters);