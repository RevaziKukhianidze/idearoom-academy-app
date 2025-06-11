/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimize for build performance
  experimental: {
    forceSwcTransforms: true,
  },

  // Prevent build hanging by setting timeout
  staticPageGenerationTimeout: 60,

  // Optimize images
  images: {
    formats: ["image/webp", "image/avif"],
    minimumCacheTTL: 60,
  },

  // Reduce memory usage during build
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.optimization.splitChunks = false;
    }
    return config;
  },
};

export default nextConfig;
