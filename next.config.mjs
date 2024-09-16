/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    appDir: true, // Enable the app directory,
    ppr: 'incremental', // 'incremental value allows you to adopt partial prerendering for specific route.
  },
};

export default nextConfig;
