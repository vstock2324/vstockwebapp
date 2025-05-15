"use client";
import Link from 'next/link';
import React, { memo } from 'react'
import { MdHelpOutline } from "react-icons/md";

const HelpCenterBtn=()=> {
    return (
    <Link
      className="w-full py-3 "
      href={`/pages/home`}
    >
      <div className="flex flex-row items-center w-full justify-start">
        <MdHelpOutline size={14} />
        &nbsp;&nbsp;&nbsp;
        <span className="text-[14px]">Help Center</span>
      </div>
    </Link>
  );
}

export default memo(HelpCenterBtn);