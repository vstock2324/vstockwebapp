"use client";
import useVectorModal from "@/context/useVectorModal";
import useVectorsData from "@/context/useVectorsData";
import React, { memo } from "react";
import { FaChevronLeft } from "react-icons/fa";
const VectorModalSmallPreviousBtn = () => {
  const {vectors}=useVectorsData();
  const {selectedVector,setSelectedVector}=useVectorModal();
  function handleModalPrevClick(){
    const index = vectors.indexOf(selectedVector);
    const lastIndex = vectors.length-1;
    if (index >= 0 && index <= lastIndex) {
         setSelectedVector(vectors.at(index-1));
    }
  }
  return (
    <button onClick={handleModalPrevClick}  className={`${ vectors.indexOf(selectedVector)===0 ? "md:hidden":"flex"  } absolute  flex md:hidden p-2 cursor-pointer rounded-full bg-none hover:bg-white/25  -bottom-[8.5%] left-2/5   -translate-x-4/5`}>
      <FaChevronLeft className={`${vectors.indexOf(selectedVector)===0 ? "hidden":"flex"}`} size={24} fill="#EEE" />
    </button>
  );
};

export default memo(VectorModalSmallPreviousBtn);
