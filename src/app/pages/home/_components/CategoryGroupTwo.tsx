import React from 'react';
import CategoryEditorLink from "./CategoryEditorLink";
import CategoryIllustrationsLink from "./CategoryIllustrationsLink";

const CategoryGroupTwo=()=> {
  return (
       <div className='flex flex-col md:flex-row items-center justify-between space-y-12 md:space-y-0 md:space-x-12'>
          <CategoryIllustrationsLink/>
          <CategoryEditorLink/>
     </div>
  )
}

export default CategoryGroupTwo