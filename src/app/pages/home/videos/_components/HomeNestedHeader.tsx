import { memo } from "react";

import TabLabelSearchBreadCrumbs from "./TabLabelSearchBreadCrumbs";
import NavBar0 from "../../_components/NavBar0";
import NavBar1 from "../../_components/NavBar1";
import NavBar2 from "../../_components/NavBar2";



const HomeNestedHeader = () => {
  return (
    <div className={`bg-[#2E67DD]  font-primary`}>
      <header className="lg:mx-[120px] lg:pt-[60px] lg:pb-[10px] mx-[20px] sm:mx-[40px] pt-[30px] pb-[10px] flex flex-col items-center justify-between">
        <NavBar0/>
        <NavBar1 />
        <NavBar2 />
        <TabLabelSearchBreadCrumbs />
      </header>
    </div>
  );
};

export default memo(HomeNestedHeader);