"use server";
import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { permanentRedirect } from "next/navigation";

export async function handleAdminLoginFormSubmit(formData: FormData) {
  try {
    const supabase = await createClient();
    const data = {
      email: formData.get("adminEmail") as string,
      password: formData.get("adminPass") as string,
    };
    const { error } = await supabase.auth.signInWithPassword(data);
    if (error) throw new Error(error.message);
  } catch (error) {
    console.log(error);
  }
  revalidatePath("/", "layout");
}

export async function signout() {
  try {
    const supabase = await createClient();
    const { error } = await supabase.auth.signOut();
    if (error) throw new Error(`${error.message}`);
  
  } catch (error) {
    console.log(error);
    throw error;
  }
  revalidatePath("/", "layout");
  permanentRedirect("/admin/login");
}
