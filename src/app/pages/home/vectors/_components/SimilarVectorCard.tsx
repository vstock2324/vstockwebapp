"use client";
import React, { memo } from 'react';
import Image from 'next/image';
import { createClient } from '@/utils/supabase/client';
type SimilarVectorCardPropsType={
    vectorId:string;
    jpegPath:string;
}

const SimilarVectorCard=({props}:{props:SimilarVectorCardPropsType})=>{
   const supabase=createClient();
   const { data } = supabase
  .storage
  .from('vstock.bucket.1')
  .getPublicUrl(`${props.jpegPath}`)

    return (
        <>
        <button>
            <Image
                className={`border  object-cover w-[250px] rounded-md aspect-auto`}
                width={250}
                height={250}
                src={data.publicUrl}
                alt="Similar Vector Card"
              />
        </button>
        </>
      )
}

export default memo(SimilarVectorCard)