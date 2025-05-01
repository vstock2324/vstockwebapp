"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { createClient } from "@/utils/supabase/client";

const AdminVectorsContext = createContext();

export const  AdminVectorsContextProvider = ({ children }) => {
  const [vectors, setVectors] = useState([]);
  const [numVectorsPages, setNumVectorsPages] = useState(1);
  const supabase = createClient();
  const newlimit = 10;
  async function getTotalVectorsPages() {
    const { data, error } = await supabase.from('vector_files_view').select("*");
    if (error) throw new Error(error.message);
    setNumVectorsPages(Math.ceil(data.length / newlimit));
  }
  async function getVectors() {
    const { data, error } = await supabase
    .from('vector_files_view')
      .select("*")
      .range(0, newlimit - 1);
    if (error) throw new Error(error.message);
    setVectors(data);
  }

  useEffect(() => {
    getTotalVectorsPages();
    getVectors();
  }, []);
  return (
    <AdminVectorsContext.Provider
      value={{
        vectors,
        setVectors,
        getVectors,
        numVectorsPages,
        setNumVectorsPages,
        newlimit,
      }}
    >
      {children}
    </AdminVectorsContext.Provider>
  );
};

export default function useAdminVectors() {
  return useContext(AdminVectorsContext);
}
