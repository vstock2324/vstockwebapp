/* eslint-disable react-hooks/exhaustive-deps */
import { memo } from "react";
import Image from "next/image";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { RiArrowDropDownLine } from "react-icons/ri";
import AccountBtn from "./AccountBtn";
import DivSeparator from "./DivSeparator";
import PrivacyPolicyBtn from "./PrivacyPolicyBtn";
import LogoutBtn from "./LogoutBtn";
import DownloadsBtn from "./DownloadsBtn";
import ChangePlanBtn from "./ChangePlanBtn";
import HelpCenterBtn from "./HelpCenterBtn";

const LoggedInUser = ({
  userId,
  emailId,
  name,
  picture_url,
}: {
  userId:string;
  emailId:string | undefined;
  name: string;
  picture_url: string;
}) => {
  

  return (
    <div
      className="flex flex-row items-center  justify-center space-x-0.25 sm:space-x-0.5
    md:space-x-1 lg:space-x-2 font-primary "
    >
      <span className="hidden md:flex text-[14px] font-bold">{name}</span>
      <div className="flex flex-row items-center justify-center space-x-0.5 flex-nowrap relative">
          <Image
              src={picture_url || `/images/admin.png`}
              alt={"User Picture"}
              width={30}
              height={30}
              className="rounded-full cursor-pointer"
            />
        <Popover>
          <PopoverTrigger>
            <RiArrowDropDownLine className="cursor-pointer" size={30}/>
          </PopoverTrigger>
          <PopoverContent className="bg-white font-primary border-none ">
            <div
              
              className="flex flex-col items-start justify-start"
            >
             <div className="flex flex-row items-center  justify-start space-x-4 mb-5">
              <Image
              src={picture_url || `/images/admin.png`}
              alt={"User Picture"}
              width={36}
              height={36}
              className="rounded-full cursor-pointer"
            />
            <div className="flex flex-col items-center justify-between w-full space-y-0.25">
               <p className="w-full text-[13px]">{name}</p>
               <p className="w-full text-[12px]">{emailId}</p>
            </div>
             </div>
              <ChangePlanBtn/>
             <DivSeparator/>
              <AccountBtn userId={userId}/>
              <DownloadsBtn userId={userId}/>
              <PrivacyPolicyBtn/>
              <HelpCenterBtn/>
              <DivSeparator/>
              <LogoutBtn/>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export default memo(LoggedInUser);
