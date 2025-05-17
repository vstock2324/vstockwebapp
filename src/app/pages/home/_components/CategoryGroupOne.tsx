import React, { memo } from "react";
import CategoryVectorLink from "./CategoryVectorLink";
import CategoryAnimationLink from "./CategoryAnimationLink";

const CategoryGroupOne = () => {
  return (
    <div className="flex flex-col  items-center justify-center space-y-8 md:flex-row  md:space-y-0 md:space-x-8 xl:hidden">
      <CategoryVectorLink />
      <CategoryAnimationLink />
    </div>
  );
};

export default memo(CategoryGroupOne);
