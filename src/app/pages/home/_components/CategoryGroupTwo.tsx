import React, { memo } from 'react';
import CategoryEditorLink from "./CategoryEditorLink";
import CategoryIllustrationsLink from "./CategoryIllustrationsLink";

const CategoryGroupTwo=()=> {
  return (
       <div className="flex flex-col  items-center justify-center space-y-8 md:flex-row  md:space-y-0 md:space-x-8  xl:hidden" >
          <CategoryIllustrationsLink/>
          <CategoryEditorLink/>
       </div>
  )
}

export default  memo(CategoryGroupTwo);