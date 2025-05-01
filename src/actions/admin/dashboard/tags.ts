"use server";

import { createClient } from "@/utils/supabase/server";

type prevStateType = {
  tagname: string | undefined;
  tagdescription: string | undefined;
};

export async function handleTagsFormSubmit(
  prevState: prevStateType,
  formData: FormData
): Promise<prevStateType> {
  const tagname = (formData.get("tagname") as string) || undefined;
  const tagdescription =
    (formData.get("tagdescription") as string) || undefined;
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("tags")
    .insert([{ name: `${tagname}`, description: `${tagdescription}` }])
    .select();
  if (error) throw new Error(error.message);
  console.log(data);
  return {
    tagname,
    tagdescription,
  };
}
