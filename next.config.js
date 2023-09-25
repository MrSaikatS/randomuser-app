/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_TELEMETRY_DISABLED: 1,
  },
};

module.exports = nextConfig;
