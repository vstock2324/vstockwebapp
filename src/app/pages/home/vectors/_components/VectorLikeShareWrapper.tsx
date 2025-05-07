"use client";
import React, { memo } from 'react';
import VectorLikeButton from './VectorLikeButton';
import VectorShareButton from './VectorShareButton';
const VectorLikeShareWrapper=()=>{
    return (
    <div className="hidden lg:w-full lg:flex  lg:flex-row w-auto items-center h-auto justify-center space-x-4 px-6 m-0.5 py-1">
       <VectorLikeButton/>
       <VectorShareButton/>
  </div>
  )
}

export default memo(VectorLikeShareWrapper);