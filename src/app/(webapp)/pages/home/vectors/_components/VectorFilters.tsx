"use client";
import { MdClose } from "react-icons/md";
import { FaCrown } from "react-icons/fa";
import { LuRectangleHorizontal } from "react-icons/lu";
import { LuSquare } from "react-icons/lu";
import { LuRectangleVertical } from "react-icons/lu";
import { CiFileOn } from "react-icons/ci";
import { IoColorPaletteOutline } from "react-icons/io5";
import { TbFileOrientation } from "react-icons/tb";

import  useVectorFilter  from "@/context/useVectorFilter";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { memo } from "react";
const VectorFilters=()=>{
  const {openVectorFilter} = useVectorFilter();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const sp = new URLSearchParams(searchParams);

  const handleLicenseFree = () => {
    if (sp.get("license") === "free") {
      sp.set("license", "all");
    } else {
      sp.set("license", "free");
    }
    sp.set("page", "1");
    router.push(`${pathname}?${sp.toString()}`,{scroll:false});
  };

  const handleLicensePremium = () => {
    if (sp.get("license") === "premium") {
      sp.set("license", "all");
    } else {
      sp.set("license", "premium");
    }
    sp.set("page", "1");
    router.push(`${pathname}?${sp.toString()}`,{scroll:false});
  };
  const handleOrientationSquare = () => {
    if (sp.get("orientation") === "square") {
      sp.set("orientation", "all");
    } else {
      sp.set("orientation", "square");
    }
    sp.set("page", "1");
    router.push(`${pathname}?${sp.toString()}`,{scroll:false});
  };
  const handleOrientationHorizontal = () => {
    if (sp.get("orientation") === "horizontal") {
      sp.set("orientation", "all");
    } else {
      sp.set("orientation", "horizontal");
    }
    sp.set("page", "1");
    router.push(`${pathname}?${sp.toString()}`,{scroll:false});
  };
  const handleOrientationVertical = () => {
    if (sp.get("orientation") === "vertcial") {
      sp.set("orientation", "all");
    } else {
      sp.set("orientation", "vertical");
    }
    sp.set("page", "1");
    router.push(`${pathname}?${sp.toString()}`,{scroll:false});
  };
  const handlFileTypeVector = () => {
    sp.set("format", "all");
    router.push(`${pathname}?${sp.toString()}`,{scroll:false});
  };
  const handlFileTypeSVG = () => {
    if (sp.get("format") === "svg") {
      sp.set("format", "all");
    } else {
      sp.set("format", "svg");
    }
    sp.set("page", "1");
    router.push(`${pathname}?${sp.toString()}`,{scroll:false});
  };
  const handlFileTypeAI = () => {
    if (sp.get("format") === "ai") {
      sp.set("format", "all");
    } else {
      sp.set("format", "ai");
    }
    sp.set("page", "1");
    router.push(`${pathname}?${sp.toString()}`,{scroll:false});
  };
  const handlFileTypeJPEG = () => {
    if (sp.get("format") === "jpeg") {
      sp.set("format", "all");
    } else {
      sp.set("format", "jpeg");
    }
    sp.set("page", "1");
    router.push(`${pathname}?${sp.toString()}`,{scroll:false});
  };

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
            <button
              onClick={handleLicenseFree}
              className={`${
                sp.get("license") === "free"
                  ? "bg-[#2E67DD] text-white border-none"
                  : "bg-white text-black"
              } border   hover:text-white hover:border-white hover:bg-[#2E67DD] border-black px-2 py-1 rounded-lg`}
            >
              Free
            </button>
            <button
              onClick={handleLicensePremium}
              className={`${
                sp.get("license") === "premium"
                  ? "bg-[#2E67DD] text-white border-none"
                  : "bg-white"
              } flex hover:text-white hover:border-white hover:bg-[#2E67DD] items-center border-black border px-2 py-1 text-lg rounded-lg`}
            >
              <FaCrown color="black" size={18} />
              &nbsp;<span className="text-black">Premium</span>
            </button>
          </div>
        </div>
        <div className=" flex flex-col w-full gap-2 justify-start px-2 py-3 ">
          <div className="flex items-center">
            <TbFileOrientation color="black" size={18}/>
            &nbsp;&nbsp;
            <span className="text-lg text-black font-semibold">Orientation</span>
          </div>
          <div className="flex flex-col gap-2">
            <button
              onClick={handleOrientationHorizontal}
              className={`${
                sp.get("orientation") === "horizontal"
                  ? "bg-[#2E67DD] text-white border-none"
                  : "bg-white text-black"
              } flex hover:text-white hover:border-white hover:bg-[#2E67DD] items-center p-1 border-black border w-fit rounded-lg`}
            >
              <h4 className="text-base text-black">Horizontal</h4>&nbsp;
              <LuRectangleHorizontal color="black" size={18} />
            </button>
            <div className="flex flex-row gap-2">
              <button
                onClick={handleOrientationVertical}
                className={`${
                  sp.get("orientation") === "vertical"
                    ? "bg-[#2E67DD] text-white border-none"
                    : "bg-white text-black"
                } flex hover:text-white hover:border-white hover:bg-[#2E67DD] items-center p-1 border-black border w-fit rounded-lg`}
              >
                <h4 className="text-base text-black">Vertical</h4>&nbsp;
                <LuRectangleVertical color="black" size={18} />
              </button>
              <button
                onClick={handleOrientationSquare}
                className={` ${
                  sp.get("orientation") === "square"
                    ? "bg-[#2E67DD] text-white border-none"
                    : "bg-white text-black"
                } flex hover:text-white hover:border-white hover:bg-[#2E67DD] items-center p-1 border-black border w-fit rounded-lg`}
              >
                <h4 className="text-base">Square</h4>&nbsp;
                <LuSquare color="black" size={18} />
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full justify-start px-2 py-3 gap-2">
          <div className="flex items-center justify-start p-1">
            <CiFileOn color="black" size={18} />
            &nbsp;&nbsp;<h4 className="text-lg text-black font-semibold">File Type</h4>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={handlFileTypeVector}
              className={`${
                sp.get("format") === "all"
                  ? "bg-[#2E67DD] text-white border-none"
                  : "bg-white text-black"
              }  hover:text-white hover:border-white hover:bg-[#2E67DD] border rounded-lg p-1 border-black`}
            >
              Vector
            </button>
            <button
              onClick={handlFileTypeJPEG}
              className={`${
                sp.get("format") === "jpeg"
                  ? "bg-[#2E67DD] text-white border-none"
                  : "bg-white text-black"
              } hover:text-white hover:border-white hover:bg-[#2E67DD] border rounded-lg p-1 border-black`}
            >
              JPEG
            </button>
            <button
              onClick={handlFileTypeSVG}
              className={`${
                sp.get("format") === "svg"
                  ? "bg-[#2E67DD] text-white border-none"
                  : "bg-white text-black"
              } hover:text-white hover:border-white hover:bg-[#2E67DD] border rounded-lg p-1 border-black`}
            >
              SVG
            </button>
            <button
              onClick={handlFileTypeAI}
              className={`${
                sp.get("format") === "ai"
                  ? "bg-[#2E67DD] text-white border-none"
                  : "bg-white text-black"
              } hover:text-white hover:border-white hover:bg-[#2E67DD] border rounded-lg p-1 border-black`}
            >
              AI
            </button>
          </div>
        </div>
        <div className="flex flex-col w-full px-2 py-3 gap-2">
          <div className="flex items-center justify-start p-1">
            <IoColorPaletteOutline color="black" size={18} />
            &nbsp;&nbsp;<h4 className="text-lg text-black font-semibold">Colors</h4>
          </div>
          <div className="grid grid-cols-6 gap-2 justify-center items-center">
            <button className="w-6 h-6 bg-red-600 flex justify-center items-center  rounded-full"></button>
            <button className="w-6 h-6 bg-green-800 items-center  rounded-full"></button>
            <button className="w-6 h-6 bg-gray-300 items-center  rounded-full"></button>
            <button className="w-6 h-6 bg-yellow-200 items-center  rounded-full"></button>
            <button className="w-6 h-6 bg-orange-600 items-center  rounded-full"></button>
            <button className="w-6 h-6 bg-yellow-600 items-center  rounded-full"></button>
            <button className="w-6 h-6 bg-blue-600 items-center  rounded-full"></button>
            <button className="w-6 h-6 bg-violet-600 items-center  rounded-full"></button>
            <button className="w-6 h-6 bg-amber-400 items-center  rounded-full"></button>
            <button className="w-6 h-6 bg-green-400  items-center  rounded-full"></button>
          </div>
        </div>
      </div>
    </>
  );
}


export default memo(VectorFilters);