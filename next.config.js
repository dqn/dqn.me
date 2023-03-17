/**
 * @type {import("next").NextConfig}
 */
const baseConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  output: "export",
  experimental: {
    appDir: true,
  },
};

module.exports = baseConfig;
