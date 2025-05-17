"use client";
import useTemplateMenu from "../../../../context/useTemplateMenu";
import React, { memo, useEffect, useRef } from 'react'

const VectorsMenu=()=>{

      const { setOpenTemplateMenu } = useTemplateMenu();
      const  divRef= useRef<HTMLDivElement>(null)
      // function handleClose() {
        // setOpenTemplateMenu(false);
      // }
      function handleOpen() {
        setOpenTemplateMenu(true);
      }
    
      useEffect(()=>{
         const currentRef=divRef.current;
         if(!currentRef) return;
         currentRef.addEventListener("mouseover",handleOpen,{capture:false});
        //  currentRef.addEventListener("mouseout",handleClose,{capture:false});
         return ()=>{
          currentRef.removeEventListener("mouseover",handleOpen,{capture:false});
          // currentRef.removeEventListener("mouseout",handleClose,{capture:false});
         }
      },[])
  return (
    <div ref={divRef} className="text-[13px] w-full relative inline-block after:content-['➔']  after:absolute after:right-0  after:text-black text-black after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-200 pt-[5px] px-[10px] mb-[10px] ">
  Vectors
</div>
  )
}

export default memo(VectorsMenu);