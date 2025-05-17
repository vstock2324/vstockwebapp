import React, { memo } from "react";
import NewlyAddedGroupOne from "./NewlyAddedGroupOne";
import NewlyAddedGroupTwo from "./NewlyAddedGroupTwo";
import NewlyAddedImgOne from "./NewlyAddedImgOne";
import NewlyAddedImgTwo from "./NewlyAddedImgTwo";
import NewlyAddedImgThree from "./NewlyAddedImgThree";
import NewlyAddedImgFour from "./NewlyAddedImgFour";

const NewlyAddedGroup = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-between space-y-8 xl:hidden w-full">
        <NewlyAddedGroupOne />
        <NewlyAddedGroupTwo />
      </div>
      <div className="hidden xl:flex xl:flex-row items-center justify-between  w-full 2xl:max-w-[1440px]">
        <NewlyAddedImgOne />
        <NewlyAddedImgTwo />
        <NewlyAddedImgThree />
        <NewlyAddedImgFour />
      </div>
    </>
  );
};

export default memo(NewlyAddedGroup);
