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

const ProjectLinkLoginAlertBtn=()=>{
const router=useRouter();
   return (<AlertDialog>
    <AlertDialogTrigger asChild>
      <button className="bg-none border-none focus:outline-none cursor-pointer">
        My Projects
      </button>
    </AlertDialogTrigger>
    <AlertDialogContent className="bg-white">
      <AlertDialogHeader>
        <AlertDialogTitle>Login Alert</AlertDialogTitle>
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

export default memo(ProjectLinkLoginAlertBtn);