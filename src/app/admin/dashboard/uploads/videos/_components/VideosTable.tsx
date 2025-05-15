/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";

import { memo } from "react";
import VideoEditButton from "./VideoEditButton";
import VideoDeleteButton from "./VideoDeleteButton";
import VideoTableCell from "./VideoTableCell";
import useAdminVideos from "@/context/useAdminVideos";
import VideosPagination from "./VideosPagination";

const VideoTable = () => {
  const { videos } = useAdminVideos();
  return (
    <div className="overflow-x-auto">
      <Table hoverable>
        <TableHead>
          <TableRow>
            <TableHeadCell className="w-[300px] text-center">
              DOWNLOAD VIDEO
            </TableHeadCell>
            <TableHeadCell className="w-[100px] text-center">
              VIDEO ID
            </TableHeadCell>
            <TableHeadCell className="w-[100px] text-center">
              NAME
            </TableHeadCell>
            <TableHeadCell className="w-[400px] text-center">
              Description
            </TableHeadCell>
            <TableHeadCell className="w-[100px]">
              <span className="sr-only">Edit</span>
            </TableHeadCell>
            <TableHeadCell className="w-[100px]">
              <span className="sr-only">Delete</span>
            </TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody className="divide-y">
          {videos ? (
            videos.map((item: any) => {
              return (
                <TableRow
                  key={item.video_id}
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                >
                  <VideoTableCell
                    props={{ videoFullPath: `${item.fullpath}` }}
                  />
                  <TableCell>{item.video_id}</TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.description}</TableCell>
                  <VideoEditButton videoId={item.video_id} />
                  <VideoDeleteButton videoPath={item.path} />
                </TableRow>
              );
            })
          ) : (
            <></>
          )}
        </TableBody>
      </Table>
      <VideosPagination />
    </div>
  );
};
export default memo(VideoTable);
