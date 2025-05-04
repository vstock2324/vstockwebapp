"use client";
import supabase from "@/utils/supabase/supabaseBrowserClient";
import { nanoid } from "nanoid";
import { useParams, useRouter } from "next/navigation";
import React, { memo, useEffect, useState } from "react";
import { MdClose } from "react-icons/md";

const SelectCategory = () => {
  const params = useParams<{ id: string }>();
  const [categories, setCategories] = useState<unknown[]>([]);
  const [vectorCategories, setVectorCategories] = useState<unknown[]>([]);
  const router=useRouter();

  async function handleCatgeoryUpdate(e:React.ChangeEvent<HTMLSelectElement>){
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { data, error } = await supabase
.from('vector_category')
.insert([
  { vector_id: params.id, category_id: `${e.target.value}`  },
])
.select()
 if(error) throw new Error(error.message);
 router.refresh();
  }
  async function handleCatgeoryDelete(vectorId: string, categoryId: string) {
    const { error } = await supabase
      .from("vector_category")
      .delete()
      .eq("vector_id", vectorId)
      .eq("category_id", categoryId);
    if (error) throw new Error(error.message);
    router.refresh();
  }

  async function getSelectedCategory() {
    const { data: vectorCategoriesData, error: vectorCategoriesError } =
      await supabase
        .from("vector_category_view")
        .select("category_id,category_name")
        .eq("vector_id", params.id);
    if (vectorCategoriesError) throw new Error(vectorCategoriesError.message);
    setVectorCategories(vectorCategoriesData);

    const { data: categoriesData, error: categoriesError } = await supabase
      .from("category")
      .select("id,name");
    if (categoriesError) throw new Error(categoriesError.message);
    setCategories(
      categoriesData.filter(
        (item1) =>
          !vectorCategoriesData.some((item2) => item2.category_id === item1.id)
      )
    );
  }
  useEffect(() => {
    getSelectedCategory();
  }, []);
  return (
    <div className="flex flex-row justify-between items-center space-x-4 w-full">
      <select onChange={handleCatgeoryUpdate} defaultValue={""} className="w-[30%] border focus:outline-blue-700 p-2 cursor-pointer  rounded-md">
        <option value={""} disabled hidden>
          Choose an option
        </option>
        {categories &&
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          categories.map((item: any) => {
            return (
              <option value={item.id} key={nanoid()}>
                {item.name}
              </option>
            );
          })}
      </select>

      <ul className="flex flex-row flex-wrap items-center justify-start  w-[65%] gap-2">
        {vectorCategories &&
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          vectorCategories.map((item: any) => {
            return (
              <li
                key={nanoid()}
                className="flex flex-row  space-x-1 items-center justify-between px-2.5 py-1.5 bg-[#2E67DD] rounded-full border-none"
              >
                <span className="text-[14px]">{item.category_name}</span>
                <MdClose
                  className="cursor-pointer"
                  onClick={() =>
                    handleCatgeoryDelete(params.id, item.category_id)
                  }
                  size={18}
                />
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default memo(SelectCategory);
