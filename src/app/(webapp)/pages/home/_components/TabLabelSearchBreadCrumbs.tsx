import { memo } from "react";
import SearchLabel from "./SearchLabel";
import HomeNestedSearchInput from "./HomeNestedSearchInput";
import SearchNestedTags2 from "./SearchNestedTags2";
import SearchNestedTags1 from "./SearchNestedTags1";
import BreadCrumbsHomeNested from "./BreadCrumbsHomeNested";

const TabLabelSearchBreadCrumbs = () => {
  return (
    <div className="flex flex-col w-full max-w-[1200px] items-center justify-center">
      <div className="flex flex-col items-center justify-center w-full p-1">
        <SearchLabel />
        <HomeNestedSearchInput />
        <SearchNestedTags1 />
        <SearchNestedTags2 />
      </div>
        <BreadCrumbsHomeNested />
    </div>
  );
};

export default memo(TabLabelSearchBreadCrumbs);
