"use client";
import { memo, useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import { FaChevronUp } from "react-icons/fa";
import  TemplatesList from "./TemplatesList";

const TemplatesListItem =() => {
  const [open, setOpen] = useState(false);
  function handleClose() {
    setOpen(false);
  }
  function handleOpen() {
    setOpen(true);
  }

  return (
    <li onMouseOver={handleOpen} onMouseOut={handleClose}  className="relative flex flex-row justify-between items-center space-x-2">
      <span>Templates</span>
      {open ? (
        <FaChevronUp
          // onClick={handleClose}
          className="cursor-pointer"
          size={18}
        />
      ) : (
        <FaChevronDown
          // onClick={handleOpen}
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
