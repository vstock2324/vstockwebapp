"use client";
import React, { memo } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../../../../../components/ui/pagination";
import { usePathname, useSearchParams } from "next/navigation";
import useVectorsData from "@/context/useVectorsData";

const VectorsPagination = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const currentPage = Number(searchParams.get("page") ?? 1);
  const { totalPages } = useVectorsData();
  
  return (
    <>
      <div className="py-10 font-primary">
        <Pagination className="cursor-pointer">
          {totalPages > 4 ? (
            <>
              <PaginationContent className="cursor-pointer">
                <PaginationItem>
                    <PaginationPrevious
                    className="cursor-pointer"
                    href={
                     `${pathname}?${new URLSearchParams({
                            ...Object.fromEntries(searchParams),
                            page: currentPage - 1 < 1 ? "1":String(Number(currentPage) - 1),
                          }).toString()}`}
                    scroll={false}
                  />
                </PaginationItem>
                {
                  <>
                    <PaginationItem>
                      <PaginationLink
                        href={`${pathname}?${new URLSearchParams({
                          ...Object.fromEntries(searchParams),
                          page: "1",
                        }).toString()}`}
                        scroll={false}
                        isActive={currentPage === 1}
                      >
                        1
                      </PaginationLink>
                    </PaginationItem>
                    {currentPage === 1 ? (
                      <PaginationItem>
                        <PaginationLink
                          href={`${pathname}?${new URLSearchParams({
                            ...Object.fromEntries(searchParams),
                            page: "2",
                          }).toString()}`}
                        >
                          2
                        </PaginationLink>
                      </PaginationItem>
                    ) : (
                      <></>
                    )}
                  </>
                }
                {currentPage >= 4 ? (
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                ) : (
                  <></>
                )}
                {currentPage >= 2 && currentPage <= totalPages - 1 ? (
                  <>
                    {currentPage - 1 >= 2 ? (
                      <PaginationItem>
                        <PaginationLink
                          href={`${pathname}?${new URLSearchParams({
                            ...Object.fromEntries(searchParams),
                            page: String(currentPage - 1),
                          }).toString()}`}
                          scroll={false}
                        >
                          {currentPage - 1}
                        </PaginationLink>
                      </PaginationItem>
                    ) : (
                      <></>
                    )}

                    <PaginationItem>
                      <PaginationLink
                        href={`${pathname}?${new URLSearchParams({
                          ...Object.fromEntries(searchParams),
                          page: String(currentPage),
                        }).toString()}`}
                        scroll={false}
                        isActive
                      >
                        {currentPage}
                      </PaginationLink>
                    </PaginationItem>

                    {currentPage + 1 <= totalPages - 1 ? (
                      <PaginationItem>
                        <PaginationLink
                          href={`${pathname}?${new URLSearchParams({
                            ...Object.fromEntries(searchParams),
                            page: String(currentPage + 1),
                          }).toString()}`}
                          scroll={false}
                        >
                          {currentPage + 1}
                        </PaginationLink>
                      </PaginationItem>
                    ) : (
                      <></>
                    )}
                  </>
                ) : (
                  <></>
                )}

                {currentPage <= totalPages - 3 ? (
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                ) : (
                  <></>
                )}

                {
                  <>
                    {currentPage === totalPages ? (
                      <PaginationItem>
                        <PaginationLink
                          href={`${pathname}?${new URLSearchParams({
                            ...Object.fromEntries(searchParams),
                            page: String(currentPage - 1),
                          }).toString()}`}
                          scroll={false}
                        >
                          {currentPage - 1}
                        </PaginationLink>
                      </PaginationItem>
                    ) : (
                      <></>
                    )}
                    <PaginationItem>
                      <PaginationLink
                        href={`${pathname}?${new URLSearchParams({
                          ...Object.fromEntries(searchParams),
                          page: String(totalPages),
                        }).toString()}`}
                        scroll={false}
                        isActive={currentPage === totalPages}
                      >
                        {totalPages}
                      </PaginationLink>
                    </PaginationItem>
                  </>
                }

                <PaginationItem>
                    <PaginationNext 
                           href={`${pathname}?${new URLSearchParams({
                            ...Object.fromEntries(searchParams),
                            page: currentPage + 1> totalPages ?  String(Number(totalPages)):String(Number(currentPage)+1),
                          }).toString()}`}
                          scroll={false}
                   />
                </PaginationItem>
              </PaginationContent>
            </>
          ) : (
            <></>
          )}
          {totalPages >= 1 && totalPages <= 4 ? (
            <>
              <PaginationContent>
                <PaginationItem>
                <PaginationPrevious
                    className="cursor-pointer"
                    href={
                     `${pathname}?${new URLSearchParams({
                            ...Object.fromEntries(searchParams),
                            page: currentPage - 1 < 1 ? "1":String(Number(currentPage) - 1),
                          }).toString()}`}
                    scroll={false}
                  />
                </PaginationItem>
                {totalPages === 1 ? (
                  <>
                    <PaginationItem>
                      <PaginationLink
                        href={`${pathname}?${new URLSearchParams({
                          ...Object.fromEntries(searchParams),
                          page: "1",
                        }).toString()}`}
                        scroll={false}
                        isActive={currentPage === 1}
                      >
                        1
                      </PaginationLink>
                    </PaginationItem>
                  </>
                ) : (
                  <></>
                )}
                {totalPages === 2 ? (
                  <>
                    <PaginationItem>
                      <PaginationLink
                        href={`${pathname}?${new URLSearchParams({
                          ...Object.fromEntries(searchParams),
                          page: "1",
                        }).toString()}`}
                        scroll={false}
                        isActive={currentPage === 1}
                      >
                        1
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href={`${pathname}?${new URLSearchParams({
                          ...Object.fromEntries(searchParams),
                          page: "2",
                        }).toString()}`}
                        scroll={false}
                        isActive={currentPage === 2}
                      >
                        2
                      </PaginationLink>
                    </PaginationItem>
                  </>
                ) : (
                  <></>
                )}
                {totalPages === 3 ? (
                  <>
                    <PaginationItem>
                      <PaginationLink
                        href={`${pathname}?${new URLSearchParams({
                          ...Object.fromEntries(searchParams),
                          page: "1",
                        }).toString()}`}
                        scroll={false}
                        isActive={currentPage === 1}
                      >
                        1
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href={`${pathname}?${new URLSearchParams({
                          ...Object.fromEntries(searchParams),
                          page: "2",
                        }).toString()}`}
                        scroll={false}
                        isActive={currentPage === 2}
                      >
                        2
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href={`${pathname}?${new URLSearchParams({
                          ...Object.fromEntries(searchParams),
                          page: "3",
                        }).toString()}`}
                        scroll={false}
                        isActive={currentPage === 3}
                      >
                        3
                      </PaginationLink>
                    </PaginationItem>
                  </>
                ) : (
                  <></>
                )}
                {totalPages === 4 ? (
                  <>
                    <PaginationItem>
                      <PaginationLink
                        href={`${pathname}?${new URLSearchParams({
                          ...Object.fromEntries(searchParams),
                          page: "1",
                        }).toString()}`}
                        scroll={false}
                        isActive={currentPage === 1}
                      >
                        1
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href={`${pathname}?${new URLSearchParams({
                          ...Object.fromEntries(searchParams),
                          page: "2",
                        }).toString()}`}
                        scroll={false}
                        isActive={currentPage === 2}
                      >
                        2
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href={`${pathname}?${new URLSearchParams({
                          ...Object.fromEntries(searchParams),
                          page: "3",
                        }).toString()}`}
                        scroll={false}
                        isActive={currentPage === 3}
                      >
                        3
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href={`${pathname}?${new URLSearchParams({
                          ...Object.fromEntries(searchParams),
                          page: "4",
                        }).toString()}`}
                        scroll={false}
                        isActive={currentPage === 4}
                      >
                        4
                      </PaginationLink>
                    </PaginationItem>
                  </>
                ) : (
                  <></>
                )}

                <PaginationItem>
                <PaginationNext 
                           href={`${pathname}?${new URLSearchParams({
                            ...Object.fromEntries(searchParams),
                            page: currentPage + 1 > totalPages ?  String(Number(totalPages)):String(Number(currentPage)+1),
                          }).toString()}`}
                          scroll={false}
                   />
                </PaginationItem>
              </PaginationContent>
            </>
          ) : (
            <></>
          )}
        </Pagination>
      </div>
    </>
  );
};
export default memo(VectorsPagination);
