"use client";
import React, { memo } from 'react';
import Image from 'next/image';
import { createClient } from '@/utils/supabase/client';
import useVectorsData from '@/context/useVectorsData';
import useVectorModal from '@/context/useVectorModal';
type SimilarVectorCardPropsType={
    vectorId:string;
    jpegPath:string;
}

const SimilarVectorCard=({props}:{props:SimilarVectorCardPropsType})=>{

  const {vectors}= useVectorsData();
  const {setSelectedVector}=useVectorModal();
   const supabase=createClient();
   const { data :{publicUrl} } = supabase
  .storage
  .from('vstock.bucket.1')
  .getPublicUrl(`${props.jpegPath}`);

  function handleClickSimilarVector(){
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const result = vectors.find((obj:any) => obj.vector_id === props.vectorId);
  // console.log(result);
  setSelectedVector(result)
  }

    return (
        <>
        <Image
        onClick={handleClickSimilarVector}
           className="hover:border-gray-200 aspect-auto  hover:shadow-xl hover:shadow-gray-400 rounded-md cursor-pointer mx-auto"
            width={400}
            height={400}
            src={publicUrl}
            alt="Similar Vector Card"
            />
        </>
      )
}

export default memo(SimilarVectorCard)