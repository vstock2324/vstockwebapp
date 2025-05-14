"use client";
import { memo } from "react";
import Image from "next/image";
import { createClient } from "../../../../../utils/supabase/client";

import useVectorModal from "../../../../../context/useVectorModal";


// eslint-disable-next-line @typescript-eslint/no-explicit-any
const VectorCard = ({ card }:{card:any}) => {
  const { setOpenVectorModal, setSelectedVector, setSelectedVectorUrl } =
    useVectorModal();
  const supabase = createClient();
  const { data :{publicUrl} } = supabase.storage
    .from(`${process.env.NEXT_PUBLIC_SUPABASE_BUCKET_NAME}`)
    .getPublicUrl(`${card.jpeg_path}`);

  function handleVectorCardClick() {
    console.log(card);
    setSelectedVector(card);
    setSelectedVectorUrl(publicUrl);
    setOpenVectorModal(true);
  }

  return (<Image
          onClick={handleVectorCardClick}
            className="hover:border-gray-200  aspect-auto  hover:shadow-xl hover:shadow-gray-400 rounded-md cursor-pointer mx-auto"
            loading="lazy"
            alt=""
            src={publicUrl}
            width={400}
            height={400}
          />);
};

export default memo(VectorCard);
