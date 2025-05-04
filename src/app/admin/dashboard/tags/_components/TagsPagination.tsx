"use client";
import useTags from "@/context/useAdminTags";
import { createClient } from "@/utils/supabase/client";
import { Pagination } from "flowbite-react";
import { memo, useEffect, useState } from "react";

const TagsPagination = () => {
  const { setTags, numTagsPages, newlimit } = useTags();
  const [currentPage, setCurrentPage] = useState(1);
  const supabase = createClient();
  async function getTags() {
    const { data, error } = await supabase
      .from("tags")
      .select("*")
      .range((currentPage - 1) * newlimit, currentPage * newlimit - 1);
    if (error) throw new Error(error.message);
    setTags(data);
  }
  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    getTags();
  }, [currentPage]);

  return (
    <div className="flex overflow-x-auto sm:justify-center">
      <Pagination
        currentPage={currentPage}
        totalPages={Number(numTagsPages)}
        onPageChange={onPageChange}
        showIcons
      />
    </div>
  );
};

export default memo(TagsPagination);
