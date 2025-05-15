import React from 'react';
import CategoryVectorLink from "./CategoryVectorLink";
import CategoryAnimationLink from "./CategoryAnimationLink";

const CategoryGroupOne=()=>{
  return (
      <div className='flex flex-col md:flex-row items-center justify-between space-y-12 md:space-y-0 md:space-x-12'>
            <CategoryVectorLink />
            <CategoryAnimationLink/>
        </div>
  )
}

export default CategoryGroupOne