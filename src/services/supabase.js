import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://rprqvpsrcnecchlsortz.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJwcnF2cHNyY25lY2NobHNvcnR6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA2Mzk1NTcsImV4cCI6MjA0NjIxNTU1N30.XRy567_gA7RjYOIf-qiFYVr4wnwQMZws7QZvQLTvMB0";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
