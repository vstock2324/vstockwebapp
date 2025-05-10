"use client";
import { memo, Suspense } from "react";
import Image from "next/image";
import { createClient } from "../../../../../utils/supabase/client";

import useVectorModal from "../../../../../context/useVectorModal";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import LoadingVector from "./LoadingVector";

const VectorCard = ({ card }) => {
  const { setOpenVectorModal, setSelectedVector, setSelectedVectorUrl } =
    useVectorModal();
  const supabase = createClient();
  const { data } = supabase.storage
    .from(`${process.env.NEXT_PUBLIC_SUPABASE_BUCKET_NAME}`)
    .getPublicUrl(`${card.jpeg_path}`);

  function handleVectorCardClick() {
    console.log(card);
    setSelectedVector(card);
    setSelectedVectorUrl(data.publicUrl);
    setOpenVectorModal(true);
  }

  return (
    <HoverCard  className="border-none w-[600px] aspect-auto cursor-pointer">
      <HoverCardTrigger asChild>
        <button
          onClick={handleVectorCardClick}
          className="flex-shrink flex flex-col items-center  col-span-1 justify-center  hover:border-gray-200  hover:shadow-xl rounded mx-auto"
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
      </HoverCardTrigger>
      <HoverCardContent className="border-none cursor-pointer">
      <Suspense fallback={<LoadingVector/>}> 
        <button
          onClick={handleVectorCardClick}
          className="flex-shrink flex flex-col items-center  col-span-1 justify-center  hover:border-gray-200  hover:shadow-xl rounded mx-auto"
        > <img
          className="rounded  object-fill aspect-auto"
          loading="lazy"
          alt=""
          src={data.publicUrl}
          width="600px"
        /></button></Suspense>
      </HoverCardContent>
    </HoverCard>
  );
};

export default memo(VectorCard);
