import Link from 'next/link';
import React, { memo } from 'react';
import { BsDownload } from "react-icons/bs";

const DownloadsBtn=()=> {
  return (
        <Link
      className="w-full py-3"
      href={`/pages/user/downloads?page=1`}
    >
      <div className="flex flex-row items-center w-full justify-start">
        <BsDownload size={14} />
        &nbsp;&nbsp;&nbsp;
        <span className="text-[14px]">Downloads</span>
      </div>
    </Link>
  )
}

export default memo(DownloadsBtn);