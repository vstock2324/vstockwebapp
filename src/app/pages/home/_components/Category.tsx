import React, { memo } from "react";
import CategoryPunchLine from "./CategoryPunchLine";
import CategoryGroup from "./CategoryGroup";



const Category = () => {
  return (<div className="container mx-auto bg-[#FEFAFF]">
            <div className="mx-[10px] sm:mx-[64px]  lg:mx-[84px] 2xl:mx-12 2xl:max-w-[1440px] ">
           <div className="flex flex-col w-full  font-primary ">
          <CategoryPunchLine/>
        <CategoryGroup/>
      </div>
    </div>
    </div>
  );
};

export default memo(Category);
