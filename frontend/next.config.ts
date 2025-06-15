// next.config.ts
import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  allowedDevOrigins: [
    'http://192.168.0.215:3000',
  ],
  webpack: (config) => {
    config.resolve.alias['@shared-types'] = path.resolve(__dirname, '../shared-types');
    return config;
  },
};

export default nextConfig;