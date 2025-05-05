"use client";
import { createContext, useContext, useEffect, useState, useRef } from "react";
import { useParams, useSearchParams } from "next/navigation";
import supabase from "@/utils/supabase/supabaseBrowserClient";
const VectorsDataContext = createContext();

export const VectorsDataContextProvider = ({ children }) => {
  const [vectors, setVectors] = useState([]);
  const searchParams = useSearchParams();
  const params = useParams();
  const [totalPages, setTotalPages] = useState(1);
  const pageLimit = 14;

  async function getVectorsData() {
    try {
      const page = Number(searchParams.get("page") ?? 1);
      if (params.name === undefined || null || "") {
        const { data, error } = await supabase
          .from("vector_files_view")
          .select("*")
          .order("name", { ascending: true })
          .range((page - 1) * pageLimit, page * pageLimit - 1);
        if (error) throw new Error(error.message);
        else {
          setVectors(data);
        }
      } else if (params.name !== undefined || null || "") {
        const { data: categoryData, error: categoryError } = await supabase
          .from("vector_category_view")
          .select("vector_id")
          .eq("category_name", `${decodeURIComponent(params.name)}`);
        if (categoryError) throw new Error(categoryError.message);
        else {
          const vectorIds = categoryData.map((item) => item.vector_id);
          const { data: filesData, error: filesError } = await supabase
            .from("vector_files_view")
            .select("*")
            .in("vector_id", vectorIds)
            .order("name", { ascending: true })
            .range((page - 1) * pageLimit, page * pageLimit - 1);
          if (filesError) throw new Error(filesError.message);
          else {
            setVectors(filesData);
          }
        }
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async function getTotalPages() {
    try {
      if (params.name === undefined || null || "") {
        const { count, error } = await supabase
          .from("vector_files_view")
          .select("*", { count: "exact" });
        if (error) throw new Error(error.message);
        else {
          setTotalPages(Math.ceil(Number(count) / pageLimit));
        }
      } else if (params.name !== undefined || null || "") {
        const { data: categoryData, error: categoryError } = await supabase
          .from("vector_category_view")
          .select("vector_id")
          .eq("category_name", `${decodeURIComponent(params.name)}`);
        if (categoryError) throw new Error(categoryError.message);
        else {
          const vectorIds = categoryData.map((item) => item.vector_id);
          const { count, error: filesError } = await supabase
            .from("vector_files_view")
            .select("*", { count: "exact" })
            .in("vector_id", vectorIds);
          if (filesError) throw new Error(filesError.message);
          else {
            setTotalPages(Math.ceil(Number(count) / pageLimit));
          }
        }
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
  }, [searchParams, params]);

  return (
    <VectorsDataContext.Provider value={{ vectors, setVectors, totalPages }}>
      {children}
    </VectorsDataContext.Provider>
  );
};

export default function useVectorsData() {
  return useContext(VectorsDataContext);
}
