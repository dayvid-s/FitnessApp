/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    reactStrictMode: false,
    compiler: {
      // Enables the styled-components SWC transform
      styledComponents: true
    }
  },
}

module.exports = nextConfig
