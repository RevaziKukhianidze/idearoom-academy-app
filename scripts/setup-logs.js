const fs = require("fs");
const path = require("path");

// Ensure logs directory exists
const logsDir = path.join(process.cwd(), "logs");

if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir, { recursive: true });
  console.log("✅ Logs directory created:", logsDir);
} else {
  console.log("✅ Logs directory already exists:", logsDir);
}

// Create initial log files if they don't exist
const logFiles = ["err.log", "out.log", "combined.log"];

logFiles.forEach((file) => {
  const filePath = path.join(logsDir, file);
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, "");
    console.log("✅ Created log file:", filePath);
  }
});

console.log("✅ Log setup completed successfully!");
