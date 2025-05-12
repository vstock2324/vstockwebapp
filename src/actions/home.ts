"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { permanentRedirect } from "next/navigation";

export async function signout() {
  const supabase = await createClient();
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(`${error.message}`);
  revalidatePath("/","layout");
  permanentRedirect("/pages/home");
}
