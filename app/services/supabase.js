import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL ||
  "https://ogxvbjvwbrllggcmfyke.supabase.co";
const supabaseKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9neHZianZ3YnJsbGdnY21meWtlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ4MjA0MjAsImV4cCI6MjA2MDM5NjQyMH0.1jqzrG77QundfqVg98tvWbM1YUFsJcG0IycwzphwLEM";

if (!supabaseUrl || !supabaseKey) {
  console.error("Missing Supabase environment variables");
}

const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
  },
  global: {
    headers: {
      "x-application-name": "idearoom-academy",
    },
  },
  db: {
    schema: "public",
  },
  realtime: {
    params: {
      eventsPerSecond: 10,
    },
  },
});

// Global error handler for supabase operations
export const handleSupabaseError = (error, operation = "Unknown operation") => {
  console.error(`Supabase error in ${operation}:`, {
    message: error?.message,
    details: error?.details,
    hint: error?.hint,
    code: error?.code,
    timestamp: new Date().toISOString(),
  });

  // Return user-friendly error messages based on error type
  if (error?.code === "PGRST301") {
    return new Error("მონაცემები ვერ მოიძებნა");
  } else if (error?.code?.startsWith("PGRST")) {
    return new Error("ბაზის შეცდომა - გთხოვთ სცადოთ მოგვიანებით");
  } else if (error?.message?.includes("timeout")) {
    return new Error("მოთხოვნის დრო ამოიწურა - გთხოვთ სცადოთ ხელახლა");
  } else if (error?.message?.includes("network")) {
    return new Error("ქსელის შეცდომა - შეამოწმეთ ინტერნეტ კავშირი");
  } else {
    return new Error("დროებითი შეცდომა - გთხოვთ სცადოთ მოგვიანებით");
  }
};

// Wrapper function with timeout and error handling
export const executeWithTimeout = async (
  operation,
  timeoutMs = 15000,
  operationName = "Database operation"
) => {
  const timeoutPromise = new Promise((_, reject) =>
    setTimeout(() => reject(new Error(`${operationName} timeout`)), timeoutMs)
  );

  try {
    const result = await Promise.race([operation, timeoutPromise]);
    return result;
  } catch (error) {
    throw handleSupabaseError(error, operationName);
  }
};

export default supabase;
