import React, { memo } from 'react';
import { createClient } from "@/utils/supabase/client";
import Link from "next/link";
import { useState, useEffect } from "react";

const CategoryList=()=> {
      const [category, setCategory] = useState<unknown[]>([]);
  const supabase = createClient();
  async function handleCategoryName() {
    const { data, error } = await supabase.from("category").select("*");
    if (error) throw new Error(error.message);
    else{
       setCategory(data);
    }
  }
  
  useEffect(() => {
    handleCategoryName();
  }, []);
  return (
        <div className="grid grid-cols-3 grid-flow-row-dense gap-y-2 w-full ml-2">
        {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          category.map((item: any) => {
            return (
              <Link
                className="text-black  px-1.5 py-0.5 font-normal text-[12px] cursor-pointer hover:underline hover:font-bold hover:transition-all  duration-100"
                key={item.id}
                href={`/pages/home/vectors/category/${item.name}?page=1`}
              >
                {item.name}
              </Link>
            );
          })
        }
      </div>
  )
}

export default memo(CategoryList);