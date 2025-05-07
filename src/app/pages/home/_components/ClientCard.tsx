/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { memo } from "react"
import GoldStar from "./GoldStar";
import Image from "next/image";
const  ClientCard=({name,star,review,picture}:{name:string,star:number,review:string,picture:string})=>{
  
    return <>
    <div className="border-[1.557px] border-solid rounded-[24.905px] py-[31.13px] px-[18.68px] border-[#2E67DD] m-1 w-[345.4875px] h-auto">
        <div className=" m-1 flex flex-col gap-y-3">
          <div className="m-1 p-1 flex items-center justify-center">
                <Image className="rounded-full" alt="" width={133} height={133} src={picture} />
          </div>
          <div className="m-1 gap-y-[12.45px] flex flex-col items-center justify-between">
             <div className="flex items-center justify-center"><h3 className="text-center m-1 font-poppins600 font-medium leading-[28.018px] text-[18.679px] text-[#001A5B]">{name}</h3></div>
             <div className="grid grid-cols-5 gap-[6px] items-center justify-center"><GoldStar key={"key0"}/><GoldStar key={"key2"}/><GoldStar key={"key3"}/><GoldStar key={"key4"}/><GoldStar key={"key5"}/></div>
             <div className="flex items-center justify-center"><p className="text-center text-[12.453px] font-normal font-montserrat400 text-[#000] m-1">{review}</p></div>
          </div>
        </div>
    </div>
    </>
}

export default memo(ClientCard);