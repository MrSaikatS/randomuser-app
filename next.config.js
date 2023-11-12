/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    webVitalsAttribution: ["CLS", "LCP", "TTFB"],
  },
  env: {
    NEXT_TELEMETRY_DISABLED: "1",
  },
};

module.exports = nextConfig;
