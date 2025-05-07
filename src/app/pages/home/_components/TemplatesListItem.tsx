"use client";
import { memo, useEffect, useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import { FaChevronUp } from "react-icons/fa";
import  TemplatesList from "./TemplatesList";

const TemplatesListItem =() => {
  const [open, setOpen] = useState<boolean>(false);
  const  liRef= useRef<HTMLLIElement>(null)
  function handleClose() {
    setOpen(false);
  }
  function handleOpen() {
    setOpen(true);
  }

  useEffect(()=>{
     const currentRef=liRef.current;
     if(!currentRef) return;
     currentRef.addEventListener("mouseover",handleOpen,{capture:false});
     currentRef.addEventListener("mouseout",handleClose,{capture:false});
     return ()=>{
      currentRef.removeEventListener("mouseover",handleOpen,{capture:false});
      currentRef.removeEventListener("mouseout",handleClose,{capture:false});
     }
  },[])

  return (
    <li ref={liRef} className="relative flex flex-row justify-between items-center space-x-2">
      <span>Templates</span>
      {open ? (
        <FaChevronUp
          className="cursor-pointer"
          size={18}
        />
      ) : (
        <FaChevronDown
          className="cursor-pointer"
          size={18}
        />
      )}
      {open ? (
      <TemplatesList/>
      ) : (
        <></>
      )}
    </li>
  );
};

export default memo(TemplatesListItem);
