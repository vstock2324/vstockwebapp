"use client";
import { memo } from "react";
import TemplatesMenu from "./TemplatesMenu";
import useTemplateMenu from "@/context/useTemplateMenu";
import CategoryList from "./CategoryList";
import TemplateDivSeperator from "./TemplateDivSeperator";


const TemplatesList = () => {
  const {openTemplateMenu}=useTemplateMenu();
  return (
    <div className="absolute z-20 w-[700px] h-[300px] bg-white top-[100%] -left-[200%] border  border-gray-300 rounded-[10px]">
      <div className="grid grid-cols-[150px_1px_1fr] p-5">
       <TemplatesMenu/>
       <TemplateDivSeperator/>
        {openTemplateMenu && <CategoryList/> }
      </div>
    </div>
  );
};

export default memo(TemplatesList);
