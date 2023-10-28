const withMDX = require('@next/mdx')()
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  
  // Configure `pageExtensions`` to include MDX files
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  // Optionally, add any other Next.js config below
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
      },
    ],
  },  
}
 
module.exports = withMDX(nextConfig)