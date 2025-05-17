"use client";
import useTemplateMenu from "../../../../context/useTemplateMenu";
import React, { memo, useEffect, useRef } from "react";

const IllustrationsMenu = () => {
  const { setOpenTemplateMenu } = useTemplateMenu();
  const divRef = useRef<HTMLDivElement>(null);
  function handleClose() {
    setOpenTemplateMenu(false);
    
  }

  useEffect(() => {
    const currentRef = divRef.current;
    if (!currentRef) return;
    currentRef.addEventListener("mouseover", handleClose, { capture: false });
    return () => {
      currentRef.removeEventListener("mouseover", handleClose, {
        capture: false,
      });
    };
  }, []);
  return (
    <div ref={divRef} className="text-[13px] relative inline-block after:content-['➔']  after:absolute after:right-0 w-full after:text-black text-black after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-200 pt-[5px] px-[10px] mb-[10px] ">
      Illustrations
    </div>
  );
};

export default memo(IllustrationsMenu);
