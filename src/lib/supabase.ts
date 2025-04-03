import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_REALTIME_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_REALTIME_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error(
    "NEXT_PUBLIC_SUPABASE_REALTIME_URL and NEXT_PUBLIC_SUPABASE_REALTIME_KEY must be set"
  );
}

export const supabaseClient = createClient(supabaseUrl, supabaseKey); 