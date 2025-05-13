import React, { memo } from "react";
import CategoryVectorLink from "./CategoryVectorLink";
import CategoryAnimationLink from "./CategoryAnimationLink";
import CategoryIllustrationsLink from "./CategoryIllustrationsLink";
import CategoryPunchLine from "./CategoryPunchLine";


const Category = () => {
  return (
    <div className="my-1 mx-[10px] sm:mx-[64px] xl:max-w-[1200px] 2xl:max-w-[1440px]">
      <div className="flex flex-col  w-full sm:m-1 ">
      <CategoryPunchLine/>
        <div className="flex flex-col items-center justify-around p-1 space-y-4 py-6 px-6 sm:px-32 lg:flex-row lg:space-y-0 lg:space-x-2 lg:px-0 lg:justify-between lg:items-center lg:pt-[60px]">
          <CategoryVectorLink />
          <CategoryAnimationLink/>
          <CategoryIllustrationsLink/>
        </div>
      </div>
    </div>
  );
};

export default memo(Category);
