"use server";
import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";

export async function handleAdminLoginFormSubmit(formData: FormData) {
  try {
    const supabase = await createClient();
    const data = {
      email: formData.get("adminEmail") as string,
      password: formData.get("adminPass") as string,
    };
    const { error } = await supabase.auth.signInWithPassword(data);
    if (error) throw new Error(error.message);
    revalidatePath("/", "layout");
  } catch (error) {
    console.log(error);
  }
}
