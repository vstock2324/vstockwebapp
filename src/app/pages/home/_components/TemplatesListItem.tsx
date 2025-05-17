"use client";
import { memo, useEffect, useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import { FaChevronUp } from "react-icons/fa";
import TemplatesListWrapper from "./TemplatesListWrapper";

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
    <li ref={liRef} className="relative flex flex-row justify-between items-center space-x-1.5">
      <span>Templates</span>
      {open ? (
        <FaChevronUp
          className="mt-0.5 cursor-pointer"
          size={14}
        />
      ) : (
        <FaChevronDown
          className="mt-0.5 cursor-pointer"
          size={14}
        />
      )}
      {open ? (
      <TemplatesListWrapper/>
      ) : (
        <></>
      )}
    </li>
  );
};

export default memo(TemplatesListItem);
