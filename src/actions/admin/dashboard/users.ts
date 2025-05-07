"use server";

import adminAuthClient from "@/utils/supabase/server-side-auth";
import { redirect } from "next/navigation";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function handleDeleteUser(
  userId: string,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  formData: FormData
): Promise<void> {
  try {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { data, error } = await adminAuthClient.deleteUser(userId);
    if (error) {
        console.log(error);
        throw error
    }
    redirect("/admin/dashboard/users");
  } catch (error) {
    console.log(error);
    throw error;
  }
}
