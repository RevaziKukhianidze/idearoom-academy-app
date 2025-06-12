const { spawn } = require("child_process");

console.log("🚀 დავიწყოთ Next.js production server debug მოდში...\n");

// Environment variables debug
console.log("📋 Environment Variables:");
console.log(
  "NEXT_PUBLIC_SUPABASE_URL:",
  process.env.NEXT_PUBLIC_SUPABASE_URL || "❌ არ არის"
);
console.log(
  "NEXT_PUBLIC_SUPABASE_ANON_KEY:",
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? "✅ არსებობს" : "❌ არ არის"
);
console.log(
  "NEXT_PUBLIC_SITE_URL:",
  process.env.NEXT_PUBLIC_SITE_URL || "❌ არ არის"
);
console.log("PORT:", process.env.PORT || "3000 (default)");
console.log("NODE_ENV:", process.env.NODE_ENV || "development (default)");
console.log("");

// Start Next.js server
const nextProcess = spawn("npm", ["start"], {
  stdio: ["inherit", "pipe", "pipe"],
  shell: true,
});

nextProcess.stdout.on("data", (data) => {
  console.log(`📤 STDOUT: ${data}`);
});

nextProcess.stderr.on("data", (data) => {
  console.error(`📥 STDERR: ${data}`);
});

nextProcess.on("close", (code) => {
  console.log(`🔚 Process exited with code: ${code}`);
});

nextProcess.on("error", (error) => {
  console.error(`❌ Process error: ${error.message}`);
});

// Handle graceful shutdown
process.on("SIGINT", () => {
  console.log("\n⏹️  Stopping server...");
  nextProcess.kill("SIGINT");
  process.exit(0);
});
