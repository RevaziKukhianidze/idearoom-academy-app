import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://ogxvbjvwbrllggcmfyke.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9neHZianZ3YnJsbGdnY21meWtlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ4MjA0MjAsImV4cCI6MjA2MDM5NjQyMH0.1jqzrG77QundfqVg98tvWbM1YUFsJcG0IycwzphwLEM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
