/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'raw.githubusercontent.com',
      'camo.githubusercontent.com',
      'www.vectorlogo.zone'
    ],
  },
}

module.exports = nextConfig
