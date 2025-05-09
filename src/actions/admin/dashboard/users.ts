"use server";

import adminAuthClient from "@/utils/supabase/server-side-auth";
import { createClient } from "@/utils/supabase/server";
import { permanentRedirect } from "next/navigation";
import { revalidateTag } from "next/cache";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function handleDeleteUser(
  userId: string,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  formData: FormData
): Promise<void> {
  try {
    const supabase= await createClient();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
const { error:userDeletedError } = await supabase
.from('users')
.delete()
.eq('id', `${userId}`);
if (userDeletedError) throw  new Error(userDeletedError.message);
else{
   await new Promise(resolve=>setTimeout(resolve,2000));
   // eslint-disable-next-line @typescript-eslint/no-unused-vars
   const { data, error } = await adminAuthClient.deleteUser(userId);
   if (error)  throw new Error(error.message);
  }
   
 } catch (error) {
   console.log(error);
   throw error;
 }
 revalidateTag(userId);
 permanentRedirect("/admin/dashboard/users"); 
  }

 


