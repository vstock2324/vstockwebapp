"use server";

import adminAuthClient from "@/utils/supabase/server-side-auth";
import { redirect } from "next/navigation";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function handleDeleteUser(userId: string,formData: FormData): Promise<void> {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { data, error } = await adminAuthClient.deleteUser(userId);
    if (error) throw new Error(error.message);
    redirect("/admin/dashboard/users");
        
}