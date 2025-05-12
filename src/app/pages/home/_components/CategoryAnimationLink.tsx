import React, { memo } from 'react';
import Link from "next/link";

const CategoryAnimationLink=()=> {
  return (
         <Link href={`/pages/home`} prefetch>
            <div className="cursor-pointer flex flex-col items-center justify-between space-y-[30px]">
              <video
                width={250}
                height={142}
                className="max-w-[250px]  max-h-[142px] opacity-15  bg-cover bg-[#D9D9D9]  bg-no-repeat rounded-[30px] border border-solid border-[#FFF]"
                src="https://uqmdwdzmfmvegzpietkc.supabase.co/storage/v1/object/public/vstock.bucket.1/admin_animations/animation-1.mp4"
                muted
                loop
                autoPlay
              />
              <h3 className="text-center font-normal text-[#1E1E1E]  font-poppins400  leading-normal text-[16px] md:text-[20px] ">
                Video Animations
              </h3>
            </div>
          </Link>
  )
}

export default memo(CategoryAnimationLink);