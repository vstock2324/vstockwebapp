"use client";

import { Pagination } from "flowbite-react";
import { memo, useState } from "react";

const ImagesPagination = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page: number) => setCurrentPage(page);

  return (
    <div className="flex overflow-x-auto sm:justify-center">
      <Pagination
        currentPage={currentPage}
        totalPages={100}
        onPageChange={onPageChange}
        showIcons
      />
    </div>
  );
};

export default memo(ImagesPagination);
