/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { memo } from "react"
import GoldStar from "./GoldStar";
import Image from "next/image";
import { nanoid } from "nanoid";
const  ClientCard=({name,star,review,picture}:{name:string,star:number,review:string,picture:string})=>{
  
    return <>
    <div className="border-[1.557px] font-primary min-w-[300px] border-solid rounded-[24.905px] py-[20px] sm:py-[31.13px]  px-[5px] sm:px-[18.68px] border-[#2E67DD] sm:m-1 max-w-[345.4875px] h-auto">
        <div className=" m-0.5 sm:m-1 flex flex-col gap-y-3">
          <div className=" m-0.5 sm:m-1 p-1 flex items-center justify-center">
                <Image className="rounded-full" alt="" width={133} height={133} src={picture} />
          </div>
          <div className="sm:m-1 m-0.5 gap-y-[12.45px] flex flex-col items-center justify-between">
             <div className="flex items-center justify-center"><h3 className="text-center sm:m-1 font-poppins600 m-0.5 font-medium leading-[28.018px] text-[12px] sm:text-[18.679px] text-[#001A5B]">{name}</h3></div>
             <div className="grid grid-cols-5 gap-[6px] items-center justify-center"><GoldStar key={nanoid().toString()}/><GoldStar key={nanoid().toString()}/><GoldStar key={nanoid().toString()}/><GoldStar key={nanoid().toString()}/><GoldStar key={nanoid().toString()}/></div>
             <div className="flex flex-col items-center justify-center"><p className="sm:text-center text-wrap m-0.5 text-[10px] sm:text-[12.453px] font-normal font-montserrat400 text-[#000] sm:m-1">{review}</p></div>
          </div>
        </div>
    </div>
    </>
}

export default memo(ClientCard);