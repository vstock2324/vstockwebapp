"use client";
import { TableCell } from "flowbite-react";
import { MdEdit } from "react-icons/md";
import Link from "next/link";
import React, { memo } from "react";

const VideoEditButton = ({videoId}:{videoId:string}) => {
  return (
    <TableCell>
      <Link
        href={`/admin/dashboard/uploads/videos/edit/${videoId}`}
      >
        <MdEdit fill="blue" size={30} />
      </Link>
    </TableCell>
  );
};

export default memo(VideoEditButton);
