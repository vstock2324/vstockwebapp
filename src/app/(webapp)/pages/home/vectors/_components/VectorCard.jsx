"use client";
import { memo} from "react";
import Image from "next/image";
import Link from "next/link";
import { createClient } from "@/utils/supabase/client";
import useVectorModal from "@/context/useVectorModal";

const VectorCard = ({ card }) => {
  const supabase = createClient();
  const {setOpenVectorModal,setSelectedVector,setSelectedVectorUrl}=useVectorModal();
  
  const { data } = supabase.storage
    .from(`${process.env.NEXT_PUBLIC_SUPABASE_BUCKET_NAME}`)
    .getPublicUrl(
      `${process.env.NEXT_PUBLIC_SUPABASE_STORAGE_VECTORS_FOLDER}/${card.name}`
    );
   
    function handleVectorCardClick(){
      setSelectedVector(card);
      setSelectedVectorUrl(data.publicUrl);
      setOpenVectorModal(true);
    }
   
  return (
    <div>
      <button
        onClick={handleVectorCardClick}
        className="flex-shrink flex flex-col items-center justify-start  border hover:border-gray-200  hover:shadow-xl rounded mx-auto"
      >
        <Image
          className="rounded object-fill cursor-pointer w-auto h-auto"
          loading="lazy"
          alt=""
          src={data.publicUrl}
          width={200}
          height={200}
        />
      </button>
    </div>
  );
};

export default memo(VectorCard);
