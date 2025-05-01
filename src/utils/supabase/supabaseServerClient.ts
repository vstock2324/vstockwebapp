import { createClient } from "./server";
const supabase = await createClient();
export default supabase;