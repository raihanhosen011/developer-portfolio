/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental:{
    appDir: true,
    runtime: "nodejs", 
    serverComponents: true, 
    concurrentFeatures: true 
  }
}

module.exports = nextConfig
