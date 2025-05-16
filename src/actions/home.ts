"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { permanentRedirect } from "next/navigation";
import { cookies } from "next/headers";

export async function signout() {
  try{
  const supabase = await createClient();
  const cookieStore = await cookies();
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(`${error.message}`);
      else {
        // Delete all auth-related cookies
        cookieStore.getAll().forEach((cookie) => {
          if (cookie.name.startsWith("sb-")) {
            cookieStore.delete(cookie.name);
          }
        });
      }
    }
  catch (error) {
    console.log(error);
    throw error;
  }
  revalidatePath("/","layout");
  permanentRedirect("/pages/home");
}
