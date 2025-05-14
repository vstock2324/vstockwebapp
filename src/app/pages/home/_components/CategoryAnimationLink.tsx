import React, { memo } from 'react';
import Link from "next/link";

const CategoryAnimationLink=()=> {
  return (
         <Link href={`/pages/home`} prefetch>
            <div className="cursor-pointer flex flex-col items-center justify-between space-y-[30px]">
              <video
                width={250}
                height={142}
                className="w-[250px]  h-[142px] object-fill opacity-30  bg-cover bg-[#D9D9D9]  bg-no-repeat rounded-[30px] border border-solid border-[#FFF]"
                src="https://uqmdwdzmfmvegzpietkc.supabase.co/storage/v1/object/public/vstock.bucket.1/admin_animations/animation-1.mp4"
                muted
                loop
                autoPlay
              />
              <h3 className="text-center hover:font-bold hover:transition-all hover:ease-in-out font-normal font-poppins text-[#1E1E1E]   leading-normal text-[clamp(14px,14px_+_1.2vw,22px)]">
                Video Animations
              </h3>
            </div>
          </Link>
  )
}

export default memo(CategoryAnimationLink);