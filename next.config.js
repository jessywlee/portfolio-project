/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["img.icons8.com", "cdn.sanity.io"],
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
