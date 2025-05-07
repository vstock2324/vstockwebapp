"use client";
import React, { memo } from 'react';
import { useRouter } from 'next/navigation';
import { PiShare } from 'react-icons/pi';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

const VectorShareButton=()=> {
  const router=useRouter();
  return (
   <AlertDialog>
   <AlertDialogTrigger asChild>
   <button className="cursor-pointer p-2 flex-grow space-x-2 rounded-md  flex flex-row items-center justify-center bg-[#F3F3F3] flex-nowrap">
    <h4 className="xl:text-lg lg:text-base text-black font-medium text-nowrap">
      Share Vector
    </h4>
    <PiShare fill={"black"} size={20} />
  </button>
   </AlertDialogTrigger>
   <AlertDialogContent className="bg-white">
 <AlertDialogHeader>
   <AlertDialogTitle>Login</AlertDialogTitle>
   <AlertDialogDescription>
     You are not logged in ,Login in first
   </AlertDialogDescription>
 </AlertDialogHeader>
 <AlertDialogFooter>
   <AlertDialogCancel className="text-[#2E67DD] cursor-pointer">
     Cancel
   </AlertDialogCancel>
   <AlertDialogAction
     onClick={() =>
       router.push("/pages/login", { scroll: true })
     }
     className="bg-[#2E67DD] text-white cursor-pointer"
   >
     Log In
   </AlertDialogAction>
 </AlertDialogFooter>
</AlertDialogContent>
</AlertDialog>
  )
}

export default memo(VectorShareButton);