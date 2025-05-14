"use client";
import useVectorsData from "@/context/useVectorsData";
import useVectorModal from "@/context/useVectorModal";
import React, { memo } from "react";
import { FaChevronRight } from "react-icons/fa";

const VectorModalSmallNextBtn = () => {
  const {vectors}=useVectorsData();
  const {selectedVector,setSelectedVector}=useVectorModal();
  function handleModalNextClick() {
    const index = vectors.indexOf(selectedVector);
    const lastIndex = vectors.length-1;
    if (index >= 0 && index <= lastIndex) {
         setSelectedVector(vectors.at(index+1));
    }
  }

  return (
    <button
      onClick={handleModalNextClick}
      className={` ${
        vectors.indexOf(selectedVector)===vectors.length -1 ? "hidden" : "flex"
      }   absolute p-2 md:hidden flex cursor-pointer rounded-full bg-none hover:bg-white/25  -bottom-[8.5%]  right-2/5  translate-x-4/5`}
    >
      <FaChevronRight className={`${vectors.indexOf(selectedVector)===vectors.length-1 ? "hidden" : "flex"}`} size={24} fill="#EEE" />
    </button>
  );
};

export default memo(VectorModalSmallNextBtn);
