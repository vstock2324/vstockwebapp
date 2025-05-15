"use client";
import React, { memo } from "react";
import VideosTable from "./VideosTable";
import { AdminVideosContextProvider } from "@/context/useAdminVideos";
const VideosContextWrapper = () => {
  return (
    <AdminVideosContextProvider>
      {" "}
      <VideosTable />
    </AdminVideosContextProvider>
  );
};

export default memo(VideosContextWrapper);
