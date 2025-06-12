const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

console.log("🚀 Starting deployment processs...\n");

// Check environment variables
console.log("🔍 Checking environment variables...");
const requiredEnvVars = [
  "NEXT_PUBLIC_SUPABASE_URL",
  "NEXT_PUBLIC_SUPABASE_ANON_KEY",
  "NEXT_PUBLIC_BASE_URL",
];

let allValid = true;
const envConfig = {
  NODE_ENV: "production",
  PORT: 3000,
};

requiredEnvVars.forEach((envVar) => {
  const value = process.env[envVar];
  if (value) {
    envConfig[envVar] = value;
    console.log(`✅ ${envVar}: ${value.substring(0, 30)}...`);
  } else {
    console.log(`❌ ${envVar}: NOT SET`);
    allValid = false;
  }
});

if (!allValid) {
  console.log("\n❌ Missing required environment variables!");
  process.exit(1);
}

// Create ecosystem config with environment variables
const ecosystemConfig = {
  apps: [
    {
      name: "idearoom-academy-app",
      script: "npm",
      args: "start",
      cwd: process.cwd(),
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      env: envConfig,
      error_file: "./logs/err.log",
      out_file: "./logs/out.log",
      log_file: "./logs/combined.log",
      time: true,
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      restart_delay: 4000,
      kill_timeout: 5000,
    },
  ],
};

// Write ecosystem config
const configPath = path.join(process.cwd(), "ecosystem.config.js");
const configContent = `module.exports = ${JSON.stringify(
  ecosystemConfig,
  null,
  2
)};`;
fs.writeFileSync(configPath, configContent);
console.log("✅ Updated ecosystem.config.js with environment variables");

// Setup logs directory
console.log("\n📁 Setting up logs directory...");
try {
  execSync("npm run setup-logs", { stdio: "inherit" });
} catch (error) {
  console.log("⚠️ Warning: Could not setup logs directory");
}

// Stop existing PM2 process
console.log("\n🛑 Stopping existing PM2 process...");
try {
  execSync("pm2 stop idearoom-academy-app", { stdio: "inherit" });
} catch (error) {
  console.log("ℹ️ No existing process to stop");
}

try {
  execSync("pm2 delete idearoom-academy-app", { stdio: "inherit" });
} catch (error) {
  console.log("ℹ️ No existing process to delete");
}

// Start new PM2 process
console.log("\n🚀 Starting new PM2 process...");
try {
  execSync("pm2 start ecosystem.config.js", { stdio: "inherit" });
  execSync("pm2 save", { stdio: "inherit" });
  console.log("\n✅ Deployment completed successfully!");

  // Show status
  console.log("\n📊 PM2 Status:");
  execSync("pm2 status", { stdio: "inherit" });
} catch (error) {
  console.log("\n❌ Deployment failed:", error.message);
  process.exit(1);
}
