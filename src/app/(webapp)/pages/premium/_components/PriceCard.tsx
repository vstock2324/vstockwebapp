"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
export type PriceCardType={
    picurl:string;
    plan:string;
    desc:string;
    money:number;
    avaliability:string;
}

export default function PriceCard({props}:{props:PriceCardType}){
    const router=useRouter();
    return(<>
     <div className="flex-shrink-0">
         <div className={`relative px-8 py-12 border-[3px] shadow-sm  focus:border-solid rounded-[21.21px] bg-[#FDFDFE] w-[330px] h-[500px]  hover:border-[#5E5CEE]  m-0.5 flex flex-col items-center justify-between`}>
          {props.plan==="BASIC" ? (<div className="absolute top-2.5 right-2.5 items-center justify-end  w-full inline-flex flex-row">
            <span className="bg-[#2E67DD] text-white px-4 text-[12px] py-0.5 rounded-tl-[20.45px] rounded-bl-[0] rounded-tr-[15.10px] rounded-br-[15.10px]">Recommended</span>
          </div>):null}
           <div className=" m-0.5 p-0.5 flex flex-col">
            <div className="m-0.5 p-0.5 inline-flex flex-row justify-start items-center gap-2">
            <Image
                src={props.picurl}
                className="m-2"
                alt=""
                width="65"
                height="25"
              />
              <h1 className="font-roboto500 font-semibold text-[30px] text-center">{props.plan}</h1>
            </div>
           </div>
           <div className="m-0.5 p-0.5"><h5 className="text-justify text-[16px] font-roboto500">{props.desc}</h5></div>
           <div className=" m-0.5 p-0.5">
            <div className=" m-0.5 p-0.5 inline-flex flex-row  items-center justify-center">
            <sup className=" uppercase font-roboto500   text-[22px]">RS</sup>
           &nbsp;<h1 className="uppercase font-roboto500 text-[66px]">{props.money}</h1></div>
           </div>
           <div className=" m-0.5 p-0.5">
            <button onClick={()=>{router.push("/checkout")}} className="text-black  capitalize  stroke-[#E7E9F1] text-center bg-white rounded-[48px] px-[30px] py-[18px] border border-[#E7E9F1] hover:border-none font-roboto500 text-[19px] hover:text-[#FEFEFE] hover:bg-[#3580F0]">
                {props.avaliability}
            </button>
           </div>
         </div>
     </div>
    </>);

}