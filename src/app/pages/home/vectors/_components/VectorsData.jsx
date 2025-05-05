"use client";
import { memo, Suspense } from "react";
import useVectorsData from "../../../../../context/useVectorsData";
import VectorCard from "./VectorCard";
import LoadingVector from "./LoadingVector";
const VectorsData = () => {
  const { vectors } = useVectorsData();

  return (
    <>
      {  vectors && (vectors.length > 0 ? (
        vectors.map((item) => {
          return <Suspense key={item.vector_id} fallback={<LoadingVector/>}><VectorCard  card={item} /></Suspense>;
        })
      ) : (
        <></>
      ))}
    </>
  );
};

export default memo(VectorsData);
