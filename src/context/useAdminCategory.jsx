"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { createClient } from "@/utils/supabase/client";

const CategoryContext = createContext();

export const CategoryContextProvider = ({ children }) => {
  const [category, setCategory] = useState([]);
  const [numCategoryPages, setNumCategoryPages] = useState(1);
  const supabase = createClient();
  const newlimit = 10;
  async function getTotalCategoriesPages() {
    const { data, error } = await supabase.from("category").select("*");
    if (error) throw new Error(error.message);
    setNumCategoryPages(Math.ceil(data.length / newlimit));
  }
  async function getCategories() {
    const { data, error } = await supabase
      .from("category")
      .select("*")
      .range(0, newlimit - 1);
    if (error) throw new Error(error.message);
    setCategory(data);
  }

  useEffect(() => {
    getTotalCategoriesPages();
    getCategories();
  }, []);
  return (
    <CategoryContext.Provider
      value={{
        category,
        setCategory,
        getCategories,
        numCategoryPages,
        setNumCategoryPages,
        newlimit,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export default function useCategory() {
  return useContext(CategoryContext);
}
