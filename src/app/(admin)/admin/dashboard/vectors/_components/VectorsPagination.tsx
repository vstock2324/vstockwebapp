"use client";
import useAdminVectors from "@/context/useAdminVectors";
import { createClient } from "@/utils/supabase/client";
import { Pagination } from "flowbite-react";
import { memo, useEffect, useState } from "react";

const VectorsPagination = () => {
  const { setVectors, numVectorsPages, newlimit } = useAdminVectors();
  const [currentPage, setCurrentPage] = useState(1);
  const supabase = createClient();
  async function getVectors() {
    const { data, error } = await supabase
    .from('vector_files_view')
      .select("*")
      .range((currentPage - 1) * newlimit, currentPage * newlimit - 1);
    if (error) throw new Error(error.message);
    setVectors(data);
  }
  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    getVectors();
  }, [currentPage]);

  return (
    <div className="flex overflow-x-auto sm:justify-center">
      <Pagination
        currentPage={currentPage}
        totalPages={Number(numVectorsPages)}
        onPageChange={onPageChange}
        showIcons
      />
    </div>
  );
};

export default memo(VectorsPagination);
