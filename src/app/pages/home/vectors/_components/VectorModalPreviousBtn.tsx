"use client";
import useVectorModal from "@/context/useVectorModal";
import useVectorsData from "@/context/useVectorsData";
import React, { memo } from "react";
import { FaChevronLeft } from "react-icons/fa";
const VectorModalPreviousBtn = () => {
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
    <button onClick={handleModalPrevClick}  className={`${ vectors.indexOf(selectedVector)===0 ? "hidden":"flex"  } absolute p-2 cursor-pointer rounded-full bg-none hover:bg-white/15 top-1/2 -translate-y-1/2 -left-16`}>
      <FaChevronLeft className={`${vectors.indexOf(selectedVector)===0 ? "hidden":"flex"}`} size={30} fill="#EEE" />
    </button>
  );
};

export default memo(VectorModalPreviousBtn);
