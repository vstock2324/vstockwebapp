import React, { memo } from "react";
import HomeSearchInput from "./HomeSearchInput";
import SearchTags2 from "./SearchTags2";
import SearchTags1 from "./SearchTags1";
import SearchTags0 from "./SearchTags0";

const HomeSearchBar = () => {
  return (
    <>
      <div className=" flex flex-col items-center justify-center p-1  font-primary">
        <HomeSearchInput />
        <SearchTags0/>
        <SearchTags1/>
        <SearchTags2/>
      </div>
    </>
  );
};

export default memo(HomeSearchBar);
