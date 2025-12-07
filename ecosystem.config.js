module.exports = {
  apps: [
    {
      name: "idearoom-academy-app",
      script: "npm",
      args: "start",
      cwd: process.cwd(),
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "800M", // Reduced to leave room for admin panel and system
      min_uptime: "10s", // Minimum uptime before considering it stable
      max_restarts: 10, // Limit restarts to prevent restart loops
      restart_delay: 4000,
      env: {
        NODE_ENV: "production",
        PORT: 3000,
        NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
        NEXT_PUBLIC_SUPABASE_ANON_KEY:
          process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
        NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
      },
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
