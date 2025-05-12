/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { memo } from "react";
import Image from "next/image";
import { signout } from "@/actions/home";
import { useRouter } from "next/navigation";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Link from "next/link";

const LoggedInUser = ({
  userId,
  name,
  picture_url,
}: {
  userId:string;
  name: string;
  picture_url: string;
}) => {
  const router = useRouter();

  return (
    <div
      className="flex flex-row items-center  justify-center space-x-0.25 sm:space-x-0.5
    md:space-x-1 lg:space-x-2"
    >
      <span className="hidden md:flex text-[14px] font-bold">{name}</span>
      <div className="">
        <Popover>
          <PopoverTrigger>
            <Image
              src={picture_url || `/images/admin.png`}
              alt={"User Picture"}
              width={35}
              height={35}
              className="rounded-full cursor-pointer"
            />
          </PopoverTrigger>
          <PopoverContent className="bg-white border-none  lg:w-56 xl:w-60 2xl:w-64">
            <form
              action={signout}
              className="flex flex-col items-start justify-start"
            >
              <div className="flex flex-row items-start justify-start">
                <span className="text-[14px] text-[#2E67DD] flex flex-row items-start justify-start space-x-1">
                  <h1>welcome,</h1>
                  <Link
                    className="hover:underline cursor-pointer text-[14px]"
                    href={`/pages/profile/${userId}`}
                    type="button"
                  >
                    {name}
                  </Link>
                </span>
              </div>

              <button
                className="text-[#2E67DD] hover:underline cursor-pointer text-[14px]"
                onClick={() => router.push("/")}
                type="button"
              >
                subscription
              </button>
              <button
                className="text-[#2E67DD] hover:underline cursor-pointer text-[14px]"
                onClick={() => router.push("/")}
                type="button"
              >
                privacy policy
              </button>
              <button
                className="text-[#2E67DD] hover:underline cursor-pointer text-[14px]"
                type="submit"
              >
                sign out
              </button>
            </form>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export default memo(LoggedInUser);
