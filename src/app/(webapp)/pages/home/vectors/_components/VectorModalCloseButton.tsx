import  useVectorModal from "@/context/useVectorModal";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { memo } from "react";
import { IoClose } from "react-icons/io5";

const VectorModalCloseButton=()=>{
  const {setOpenVectorModal}=useVectorModal();
  const router=useRouter();
  const pathname=usePathname();
  const searchParams=useSearchParams();
  const sp=new URLSearchParams(searchParams);
  const handleModalClose=()=>{
    setOpenVectorModal(false);
    sp.delete("uuid");
    router.push(`${pathname}?${sp.toString()}`,{scroll:false});
  }
  return (
    <>
    <IoClose size={30} className="absolute bg-none p-2 rounded-full hover:bg-white/15 top-0 -right-12 cursor-pointer h-auto w-auto" onClick={handleModalClose}  color="white" />
    </>
  );
}

export default memo(VectorModalCloseButton);