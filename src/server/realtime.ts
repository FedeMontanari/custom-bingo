import { createClient } from "@supabase/supabase-js";

const { SUPABASE_REALTIME_URL, SUPABASE_REALTIME_KEY } = process.env;

if (!SUPABASE_REALTIME_URL || !SUPABASE_REALTIME_KEY) {
  throw new Error(
    "SUPABASE_REALTIME_URL and SUPABASE_REALTIME_KEY must be set"
  );
}

export const realtimeClient = createClient(
  SUPABASE_REALTIME_URL,
  SUPABASE_REALTIME_KEY
);
