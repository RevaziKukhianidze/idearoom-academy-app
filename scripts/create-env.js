const fs = require("fs");
const path = require("path");

const envContent = `NEXT_PUBLIC_SUPABASE_URL=https://ogxvbjvwbrllggcmfyke.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9neHZianZ3YnJsbGdnY21meWtlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ4MjA0MjAsImV4cCI6MjA2MDM5NjQyMH0.1jqzrG77QundfqVg98tvWbM1YUFsJcG0IycwzphwLEM
NEXT_PUBLIC_SITE_URL=https://academy.idearoom.ge
NEXT_PUBLIC_BASE_URL=https://academy.idearoom.ge
PORT=3000`;

const envFilePath = path.join(__dirname, "..", ".env.local");

try {
  fs.writeFileSync(envFilePath, envContent);
  console.log("✅ .env.local ფაილი წარმატებით შეიქმნა!");
  console.log("📁 მდებარეობა:", envFilePath);

  // Check if file was created
  if (fs.existsSync(envFilePath)) {
    console.log("✅ ფაილი არსებობს და მზადაა!");
  } else {
    console.log("❌ ფაილი ვერ შეიქმნა");
  }
} catch (error) {
  console.error("❌ შეცდომა .env.local ფაილის შექმნაში:", error.message);
}
