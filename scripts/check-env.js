const requiredEnvVars = [
  "NEXT_PUBLIC_SUPABASE_URL",
  "NEXT_PUBLIC_SUPABASE_ANON_KEY",
  "NEXT_PUBLIC_BASE_URL",
];

console.log("🔍 Checking environment variables...\n");

let allValid = true;

requiredEnvVars.forEach((envVar) => {
  const value = process.env[envVar];
  if (value) {
    // Show first 30 characters for security
    const displayValue =
      value.length > 30 ? value.substring(0, 30) + "..." : value;
    console.log(`✅ ${envVar}: ${displayValue}`);
  } else {
    console.log(`❌ ${envVar}: NOT SET`);
    allValid = false;
  }
});

console.log(`\n📊 NODE_ENV: ${process.env.NODE_ENV || "NOT SET"}`);
console.log(`📊 PORT: ${process.env.PORT || "NOT SET"}`);

if (allValid) {
  console.log("\n✅ All required environment variables are set!");
  process.exit(0);
} else {
  console.log("\n❌ Some required environment variables are missing!");
  process.exit(1);
}
