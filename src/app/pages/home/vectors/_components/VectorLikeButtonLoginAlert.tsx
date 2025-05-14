"use client";

import { useRouter } from "next/navigation";
import React, { memo } from "react";
import { FaHeart } from "react-icons/fa";

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

const VectorLikeButtonLoginAlert = () => {
const router=useRouter();
return (
<AlertDialog>
<AlertDialogTrigger asChild>
<button
      type="button"
      className=" cursor-pointer p-2 flex-grow space-x-2 rounded-md  inline-flex items-center justify-center bg-[#F3F3F3]"
    >
      <h4 className="xl:text-lg lg:text-base font-primary text-black font-medium text-nowrap">
        Add to Likes
      </h4>
      <FaHeart fill="black" size={20} />
    </button>
</AlertDialogTrigger>
<AlertDialogContent className="bg-white">
<AlertDialogHeader>
<AlertDialogTitle className="font-primary">Login</AlertDialogTitle>
<AlertDialogDescription className="font-primary">
  You are not logged in ,Login in first
</AlertDialogDescription>
</AlertDialogHeader>
<AlertDialogFooter>
<AlertDialogCancel className="text-[#2E67DD] cursor-pointer font-primary">
  Cancel
</AlertDialogCancel>
<AlertDialogAction
  onClick={() =>
    router.push("/pages/login", { scroll: true })
  }
  className="bg-[#2E67DD] text-white cursor-pointer font-primary"
>
  Log In
</AlertDialogAction>
</AlertDialogFooter>
</AlertDialogContent>
</AlertDialog>
  );
};

export default memo(VectorLikeButtonLoginAlert);
