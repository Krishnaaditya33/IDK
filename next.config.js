/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: false, // disable Turbopack
  },
  webpack: (config) => {
    return config;
  },
};

module.exports = nextConfig;
