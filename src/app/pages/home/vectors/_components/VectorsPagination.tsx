"use client";
import React, { memo } from 'react';
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from  "../../../../../components/ui/pagination";
import { usePathname, useSearchParams } from 'next/navigation';
import useVectorsData from '@/context/useVectorsData';
import { nanoid } from 'nanoid';
  

const VectorsPagination=()=> {
  const searchParams=useSearchParams();
  const pathname=usePathname();
  console.log(pathname);
  const {totalPages}=useVectorsData();
  if(totalPages<=4){
   const items=Array.from({length:totalPages},(_,i)=>i+1);
  return (
    <Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="#" />
    </PaginationItem>
    {  items.map((item)=>{
         return (<PaginationItem key={nanoid().toString()}>
          <PaginationLink isActive={item===Number(searchParams.get("page"))} href="#">{item}</PaginationLink>
        </PaginationItem>)
    })}
    <PaginationItem>
      <PaginationNext href="#" />
    </PaginationItem>
  </PaginationContent>
</Pagination>)

  }
  return( <Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious  href="#" />
    </PaginationItem>
       <PaginationItem>
          <PaginationLink   href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink  href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink className='text-black border border-black' href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis className='text-black'/>
        </PaginationItem>
    <PaginationItem>
      <PaginationNext className='text-black' href="#" />
    </PaginationItem>
  </PaginationContent>
</Pagination>)
}


export default  memo(VectorsPagination);