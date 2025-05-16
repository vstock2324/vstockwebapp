"use client";
import Link from "next/link";
import { memo } from "react";
import { FaRegUser } from "react-icons/fa6";

const AccountBtn = () => {
  return (
    <Link
      className="w-full py-3 "
      href={`/pages/user/account`}
    >
      <div className="flex flex-row items-center w-full justify-start">
        <FaRegUser size={14} />
        &nbsp;&nbsp;&nbsp;
        <span className="text-[14px]">Account</span>
      </div>
    </Link>
  );
};

export default memo(AccountBtn);
