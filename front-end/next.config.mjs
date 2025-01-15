/** @type {import('next').NextConfig} */

import createNextIntPlugin from "next-intl/plugin";

const withNextIntl = createNextIntPlugin();
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    });
    return config;
  },
};

export default withNextIntl(nextConfig);
