import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://bvwxjafiktcftgpcmuuw.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ2d3hqYWZpa3RjZnRncGNtdXV3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY2NzkyMzEsImV4cCI6MjA0MjI1NTIzMX0.pyr9pJ3MvsxeSYqqjfKz1epH4BwXvXsB2wKmoh8M1ac"
);
export default supabase;
