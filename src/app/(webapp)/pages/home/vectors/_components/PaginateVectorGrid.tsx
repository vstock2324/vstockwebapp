"use client";

import useVectorModal from "@/context/useVectorModal";
import useVectorsData from "@/context/useVectorsData";
import { Pagination } from "flowbite-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { memo } from "react";


const PaginateVectorGrid = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const sp = new URLSearchParams(searchParams);
  const currentPage=Number(searchParams.get("page"));
  const {totalPages}=useVectorsData();
  const {setSelectedVector}=useVectorModal();

  async function handlePageChange(page: number) {
    sp.set("page", page.toString());
    setSelectedVector({});
    router.push(`${pathname}?${sp.toString()}`, { scroll: false });
  }

  return (
    <div className="w-full flex flex-row items-center justify-center my-10">
      <Pagination
        className="text-black text-[18px] cursor-pointer"
        layout="pagination"
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        previousLabel="Previous"
        nextLabel="Next"
        showIcons
      />
    </div>
  );
};

export default memo(PaginateVectorGrid);
