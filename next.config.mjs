/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,

  env: {
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
  },

  // Fix for React 19 + Next.js 15 digest errors
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb',
    },
  },

  // Ensure proper React rendering
  reactStrictMode: true,

  // Memory optimizations for low-RAM servers
  // Disable source maps in production to save memory
  productionBrowserSourceMaps: false,
  
  // Reduce memory usage during build and runtime
  swcMinify: true, // Use SWC minification (faster and less memory)
  
  // Compress output
  compress: true,
};

export default nextConfig;
