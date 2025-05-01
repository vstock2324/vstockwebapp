"use client";
import { memo ,Suspense} from "react"
import useVectorsData from "@/context/useVectorsData";
import VectorCard from "./VectorCard";
import LoadingVector from "./LoadingVector";
import { nanoid } from "nanoid";
const VectorsData=()=>{
    const { vectors } = useVectorsData();

    return (<>{vectors.length>0 ?
        vectors.map((item) => {
          return (
            <Suspense key={nanoid()} fallback={<LoadingVector />}>
              <VectorCard key={item.id} card={item} />
            </Suspense>
          );
        }) :<></>}</>)
}

export default memo(VectorsData);