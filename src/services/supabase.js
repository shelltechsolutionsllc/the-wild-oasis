import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://jxgiatzvedzbytzfxhgs.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp4Z2lhdHp2ZWR6Ynl0emZ4aGdzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY4OTc4MzYsImV4cCI6MjAzMjQ3MzgzNn0.4W_Zr3z-xGJHDdrJpN3hGlI4ooPJPK50p6NOQ8jjzcg";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
