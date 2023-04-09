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
  webpack(config) {
    config.module.rules.push({
      test: /\.graphql$/,
      loader: "@nitrogql/graphql-loader",
      options: {
        configFile: "./graphql.config.yaml",
      },
    });

    return config;
  },
};

module.exports = baseConfig;
