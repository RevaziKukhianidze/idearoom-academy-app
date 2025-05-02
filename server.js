// CommonJS syntax for CloudLinux compatibility
const { createServer } = require("http");
const { parse } = require("url");

// Explicitly set the NODE_PATH if it's not already set
process.env.NODE_PATH = process.env.NODE_PATH || 
  require('child_process').execSync('npm root -g').toString().trim();
require('module').Module._initPaths();

// Require Next.js
let next;
try {
  next = require("next");
} catch (err) {
  console.error("Error loading Next.js:", err.message);
  console.log("Trying to resolve Next.js from known locations...");
  
  // Try alternative paths
  const possiblePaths = [
    './node_modules/next',
    '../node_modules/next',
    '../../node_modules/next',
    process.env.NODE_PATH ? `${process.env.NODE_PATH}/next` : null
  ].filter(Boolean);
  
  let found = false;
  for (const path of possiblePaths) {
    try {
      next = require(path);
      console.log(`Successfully loaded Next.js from: ${path}`);
      found = true;
      break;
    } catch (e) {
      console.log(`Could not load Next.js from: ${path}`);
    }
  }
  
  if (!found) {
    console.error("Could not find Next.js. Please ensure it's installed correctly.");
    process.exit(1);
  }
}

const port = parseInt(process.env.PORT || "3000", 10);
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  }).listen(port);
  
  console.log(
    `> Server listening at http://localhost:${port} as ${
      dev ? "development" : process.env.NODE_ENV
    }`
  );
}).catch(err => {
  console.error("Error preparing Next.js app:", err);
  process.exit(1);
});