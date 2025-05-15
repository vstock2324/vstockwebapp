"use client"
import React, { memo } from 'react';
import { signout } from "@/actions/home";
import { MdOutlineLogout } from "react-icons/md";

const LogoutBtn=()=> {
  return (
       <form
                  action={signout}
                  className="w-full py-3"
                >
          <button
                className="flex flex-row w-full items-center justify-start cursor-pointer"
                type="submit"
              >
                <MdOutlineLogout size={14}/>
      &nbsp;&nbsp;&nbsp;
                <span className='text-[14px]'>Log out</span>
              </button>
              </form>
  )
}

export default memo(LogoutBtn);