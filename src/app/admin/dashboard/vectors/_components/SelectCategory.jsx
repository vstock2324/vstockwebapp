"use client";
import { memo, useState, useEffect } from "react";
import { createClient } from "@/utils/supabase/client";
import { nanoid } from "nanoid";

const SelectCategory = () => {
  const [category, setCategory] = useState([]);

  async function handleSelectCategory() {
    const supabase = createClient();
    let { data, error } = await supabase.from("category").select("*");
    if (error) throw new Error("Categories can't be fetched");
    setCategory(data);
  }

  useEffect(() => {
    handleSelectCategory();
  }, []);

  return (
    <>
      <select required id="vectorcategories" name="vectorcategories" className="w-[300px] rounded-md px-2 py-1 border-gray-800 border h-[200px]" multiple>
        {category.map((item) => {
          return (
            <option key={nanoid().toString()} value={`${item.id}`}>
              {item.name}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default memo(SelectCategory);
