"use client"
import { memo } from "react";
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
import { useRouter } from "next/navigation";

const PriceCardLoginAlertBtn=({title}:{title:string})=>{
const router=useRouter();
   return (<AlertDialog>
    <AlertDialogTrigger asChild>
      <button className="text-black cursor-pointer capitalize  stroke-[#E7E9F1] text-center bg-white rounded-[48px] px-[30px] py-[18px] border border-[#E7E9F1] hover:border-none font-roboto500 text-[19px] hover:text-[#FEFEFE] hover:bg-[#3580F0]">
        {title}
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
  </AlertDialog>)
}

export default memo(PriceCardLoginAlertBtn);