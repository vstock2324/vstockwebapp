"use client";
import { memo } from "react";
import useVectorsData from "../../../../../context/useVectorsData";
import VectorCard from "./VectorCard";
const VectorsData = () => {
  const { vectors } = useVectorsData();

  return (
    <>
      {  vectors && (vectors.length > 0 ? (
        vectors.map((item) => {
          return <VectorCard key={item.vector_id} card={item} />;
        })
      ) : (
        <></>
      ))}
    </>
  );
};

export default memo(VectorsData);
