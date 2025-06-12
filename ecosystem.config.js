module.exports = {
  apps: [
    {
      name: "idearoom-academy-app",
      script: "npm",
      args: "start",
      cwd: "/home/rezo/actions-runner/_work/idearoom-academy-app/idearoom-academy-app",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
      },
      error_file: "./logs/err.log",
      out_file: "./logs/out.log",
      log_file: "./logs/combined.log",
      time: true,
    },
  ],
};
