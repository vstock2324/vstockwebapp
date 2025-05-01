
import { Breadcrumb  } from "flowbite-react";

import { memo } from "react";

import BreadCrumbsPath from "./BreadCrumbsPath";

const BeardCrumbsHomeNested = () => {
  return (
    <>
    <div className="hidden lg:flex w-full">
    <Breadcrumb color="white" className="text-white" aria-label="Default breadcrumb example">
         <BreadCrumbsPath/>
    </Breadcrumb>
      </div>
    </>
  );
};

export default memo(BeardCrumbsHomeNested);


