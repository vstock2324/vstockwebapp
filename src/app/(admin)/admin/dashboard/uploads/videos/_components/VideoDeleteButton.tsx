"use client";
import { TableCell } from "flowbite-react";
import React, { memo } from "react";
import { MdDelete } from "react-icons/md";
import { handleVideoDelete } from "@/actions/admin/dashboard/videos";

const VideoDeleteButton = ({ videoPath }: { videoPath: string }) => {
  const handleVideoDeleteWithId = handleVideoDelete.bind(null, videoPath);
  return (
    <TableCell>
      <form action={handleVideoDeleteWithId}>
        <button
          type="submit"
          className="border-none p-0 bg-transparent outline-none"
        >
          <MdDelete fill="red" size={30} className="cursor-pointer" />
        </button>
      </form>
    </TableCell>
  );
};

export default memo(VideoDeleteButton);
