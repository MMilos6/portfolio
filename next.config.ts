import type { NextConfig } from "next";
import bundleAnalyzer from '@next/bundle-analyzer';

const nextConfig: NextConfig = {
    images: {
        domains: ['cdn.sanity.io'],
    },
};

// Bundle analyzer - only load when ANALYZE env var is set
const withBundleAnalyzer = process.env.ANALYZE === 'true'
    ? bundleAnalyzer({
          enabled: true,
      })
    : (config: NextConfig) => config;

export default withBundleAnalyzer(nextConfig);