"use server";

import { createClient } from "@/utils/supabase/server";

type prevStateType = {
  categoryname: string | undefined;
  categorydescription: string | undefined;
};

export async function handleCategoryFormSubmit(
  prevState: prevStateType,
  formData: FormData
): Promise<prevStateType> {
  const categoryname = (formData.get("categoryname") as string) || undefined;
  const categorydescription =
    (formData.get("categorydescription") as string) || undefined;
  const supabase = await createClient();  
  const { data, error } = await supabase.from('category').insert([{ name: `${categoryname}`, description: `${categorydescription}` }]).select()
  if (error) throw new Error(error.message);
  console.log(data);
  return {
    categoryname,
    categorydescription,
  };
}
