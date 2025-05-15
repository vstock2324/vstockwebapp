"use client";
import Link from 'next/link';
import React, { memo } from 'react';
import { MdOutlinePrivacyTip } from "react-icons/md";

const  PrivacyPolicyBtn=()=> {
  return (
      <Link
                className="w-full py-3"
                href={"/pages/home"}
                type="button"
              >
                <div className="flex flex-row items-center justify-start">
                    <MdOutlinePrivacyTip size={14}/>&nbsp;&nbsp;&nbsp;
                    <span className='text-[14px]'>Privacy Policy</span>
                </div>
    </Link>
  )
}

export default memo(PrivacyPolicyBtn);