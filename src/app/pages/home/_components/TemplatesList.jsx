"use client";
import { memo } from "react";
import { createClient } from "@/utils/supabase/client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

const TemplatesList = () => {
  const searchParams= useSearchParams();
  const [category, setCategory] = useState([]);
  const supabase = createClient();
  async function handleCategoryName() {
    const { data, error } = await supabase.from("category").select("*");
    if (error) throw new Error(error.message);
    setCategory(data);
  }

  useEffect(() => {
    handleCategoryName();
  }, []);
  return (
    <div className="absolute z-20 w-[700px] h-auto bg-white top-[100%] -left-[200%] border  rounded-[25px]">
      <div className="grid grid-cols-3 mx-5 my-5 rounded-[25px] px-10 gap-y-2">
        {category.map((item) => {
          return (
            <Link
              className="text-black  font-normal text-[16px] cursor-pointer hover:underline hover:font-bold hover:transition-all  duration-100"
              key={item.id}
              href={`/pages/home/vectors/category/${item.name}?page=${searchParams.get("page") || 1}`}
            >
              {item.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default memo(TemplatesList);
