import React, { memo } from 'react'

const CategoryPunchLine=()=> {
  return (
      <div className="flex flex-col w-full  py-6 space-y-2 justify-center items-center">
              <h1 className="text-center font-poppins w-full text-[clamp(9px,9px_+_1.5vw,40px)]   font-semibold text-[#1E1E1E]   tracking-[0.0375rem] text-nowrap">
                Unleash Your Creativity with V-Stocks!
              </h1>
              <h4 className="text-center  w-full font-poppins text-[clamp(7px,7px_+_1.2vw,30px)] px-[calc(20%)] sm:px-[calc(25%)]  md:text-[16px] lg:text-[18.5px] xl:text-[22px] tracking-[0.02063rem] font-normal text-[#000]  text-wrap">
                Where Ideas Come to Life - Your One Stop Destination for Stunning
                Visual Content
              </h4>
        </div>
  )
}

export default memo(CategoryPunchLine);