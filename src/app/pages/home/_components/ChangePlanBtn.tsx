"use client";
import Link from "next/link";
import React, { memo } from "react";

const ChangePlanBtn = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center mb-3">
      <Link
        className="bg-[#2E67DD] text-[12px] font-semibold text-nowrap w-full text-center rounded-md transition-all duration-300 hover:bg-[#2E6AFF] text-white px-[10px] py-[5px]"
        href={`/pages/premium`}
      >
        Change Plan
      </Link>
    </div>
  );
};

export default memo(ChangePlanBtn);
