"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { createClient } from "../utils/supabase/client";
import { useSearchParams } from "next/navigation";

const VectorsDataContext = createContext();

export const VectorsDataContextProvider = ({ children }) => {
  const [vectors, setVectors] = useState([]);
  const searchParams = useSearchParams();
  const [totalPages, setTotalPages] = useState(
    Number(searchParams.get("page"))
  );
  const newLimit = 5;
  const newOffSet = (Number(searchParams.get("page")) - 1) * newLimit;
  const supabase = createClient();
  async function getVectorsData() {
    const { data, error } = await supabase.storage
      .from(`${process.env.NEXT_PUBLIC_SUPABASE_BUCKET_NAME}`)
      .list(`${process.env.NEXT_PUBLIC_SUPABASE_STORAGE_VECTORS_FOLDER}`, {
        limit: newLimit,
        offset: newOffSet,
      });
    if (error) throw new Error(error.message);
    setVectors(data);
  }

  async function getTotalPages() {
    const { data, error } = await supabase.storage
      .from(`${process.env.NEXT_PUBLIC_SUPABASE_BUCKET_NAME}`)
      .list(`${process.env.NEXT_PUBLIC_SUPABASE_STORAGE_VECTORS_FOLDER}`);
    if (error) throw new Error(error.message);
    setTotalPages(Math.ceil(data.length / newLimit));
  }

  useEffect(() => {
    getTotalPages();
  }, []);
  useEffect(() => {
    getVectorsData();
  }, [searchParams]);

  return (
    <VectorsDataContext.Provider value={{ vectors, setVectors, totalPages }}>
      {children}
    </VectorsDataContext.Provider>
  );
};

export default function useVectorsData() {
  return useContext(VectorsDataContext);
}
