/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { memo, useState } from "react";
import Image from "next/image";
import { signout } from "@/actions/home";
import { useRouter } from "next/navigation";
import { MdClose } from "react-icons/md";

const LoggedInUser = ({
  name,
  picture_url,
}: {
  name: string;
  picture_url: string;
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const router = useRouter();

  return (
    <div className="flex flex-row items-center  justify-center space-x-2">
      <span className="text-[14px] font-bold">{name}</span>
      <div className="relative">
        <Image
          onClick={() => setOpen(!open)}
          src={picture_url || `/images/admin.png`}
          alt={"User Picture"}
          width={35}
          height={35}
          className="rounded-full cursor-pointer"
        />
        {open ? (
          <div className="absolute w-[120px] h-[120px] bg-white  border-none rounded-md -left-[140%] top-[110%]">
            <div className="flex w-full flex-row items-center justify-end cursor-pointer rounded-full px-1">
              <MdClose onClick={() => setOpen(!open)} fill="black" size={16} />
            </div>
            <form
              action={signout}
              className="m-1 p-1 flex flex-col items-start justify-start"
            >
              <button
                className="text-blue-500 hover:underline cursor-pointer text-[14px]"
                onClick={() => router.push("/")}
                type="button"
              >
                profile
              </button>
              <button
                className="text-blue-500 hover:underline cursor-pointer text-[14px]"
                onClick={() => router.push("/")}
                type="button"
              >
                subscription
              </button>
              <button
                className="text-blue-500 hover:underline cursor-pointer text-[14px]"
                type="submit"
              >
                sign out
              </button>
              <button
                className="text-blue-500 hover:underline cursor-pointer text-[14px]"
                onClick={() => router.push("/")}
                type="button"
              >
                privacy policy
              </button>
            </form>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default memo(LoggedInUser);
