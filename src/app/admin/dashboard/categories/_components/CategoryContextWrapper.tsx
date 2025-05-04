import React from 'react'
import { CategoryContextProvider } from "@/context/useAdminCategory";
import CategoryTable from "./CategoryTable";
const CategoryContextWrapper=()=>{
  return (
    <CategoryContextProvider>
        <CategoryTable/>
    </CategoryContextProvider>
  )
}

export default CategoryContextWrapper