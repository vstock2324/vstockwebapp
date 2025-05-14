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
        384: 1,
          512: 2,
          640: 3,
          768: 4,
          1024: 4,
          1280: 5,
          1536: 6,
        }  : {
          384: 1,
          512: 2,
          640: 3,
          768: 4,
          1024: 5,
          1280: 6,
          1536: 7,
        }  }
      >
        <Masonry columnsCount={ openVectorFilter ? 6 : 7}>
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
