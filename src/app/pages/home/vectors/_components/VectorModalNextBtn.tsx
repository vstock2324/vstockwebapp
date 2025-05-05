"use client";
import useVectorsData from "@/context/useVectorsData";
import useVectorModal from "@/context/useVectorModal";
import React, { memo } from "react";
import { FaChevronRight } from "react-icons/fa";

const VectorModalNextBtn = () => {
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
      }   absolute p-2 cursor-pointer rounded-full bg-none hover:bg-white/15 top-1/2 -translate-y-1/2 -right-16 `}
    >
      <FaChevronRight className={`${vectors.indexOf(selectedVector)===vectors.length-1 ? "hidden" : "flex"}`} size={30} fill="#EEE" />
    </button>
  );
};

export default memo(VectorModalNextBtn);
