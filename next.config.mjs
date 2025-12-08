/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable standalone output for Docker
  output: 'standalone',
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

  // Disable ESLint during build to avoid parser serialization issues
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Memory optimizations for low-RAM servers
  // Disable source maps in production to save memory
  productionBrowserSourceMaps: false,
  
  // Compress output
  compress: true,
  
  // Optimize build memory usage
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Reduce memory usage during client build
      config.optimization = {
        ...config.optimization,
        minimize: true,
      };
    }
    return config;
  },
};

export default nextConfig;
