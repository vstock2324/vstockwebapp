"use server";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

type prevStateType = {
  adminEmail: string;
  adminPass: string;
  adminPassConfirm: string;
};

export async function handleAdminSignupFormSubmit(
  prevState: prevStateType,
  formData: FormData
): Promise<prevStateType> {
  const supabase = await createClient();
  const adminEmail = formData.get("adminEmail") as string;
  const adminPass = formData.get("adminPass") as string;
  const adminPassConfirm = formData.get("adminPassConfirm") as string;
  if (adminPass !== adminPassConfirm) {
    throw new Error("Passwords do not match");
  }
  const data = {
    email: adminEmail,
    password: adminPass,
  };
  const { error } = await supabase.auth.signUp(data);
  if (error) throw new Error(error.message);
  revalidatePath("/", "layout");
  redirect("/admin/login");
}
