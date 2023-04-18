const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: true,
  reactStrictMode: true,
  experimental: {
    appDir: true,
    typedRoutes: true,
    newNextLinkBehavior: true,
    swcMinify: true,
    optimizeCss: true,
    optimisticClientCache: true,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  poweredByHeader: false,
};

module.exports = withBundleAnalyzer(nextConfig);