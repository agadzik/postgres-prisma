/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    instrumentationHook: true,
  },
  images: {
    domains: ['images.ctfassets.net'],
  },
}

module.exports = nextConfig
