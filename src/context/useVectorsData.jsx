"use client";
import { createContext, useContext, useEffect, useState, useRef } from "react";
import { useSearchParams } from "next/navigation";
import supabase from "@/utils/supabase/supabaseBrowserClient";
const VectorsDataContext = createContext();

export const VectorsDataContextProvider = ({ children }) => {
  const [vectors, setVectors] = useState([]);
  const searchParams = useSearchParams();
  const [totalPages, setTotalPages] = useState(1);
  const pageLimit = 5;

  async function getVectorsData() {
    try {
      const page = Number(searchParams.get("page") ?? 1);
      const { data, error } = await supabase
        .from("vector_files_view")
        .select("*")
        .order("name", { ascending: true })
        .range((page - 1) * pageLimit, page * pageLimit - 1);
      if (error) throw new Error(error.message);
      setVectors(data);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async function getTotalPages() {
    try {
      const { data, error } = await supabase
        .from("vector_files_view")
        .select("*");
      if (error) throw new Error(error.message);
      else {
        setTotalPages(Math.ceil(data.length / pageLimit));
      }
    } catch (error) {
      console.log(error);
    }
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
