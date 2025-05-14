"use client";

import { useRouter } from "next/navigation";
import React, { memo } from "react";
import { FaArrowDownLong } from "react-icons/fa6";
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
} from "@/components/ui/alert-dialog";



const VectorSVGDownloadLinkLoginAlert = () => {
  const router = useRouter();
  return (
    <>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <button
            className={`bg-[#0BAC6F] 
          cursor-pointer font-primary
        flex-nowrap text-nowrap flex flex-row items-center justify-center w-[30%] p-1 rounded-full text-lg font-normal text-white disabled:text-white/30`}
          >
            SVG&nbsp;
            <FaArrowDownLong size={13} color="#FFFFFF" />
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
            <AlertDialogCancel className="text-[#2E67DD] font-primary cursor-pointer">
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={() => router.push("/pages/login", { scroll: true })}
              className="bg-[#2E67DD] text-white cursor-pointer font-primary"
            >
              Log In
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default memo(VectorSVGDownloadLinkLoginAlert);
