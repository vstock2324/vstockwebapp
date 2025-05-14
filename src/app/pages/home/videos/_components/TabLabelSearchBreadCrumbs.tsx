import { memo } from "react";
import SearchLabel from "../../_components/SearchLabel";
import SearchNestedTags0 from "../../_components/SearchNestedTags0";
import SearchNestedTags1 from "../../_components/SearchNestedTags1";
import SearchNestedTags2 from "../../_components/SearchNestedTags2";
import BreadCrumbsHome from "../../_components/BreadCrumbsHome";
import VideoSearchInput from "./VideoSearchInput";



const TabLabelSearchBreadCrumbs = () => {
  return (
    <div className="flex flex-col w-full max-w-[1440px] items-center justify-center font-primary">
      <div className="flex flex-col items-center justify-center w-full p-1">
        <SearchLabel />
        <VideoSearchInput/>
        <SearchNestedTags0/>
        <SearchNestedTags1 />
        <SearchNestedTags2 />
      </div>
        <BreadCrumbsHome/>
    </div>
  );
};

export default memo(TabLabelSearchBreadCrumbs);
