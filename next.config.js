const addMdxRules = require('./scripts/webpack/add-mdx-rules');

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  webpack: (config) => {
    addMdxRules(config);
    return config;
  }
};

module.exports = nextConfig;
