"use client";
import useCategory from "@/context/useAdminCategory";
import { createClient } from "@/utils/supabase/client";
import { Pagination } from "flowbite-react";
import { memo, useEffect, useState } from "react";

const CategoryPagination = () => {
  const { setCategory, numCategoryPages, newlimit } = useCategory();
  const [currentPage, setCurrentPage] = useState(1);
  const supabase = createClient();
  async function getCategories() {
    const { data, error } = await supabase
      .from("category")
      .select("*")
      .range((currentPage - 1) * newlimit, currentPage * newlimit - 1);
    if (error) throw new Error(error.message);
    setCategory(data);
  }
  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    getCategories();
  }, [currentPage]);

  return (
    <div className="flex overflow-x-auto sm:justify-center">
      <Pagination
        currentPage={currentPage}
        totalPages={Number(numCategoryPages)}
        onPageChange={onPageChange}
        showIcons
      />
    </div>
  );
};

export default memo(CategoryPagination);
