import { memo } from "react";
import TabButton from "./TabButton";

const Tabs = () => {
  return (
    <>
      <div className="flex flex-col mx-20 py-6 font-primary  gap-y-4  lg:gap-y-0 lg:gap-x-10 lg:flex-row  justify-center items-center">
        <TabButton newtab={"Vectors"} />
        <TabButton newtab={"Videos"} />
        {/* <TabButton newtab={"Animations"} />
        <TabButton newtab={"Posters"} />
        <TabButton newtab={"Brochures"} /> */}
      </div>
    </>
  );
};

export default memo(Tabs);
