"use client";
import useVectorModal from "@/context/useVectorModal";
import { createClient } from "@/utils/supabase/client";
import { memo, Suspense } from "react";
import { useEffect, useState } from "react";
import SimilarVectorCard from "./SimilarVectorCard";
import useVectorsData from "@/context/useVectorsData";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const SimilarVectors = () => {
  const { selectedVector } = useVectorModal();
  const {vectors}=useVectorsData();
  const [similarVectors, setSimilarVectors] = useState<unknown[]>([]);

  async function  getSimilarVectors(){
    if (!selectedVector) return;
    try {
      const supabase = createClient();
      const { data: categoryNames, error: categoryNamesError } =
        await supabase
          .from("vector_category_view")
          .select("category_name")
          .eq("vector_id", `${selectedVector.vector_id}`);
      if (categoryNamesError) throw new Error(categoryNamesError.message);
      else {
        const categoryNamesArray = categoryNames.map(
          (item) => item.category_name
        );
        const { data: vectorIdData, error: vectorIdDataError } =
          await supabase
            .from("vector_category_view")
            .select("vector_id")
            .in("category_name", categoryNamesArray);
        if (vectorIdDataError) throw new Error(vectorIdDataError.message);
        else {

          // After Code
          /////////////////////////
          const commonVectors = vectorIdData.filter(obj1 => vectors.some((obj2: { vector_id: string }) => obj2.vector_id === obj1.vector_id)).filter((item) => item.vector_id !== selectedVector.vector_id);
          const vectorIdDataArray = commonVectors.map((item) => item.vector_id);
          console.log(vectorIdDataArray);

           ///////////////////////

           //Before Code
          // const vectorIdDataArray = vectorIdData
            // .map((item) => item.vector_id)
            // .filter((item) => item !== selectedVector.vector_id);


          // const { count, error: countError } = await supabase
          //   .from("vector_category_view")
          //   .select("*", { count: "exact" });
          // let startIndex = 0;
          // if (countError) throw new Error(countError.message);
          // if (count !== null) {
          //   startIndex = Math.floor(Math.random() * count);
          //   if (startIndex > count - 5) {
          //     startIndex = count - 5;
          //   }
          // }
          const { data: similarVectorData, error: similarVectorDataError } =
            await supabase
              .from("vector_files_view")
              .select("*")
              .in("vector_id", vectorIdDataArray)
              // .range(startIndex, startIndex + 5);
          if (similarVectorDataError) throw new Error(similarVectorDataError.message);
          else{ 
          // await new Promise(resolve=>setTimeout(resolve,2000));
          setSimilarVectors(similarVectorData);
         }
        }
      }
    } catch (error) {
      console.error("Failed to fetch similar vectors:", error);
      throw error;
    }
  };

  useEffect(() => {
    getSimilarVectors();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedVector]);
  // return (
  //   <div className=" m-0.5">
  //     <h4 className="text-[14px] m-0.5 font-semibold">More like this</h4>
  //     <div className="grid grid-cols-2  gap-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-7  m-0.5 p-0.5 ">
  //       {similarVectors && 
  //       // eslint-disable-next-line @typescript-eslint/no-explicit-any
  //       similarVectors.map((item:any)=>{
  //         return(<SimilarVectorCard key={item.vector_id} props={{vectorId:`${item.vector_id}`,jpegPath:`${item.jpeg_path}`}}/>)
  //       })}
  //     </div>
  //   </div>
  // );


  return (
    <div className="m-0.5">
      <h4 className="text-[14px] m-0.5 font-semibold">More like this</h4>
           <ResponsiveMasonry 
        columnsCountBreakPoints={{
          384: 1,
          640: 2,
          768: 3,
          1024: 4,
          1280: 5,
          1536: 6,
        }}
      >
        <Masonry gutter="30px" columnsCount={6}>
       {similarVectors && 
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
        similarVectors.map((item:any)=>{
          return (<Suspense key={item.vector_id}>
            <SimilarVectorCard  props={{vectorId:`${item.vector_id}`,jpegPath:`${item.jpeg_path}`}}/>
            </Suspense>)
        })}
        </Masonry>
      </ResponsiveMasonry>
      </div>)
};

export default memo(SimilarVectors);
