"use client";
import { memo, } from "react";
import Image from "next/image";
import { createClient } from "../../../../../utils/supabase/client";

import useVectorModal from "../../../../../context/useVectorModal";

const VectorCard = ({ card }) => {
  
  const {setOpenVectorModal,setSelectedVector,setSelectedVectorUrl}=useVectorModal();
    const supabase = createClient();
    const { data } = supabase.storage
    .from(`${process.env.NEXT_PUBLIC_SUPABASE_BUCKET_NAME}`)
    .getPublicUrl(`${card.jpeg_path}`);
   
    function handleVectorCardClick(){
      console.log(card);
      setSelectedVector(card);
      setSelectedVectorUrl(data.publicUrl);
      setOpenVectorModal(true);
    }
   
  return (
    
      <button
        onClick={handleVectorCardClick}
        className="flex-shrink flex flex-col items-center  col-span-1 justify-center  border hover:border-gray-200  hover:shadow-xl rounded mx-auto"
      >
        <Image
          className="rounded cursor-pointer"
          loading="lazy"
          alt=""
          src={data.publicUrl}
          width={200}
          height={200}
        />
      </button>
      
  );
};

export default memo(VectorCard);
