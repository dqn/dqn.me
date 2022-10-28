/**
 * @type {import("next").NextConfig}
 */
const baseConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
};

module.exports = baseConfig;
