"use client";
import useAdminVideos from "@/context/useAdminVideos";
import { createClient } from "@/utils/supabase/client";
import { Pagination } from "flowbite-react";
import { memo, useEffect, useState } from "react";

const VideosPagination = () => {
  const { setVideos, numVideosPages, newlimit } = useAdminVideos();
  const [currentPage, setCurrentPage] = useState(1);
  const supabase = createClient();
  async function getVideos() {
    const { data, error } = await supabase
      .from("video_details")
      .select("*")
      .range((currentPage - 1) * newlimit, currentPage * newlimit - 1);
    if (error) throw new Error(error.message);
    setVideos(data);
  }
  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    getVideos();
  }, [currentPage]);

  return (
    <div className="flex overflow-x-auto sm:justify-center">
      <Pagination
        currentPage={currentPage}
        totalPages={Number(numVideosPages)}
        onPageChange={onPageChange}
        showIcons
      />
    </div>
  );
};

export default memo(VideosPagination);
