"use client";
import { memo } from "react";
// import { Suspense } from "react";
import useVectorsData from "../../../../../context/useVectorsData";
import VectorCard from "./VectorCard";
// import LoadingVector from "./LoadingVector";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import useVectorFilter from "@/context/useVectorFilter";
const VectorsData = () => {
  const { vectors } = useVectorsData();
  const { openVectorFilter } = useVectorFilter();

  return (
          <ResponsiveMasonry 
        columnsCountBreakPoints={ openVectorFilter ?  {
           320: 1,
           896: 2,
           1536: 3,
           1920:4
        }  : {
          320: 1,
          896: 2,
          1280: 3,
          1664: 4,
        }  }
      >
        <Masonry columnsCount={ openVectorFilter ? 4 : 4}>
      {/* {vectors &&
        (vectors.length > 0 ? (
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          vectors.map((item: any) => {
            return (
              <Suspense key={item.vector_id} fallback={<LoadingVector />}>
                <VectorCard card={item} />
              </Suspense>
            );
          })
        ) : (
          <></>
        ))} */}
        {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          vectors.map((item: any) => {
            return (<VectorCard  key={item.vector_id} card={item} />);
          })
        }
            </Masonry>
      </ResponsiveMasonry>
  );
};

export default memo(VectorsData);
