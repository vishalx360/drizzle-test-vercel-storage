/** @type {import('next').NextConfig} */
const nextConfig = {
    
  // TEMP
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  }
}

module.exports = nextConfig
